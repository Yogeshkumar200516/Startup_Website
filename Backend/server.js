const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { sendEmail } = require('./emailService');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const corsOptions = {
    origin: 'https://mahisha-india-technologies.vercel.app/', // Allow your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    credentials: true, // Enable sending of cookies if necessary
    optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = './uploads';
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 10000000 },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|pdf|doc|docx|xls|xlsx/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);

        if (extname && mimetype) {
            return cb(null, true);
        } else {
            cb(new Error('Invalid file type. Only images, PDFs, and office files are allowed.'));
        }
    },
});

// Route to handle 'Contact Us' form submission (with file upload)
app.post('/api/contact', upload.none(), (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        const query = 'INSERT INTO contact_info (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [name, email, phone, subject, message], (error, results) => {
            if (error) {
                console.error('Database insertion error:', error);
                return res.status(500).json({ error: 'Failed to submit contact info' });
            }

            // Prepare email content for the Contact Us form
            const emailContent = {
                name,
                email,
                phone,
                subject,
                message,
            };

            // Send email
            sendEmail(email, 'New Contact Info Submission', emailContent);

            res.status(200).json({ message: 'Contact info submitted successfully' });
        });
    } catch (err) {
        console.error('Server error:', err);
        res.status(500).json({ error: 'Server error occurred during contact submission' });
    }
});

// Route to handle 'Reach Us' form submission (with file upload)
app.post('/api/reach-us', upload.single('file'), (req, res) => {
    const {
        fullName, email, phone, company, projectType, budgetRange,
        startDate, deadline, communicationMethod, referenceLink,
        projectDescription, additionalComments
    } = req.body;

    const fileName = req.file ? req.file.filename : null;

    // Validate form fields
    if (!fullName || !email || !phone || !projectType || !budgetRange || !projectDescription) {
        return res.status(400).json({ success: false, message: 'Required fields are missing.' });
    }

    const projectInfo = {
        full_name: fullName,
        email,
        phone,
        company,
        project_type: projectType,
        budget_range: budgetRange,
        start_date: startDate || null,
        deadline: deadline || null,
        communication_method: communicationMethod || null,
        reference_link: referenceLink || '',
        project_description: projectDescription,
        additional_comments: additionalComments || '',
        file_name: fileName,
    };

    const query = 'INSERT INTO project_info SET ?';
    db.query(query, projectInfo, (error, results) => {
        if (error) {
            console.error('Database error:', error);
            return res.status(500).json({ success: false, error: 'Database insertion failed' });
        }

        // Prepare email content for the Reach Us form
        const emailContent = {
            fullName,
            email,
            phone,
            company,
            projectType,
            budgetRange,
            startDate: startDate || 'N/A',
            deadline: deadline || 'N/A',
            communicationMethod: communicationMethod || 'N/A',
            referenceLink: referenceLink || 'N/A',
            projectDescription,
            additionalComments: additionalComments || 'N/A',
            fileName,
        };

        // Send email with attachment if file exists
        sendEmail(email, 'New Reach Us Form Submission', emailContent, req.file);

        res.status(200).json({ success: true, message: 'Form submitted successfully!' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

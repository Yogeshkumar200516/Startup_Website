const nodemailer = require('nodemailer');

// Nodemailer configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mahishaindiatechnologies@gmail.com',
        pass: 'osjf hyvv ydlj shky'
    },
    tls: {
        rejectUnauthorized: false
    }
});

/**
 * Function to send an email with a professional, report-style template
 * @param {string} from - The email of the form submitter (used as the sender)
 * @param {string} subject - The email subject
 * @param {Object} content - The data to include in the email
 * @param {Object} file - The uploaded file (optional)
 */
const sendEmail = (from, subject, content, file) => {
    const styledContent = `
        <div style="font-family: 'Arial', sans-serif; color: #333;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <thead style="background-color: #0056b3; color: white; text-align: center;">
                    <tr>
                        <th colspan="2" style="padding: 10px; font-size: 1.4em;">Form Submission Report</th>
                    </tr>
                </thead>
                <tbody style="background-color: #f9f9f9;">
                    <tr>
                        <td colspan="2" style="padding: 10px; font-size: 1.2em; font-weight: bold; text-align: center;">
                            Submitted by: ${from}
                        </td>
                    </tr>
                    <tr style="background-color: #f1f1f1;">
                        <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Name:</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${content.fullName || content.name || 'N/A'}</td>
                    </tr>
                    <tr style="background-color: #ffffff;">
                        <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Email:</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${content.email || 'N/A'}</td>
                    </tr>
                    <tr style="background-color: #f1f1f1;">
                        <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Phone:</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${content.phone || 'N/A'}</td>
                    </tr>
                    <tr style="background-color: #ffffff;">
                        <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Company:</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${content.company || 'N/A'}</td>
                    </tr>
                    <tr style="background-color: #f1f1f1;">
                        <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Project Type:</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${content.projectType || 'N/A'}</td>
                    </tr>
                    <tr style="background-color: #ffffff;">
                        <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Budget Range:</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${content.budgetRange || 'N/A'}</td>
                    </tr>
                    <tr style="background-color: #f1f1f1;">
                        <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Start Date:</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${content.startDate || 'N/A'}</td>
                    </tr>
                    <tr style="background-color: #ffffff;">
                        <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Deadline:</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${content.deadline || 'N/A'}</td>
                    </tr>
                    <tr style="background-color: #f1f1f1;">
                        <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Reference Link:</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${content.referenceLink || 'N/A'}</td>
                    </tr>
                    <tr style="background-color: #ffffff;">
                        <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Project Description:</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${content.projectDescription || 'N/A'}</td>
                    </tr>
                    <tr style="background-color: #f1f1f1;">
                        <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Additional Comments:</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${content.additionalComments || 'N/A'}</td>
                    </tr>
                    <tr style="background-color: #f1f1f1;">
                        <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Subject:</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${content.subject || 'N/A'}</td>
                    </tr>
                    <tr style="background-color: #f1f1f1;">
                        <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Message:</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${content.message || 'N/A'}</td>
                    </tr>
                </tbody>
            </table>
            <p style="text-align: center; color: #666; font-size: 0.9em; margin-top: 30px;">
                <em>This is an automated email from Mahisha India Technologies.</em>
            </p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
            <p style="text-align: center; color: #333; font-size: 1em;">
                <strong>Mahisha India Technologies</strong><br>
                <a href="mailto:mahishaindiatechnologies@gmail.com" style="color: #0056b3; text-decoration: none;">mahishaindiatechnologies@gmail.com</a>
            </p>
        </div>
    `;

    const mailOptions = {
        from: from,
        to: 'mahishaindiatechnologies@gmail.com',
        subject: subject,
        html: styledContent,
    };

    // Attach file if exists
    if (file) {
        mailOptions.attachments = [{
            filename: file.originalname,
            path: file.path,
        }];
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error('Error sending email:', err);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};

module.exports = { sendEmail };

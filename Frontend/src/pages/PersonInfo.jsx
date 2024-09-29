import React from 'react';
import { useParams } from 'react-router-dom';
import { teamMembers } from '../components/Explore/TeamMembers'; // Import the team members data
import './PersonInfo.css';

const PersonInfo = () => {
  const { id } = useParams(); // Get the ID from the URL

  // Find the specific team member by ID
  const member = teamMembers.find((member) => member.id === id);

  // Fallback if member not found
  if (!member) {
    return <p>Team member not found!</p>;
  }

  return (
    <div className="person-info">
      <div className="header">
        <div className="profile-background">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="url(#gradient)" fillOpacity="1" d="M0,320L40,282.7C80,245,160,171,240,144C320,117,400,139,480,160C560,181,640,203,720,213.3C800,224,880,224,960,213.3C1040,203,1120,181,1200,192C1280,203,1360,245,1400,266.7L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#FF0000", stopOpacity: 1 }} />
                <stop offset="20%" style={{ stopColor: "#FF69B4", stopOpacity: 1 }} />
                <stop offset="40%" style={{ stopColor: "#8A2BE2", stopOpacity: 1 }} />
                <stop offset="60%" style={{ stopColor: "#1E90FF", stopOpacity: 1 }} />
                <stop offset="80%" style={{ stopColor: "#FFA500", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#FF4500", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
          </svg>
          <div className="profile-picture">
            <img src={member.photo} alt={`${member.name}'s Profile`} />
          </div>
        </div>
        <h1>{member.name}</h1>
        <p>{member.role}</p>
      </div>
      <div className='body'>
        <div className="content">
          <div className="section">
            <h2>DEMOGRAPHICS</h2>
            <div className="demographics">
              <p><strong>Gender:</strong> {member.gender}</p>
              <p><strong>Age:</strong> {member.age}</p>
              <p><strong>Education:</strong> {member.education}</p>
              <p><strong>Job:</strong> {member.job}</p>
            </div>
          </div>
          <div className="section">
            <h2>TECH</h2>
            <ul className="tech-list">
              {member.tech.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="subject">
          <h2>THE SUBJECT</h2>
          <ul className="subject-list">
            {member.subject.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="goals-frustrations">
          <div className="section goals">
            <h2>GOALS</h2>
            <ul>
              {member.goals.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="section frustrations">
            <h2>FRUSTRATIONS</h2>
            <ul>
              {member.frustrations.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonInfo;

import React from 'react';
import { Link } from 'react-router-dom';
import { teamMembers } from './TeamMembers'; // Import the team members data
import './OurTeam.css';

const OurTeam = () => {
  return (
    <div className="our-team">
      <h1>Meet Our Team</h1>
      <div className="team-members">
        {teamMembers.map((member) => (
          <Link to={`/team/${member.id}`} className="team-member" key={member.id}>
            <img src={member.photo} alt={member.name} className="team-photo" />
            <div className="team-info">
              <h2 className="team-name">{member.name}</h2>
              <h3 className="team-role">{member.role}</h3>
              <p className="team-description">{member.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;

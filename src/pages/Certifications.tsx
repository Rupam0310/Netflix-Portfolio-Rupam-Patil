import React, { useEffect, useState } from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity } from 'react-icons/fa';
import { Certification } from '../types';
import { getCertifications } from '../queries/getCertifications';

const Certifications: React.FC = () => {

  const [certifications, setCertifications] = useState<Certification[]>([]);

  useEffect(() => { 
    async function fetchCertifications() {
      const data = await getCertifications();
      setCertifications(data);
    }

    fetchCertifications();
  }, []);

  if (certifications.length === 0) return <div>Loading...</div>;

  return (
    <div className="certifications-container">
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <a href={cert.link} key={index} target="_blank" rel="noopener noreferrer" className="certification-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="certification-content">
              <div className="certification-icon">
                {cert.iconName?.url ? (
                  <img src={cert.iconName.url} alt={`${cert.issuer} logo`} className="certification-icon-img" />
                ) : (
                  <FaUniversity />
                )}
              </div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.issuedDate && <span className="issued-date">Issued {cert.issuedDate}</span>}
            </div>
            <div className="certification-link animated-icon">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;

import React from 'react';
import IMG1 from '../../assets/eeg.jpeg';
import IMG2 from '../../assets/env.jpeg';

import IMG4 from '../../assets/greenovate.jpeg';


import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'EEG Based Student Emotion Detection',
      img: IMG1,
      description:
        'EEG based neurofeedback to monitor your brain waves and based on sensor data monitor your affective states including stress, focus, and mood levels.',
      technologies: 'EEG | ML | Streamlit',
      github: 'https://github.com/satwik2711/EEGEmotionDetection',
    },
    {
      id: 2,
      title: 'Greenovate',
      img: IMG4,
      description:
        'Building a Comprehensive sustainability software for organisations, allowing them to Measure, Manage and Report their emissions.',
      technologies: 'Nextjs | Django | Node',
      github: 'https://github.com/satwik2711/Greenovate',
    },
    {
      id: 3,
      title: 'Environ.Earth',
      img: IMG2,
      description: 'Created an algorithm to calculate the ”green-index” of organizations and countries, monitoring their progress and development on their approach towards the goal of Net Zero.',
      technologies: 'JavaScript | Node',
      github: 'https://github.com/satwik2711/Environ.earth',
    },
    
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              {/* <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a> */}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

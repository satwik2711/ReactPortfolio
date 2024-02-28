import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>I'm currently in my pre-final year at Jaypee Institute of Information Technology, focusing on server-side development with a strong interest in Django and a good understanding of DevOps practices. My journey in technology has been marked by projects aimed at developing scalable digital platforms and improving networking solutions for areas with high traffic.
<br></br>I've also begun exploring the field of Natural Language Processing (NLP) research, aiming to blend my technical skills with cutting-edge research. With a passion for backend architecture and a growing interest in NLP, I'm actively seeking research internships and software development roles that offer the chance to innovate and excel in the tech world. in NLP, I'm actively seeking challenging opportunities in research internships and software development roles to further innovate and excel in the tech sphere.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro
import React from 'react';
import {  FaGithub } from 'react-icons/fa';
import { SiAnilist, SiLinktree } from "react-icons/si";
import './About.css';

const About = () => {
  return (
    <footer className="about-container">
      <div className="about-wrapper">
        <div className="about-section">
          <div className="about-column">
            <h5>Site</h5>
            <ul>
              <li><a href="/sobre-mim">Sobre Mim</a></li>
              <li><a href="/sobre-site">Sobre o Site</a></li>
              <li><a href="/informacoes">Informações</a></li>
            </ul>
          </div>
          <div className="about-column">
            <h5>Projetos</h5>
            <ul>
              <li><a href="/projetos/fitlab">FitLab</a></li>
              <li><a href="/projetos/site">Sobre o Site</a></li>
              <li><a href="/projetos/info">Informações</a></li>
            </ul>
          </div>
        </div>
        <div className="social-links">
          <h5>Redes Sociais</h5>
          <div className="social-icons">
            <a href="https://linktr.ee/yourprofile" target="_blank" rel="noopener noreferrer">
              <SiLinktree className="icon" /> Linktree
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" /> Github
            </a>
            <a href="https://anilist.co/user/yourprofile" target="_blank" rel="noopener noreferrer">
              <SiAnilist className="icon" /> Anilist
            </a>
          </div>
        </div>
      </div>
      <div className="footer-credit">
        <p>Criado e desenvolvido por <span className="highlight">Henrique Luiz (DirectDev)</span></p>
      </div>
    </footer>
  );
};

export default About;
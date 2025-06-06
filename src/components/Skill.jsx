import React from 'react'
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import tailwind from "../assets/images/tailwind.png";
import react from "../assets/images/react.png";
import bootstrap from "../assets/images/bootstrap.png";
import express from "../assets/images/express.png";
import python from "../assets/images/python.png";
import javascript from "../assets/images/javascript.png";
import node from "../assets/images/node.png";
import mongodb from "../assets/images/mongodb.png";

const Skill = () => {
  return (
    <>
          {/* --------- #SKILLS-----------*/}
          
          <section className="section skills" id="skills">
              <div className="container">
                  <p className="section-subtitle">My Skills</p>
                  <h2 className="h2 section-title">I Develop Skills Regularly</h2>
                  <p className="section-text">
                      I'm always eager to learn new technologies and take on exciting challenges.
                  </p>
                  <ul className="skills-list">
                      <li className="skill-item">
                          <div className="skill-item-icon">
                             <img src={html} alt="html-icon"/>
                          </div>
                          <p className="skill-item-title">HTML</p>
                      </li>
                      <li className="skill-item">
                          <div className="skill-item-icon">
                              <img src={css} alt="" />
                          </div>
                          <p className="skill-item-title">CSS</p>
                      </li>
                      <li className="skill-item">
                          <div className="skill-item-icon">
                              <img src={javascript} alt="" />
                          </div>
                          <p className="skill-item-title">Javascript</p>
                      </li>
                      <li className="skill-item">
                          <div className="skill-item-icon">
                              <img src={react} alt="" />
                          </div>
                          <p className="skill-item-title">React</p>
                      </li>
                      <li className="skill-item">
                          <div className="skill-item-icon">
                              <img src={node} alt="" />
                          </div>
                          <p className="skill-item-title">Node js</p>
                      </li>
                  </ul>
                  <ul className="skills-list">
                      <li className="skill-item">
                          <div className="skill-item-icon">
                              <img src={mongodb} alt="" />
                          </div>
                          <p className="skill-item-title">Mongo DB</p>
                      </li>
                      <li className="skill-item">
                          <div className="skill-item-icon">
                              <img src={tailwind} alt="html-icon" />
                          </div>
                          <p className="skill-item-title">Tailwind CSS</p>
                      </li>
                      <li className="skill-item">
                          <div className="skill-item-icon">
                              <img src={bootstrap} alt="" />
                          </div>
                          <p className="skill-item-title">Bootstrap</p>
                      </li>
                      <li className="skill-item">
                          <div className="skill-item-icon">
                              <img src={express} alt="" />
                          </div>
                          <p className="skill-item-title">Express</p>
                      </li>
                      <li className="skill-item">
                          <div className="skill-item-icon">
                              <img src={python} alt="" />
                          </div>
                          <p className="skill-item-title">Python</p>
                      </li>
                  </ul>
              </div>
          </section>
    </>
  )
}

export default Skill
import React from 'react'
import portfolio1 from '../assets/images/portfolio-1.jpg'
import portfolio2 from '../assets/images/portfolio-2.jpg'
import portfolio3 from '../assets/images/portfolio-3.jpg'
import portfolio4 from '../assets/images/portfolio-4.jpg'

const Project = () => {
  return (
    <>
          {/* -------#PORTFOLIO---------*/}

          <section className="section portfolio" id="portfolio">
              <div className="container">
                  <p className="section-subtitle">Portfolio</p>
                  <h2 className="h2 section-title">My Amazing Works</h2>
                  <p className="section-text">
                      Dliquip ex ea commo do conse namber onequa ute irure dolor in
                      reprehen derit in voluptate
                  </p>
                  <ul className="portfolio-list">
                      <li>
                          <a
                              href="#"
                              className="portfolio-card"
                              style={{
                                  backgroundImage: `url(${portfolio1})`
                              }}
                          >
                              <div className="card-content">
                                  <p className="card-subtitle">Youtube</p>
                                  <h3 className="h3 card-title">
                                      Web Application for Desiverse
                                  </h3>
                                  <span className="btn-link">
                                      <span>View Project</span>
                                      <ion-icon name="arrow-forward" />
                                  </span>
                              </div>
                          </a>
                      </li>
                      <li>
                          <a
                              href="#"
                              className="portfolio-card"
                              style={{
                                  backgroundImage: `url(${portfolio2})`
                              }}
                          >
                              <div className="card-content">
                                  <p className="card-subtitle">Vimeo</p>
                                  <h3 className="h3 card-title">
                                      Web Application for Desiverse
                                  </h3>
                                  <span className="btn-link">
                                      <span>View Project</span>
                                      <ion-icon name="arrow-forward" />
                                  </span>
                              </div>
                          </a>
                      </li>
                      <li>
                          <a
                              href="#"
                              className="portfolio-card"
                              style={{
                                  backgroundImage: `url(${portfolio3})`
                              }}
                          >
                              <div className="card-content">
                                  <p className="card-subtitle">Soundcloud</p>
                                  <h3 className="h3 card-title">
                                      Web Application for Desiverse
                                  </h3>
                                  <span className="btn-link">
                                      <span>View Project</span>
                                      <ion-icon name="arrow-forward" />
                                  </span>
                              </div>
                          </a>
                      </li>
                      <li>
                          <a
                              href="#"
                              className="portfolio-card"
                              style={{
                                  backgroundImage: `url(${portfolio4})`
                              }}
                          >
                              <div className="card-content">
                                  <p className="card-subtitle">Details</p>
                                  <h3 className="h3 card-title">
                                      Web Application for Desiverse
                                  </h3>
                                  <span className="btn-link">
                                      <span>View Project</span>
                                      <ion-icon name="arrow-forward" />
                                  </span>
                              </div>
                          </a>
                      </li>
                  </ul>
              </div>
          </section>
    </>
  )
}

export default Project
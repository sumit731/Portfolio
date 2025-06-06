import sp from '../assets/images/8.jpg';
import sp1 from '../assets/images/sp.jpg';

const About = () => {
  return (
   <>
          {/* ----------- #ABOUT-----------*/}

          <section className="section about" id="about" style={{paddingTop: '40px'}}>
              <div className="container">
                  <figure className="about-banner">
                      <img
                          src={sp1}
                          width={400}
                          height={200}
                          loading="lazy"
                          alt="Ethan's Photo"
                          className="img-cover"
                      />
                      <img
                          src={sp}
                          width={800}
                          height={717}
                          loading="lazy"
                          alt="Ethan's Photo"
                          className="abs-img"
                      />
                      <div className="abs-icon abs-icon-1">
                          <ion-icon name="logo-css3" />
                      </div>
                      <div className="abs-icon abs-icon-2">
                          <ion-icon name="logo-javascript" />
                      </div>
                      <div className="abs-icon abs-icon-3">
                          <ion-icon name="logo-angular" />
                      </div>
                  </figure>
                  <div className="about-content">
                      <p className="section-subtitle">I'm a Full Stack Developer</p>
                      <h2 className="h2 section-title">
                          I Develop Application that Help People
                      </h2>
                      <p className="section-text">
                          Hi, I'm Sumit, a passionate full-stack web developer skilled in the MERN stack. I enjoy building responsive websites, solving real-world problems, and turning ideas into functional digital experiences.
                      </p>
                      <p className="section-text">
                          I'm always eager to learn new technologies and take on exciting challenges.
                      </p>
                      <a href="#portfolio" className="btn btn-primary blue">
                          View Portfolio
                      </a>
                  </div>
              </div>
          </section>
   </>
  )
}

export default About
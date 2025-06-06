import github from "../assets/images/github.png";
import postmen from "../assets/images/postman.png";
import visual from "../assets/images/visual.png";

const Tools = () => {
  return (
    <>
          {/* --------- #SKILLS-----------*/}
          
          <section className="section skills" id="skills">
              <div className="container">
                  <p className="section-subtitle">Tools</p>
                  <h2 className="h2 section-title">I used Tools</h2>

                  <ul className="skills-list">
                      <li className="skill-item">
                          <div className="skill-item-icon">
                             <img src={github} alt="html-icon"/>
                          </div>
                          <p className="skill-item-title">GitHub</p>
                      </li>
                      <li className="skill-item">
                          <div className="skill-item-icon">
                              <img src={postmen} alt="" />
                          </div>
                          <p className="skill-item-title">Postman</p>
                      </li>
                      <li className="skill-item">
                          <div className="skill-item-icon">
                              <img src={visual} alt="" />
                          </div>
                          <p className="skill-item-title">Visual Studio</p>
                      </li>
                  </ul>
              </div>
          </section>
    </>
  )
}

export default Tools
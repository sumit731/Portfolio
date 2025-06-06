import sp from '../assets/images/7.jpg';

const Hero = () => {
    return (
        <>

            {/*------------ #HERO-----------*/}

            <section className="hero" id="home">
                <div className="container">
                    <div className="hero-banner">
                        <img
                            src={sp}
                            width={800}
                            loading="lazy"
                            alt="Ethan's Photo"
                            className="img-cover"
                        />
                        <div className="elem elem-1">
                        </div>
                        <div className="elem elem-2">
                            <p className="elem-title">5+</p>
                            <p className="elem-text">Projects Completed</p>
                        </div>
                        <div className='elem elem' style={{ background: "yellow", marginRigth: "20px" }}>
                        </div>
                    </div>
                    <div className="hero-content">
                        <h2 className="hero-title">
                            <span>Hello I'm</span>
                            <strong>Sumit Prajapati</strong>Full Stack Developer
                        </h2>
                        <p className="hero-text">
                            I'm a Full Stack Developer with experience in building web applications using the MERN stack. I enjoy solving problems, working in teams, and creating efficient solutions that make a real impact.
                        </p>
                        <div className="btn-group">
                            <a href="#contact" className="btn btn-primary blue">
                                Contact
                            </a>
                            <a href="#about" className="btn btn-primary blue">
                                About Me
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}

export default Hero
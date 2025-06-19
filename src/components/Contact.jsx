import git from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import phone from "../assets/images/phone.png";
import gmail from "../assets/images/gmail.png";
import address from "../assets/images/address.png";

const Contact = () => {
    return (
        <section className="section contact" id="contact">
            <div className="container">
                <p className="section-subtitle">Contact Me</p>
                <h2 className="h2 section-title">Get In Touch</h2>
                <p className="section-text">
                    Feel free to reach out for collaborations, inquiries, or just to say hi!
                </p>
                <div className="contact-card">
                    <div className="wrapper">
                        <ul className="contact-list">
                            <li className="contact-item">
                                <div className="contact-icon">
                                    <img src={address} alt="Address icon" width={40} />
                                </div>
                                <div>
                                    <h3 className="contact-item-title">Address</h3>
                                    <address className="contact-item-link">
                                        141008, Heera Singh Nagar,
                                        <br /> Ludhiana, Punjab
                                    </address>
                                </div>
                            </li>
                            <li className="contact-item">
                                <div className="contact-icon">
                                    <img src={gmail} alt="Email icon" width={40} />
                                </div>
                                <div>
                                    <h3 className="contact-item-title">Email</h3>
                                    <a
                                        href="mailto:sumit3109prajapati@gmail.com"
                                        className="contact-item-link"
                                    >
                                        Sumit3109prajapati@gmail.com
                                    </a>
                                </div>
                            </li>
                            <li className="contact-item">
                                <div className="contact-icon">
                                    <img src={phone} alt="Phone icon" width={40} />
                                </div>
                                <div>
                                    <h3 className="contact-item-title">Phone</h3>
                                    <a href="tel:+916284955731" className="contact-item-link">
                                        +91 6284955731
                                    </a>
                                </div>
                            </li>
                        </ul>

                        <ul className="contact-list">
                            <a
                                href="https://github.com/sumit731"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon"
                                aria-label="GitHub Profile"
                            >
                                <img src={git} alt="GitHub icon" width={40} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sumit-prajapati-22b787255/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon"
                                aria-label="LinkedIn Profile"
                            >
                                <img src={linkedin}  alt="LinkedIn icon" width={40} />
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
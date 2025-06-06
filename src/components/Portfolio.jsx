import port1 from "../assets/images/port1.jpg";
import port2 from "../assets/images/port2.png";
import port3 from "../assets/images/port3.jpg";

import "./portfolio.css"; // Import the CSS file

const BlogData = [
    {
        title: "Farmer Assistance Platform",
        subtitle:
            "Web application that allows farmers to connect with experts through video meetings, using React and Firebase.Implemented user registration, problem submission, and expert matchmaking features.",
        published: "Jun 03 to Aug 20/24, by Sumit",
        image: port1,
        link: "https://updated-agro-solution.vercel.app/"
    },
    {
        title: "E-Commerce Website",
        subtitle:
            "Developed a responsive e-commerce website using MERN stack with user authentication, product management, cart, and secure payment gateway integration.",
        published: "Jan 20, 2025 by Kumar",
        image: port2,
        link: "https://trendkart-frontend.onrender.com"
    },
    {
        title: "Food Delivery Website",
        subtitle:
            "MERN-based food delivery app where users can browse, select food, place orders, and track delivery. Implemented authentication, an admin dashboard, and optimized API performance for a smooth experience.",
        published: "April 02 to Jun 02/25, by Prajapati",
        image: port3,
        link: "https://rasorto-jqw4.vercel.app/"
    },
];

const Portfolio = () => {
    return (
        <section className="section portfolio" id="portfolio" >
            <div className="container">
                <p className="section-subtitle" >Portfolio</p>
                <h2 className="h2 section-title" >My Amazing Works</h2>
                <p className="section-text" style={{ marginBottom: "20px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero veniam at tempora enim, illo deserunt amet cumque dicta dignissimos hic.
                </p>
                <div className="blogs-container">
                    <div className="blogs-wrapper" >
  
                        <div className="blogs-grid" >
                            {BlogData.map((data) => (
                                <div key={data.title} className="blog-card">
                                    {/* Image section */}
                                    <div className="blog-image-wrapper" >
                                        <a href={data.link} target="_blank">
                                        <img
                                            src={data.image}
                                            alt={data.title}
                                            className="blog-image"
                                        />
                                        </a>
                                    </div>
                                    {/* Content section */}
                                    <div className="blog-content">
                                        <p className="blog-date">{data.published}</p>
                                        <p className="blog-title">{data.title}</p>
                                        <p className="blog-subtitle">{data.subtitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;

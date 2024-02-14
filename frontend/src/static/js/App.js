import React, { useState, useEffect } from 'react';
import '../../static/css/App.css';
// import '../../templates/signup.html';

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects');
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="App">
      {/* Include CSS and JS links within the <head> section of your HTML document */}
      <head>
        <title>EchoXperience</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"></link>

        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <script src="https://kit.fontawesome.com/a076d05399.js"></script>
      </head>

      <body >
        {/* Navbar */}
        <nav className="hero-nav">

          <div className="logo">
            <a href="#home">
              <img src="logo.png" alt="EchoXperience" />
              {/* EchoXperience */}
            </a>
          </div>

          <div className="navigation">
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#more">More</a></li>
            </ul>
          </div>
          <div className="cta-buttons">
            <a href="./signup.html">
              <button className="cta-button">Sign Up</button>
            </a>
          </div>
        </nav>

        {/* Home */}
        <div className="main-content">
          <h1>Gain Real-World Experience with EchoXperience</h1>
          <p>EchoXperience offers a unique opportunity to gain project-based experience for your resume. Learn from real-world projects and stand out from the competition.</p>
          <div class="cta-buttons">
            <button class="cta-button">Get Started</button>
            <button class="cta-button">Learn More</button>
          </div>
        </div>

        {/* Projects */}
        <section id="projects" className="projects">
          <h1>Projects</h1>
          {loading ? (
            <p>Loading projects...</p>
          ) : (
            <div className="project-cards">
              {projects.map((project) => (
                <div className="project-card" key={project.id}>
                  <img src={project.image} alt={project.title} />
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>
          )}
        </section>

      </body>

      {/* Footer */}
      <footer class="footer-container">
        <div class="footer-section">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#facebook"><i class="fab fa-facebook"></i></a></li>
            <li><a href="#twitter"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#instagram"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#linkedin"><i class="fab fa-linkedin"></i></a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#aboutus">About Us</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#contactus">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Services</h3>
          <ul>
            <li><a href="#webdesign">Web Design</a></li>
            <li><a href="#graphicdesign">Graphic Design</a></li>
            <li><a href="#seo">SEO</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#ebooks">Ebooks</a></li>
            <li><a href="#templates">Templates</a></li>
          </ul>
        </div>
        
      </footer>
      <div>
        <p  class="text-center">&copy; 1902-2024 EchoXperience. All rights reserved.</p>
        </div>
    </div>
  );
}

export default App;

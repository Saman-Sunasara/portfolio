import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Engineer</h4>
                <h5>Independent / Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building intelligent systems and data-driven applications. Experienced in developing scalable machine learning pipelines, predictive models, and sophisticated deep learning architectures.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Participant</h4>
                <h5>Hackathons & Competitions</h5>
              </div>
              <h3>Recent</h3>
            </div>
            <p>
              Actively participated in multiple hackathons, operating in fast-paced environments to develop robust AI solutions, hone problem-solving abilities, and collaborate effectively with diverse teams.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Contributor</h4>
                <h5>University Initiatives</h5>
              </div>
              <h3>Academic</h3>
            </div>
            <p>
              Contributed to university-level initiatives, fostering a culture of continuous learning and leveraging emerging technologies to build efficient and impactful software solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

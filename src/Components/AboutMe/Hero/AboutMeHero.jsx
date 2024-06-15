import "./AboutMeHero.css";
import profileImage from "../../../assets/profile_img.png"; // Replace with the path to your profile image

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="hero-section">
        <div className="left-section">
          <h1>About Me</h1>
          <h3>Who am I ? </h3>
          <div>
            <p>I am Suraj, a competitive programmer and AI enthusiast.</p>
            <p>
              Despite being early in my career, I have already gained
              proficiency in a range of skills, including Java, JavaScript
              frameworks, HTML, CSS, Git, and database management systems. I am
              always eager to learn new technologies and explore diverse areas
              of the tech industry, such as Data Analysis, Machine Learning, and
              Artificial Intelligence. Currently, I am learning Java Backend
              Development and contributing to related projects.
            </p>
            <p>
              In addition to my technical skills, I have actively participated
              in competitive programming competitions, hackathons, and
              open-source projects, honing my problem-solving abilities and
              collaborative skills. I am the President of the Open Source Club
              at my college and contribute to non-profit organizations like The
              Scientific Teen and initiatives like Girl Script Summer of Code
              and Social Summer of Code.
            </p>
            <p>
              I am open to new opportunities and challenges. I am actively
              seeking internships and job opportunities in the field of software
              development and am also open to freelance work.
            </p>
          </div>
        </div>
        <div className="right-section">
          <img src={profileImage} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import Typewriter from "../typewriter/Typewriter.jsx";
const Hero =() => {
    return(
        <div className = 'hero'>
            <img src={profile_img} alt="" />
            <h1><span>I am Shawn, </span>
                <Typewriter text={["a frontend developer", "competitive programmer", "AI enthusiast"]} /></h1>

            {/*<p>I am a frontend developer. I am a frontend developer. I am a frontend developer</p>*/}
            <div className = "hero-action">
                <div className = "hero-connect">Connect with me</div>
                <div className = "hero-resume">My resume</div>

            </div>
        </div>
    )
}

export default Hero;
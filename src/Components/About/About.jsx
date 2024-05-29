import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
const About = () =>{
    return(
        <div className = 'about'>
            <div className = 'about-title'>
                <h1>About me</h1>
                <img src = {theme_pattern} alt=""/>
            </div>
            <div className = 'about-sections'>
                <div className = 'about-left'>
                    <img src = {profile_img} alt=""/>
                </div>
                <div className = 'about-right'>
                    <div className = 'about-para'>
                        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ;)</p>
                        <p>This is just a random text written cuz I could not find any paragraph to write here </p>
                    </div>
                    <div className = 'about-skills'>
                        <div className = 'about-skill'><p>HTML & CSS</p><hr style = {{width : "50%"}} /></div>
                        <div className = 'about-skill'><p>JavaScript</p><hr style = {{width : "70%"}} /></div>
                        <div className = 'about-skill'><p>React</p><hr style = {{width : "60%"}} /></div>
                        <div className = 'about-skill'><p>Node</p><hr style = {{width : "50%"}} /></div>
                    </div>
                </div>
                <div className = 'about-achievements'>
                    <div className = 'about-achievement'>
                        <h1>bla..</h1>
                        <p1>bla bla bla bla..</p1>
                    </div>
                    <div className = 'about-achievement'>
                        <h1>bla..</h1>
                        <p1>bla bla bla bla..</p1>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default About;
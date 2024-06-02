import './Projects.css'
import theme_pattern from '../../../assets/theme_pattern.svg'
import profile_img from '../../../assets/about_profile.svg'
import quiz_img from '../../../assets/quiz_img.jpg'
import tic_tac_toe_img from '../../../assets/tic_tac_toe_img.jpg'
import image_editor_cli_img from '../../../assets/image_editor_cli.jpg'
const Projects = () => {
    return (
        <div className='project'>
            <div className='project-title'>
                <h1>Projects</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className='project-tiles'>
                <div className='project-tile'>
                    <div className="img-section">
                        <img src={quiz_img} alt="Quiz App" height = "187" width = "311"/>
                    </div>
                    <div className="desc-section">
                        <p>This is a simple quiz app
                            which asks couple of questions
                            and reports the final score at last.</p>
                    </div>
                </div>
                <div className='project-tile'>
                    <div className="img-section">
                        <img src={tic_tac_toe_img} alt="Tic Tac Toe" height = "187" width = "311"/>
                    </div>
                    <div className="desc-section">
                        <p>Terminal based tic tac toe game.</p>
                    </div>
                </div>
                <div className='project-tile'>
                    <div className="img-section">
                        <img src={image_editor_cli_img} alt="Project 1" height = "187" width="311"/>
                    </div>
                    <div className="desc-section">
                        <p>A simple command line base image editor.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects;
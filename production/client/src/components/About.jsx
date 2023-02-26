import React from 'react'
import Ashley from '../assets/ashley_profile.png';
// import Manny from '../assets/manny_profile.png';
// import Finn from '../assets/finn_profile.png';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import openInNewTab from 'react-router-dom';

export const About = (props) => {
    const [scroll, setScroll] = React.useState('paper');



  return (
    // <Dialog open={props.aboutUsOpen} onClose={props.handleAboutUsClose} scroll={scroll}>
    <Dialog open={props.aboutUsOpen} onClose={props.handleAboutUsClose} scroll={scroll} maxWidth='md'>
        <DialogTitle style={{color: "white", background: '#323232', paddingLeft: '32px', fontSize: '32px', fontWeight: '300'}}>About Us</DialogTitle>
        {/* <div class="account-container"> */}
        <DialogContent style={{backgroundColor:'rgb(20,20,20)', height: '84vh',}}>
            {/* <h1 style={{fontSize: '42px', color: '#eeeeee', padding: '60px 0px 0px 32px'}}>About Us</h1> */}
            <article>
                <h1>A Rec Revolution</h1>
                <p>
                    At WatchWise, we believe that education should be accessible to everyone, and we recognize 
                    that the standard algorithm of many video platforms can limit our exposure to new and diverse 
                    perspectives. That's why we created WatchWise, a platform that breaks users out of their filter 
                    bubbles and helps them discover new educational content.
                </p>

                <p>
                    Our app offers a unique and refreshing approach to discovering educational content. Our 
                    "random search" button takes you on a journey to explore new topics that you may have 
                    never considered before. By providing an alternative to the standard algorithm, which 
                    can often feel repetitive and limited, we aim to give our users the freedom to explore 
                    new ideas and topics in one place.
                </p>

                <p>
                    With WatchWise, you'll have access to carefully curated video collections that offer a more 
                    personalized experience. Our platform is designed to help you discover content that you 
                    wouldn't normally be exposed to, providing a more diverse range of perspectives. We're committed 
                    to making education accessible to everyone, and we believe that WatchWise is the perfect tool for 
                    expanding your knowledge and exploring new ideas.
                </p>
                <p id="citation">Magnificent PR written by ChatGPT</p>
                </article>

                <article>
                <h1> About the Project</h1>
                <p>
                    Developed in five weeks from December to February 2023, WatchWise
                    was devise as one of the second major projects for TechWise by TalentSprint,
                    Sponsored by Google.
                </p>
                <p>
                    The goal of WatchWise from the beginning was to create an alternative YouTube
                    suggestion system. As of its conclusion WW aims to present the user with only
                    videos tagged as 'educational'. From there the user is free to choose what
                    subgenre - such as Food, Sports, or Tech - they they are interested in, and
                    then further the video suggestions by a randomly generated keyword. By selecting
                    selecting 'Focused' on the navbar switch, the keywords will only come from a curated list
                    specific to that subgenre.  An opposite selection will bring in randomly generated
                    words that may or may not have any apparent connection to the chosen genre.
                </p>
                <p>
                    The ultimate goal is to give the user informative and intriguing video results that they may have never normally considered or come across,
                    escaping the typical algorithm, and allowing them to explore new ideas and topics.
                </p>
            </article>

            <article>
                <h1>Meet the Devs</h1>
                <div className="about-dev">
                    <img className="profile-pic" src='https://media.licdn.com/dms/image/C5603AQGJBkXdsT1dVA/profile-displayphoto-shrink_200_200/0/1653367733322?e=1682553600&v=beta&t=7sFnrF5tK9cemFUpdvGAT4GvedSMt_mGg7JzhNdMIJY' alt='Manuel Gomez'/>
                    <h2>Manny Gomez</h2>
                    <Link to="https://www.linkedin.com/in/manuelgomez91/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon className="socIcon" />
                    </Link>
                    <Link to="https://github.com/mannyg91" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon className="socIcon" sx={{marginLeft:"15px"}}/>
                    </Link>
                    <p>
                    Manny, a Business and Information Systems B.S. graduate of the University of Nevada, Reno, was responsible for much of the 
                    heavy lifting behind the scenes of WatchWise and worked on the full-stack of the app. He can also take credit for the initial idea 
                    of WatchWise as well as the project group formation.
                    </p>
                </div>
                <div className="about-dev">
                    <img className="profile-pic" src={Ashley} alt='Ashley Butela'/>
                    <h2>Ashley Butela</h2>
                    <Link to="https://www.linkedin.com/in/ashley-butela/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon className="socIcon"/>
                    </Link>
                    <Link to="https://github.com/abutela" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon className="socIcon" sx={{marginLeft:"15px"}}/>
                    </Link>
                    
                    <p>
                        Ashley will soon graduate as a non-traditional student from the Community College of Allegheny County (Pittsburgh)
                        with an A.S. in Software Development.  She is responsible for much of the frontend design on WatchWise. 
                        Before TechWise she earned a B.A. from the University of Pittsburgh in Japanese Language & Literature.
                    </p>
                </div>
                <div className="about-dev">
                    <img className="profile-pic" src='https://media.licdn.com/dms/image/C5603AQF0y4QoKhTk5g/profile-displayphoto-shrink_200_200/0/1652490111076?e=1682553600&v=beta&t=gt2gf5b0G_fxa7rhudC59aXLVTPnxgU3nB4EwrIOpTU' alt='Fionnlagh Jones'/>
                    <h2>Fionnlagh Jones</h2>
                    <Link to="https://www.linkedin.com/in/fionnlagh-jones/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon className="socIcon"/>
                    </Link>
                    <Link to="https://github.com/FionnlaghJones" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon className="socIcon" sx={{marginLeft:"15px"}}/>
                    </Link>
                    <p>
                        Finn is also a non-traditional software student and is responsible for the amazing day/night toggle seen
                        on each page of WatchWise.  Before TechWise she was a world-traveler having lived in both Japan and Reno
                        before settling in Pittsburgh, PA.
                    </p>
                </div>
            </article>
        </DialogContent>
        {/* </div> */}
        </Dialog>
  )
}

export default About
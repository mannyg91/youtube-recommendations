import React from 'react'
import Ashley from '../assets/ashley_profile.png';
// import Manny from '../assets/manny_profile.png';
// import Finn from '../assets/finn_profile.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import openInNewTab from 'react-router-dom';

const About = () => {

  return (
    <div id="wrapper">
        <div id="aboutpage">
            <article>
                <h1>WatchWise - A Rec Revolution</h1>
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
                    The goal of WatchWise from the beginning was to create an improved YouTube
                    suggestion system. As of its conclusion WW aims to present the user with only
                    videos tagged as 'educational'. From there the user is free to choose what
                    subgenre - such as Food, Sports, or Tech - they they are interested in, and
                    then further the video suggestions by a randomly generated keyword.  The keywords
                    can be specified as nearer or further from the source genre; for example, by selecting
                    selecting 'narrow' on the slider, the keywords will only come from a curated list
                    specific to that subgenre.  An opposite selection will bring in randomly generated
                    words that may or may not have any apparent connection to the chosen genre.
                </p>
                <p>
                    The ultimate goal is to give the user a selection of videos that they may have never
                    considered or come across, but that they may be interesting in viewing upon seeing
                    on their feed.
                </p>
            </article>

            <article>
                <h1>Meet the Devs</h1>
                <div id="manny">
                    {/*<img className="profile-pic" src={Manny} alt='Manuel Gomez'/>*/}
                    <h2>Manuel Gomez</h2>
                    <Link to="https://www.linkedin.com/in/manuelgomez91/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon className="socIcon"/>
                    </Link>
                    <Link to="https://github.com/mannyg91" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon className="socIcon" sx={{marginLeft:"15px"}}/>
                    </Link>
                    <p>
                        Manny is a non-traditional Software B.S. graduate of the University of Nevada, Reno and is 
                        responsible for much of the heavy lifting behind the scenes of WatchWise. He can also take 
                        credit for the initial idea of WatchWise as well as the project group formation.
                    </p>
                </div>
                <div id="ashley">
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
                <div id="finn">
                    {/*<img className="profile-pic" src={Finn} alt='Fionnlagh Jones'/>*/}
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
        </div>
    </div>
  )
}

export default About
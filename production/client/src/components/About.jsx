import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import openInNewTab from 'react-router-dom';

export const About = (props) => {




  return (
    // <Dialog open={props.aboutUsOpen} onClose={props.handleAboutUsClose} scroll={scroll}>
    <Dialog open={props.aboutUsOpen} onClose={props.handleAboutUsClose} maxWidth='md'>
        <DialogTitle style={{color: "white", background: '#323232', paddingLeft: '32px', fontSize: '32px', fontWeight: '300'}}>About Us</DialogTitle>
        {/* <div className="account-container"> */}
        <DialogContent style={{backgroundColor:'rgb(20,20,20)', height: '84vh',}}>
            {/* <h1 style={{fontSize: '42px', color: '#eeeeee', padding: '60px 0px 0px 32px'}}>About Us</h1> */}
            <article>
                <h1>Break Out of the Algorithm</h1>
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
        </DialogContent>
        {/* </div> */}
        </Dialog>
  )
}

export default About
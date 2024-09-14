import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from "react";
import { Typography } from '@mui/material';

let timelineElements = [
    {
        id: 1,
        title: "Workshop 1 - Introduction to Competitive Programming",
        location: "Online",
        date: "2024-09-25",
        description: "Join us for an interactive session where you'll meet the team that secured 4th place in IEEEXtreme 17. Dive into a hands-on workshop featuring beginner-level competitive programming challenges",
    },
    {
        id: 2,
        title: "Workshop 2 - Advanced Problem Solving",
        location: "Online",
        date: "2024-10-02",
        description: "Engage in a hands-on session focused on solving medium to hard-level competitive programming questions. Learn to master problem-solving strategies and thinking patterns, guided by expert Sandaras Dhanujaya.",
    },
    {
        id: 3,
        title: "Registration Opens",
        location: "Online",
        date: "2024-10-02",
        description: "Register for the hackathon and get ready to compete with the best of the best!",
    },
    {
        id: 4,
        title: "Initial Round",
        location: "UCSC Premises",
        date: "2024-10-16",
        description: "Compete in the initial round of the hackathon at the UCSC premises. Solve problems and advance to the final round.",
    },
    {
        id: 5,
        title: "Workshop 4 & Finalists Reveal",
        location: "Online",
        date: "2024-10-23",
        description: "Join us for a workshop on advanced problem-solving techniques. The finalists of the hackathon will be revealed.",
    },
    {
        id: 6,
        title: "Final Round",
        location: "UCSC Premises",
        date: "2024-10-30",
        description: "Compete in the final round of the hackathon at the UCSC premises. Solve problems and emerge as the champion.",
    },
    {
        id: 7,
        title: "Prize Giving",
        location: "UCSC Premises",
        date: "2024-10-30",
        description: "The winners of the hackathon will be announced and awarded with exciting prizes.",
    }

];

function TimeLine() {
    return(
        <div id='Time Line'>
        <Typography variant="h3" sx={{textAlign:'center', margin: '20px 0', color:'white'}}>Timeline</Typography>
        <VerticalTimeline>
        {timelineElements.map((element) => {
            return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#000', color: '#fff', boxShadow: 'none', border: '4px solid gold' }}
            contentArrowStyle={{ borderRight: '10px solid  gold' }}
            date={element.date}
            iconStyle={{ background: '#000', color: '#fff' }}
            icon={<img src="images/icon.png" alt="icon" style={{width: '100%'}} />}
        >
            <h3 className="vertical-timeline-element-title">{element.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{element.location}</h4>
            <p>
            {element.description}
            </p>
        </VerticalTimelineElement>)})}
        </VerticalTimeline>
        </div>
    )
}

export default TimeLine;
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function QnA() {

  let QnA = [
    {
      id: 1,
      question: "What is ReidXtreme 4.0?",
      answer: "ReidXtreme 4.0 is a premier competitive programming hackathon by the IEEE and ACM Student Chapters of UCSC."
    },
    {
      id: 2,
      question: "How can I participate?",
      answer: "You can participate by registering on our website."
    },
    {
      id: 3,
      question: "How is the event structured?",
      answer: "ReidXtreme 3.0 consists of two rounds: an initial qualifying round and a final round. The top 10 teams from the initial round advance to the finals, which is a 12-hour in-person hackathon."
    },
    {
      id: 4,
      question: "Who can participate?",
      answer: "The event is primarily aimed at undergraduate students looking to elevate their competitive programming skills and gain exposure to the tech industry."
    },
    {
      id: 5,
      question: "What are the benefits of participating?",
      answer: "Participants can enhance their technical competencies, gain valuable industry exposure, network with peers and professionals in the tech field, and prepare for global competitions like the IEEEXtreme hackathon."
    },
    {
      id: 6,
      question: "How is ReidXtreme 4.0 different from previous versions?",
      answer: "ReidXtreme 4.0 features a revamped format, new challenges, and exciting prizes for participants. The event aims to provide a challenging and rewarding experience for all participants."
    }
  ]

  return (
    <div id='QnA' style={{margin:'20px 50px', minHeight: 'calc(100vh - 50px)', display:'flex', flexDirection:'column', justifyContent:'center'}}>
        <Typography variant="h3" sx={{textAlign:'center', margin: '20px 0', color:'white'}}>QnA</Typography>

        {QnA.map((item) => {
          return (
            <Accordion sx={{background:'black', color:'white', border:'solid 2px gold', margin: 1, borderRadius: 3}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color:'gold'}} />}
                aria-controls={`panel${item.id}-content`}
                id={`panel${item.id}-header`}
              >
                <Typography>{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          )})}
    </div>
  );
}
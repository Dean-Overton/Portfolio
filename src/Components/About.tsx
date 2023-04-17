import { Typography, AccordionDetails, AccordionSummary, Accordion, Box, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Camera from './../images/canon650d.webp';
import SoccerBall from './../images/soccerball.png';

const About = () => {
    return (
        <Box sx={
            {
                marginY: 2,
                marginX: "auto",
                width: "80vw",
            }
        }>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography>What I'm currently doing...</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">- Studying a Bachelor of Computer Science (2023-2024)</Typography>
                    <Typography variant="body1">- STUDYING FOR THE <a href="https://www.eccouncil.org/certified-ethical-hacker-training-and-certification/" style={{color:'whitesmoke'}} rel="noreferrer" target={'_blank'}>CEHv10 Exam</a>!</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                    <Typography>Ambition and Goals</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">- Certification for comletion in the <a href="https://www.eccouncil.org/certified-ethical-hacker-training-and-certification/" style={{color:'whitesmoke'}} rel="noreferrer" target={'_blank'}>CEHv10 Exam</a>!</Typography>
                    <Typography variant="body1">- Run a marathon in under 4 hours</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                    <Typography>Hobbies</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <img src={SoccerBall} alt="soccerball" width='50px' style={{opacity:'80%',  transform: 'rotate(-30deg)'}}/>
                    <img src={Camera} alt="camera" width='80px' style={{opacity:'80%', transform: 'rotate(-30deg)'}}/>
                    <Typography variant="body1">- Game Developement (Batch Games and Unity)</Typography>
                    <img alt="commandprompt" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.tenor.com%2FAcrJynkiNzcAAAAM%2Fcmd-command.gif&f=1&nofb=1&ipt=7441f9c339779f4c18eb8949faaac2ac06b8d79b4f58d1f86e99190eea5e3288&ipo=images" width='200px' style={{margin: '1em 0 1em 30vw', marginTop: '1em', opacity:'90%'}}/>          
                    {/* <a href="./../files/Batch Games.zip" download="Batch Games.zip" target='_blank'>
                        <Button sx={{display: "block", marginX:"auto"}} variant='outlined'>Download Batch Games (Ignore virus detection.)</Button>
                    </a> */}
                    <Typography variant="body1">- Environment; Growing a home vegetable garden automated via ESP32.</Typography>
                    <img alt="esp32 microcontroller" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-GuWilb37otg%2FXTe1FBKampI%2FAAAAAAAADe8%2FnLT2nCWXoD0mqk4-SD7yUHiod4jCyA2JQCLcBGAs%2Fs1600%2FESP32-Module.png" width='300px' style={{margin: '1em 10vw 1em 0', marginTop: '1em', opacity:'90%'}}/>
                </AccordionDetails>
            </Accordion>
      </Box>
    );
}
export default About;
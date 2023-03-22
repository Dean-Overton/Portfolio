import { Alert, Button, Link, Paper, Snackbar, Typography } from '@mui/material';
import './../App.css';

import { ContactForm } from './../Components/ContactForm';
import Library from './../Components/Library';
import ButtonReveal from './../Components/CharityButton';
import Footer from '../Components/Footer';
import Box from '@mui/material/Box'
import NavDrawer from './../Components/NavDrawer';
import Camera from './../images/canon650d.webp';
import SoccerBall from './../images/soccerball.png';
import Face from './../images/FaceImage.webp';
import Avatar from '@mui/material/Avatar';


function Home() {  
  return (
    <>
      <NavDrawer/>

      <Box component="main">
        <Box sx={{ flexGrow: 0, p: 3, px: 2}}>
          <Box className="box" id="pfpandname">
            <div className="block" id="column1" style={{width:'35vw'}}>
              <Typography variant="h2">Dean Overton</Typography>
            </div>
            <div className="block" id="column2">
              <Avatar 
                alt="Dean Overton's profile picture" 
                id="pfp"
                src={Face} 
                sx={{ width: 300, height: 300, margin: '40px auto'}}/>
            </div>
          </Box>
          <Box sx={{ flexGrow: 0, p: 3, px: 2}}>
            <ButtonReveal mainText='HERE' href="https://donatenow.wfp.org/gdg/~my-donation?redirected=AU"/>
          </Box>

          <br/>
          
          <Box width='100vw' id="about">
            <Typography variant="h4">About</Typography>
            <br/>
            <Typography variant="body1" style={{display: 'inline-block'}}>CURRENTLY:</Typography>
            <li><Typography variant="body1" style={{display: 'inline-block'}}>STUDYING FOR THE <a href="https://www.eccouncil.org/certified-ethical-hacker-training-and-certification/" style={{color:'whitesmoke'}} rel="noreferrer" target={'_blank'}>CEHv10 Exam</a>!</Typography></li>
            <li><Typography variant="body1" style={{display: 'inline-block'}}>About to commence Bachelor of Computer Science (2023-2026)</Typography></li>

            <br/>
            <br/>
            <Typography variant="body1">Other hobbies:</Typography>
            <img src={SoccerBall} alt="soccerball" width='50px' style={{opacity:'80%',  transform: 'rotate(-30deg)'}}/>
            <img src={Camera} alt="camera" width='80px' style={{opacity:'80%', transform: 'rotate(-30deg)'}}/>
            <li><Typography variant="body1" style={{display: 'inline-block'}}>HTML and Batch programming at the age of 11</Typography></li>
            <Box>
              {/* <a href="./../files/Batch Games.zip" download="Batch Games.zip" target='_blank'>
                <Button>Download Batch Games (Ignore virus detection.)</Button>
              </a> */}
              <img alt="commandprompt" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.tenor.com%2FAcrJynkiNzcAAAAM%2Fcmd-command.gif&f=1&nofb=1&ipt=7441f9c339779f4c18eb8949faaac2ac06b8d79b4f58d1f86e99190eea5e3288&ipo=images" width='200px' style={{margin: '1em 0 1em 30vw', marginLeft: '30vw', marginTop: '1em', opacity:'90%'}}/>          
            </Box>
            <li><Typography variant="body1" style={{display: 'inline-block'}}>Learned game developement in my years at high school</Typography></li>
            <li><Typography variant="body1" style={{display: 'inline-block'}}>A passion for the environment; Growing a home vegetable garden.</Typography></li>
            <img alt="esp32 microcontroller" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-GuWilb37otg%2FXTe1FBKampI%2FAAAAAAAADe8%2FnLT2nCWXoD0mqk4-SD7yUHiod4jCyA2JQCLcBGAs%2Fs1600%2FESP32-Module.png" width='300px' style={{margin: '1em 10vw 1em 0', marginTop: '1em', opacity:'90%'}}/>
          </Box>

          <Box id="projects" marginTop={20}>
            <Typography variant="h4">My Projects</Typography>
            <br/>
            <Typography variant="body1">Working on projects with my brother. (2020-current).</Typography>
            <Paper style={{width:'300px', display:'inline-block', margin:'5vw'}} sx={{ p: 1 }}>
              <img style={{width:'inherit'}} alt="leaf" src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2Fa78cb11c-046e-455f-82e9-069a2b6c9905%2Fd4i2imv-fe6cdab0-c335-4428-b61b-0f477adbb962.png%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E3OGNiMTFjLTA0NmUtNDU1Zi04MmU5LTA2OWEyYjZjOTkwNVwvZDRpMmltdi1mZTZjZGFiMC1jMzM1LTQ0MjgtYjYxYi0wZjQ3N2FkYmI5NjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.j6V0jAegQQQ06ki4IuSiGh9BZgaFp_LONy_OlPWM6bI&f=1&nofb=1&ipt=f70d56482c9bd6927199b18db33bded60a58f1affab322bbf0143145e43190b2&ipo=images'/>
              <Typography>- Routeshare (2020): A traffic reduction app</Typography>
            </Paper>
            
            <Paper style={{width:'300px', display:'inline-block', margin:'5vw'}} sx={{ p: 1 }}>
              <img alt="solana" style={{width:'inherit'}} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.coinpaprika.com%2Fcoin%2Fsol-solana%2Flogo.png%3Frev%3D10608559&f=1&nofb=1&ipt=23eea60e2d736550101b0ee52c05e44045370429cf9cfb6b65d5af5c8086ded3&ipo=images'/>
              <Link target="_blank" href="https://github.com/Dean-Overton/solana-discord-nft-tools" color="inherit">- Open-source Solana Tools</Link>
            </Paper>
            <br/>
            <br/>
            <br/>
            <Typography variant="body1">Working on projects individually (2017-current).</Typography>
            <br/>
            <Paper style={{width:'300px', display:'inline-block', margin:'5vw'}} sx={{ p: 1 }}>
              <Typography>- Arbitraria (2018): A random world generation game.</Typography>
            </Paper>
            <Paper style={{width:'300px', display:'inline-block', margin:'5vw'}} sx={{ p: 1 }}>
              <Typography>- Freelance Apps and Games (2018-2022): .</Typography>
            </Paper>

          </Box>
          <br/>
          <br/>
          <br/>
          <br/>
          
          <Typography variant="subtitle1">...that brings us to TODAY: </Typography>
          <Typography variant="body1">An extremely enthusiastic 18 year old who is motivated to work on projects.</Typography>
        </Box>
        
        <div id="contact">
          <ContactForm/>
        </div>
        <Typography variant="body1">Website made with <b>React, MUI and Typescript</b></Typography>
        
        {/* <div style={{top: '700px', right: '100px', float: 'right', position: 'absolute'}}>
          <VerticalLinearStepper/>
        </div> */}

        <Box 
          width={{xs: '100vw', md: '80vw'}}
          marginX="auto"
          marginY="50px"
          sx={{
            // '&:hover': {
            //   backgroundColor: 'primary.main',
            //   opacity: [0.9, 0.8, 0.7],
            // },
          }} 
          alignItems="center" 
          justifyContent="center">
          <Library/>
        
        </Box>
        
        <Footer/>

        <Snackbar
          open
          autoHideDuration={30000}
        >
          <Alert
            variant="filled"
            severity="info"
          >
            This portfolio is <b>still in developement.</b>
          </Alert>
        </Snackbar>
      </Box>
      
    </>
  );
}

export default Home;

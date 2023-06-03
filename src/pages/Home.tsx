import { Alert, Button, Link, Paper, Snackbar, Typography } from '@mui/material';
import './../App.css';

import { ContactForm } from './../Components/ContactForm';
import Library from './../Components/Library';
import ButtonReveal from './../Components/CharityButton';
import Footer from '../Components/Footer';
import Box from '@mui/material/Box'
import NavDrawer from './../Components/NavDrawer';
import Face from './../images/FaceImage.webp';
import Avatar from '@mui/material/Avatar';
import About from '../Components/About';
import Projects from '../Components/Projects';


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
            <About/>
          </Box>

          <Box id="projects" width='100vw' marginTop={5}>
            <Typography variant="h4">My Projects</Typography>
            <Projects/>
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
          justifyContent="center"
          id="books">
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

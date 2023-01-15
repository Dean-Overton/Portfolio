import { Alert, Snackbar, Typography } from '@mui/material';
import './App.css';
import { ContactForm } from './Components/ContactForm';
import Box from '@mui/material/Box'
import NavDrawer from './Components/NavDrawer';
import { DrawerHeader } from './Components/NavDrawer';
import Camera from './images/canon650d.png';
import SoccerBall from './images/soccerball.png';
import Face from './images/FaceImage.png';
import Avatar from '@mui/material/Avatar';

function App() {  
  return (
    <div className="App">
      <NavDrawer/>

      <Box component="main">
        <DrawerHeader/>
        <Box id="about" sx={{ flexGrow: 0, p: 3, px: 7}}>
          <Typography variant="h2">Dean Overton</Typography>
          <Avatar 
            alt="Dean Overton's profile picture" 
            src={Face} 
            sx={{ width: 500, height: 500, margin: '0 auto'}}/>
          <hr/>
          <br/>
          <Typography variant="subtitle1">The summary and timeline of who I am and the projects I've worked on.</Typography>
          <br/>
          <Typography variant="body1">Played soccer since i was 6</Typography>
          <img src={SoccerBall} width='200px' style={{opacity:'50%',  transform: 'rotate(-30deg)'}}/>
          <br/>
          <Typography variant="body1">Fell in love with creating something in HTML at 11</Typography>
          <br/>
          <Typography variant="body1">Learned game developement in my years at high school</Typography>
          <br/>
          <Typography variant="body1">Created short (quite voilent) films with a love for filmography.</Typography>
          <img src={Camera} width='300px' style={{opacity:'50%', transform: 'rotate(-30deg)'}}/>
          <br/>
          <Typography variant="body1">Working with my brother in coding projects</Typography>
          <br/>
          <Typography variant="body1">A passion for the environment; Growing a home vegetable garden</Typography>
          <br/>
          <Typography variant="body1">Learned game developement in my years at high school</Typography>
          <br/>
          <Typography variant="h5">...that brings us to TODAY: </Typography>
          <Typography variant="h6">An extremely enthusiastic 18 year old who is motivated to work on projects.</Typography>
        </Box>
        
        <div id="contact">
          <ContactForm/>
        </div>
        <Typography variant="body1">Website made with <b>React, MUI and Typescript</b></Typography>
        
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <Snackbar
          open
          autoHideDuration={30000}
        >
          <Alert
            variant="filled"
            severity="info"
          >
            This portfolio is <b>still in developement.</b> Please contact me for a copy of my resume.
          </Alert>
        </Snackbar>
      </Box>
      
    </div>
  );
}

export default App;

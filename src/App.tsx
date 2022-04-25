import { Typography } from '@mui/material';
import './App.css';
import { ContactForm } from './Components/ContactForm';
import Box from '@mui/material/Box'
import NavDrawer from './Components/NavDrawer';
import { DrawerHeader } from './Components/NavDrawer';

function App() {
  return (
    <div className="App">
      <NavDrawer/>

      <Box component="main" sx={{ flexGrow: 1, p: 3, px: 7}}>
        <DrawerHeader/>

        <Typography variant="h2">Dean Overton</Typography>
        <Typography variant="subtitle1">A brief summary and timeline of the projects I've worked on.</Typography>
        <div id="contact">
          <ContactForm/>
        </div>
        <Typography variant="body1">Website made with <b>React, MUI and Typescript</b></Typography>
      </Box>
    </div>
  );
}

export default App;

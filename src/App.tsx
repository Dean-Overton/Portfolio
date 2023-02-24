import './App.css';
import Box from '@mui/material/Box'
import NavDrawer from './Components/NavDrawer';

import {Outlet} from "react-router-dom";

function App() {  
  return (
    <div className="App">
      <Box component="main">
        <Outlet/>
      </Box>
    </div>
  );
}

export default App;

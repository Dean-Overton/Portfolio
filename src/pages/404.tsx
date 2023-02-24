import { Alert, Button, rgbToHex, Snackbar, Typography } from '@mui/material';
import './../App.css';
import Box from '@mui/material/Box'


function FourZeroFour() {  
  return (
    <div className="App">
      <Box component="main">
          <Typography variant="h4">404 - PAGE NOT FOUND!</Typography>
        <Snackbar
          open
          autoHideDuration={30000}
        >
          <Alert
            variant="filled"
            severity="info"
          >
            This website is <b>still in developement.</b>
          </Alert>
        </Snackbar>
      </Box>
      
    </div>
  );
}

export default FourZeroFour;

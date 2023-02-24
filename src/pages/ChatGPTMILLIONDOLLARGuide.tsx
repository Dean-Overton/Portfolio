import { Alert, Button, rgbToHex, Snackbar, Typography } from '@mui/material';
import './../App.css';
import Box from '@mui/material/Box'

function ChatGPTMILLIONDOLLARGuide() {  
  return (
    <div className="App">
      <Box component="main">

        

        <Snackbar
          open
          autoHideDuration={30000}
        >
          <Alert
            variant="filled"
            severity="info"
          >
            This book preview is <b>still in developement.</b>
          </Alert>
        </Snackbar>
      </Box>
    </div>
  );
}

export default ChatGPTMILLIONDOLLARGuide;

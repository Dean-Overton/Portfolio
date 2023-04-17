import { Alert, Button, CssBaseline, Snackbar, Typography } from '@mui/material';
import './../App.css';
import Box from '@mui/material/Box'

function ChatGPTMILLIONDOLLARGuide() {  
  return (
      <>
        <CssBaseline />
        <Box 
          width='100vw'
          height='100vh'>
          <Box 
            display="flex"
            alignItems="center"
            borderRadius='12px'
            width='content'
            height='100vh'>
            <Typography 
              variant="h1" 
              color={"gold"}
              style={{display : 'block'}}>MILLION DOLLAR ChatGPT Guide</Typography>
            <Button style={{display : 'block'}} variant='contained'>Pre-order NOW! (40% off)</Button>
          </Box>
        </Box>

        <Box width={"100vw"} height={"100vh"}>
          <Typography variant="h4">This book showcases the most awesome features about ChatGPT in all occupations.</Typography>
        </Box>

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
    </>
  );
}

export default ChatGPTMILLIONDOLLARGuide;

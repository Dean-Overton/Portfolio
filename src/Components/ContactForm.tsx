import { Box, Link, Paper, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import './Contact.css';

export const ContactForm = () => 
{
  function EmailForm(event: any) {

  }
  return (
    <form onSubmit={EmailForm}>
      <Paper elevation={3} className="contact-holder">
        <h2>Lets link up!</h2>
        <Box sx={{m:3}}>
          <TextField label="Full Name" name="full-name" autoComplete="full-name" id="full-name" tabIndex={1}/>
        </Box>
        <Box sx={{m:3}}>
          <TextField label="Email" name="email" id="email" autoComplete="current-email"/>
        </Box>
        <Box sx={{m:3}}>
          <TextField label="Message" id="email-body"/>
        </Box>
        <Box sx={{m:2}}>
          <Button type="submit" variant="contained">Submit</Button>
        </Box>
        <Typography>Or email me at <Link href="mailto:contact@deanoverton.com">contact@deanoverton.com</Link></Typography>
      </Paper>
    </form>
  );
}
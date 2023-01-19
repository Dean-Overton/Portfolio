import { useState, useRef } from "react";
import emailjs from "emailjs-com";

import { Alert, Box, Link, Paper, Snackbar, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import './Contact.css';

const initialFormValues = {
  fullName: "",
  email: "",
  message:"",
  formSubmitted: false,
  success: false
}

export const useFormControls = (setNotificationOpen: any) => {
  // We'll update "values" as the form updates
  const [values, setValues] = useState(initialFormValues);

  //const [notificationOpen, setNotificationOpen] = useState(false);

  // "errors" is used to check the form for errors
  const [errors, setErrors] = useState({} as any);
  const validate: any = (fieldValues = values) => {
    // this function will check if the form values are valid
    let temp: any = { ...errors }

    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required."

    if ("email" in fieldValues) {
      temp.email = fieldValues.email ? "" : "This field is requires an email so I can contact you :)"
      if (fieldValues.email)
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ""
          : "Email is not valid."
    }

    setErrors({
      ...temp
    });
  }
  const handleInputValue = (e: any) => {
    // this function will be triggered by the text field's onBlur and onChange events
    
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    validate({ [name]: value });
  }
  const handleFormSubmit = async (e: any) => {
    // this function will be triggered by the submit event

    e.preventDefault();
    if (formIsValid()) {
      // setNotificationOpen(true);
      // e.target.reset();
      
      emailjs.sendForm('service_376mxsd', 'template_0brmh4l', e.target, process.env.REACT_APP_PUBLIC_EMAIL_KEY)
      .then((result) => {
          console.log("MESSAGE SENT");
          setNotificationOpen(true);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
    }
  }
  const formIsValid = (fieldValues = values) => {
    // this function will check if the form values and return a boolean value
    const isValid =
      fieldValues.fullName &&
      fieldValues.email &&
      Object.values(errors).every((x) => x === "");

    return isValid;
  }
 return {
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    errors
  };
}
const contactFieldValues = [
  {
    name: "fullName",
    label: "Full Name",
    id: "contact-full-name",
    required: true
  },
  {
    name: "email",
    label: "Email",
    id: "contact-email",
    autocomplete: "email",
    required: true
  },
  {
    name: "message",
    label: "Message",
    id: "contact-message",
    multiline: true,
    rows: 5
  }
];
export const ContactForm = () => 
{
  const [notificationOpen, setNotificationOpen] = useState(false);
  const setNotificationClose = () => {
    setNotificationOpen(false);
  };

  const {
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    errors
  } = useFormControls(setNotificationOpen);

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="contact-holder">
        <Paper elevation={3} className="contact-paper">
          <h2>Lets link up!</h2>
          {contactFieldValues.map((contactFieldValue, index) => {
            return (
              <Box sx={{m:3}}>
                <TextField
                  key={index}
                  onBlur={handleInputValue}
                  onChange={handleInputValue}
                  label={contactFieldValue.label} 
                  name={contactFieldValue.name} 
                  multiline={contactFieldValue.multiline ?? false} 
                  fullWidth
                  required={contactFieldValue.required ?? false}
                  rows={contactFieldValue.rows ?? 1}
                  autoComplete={contactFieldValue.autocomplete ?? "none"}
                  id={contactFieldValue.id}
                  tabIndex={(index+1)}
                  error={errors[contactFieldValue.name] ?? ""}
                  />
              </Box>
            );
          })}
          {/* <div className="g-recaptcha" data-sitekey="your_site_key"></div> */}
          <Box sx={{m:2}}>
            <Button 
              type="submit" 
              tabIndex={contactFieldValues.length} 
              disabled={!formIsValid()} 
              fullWidth 
              variant="contained"
              >Submit</Button>
          </Box>
          <Typography>Or email me at <Link href="mailto:deanoverton13+removethis@outlook.com">deanoverton13+removethisalongwithplus@outlook.com</Link></Typography>
        </Paper>
        <Snackbar
          open={notificationOpen}
          autoHideDuration={6000}
          onClose={setNotificationClose}
          >
            <Alert
              iconMapping={{
                success: <CheckCircleOutlineIcon fontSize="inherit" />,
              }}
            >
              Email Sent!
            </Alert>
        </Snackbar>
      </div>
    </form>
  );
}
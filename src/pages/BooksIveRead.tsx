import { Alert, Button, CssBaseline, Snackbar, Typography } from '@mui/material';
import './../App.css';
import Box from '@mui/material/Box'
import Library from '../Components/Library';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function BooksIveRead() { 
    return (
        <>
            <CssBaseline />
            <Box marginY="50px"><Button href='/' variant='outlined' startIcon={<ArrowBackIcon/>}>Home Page</Button></Box>
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
        </>
    );
}
export default BooksIveRead;
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

import { initializeApp } from "firebase/app";
import {
   getFirestore,
   collection,
   getDocs,
   doc,
   addDoc
} from 'firebase/firestore/lite';

import { useEffect, useState } from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyBfCiU_sR9vI5XlRzpr2fhs6Tf5quD-2x0",
    authDomain: "portfolio-4a325.firebaseapp.com",
    projectId: "portfolio-4a325",
    storageBucket: "portfolio-4a325.appspot.com",
    messagingSenderId: "346628261509",
    appId: "1:346628261509:web:a888bf8379e8d6355b4bec",
    measurementId: "G-WCEQ8N19QM"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const BookItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {props.value == 100 ? (
            <>
                <Box sx={{ width: '100%', minWidth: 35}}>
                    <Typography variant="body2" color="text.secondary">READ</Typography>
                </Box>
            </>
        ) : (
            <>
                <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress variant="determinate" {...props} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.secondary">{`${Math.round(
                    props.value,
                    )}%`}</Typography>
                </Box>
            </>
        )}
        
      </Box>
    );
  }
class Book {
    title: String;
    authors: String;
    rating: number;
    progress: number;

    constructor (title: String, authors: String, rating: number, progress: number ) {
        this.title = title;
        this.authors = authors;
        this.rating = rating;
        this.progress = progress;
    }
}

const bookRef = collection(db, "my-books");

const Library = () => {
    const [isError, setIsError] = useState(true)

    useEffect(() => {
        async function getData() {
            const snap = await getDocs(collection(db, "my-books"));
            setIsError(false);
            snap.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
          };
      
          // You need to restrict it at some point
          // This is just dummy code and should be replaced by actual
            if (isError) {
                getData();
            } else {
                console.error("Error loading library");
            }
        // uploadData();
    }, []);

    // async function uploadData() {
    //     await addDoc(bookRef, {
    //         title: "Rich Dad, Poor Dad", authors: "Robert T. Kiyosaki", rating: 10,
    //         progress: 100}).then((response) => {
    //             console.log("Test: " + response);
    //         });
    //     await addDoc(bookRef, {
    //         title: "The Barefoot Investor", authors: "Scott Pape", rating: 10,
    //         progress: 32}).then((response) => {
    //             console.log("Test: " + response);
    //         });
    //     await addDoc(bookRef, {
    //         title: "You Say More Than You Think", authors: "Janine Driver", rating: 7,
    //         progress: 11}).then((response) => {
    //             console.log("Test: " + response);
    //         });
    //     await addDoc(bookRef, {
    //         title: "100M Offers", authors: "Alex Hormozi", rating: 10,
    //         progress: 100}).then((response) => {
    //             console.log("Test: " + response);
    //         });
    //     await addDoc(bookRef, {
    //         title: "Start with Why", authors: "Simon Sinek", rating: 0,
    //         progress: 0}).then((response) => {
    //             console.log("Test: " + response);
    //         });
    //     await addDoc(bookRef, {
    //         title: "How to Win Friends and Influence People", authors: "Dale Carnegie", rating: 7,
    //         progress: 100}).then((response) => {
    //             console.log("Test: " + response);
    //         });
        
    // }
    return (
        <>
            <Typography variant='h2' marginBottom='20px'>My Library</Typography>
            <Grid 
                container 
                rowSpacing={2} 
                columnSpacing={{ xs: 1, sm: 2, md: 3 }} 
                alignItems="center" 
                justifyContent="center">
                { isError ? (
                    <>
                        <Grid item xs={12}>
                            <Typography color="red">Error Loading My Recently Read Books!</Typography>
                        </Grid>
                       <Grid item xs={12}>
                            <hr/>
                        </Grid>
                    </>
                ) : (
                    <>
                    
                    {/* // <Grid item xs={3}>
                    //     <BookItem>
                    //         <Typography sx={{margin: 2}} variant="h5">${doc.id}The Barefoot Investor</Typography>
                    //         <Typography sx={{margin: 2}} variant="subtitle1">by Scott Pape</Typography>
                    //         <LinearProgressWithLabel value={11} />
                    //     </BookItem>
                    // </Grid> */}
                                 
                        <Grid item xs={3}>
                            <BookItem>
                                <Typography sx={{margin: 2}} variant="h5">The Barefoot Investor</Typography>
                                <Typography sx={{margin: 2}} variant="subtitle1">by Scott Pape</Typography>
                                <LinearProgressWithLabel value={11} />
                            </BookItem>
                        </Grid>
                        <Grid item xs={3}>
                            <BookItem>
                                <Typography sx={{margin: 2}} variant="h5">Sapiens</Typography>
                                <Typography sx={{margin: 2}} variant="subtitle1">by Yuval Noah Harari</Typography>
                                <LinearProgressWithLabel value={23} />
                            </BookItem>
                        </Grid>
                        <Grid item xs={3}>
                            <BookItem>
                                <Typography sx={{margin: 2}} variant="h5">$100M Offers</Typography>
                                <Typography sx={{margin: 2}} variant="subtitle1">by Alex Hormozi</Typography>
                                <LinearProgressWithLabel value={100} />
                            </BookItem>
                        </Grid>
                        <Grid item xs={12}>
                            <hr/>
                        </Grid>
                        <Grid item xs={3}>
                            <BookItem>
                                <Typography sx={{margin: 2}} variant="h5">12 Rules for Life</Typography>
                                <Typography sx={{margin: 2}} variant="subtitle1">by Jordan Peterson</Typography>
                                <LinearProgressWithLabel value={100} />
                            </BookItem>
                        </Grid>
                        <Grid item xs={3}>
                            <BookItem>
                                <Typography sx={{margin: 2}} variant="h5">Brief Answers to the Big Questions</Typography>
                                <Typography sx={{margin: 2}} variant="subtitle1">by Stephen Hawking</Typography>
                                <LinearProgressWithLabel value={100} />
                            </BookItem>
                        </Grid>
                        <Grid item xs={3}>
                            <BookItem>
                                <Typography sx={{margin: 2}} variant="h5">Ignite</Typography>
                                <Typography sx={{margin: 2}} variant="subtitle1">by Shannah Kennedy, Lyndall Mitchell</Typography>
                                <LinearProgressWithLabel value={100} />
                            </BookItem>
                        </Grid>
                        <Grid item xs={12}>
                            <hr/>
                        </Grid>
                        <Grid item xs={3}>
                            <BookItem>
                                <Typography sx={{margin: 2}} variant="h5">Think and Grow Rich</Typography>
                                <Typography sx={{margin: 2}} variant="subtitle1">by Napolleon Hill</Typography>
                                <LinearProgressWithLabel value={100} />
                            </BookItem>
                        </Grid>
                        <Grid item xs={3}>
                            <BookItem>
                                <Typography sx={{margin: 2}} variant="h5">Elon Musk</Typography>
                                <Typography sx={{margin: 2}} variant="subtitle1">by Ashlee Vance</Typography>
                                <LinearProgressWithLabel value={100} />
                            </BookItem>
                        </Grid>
                        <Grid item xs={3}>
                            <BookItem>
                                <Typography sx={{margin: 2}} variant="h5">Rich Dad, Poor Dad</Typography>
                                <Typography sx={{margin: 2}} variant="subtitle1">by Robert Kyosaki</Typography>
                                <LinearProgressWithLabel value={100} />
                            </BookItem>
                        </Grid>
                        <Grid item xs={12}>
                            <hr/>
                        </Grid>
                        <Grid item xs={3}>
                            <BookItem>
                                <Typography sx={{margin: 2}} variant="h5">How to make Friends and Influence People</Typography>
                                <Typography sx={{margin: 2}} variant="subtitle1">by Dale Carnegie</Typography>
                                <LinearProgressWithLabel value={100} />
                            </BookItem>
                        </Grid>
                        <Grid item xs={3}>
                            <BookItem>
                                <Typography sx={{margin: 2}} variant="h5">48 Laws of Power</Typography>
                                <Typography sx={{margin: 2}} variant="subtitle1">by Robert Greene</Typography>
                                <LinearProgressWithLabel value={40} />
                            </BookItem>
                        </Grid>
                        <Grid item xs={3}>
                            <BookItem>
                                <Typography sx={{margin: 2}} variant="h5">Trillion Dollar Coach</Typography>
                                <Typography sx={{margin: 2}} variant="subtitle1">by Eric Schmidt, Jonathan Rosenberg, Alan Eagle</Typography>
                                <LinearProgressWithLabel value={100} />
                            </BookItem>
                        </Grid>
                        <Grid item xs={12}>
                            <hr/>
                        </Grid>
                        <Grid item xs={3}>
                            <BookItem>
                                <Typography sx={{margin: 2}} variant="h5">Holes</Typography>
                                <Typography sx={{margin: 2}} variant="subtitle1">by Michael Grant</Typography>
                                <LinearProgressWithLabel value={100} />
                            </BookItem>
                        </Grid>
                        <Grid item xs={12}>
                            <hr/>
                        </Grid>
                    </>
                )}
            </Grid>
        </>
    )
}
export default Library;
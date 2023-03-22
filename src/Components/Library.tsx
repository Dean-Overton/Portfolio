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
   orderBy,
   query,
   limit
} from 'firebase/firestore/lite';

import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

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
    elevation: 15,
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
const q = query(bookRef, orderBy("progress"), limit(100));

const Library = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const [books, setBooks] = useState([] as Book[])

    const bookTemp = [] as Book[]

    useEffect(() => {
        async function getData() {
            const snap = await getDocs(q);
            snap.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                const thisBook = new Book(doc.data().title, doc.data().authors, doc.data().rating, doc.data().progress)
                bookTemp.push(thisBook)
            });
            if(books[0]) {
                console.error("Error loading library");
                setErrorMessage("Error loading library");
                setIsError(true);
                return
            } else {
                setIsError(false);
            }
            setBooks(bookTemp);
            setIsLoading(false);
            console.log(books);
        };
        try {
            getData();
        } catch {
            console.error("Error loading library");
            setErrorMessage("Error loading library");
            setIsError(true);
        }
    }, []);


    return (
        <>
            <Typography variant='h2' marginBottom='20px'>My Library</Typography>
            <Grid 
                container 
                rowSpacing={2} 
                columnSpacing={{ xs: 1, sm: 2, md: 3 }} 
                alignItems="center" 
                justifyContent="center">
                { isLoading ? (
                <>
                    <Grid item xs={12}>
                        <Typography>Loading</Typography>
                        <CircularProgress />
                    </Grid>
                </>
                ) : (<>
                    { isError ? (
                        <>
                            <Grid item xs={12}>
                                <Typography color="red">{errorMessage}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <hr/>
                            </Grid>
                        </>
                    ) : (
                        <>
                            {books.map((book, i) => 
                            <>
                                { (i%3==0) ? (
                                    <>
                                        <Grid item xs={3}>
                                            <BookItem>
                                                <Typography sx={{margin: 2}} variant="h5">{book.title}</Typography>
                                                <Typography sx={{margin: 2}} variant="subtitle1">{book.authors}</Typography>
                                                <LinearProgressWithLabel value={book.progress} />
                                            </BookItem>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <hr/>
                                        </Grid>
                                    </>
                                ) : (
                                    <>
                                        <Grid item xs={3}>
                                            <BookItem>
                                                <Typography sx={{margin: 2}} variant="h5">{book.title}</Typography>
                                                <Typography sx={{margin: 2}} variant="subtitle1">{book.authors}</Typography>
                                                <LinearProgressWithLabel value={book.progress} />
                                            </BookItem>
                                        </Grid>
                                    </>
                                )}
                            </>)}                                  
                        </>
                    )}
                </>)}
            </Grid>
        </>
    )
}
export default Library;
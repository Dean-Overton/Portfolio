import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import Book from './pages/ChatGPTMILLIONDOLLARGuide';
import FourZeroFour from './pages/404';
import reportWebVitals from './reportWebVitals';

import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BooksIveRead from './pages/BooksIveRead';

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#A8DADC',
    },
    secondary: {
      main: '#E63946',
    },
    background: {
      default: '#1D3557',
      paper: '#457B9D',
    },
    text: {
      primary: '#ffffff',
      secondary: '#c1fdff',
      disabled: '#e53935',
    },
    info: {
      main: "#faedcd"
    },
  },
  typography: {
    h1: {
      fontFamily: 'Oswald',
      fontSize: '6rem',
    },
    fontFamily: 'Oswald',
    body1: {
      fontFamily: 'Fira Code',
    },
    body2: {
      fontFamily: 'Roboto',
    },
    button: {
      fontWeight: 500,
      fontSize: '1rem',
    },
    subtitle1: {
      fontFamily: 'Fira Code',
      fontWeight: 600,
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 10,
  },
};
const theme = createTheme(themeOptions);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="million-dollar-guide" element={<Book />} />
            <Route path="my-library" element={<BooksIveRead />} />
            <Route path="*" element={<FourZeroFour />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

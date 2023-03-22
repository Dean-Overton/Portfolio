import * as React from 'react';

import SpeedDial from '@mui/material/SpeedDial';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Box from '@mui/material/Box/Box';
import ScrollToTop from 'react-scroll-up';


export default function Footer() {
    return (
        <Box sx={{height: "200px"}}>
            <ScrollToTop showUnder={500} duration={1000} style={{   
                position: 'fixed',
                bottom: 100,
                right: "50vw",
                cursor: 'pointer',
                transitionDuration: '0.2s',
                transitionTimingFunction: 'linear',
                transitionDelay: '0s'
            }}>
                <SpeedDial
                    ariaLabel="Back to top"
                    icon={<ArrowUpwardIcon />}
                />
            </ScrollToTop>
        </Box>
    );
}
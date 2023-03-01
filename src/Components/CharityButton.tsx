import * as React from 'react';
import { FC } from 'react';

import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

interface CharityButtonProps {
    mainText: string;
    // hintText?: string; 
    href?: string;
}
const CharityButton: FC<CharityButtonProps> = ({ mainText, href }) => {
    return (
        <a style={{color: 'inherit', textDecoration: 'inherit'}} href={href} target="_blank" className="mainButtonReveal">
            <ButtonGroup variant="contained">
                <Button variant='outlined'>Support some of my favourite causes.</Button>
                <Button startIcon={<BloodtypeIcon/>} variant="contained" color="secondary">{mainText}</Button>
            </ButtonGroup>
        </a>
    );
  };

export default CharityButton;
import { Box, Accordion, AccordionSummary, Typography, AccordionDetails, Link, Divider } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Projects = () => {
    return (
        <Box sx={
            {
                marginY: 2,
                marginX: "auto",
                width: "80vw",
            }
        }>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography sx={{marginX:"auto"}}>Team Projects</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">Working on projects with my brother. (2020-current).</Typography>
                    
                    <Divider sx={{marginY:2}}/>
                    
                    <img style={{width:'100px'}} alt="leaf" src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2Fa78cb11c-046e-455f-82e9-069a2b6c9905%2Fd4i2imv-fe6cdab0-c335-4428-b61b-0f477adbb962.png%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E3OGNiMTFjLTA0NmUtNDU1Zi04MmU5LTA2OWEyYjZjOTkwNVwvZDRpMmltdi1mZTZjZGFiMC1jMzM1LTQ0MjgtYjYxYi0wZjQ3N2FkYmI5NjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.j6V0jAegQQQ06ki4IuSiGh9BZgaFp_LONy_OlPWM6bI&f=1&nofb=1&ipt=f70d56482c9bd6927199b18db33bded60a58f1affab322bbf0143145e43190b2&ipo=images'/>                   
                    <Typography>- Routeshare (2020): A traffic reduction app</Typography>
                    
                    <Divider sx={{marginY:2}}/>
                    
                    <img alt="solana" style={{width:'100px'}} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.coinpaprika.com%2Fcoin%2Fsol-solana%2Flogo.png%3Frev%3D10608559&f=1&nofb=1&ipt=23eea60e2d736550101b0ee52c05e44045370429cf9cfb6b65d5af5c8086ded3&ipo=images'/>                  
                    <Link target="_blank" href="https://github.com/Dean-Overton/solana-discord-nft-tools" color="inherit">- Open-source Solana Tools</Link>                   
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                    <Typography sx={{marginX:"auto"}}>Individual Projects</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>- Arbitraria (2018): A random world generation game.</Typography>
                    <Typography>- Freelance Apps and Games (2018-2022)</Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}
export default Projects;
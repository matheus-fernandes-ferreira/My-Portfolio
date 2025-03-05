import avatar from "../../../../assets/images/avatar.png";
import theme from "../../../../theme";
import StyledButton from "../../../../components/StyledButton/StyledButton";

import { Container, styled, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';

// icons
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'; 
import EmailIcon from '@mui/icons-material/Email';



const Hero = () => {
    const StyledHero = styled("div")(() => ({
        backgroundColor: theme.palette.primary.dark,
        height: "100vh"
    }))
    const StyledImage = styled("img")(() => ({
        width: "100%",
        border: '2px solid ',
        borderColor: theme.palette.primary.main,
        borderRadius: "50%",
    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth='lg'>
                    <Grid container direction={'row'} display={'flex'} justifyContent={'center'} alignItems={'center'} spacing={8}>

                        <Grid size={{ xs: 12, md: 4, xl: 4 }}>
                            <StyledImage src={avatar} alt="" />
                        </Grid>
                        <Grid container display={'flex'} justifyContent={'center'} alignItems={'center'} spacing={8}>

                            <Grid size={{ xs: 12, md: 8, xl: 8 }} >
                                <Typography color="primary" variant="h1" textAlign={'start'}> MATHEUS FERNANDES </Typography>
                                <Typography color="secondary" variant="h3" textAlign={'start'}> Desenvolvedor de websites, interfaces do usuário e designer digital </Typography>

                                <Grid container display={'flex'} justifyContent={'center'}>
                                    <Grid size={{ xs: 12, md: 4, xl: 4 }} display={'flex'} justifyContent={'center'}>
                                        <StyledButton>
                                            <CloudDownloadIcon />
                                            Download CV
                                        </StyledButton>
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 4, xl: 4 }} display={'flex'} justifyContent={'center'}>
                                        <StyledButton>
                                            <EmailIcon></EmailIcon>
                                            Contact me
                                        </StyledButton>


                                    </Grid>
                                </Grid>


                            </Grid>


                        </Grid>
                    </Grid>


                </Container>
            </StyledHero >



        </>
    )
}

export default Hero

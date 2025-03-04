import avatar from "../../../../assets/images/avatar.png";

import { Container, styled, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'; import EmailIcon from '@mui/icons-material/Email';
const Hero = () => {
    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        height: "100vh"
    }))
    const StyledImage = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%",


    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth='lg'>
                    <Grid container display={'flex'} justifyContent={'center'} alignItems={'center'}>

                        <Grid size={{ xs: 12, md: 4, xl: 4 }}>
                            <StyledImage src={avatar} alt="" />
                        </Grid>

                        <Grid size={{ xs: 12, md: 8, xl: 8 }}>
                            <Typography color="primary" variant="h1" textAlign={'center'}> Matheus Fernandes </Typography>
                            <Typography color="primary" variant="h3" textAlign={'center'}> Desenvolvedor de sistemas </Typography>

                            <Grid container display={'flex'} justifyContent={'center'}>
                                <Grid size={{ xs: 12, md: 4, xl: 4 }} display={'flex'} justifyContent={'center'}>
                                    <button>
                                        <CloudDownloadIcon />
                                        Download CV
                                    </button>
                                </Grid>

                                <Grid size={{ xs: 12, md: 4, xl: 4 }} display={'flex'} justifyContent={'center'}>
                                    <button >
                                        <EmailIcon></EmailIcon>
                                        Contact me
                                    </button>
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

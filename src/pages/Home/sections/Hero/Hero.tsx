import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import EmailIcon from "@mui/icons-material/Email";
import AnimatedBackground from "../../../../components/AnimatedBackground/AnimatedBackground";
import avatar from "../../../../assets/images/avatar.png";
import theme from "../../../../theme";

const Hero = () => {
    return (
        <Box
            sx={{
                position: "relative", // Alterado para relative
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                paddingTop: { xs: "60px", sm: "60px" }, // Adiciona padding-top para respeitar o AppBar
            }}
        >
            {/* AnimatedBackground como plano de fundo */}
            <AnimatedBackground />

            {/* Conteúdo do Hero */}
            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
                <Grid container spacing={4} alignItems="center" justifyContent="center">
                    {/* Coluna da Imagem */}
                    <Grid size={{ xs: 12, md: 5 }} display="flex" justifyContent="center">
                        <img
                            src={avatar}
                            alt="Avatar"
                            style={{
                                width: "100%",
                                maxWidth: "400px",
                                border: "3px solid",
                                borderColor: `${theme.palette.primary.main}`,
                                borderRadius: "50%",
                            }}
                        />
                    </Grid>

                    {/* Coluna do Texto e Botões */}
                    <Grid size={{ xs: 12, md: 7 }} spacing={12}>
                        <Typography color="primary" variant="h1" textAlign="center" mb={5}>
                            MATHEUS FERNANDES
                        </Typography>
                        <Typography color="secondary" variant="h3" textAlign="center" mb={5}>
                            Desenvolvedor de websites, interfaces do usuário e designer digital.
                        </Typography>

                        {/* Grid dos Botões */}
                        <Grid container spacing={2} mt={2}>
                            <Grid size={{ xs: 12, sm: 6 }} display="flex" justifyContent="center">
                            <StyledButton onclick={ () => console.log('Download')}>
                            <CloudDownloadIcon />
                                    <Typography>Download CV</Typography>
                                </StyledButton>
                            </Grid>

                            <Grid size={{ xs: 12, sm: 6 }} display="flex" justifyContent="center">
                                <StyledButton onclick={ () => console.log('Contact me')}>
                                    <EmailIcon />
                                    <Typography>Contact me</Typography>
                                </StyledButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Hero;
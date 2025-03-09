import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { MenuItem, styled, Toolbar } from '@mui/material';

export default function ButtonAppBar() {

    const StyledToolBar = styled(Toolbar)(({ }) => ({
        display: 'flex',
        justifyContent: 'space-evenly'
    }))

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="absolute" sx={{ backgroundColor: (theme) => theme.palette.primary.dark }} 
            >
                <StyledToolBar>
                    <MenuItem> About </MenuItem>
                    <MenuItem> Skills </MenuItem>
                    <MenuItem> Projects </MenuItem>
                </StyledToolBar>
            </AppBar>
        </Box>
    )
}
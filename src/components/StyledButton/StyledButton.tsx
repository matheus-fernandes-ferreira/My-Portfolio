import { colors, styled } from "@mui/material"
import theme from "../../theme"


const StyledButton = ({ children }) => {

    const StyledButton = styled("div")(() => ({
        width: '100%',
        padding: '7px',
        backgroundColor: 'transparent',
        border: `1px solid ${theme.palette.secondary.main}`,
        borderRadius: '5px',
        color: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.secondary.contrastText,
        }
    }))

    return (
        <>
            <StyledButton>
                {children}
            </StyledButton>

            
        </>
    )
}

export default StyledButton

import { styled } from "@mui/material"
import theme from "../../theme"
import { ReactNode } from "react"

interface StyledButtonProps{
    children: ReactNode
    onclick: () => void
}

const StyledButton: React.FC<StyledButtonProps> = ({ children, onclick }) => {

    const StyledButton = styled("div")(() => ({
        width: '100%',
        padding: '7px',
        backgroundColor: 'transparent',
        border: `1px solid ${theme.palette.secondary.main}`,
        borderRadius: '5px',
        color: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.secondary.contrastText,
        },
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px'
    }))

    return (
        <>
            <StyledButton onClick={onclick}>
                {children}
            </StyledButton>


        </>
    )
}

export default StyledButton

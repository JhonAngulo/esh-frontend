import * as React from 'react';
import Container from '@mui/material/Container';
import Copyright from '../../components/Copyright'


const LoginLayout = (props) => {
    const { children } = props

    return (
        <Container component="main" maxWidth="xs">
            {
                children
            }
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
}

export default LoginLayout
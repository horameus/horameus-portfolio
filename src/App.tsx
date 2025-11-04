import { Stack, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { theme } from './utils';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Stack spacing={2} alignItems="center" justifyContent="center" minHeight="100vh">
                <Typography variant="h1">HORAMEUS</Typography>
            </Stack>
        </ThemeProvider>
    );
}

export default App;

import { Stack, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { theme } from './utils';
import { AnimationTest } from './components';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Stack spacing={2} alignItems="center" justifyContent="center" minHeight="100vh">
                <AnimationTest />
            </Stack>
        </ThemeProvider>
    );
}

export default App;

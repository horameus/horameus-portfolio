import { ThemeProvider } from '@mui/system';
import { theme } from './utils';
import { AnimationTest, BackgroundView } from './components';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BackgroundView>
                <AnimationTest />
            </BackgroundView>
        </ThemeProvider>
    );
}

export default App;

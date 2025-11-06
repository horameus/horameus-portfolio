import { ThemeProvider } from '@mui/system';
import { theme } from './utils';
import { IntroTitle, BackgroundView } from './components';
import { IntroText } from './components/animations/intro/IntroText';

export function App() {
    return (
        <ThemeProvider theme={theme}>
            <BackgroundView>
                <IntroText />
            </BackgroundView>
        </ThemeProvider>
    );
}

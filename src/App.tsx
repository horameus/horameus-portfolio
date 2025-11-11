import './utils/theme/theme.css';
import { IntroTitle, BackgroundView } from './components';
import { IntroText } from './components/animations/intro/IntroText';

export function App() {
    return (
        <BackgroundView>
            <IntroText />
        </BackgroundView>
    );
}

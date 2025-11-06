import { fontSize } from '@mui/system';

export function useSxs() {
    return {
        AnimationContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
        },
        AnimationText: {
            fontSize: '10rem',
        },
    };
}

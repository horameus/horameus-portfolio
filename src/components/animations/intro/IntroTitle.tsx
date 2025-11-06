import { Stack, Typography } from '@mui/material';
import './animation.css';
import { useSxs } from './_sxs';

export function IntroTitle() {
    const sxs = useSxs();

    return (
        <Stack sx={sxs.AnimationContainer}>
            <Typography sx={sxs.IntroTitle} variant="h1" color="primary" className="animationIntroTitle">
                HORAMEUS
            </Typography>
        </Stack>
    );
}

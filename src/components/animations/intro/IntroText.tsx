import { Stack, Typography } from '@mui/material';
import './animation.css';
import { useSxs } from './_sxs';

export function IntroText() {
    const sxs = useSxs();

    return (
        <Stack sx={sxs.AnimationContainer}>
            <Typography variant="h1" color="primary" className="animation">
                THIS IS THE <br /> PORTFOLIO OF
            </Typography>
        </Stack>
    );
}

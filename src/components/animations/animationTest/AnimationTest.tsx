import { Stack, Typography } from '@mui/material';
import './animation.css';
import { useSxs } from './_sxs';

export function AnimationTest() {
    const sxs = useSxs();

    return (
        <Stack sx={sxs.AnimationContainer}>
            <Typography sx={sxs.AnimationText} variant="h1" color="primary" className="animation">
                HORAMEUS
            </Typography>
        </Stack>
    );
}

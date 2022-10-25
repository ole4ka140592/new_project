import {Box, LinearProgress} from "@mui/material";

export const Preloader = ()=> {
    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        </div>
    )
}
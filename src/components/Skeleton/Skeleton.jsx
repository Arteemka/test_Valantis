import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export const SkeletonItems = ({ limit }) => {
  return (
    <Grid
      container
      wrap="wrap"
      spacing={1}
      sx={{ mx: "auto" }}
      style={{ width: "80%" }}
    >
      {Array.from(Array(limit)).map(() => (
        <Box key={Math.random()} sx={{ width: 310, mx: "auto", my: 10 }}>
          <Skeleton variant="rectangular" width={310} height={118} />
          <Box sx={{ pt: 1 }}>
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </Box>
      ))}
    </Grid>
  );
};

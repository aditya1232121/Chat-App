import { Grid, Skeleton, Stack } from "@mui/material";
import React from "react";
import { BouncingSkeleton } from "../styles/StyledComponents";

const LayoutLoader = () => {
  return (
    <Grid container height={"calc(100vh - 4rem)"} spacing={1}>
      {/* Left Sidebar Skeleton */}
      <Grid
        sx={{
          display: { xs: "none", sm: "block" },
          height: "100vh",
          flex: 1,
        }}
      >
        <Skeleton variant="rectangular" height={"100vh"} />
      </Grid>
      
      {/* Main Content Skeleton */}
      <Grid sx={{ flex: 2 }}>
        <Stack spacing={1}>
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton key={index} variant="rounded" height={"5rem"} />
          ))}
        </Stack>
      </Grid>

      {/* Right Sidebar Skeleton */}
      <Grid
        sx={{
          display: { xs: "none", md: "block" },
          height: "100vh",
          flex: 1,
        }}
      >
        <Skeleton variant="rectangular" height={"100vh"} />
      </Grid>
    </Grid>
  );
};

export { LayoutLoader };

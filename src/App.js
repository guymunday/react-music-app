import React from "react";
import Header from "./components/Header";
import AddSong from "./components/AddSong";
import Songlist from "./components/SongList";
import SongPlayer from "./components/SongPlayer";
import { Grid, useMediaQuery } from "@material-ui/core";

function App() {
  const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const greaterThanSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  return (
    <>
      {greaterThanSm && <Header />}
      <Grid container spacing={3}>
        <Grid
          style={{ paddingTop: greaterThanSm ? 80 : 20 }}
          item
          xs={12}
          md={7}
        >
          <AddSong />
          <Songlist />
        </Grid>
        <Grid
          style={
            greaterThanMd
              ? {
                  position: "fixed",
                  width: "100%",
                  right: 0,
                  top: 70,
                }
              : {
                  position: "fixed",
                  left: 0,
                  bottom: 0,
                  width: "100%",
                }
          }
          item
          xs={12}
          md={5}
        >
          <SongPlayer />
        </Grid>
      </Grid>
    </>
  );
}

export default App;

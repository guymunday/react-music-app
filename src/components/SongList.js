import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
  IconButton,
  CardActions,
  makeStyles,
} from "@material-ui/core";
import { PlayArrow, Save } from "@material-ui/icons";

function SongList() {
  let loading = false;

   const useStyles = makeStyles((theme) => ({
     container: {
       margin: theme.spacing(3),
     },
     songInfoContainer: {
       display: "flex",
       alignItems: "center",
     },
     songInfo: {
       width: "100%",
       display: "flex",
       justifyContent: "space-between",
     },
     thumbnail: {
       objectFit: "cover",
       width: 140,
       height: 140,
     },
   }));

  const song = {
    title: "Think Less",
    artist: "Thank",
    thumbnail: "http://i3.ytimg.com/vi/QQnhpIRgzFM/hqdefault.jpg",
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      {Array.from({ length: 10 }, () => song).map((song, i) => (
        <Song key={i} song={song} />
      ))}
    </div>
  );

  function Song({ song }) {
    const classes = useStyles()
    const { title, artist, thumbnail } = song;

    return (
      <Card className={classes.container}>
        <div className={classes.songInfoContainer}>
          <CardMedia image={thumbnail} className={classes.thumbnail} />
          <div className={classes.songInfo}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body1" component="p" color="secondary">
                {artist}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton size="small" color="primary">
                <PlayArrow />
              </IconButton>
              <IconButton size="small" color="secondary">
                <Save />
              </IconButton>
            </CardActions>
          </div>
        </div>
      </Card>
    );
  }
}

export default SongList;

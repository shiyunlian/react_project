import React from "react";
import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  CardContent,
} from "@material-ui/core";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import { makeStyles } from "@material-ui/core/styles";

// create a hook called useStyles, that is equal to a function called makeStyles
// pass a callback function that returns an object containing all the styles
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper, //material ui built-in color: white
    padding: theme.spacing(8, 0, 6),
  },
  icon: {
    marginRight: "20px",
  },
  button: {
    marginTop: "40px",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardGrid: {
    padding: "20px",
  },
  cardMedia: {
    paddingTop: "56.25%", // aspect ratio of 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

// Grid is used for responsive design and positioning things on the page,
// need a grid container with some spacing
const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon className={classes.icon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              varient="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              varient="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello, this is a photo album
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button varient="contained" color="primary">
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button varient="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                ></CardMedia>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom varient="h5">
                    Heading
                  </Typography>
                  <Typography gutterBottom varient="h5">
                    This is a media card.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default App;
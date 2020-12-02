import React, { useEffect, useState } from "react";

import Button from "@material-ui/core/Button";

import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

import CircularProgress from "@material-ui/core/CircularProgress";
import { userContext } from "./utils/auth";
import Paper from '@material-ui/core/Paper';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="http://www.google.com">
        Electric Sheep 🐑⚡
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));


export default function Admin({ onLogout }) {
  const classes = useStyles();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getContext = async () => {
      try {
        const { data: userData } = await userContext();
        if (!userData) return onLogout();
        console.log({ userData });
        setUser(userData);
      } catch (e) {
        console.log({ getUserContextError: e.message });
        return onLogout();
      }
    };
    getContext();
  }, []);

return (
  <>
    {!user ? (
      <>
        <Grid>
          <CircularProgress />
        </Grid>
      </>
    ) : (
      <React.Fragment>
        <Paper>
          Welcome Admin
          <Button href="#" color="secondary" variant="contained" className={classes.link} onClick={() => onLogout()}>
            Logout
          </Button>
        </Paper>
      </React.Fragment>
    )}
  </>
)
}
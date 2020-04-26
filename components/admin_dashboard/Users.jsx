import React from "react";
import './Users.css';
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green} from '@material-ui/core/colors';
import Navbar from './Navbar/Navbar'
import logo from './img/pngformat.png';
import Form from './form/form'

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});
export default function AddUser1() {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <div className="formplacing">
      <ThemeProvider theme={theme}>
        <Button variant="contained" size ="small" color="primary" className={classes.margin}>
          Add User
        </Button>
        <Button variant="contained" size ="small" color="primary" className={classes.margin}>
          Edit User
        </Button>
        <Button variant="contained" size ="small" color="primary" className={classes.margin}>
          Delete User
        </Button>
      </ThemeProvider>
      <Form />
      </div>
    </div>
  );
}

import "./admindashboard.css";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background:
      "linear-gradient(45deg, rgba(29, 157, 210, 1) 0%, rgba(1, 154, 66, 1) 100%)",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background:
      "linear-gradient(180deg, rgba(29, 157, 210, 1) 0%, rgba(1, 154, 66, 1) 100%)",
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
const buttonstyle = {
  background: "#292770",
};
const iconstyle = {
  color: "#ffffff",
};
const textstyle = {
  color: "#ffffff",
};
const searchstyle = {
  marginLeft: "85px",
};
export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <React.Fragment className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            HRESOURCIFY
          </Typography>
          <Divider orientation="vertical" flexItem />

          <InputBase
            style={searchstyle}
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {["Dashboard", "Users", "Departments", "Leaves", "Benefits"].map(
              (text, index) => (
                <ListItem style={buttonstyle} button key={text}>
                  <ListItemIcon style={iconstyle}>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText style={textstyle} primary={text} />
                </ListItem>
              )
            )}
          </List>
        </div>
      </Drawer>
      <div className="ContainerPlacing">
        <Container fixed>
          <ul>
            <li>
              <div className="addUserButton">
                <h3 className="buttonText">
                  <b>Add User</b>
                </h3>
              </div>
            </li>
            <li>
              <div className="addDepartmentButton">
                <h3 className="buttonText2">
                  <b>Add Department</b>
                </h3>
              </div>
            </li>
            <li>
              <div className="leaveButton">
                <h3 className="buttonText2">
                  <b>View Leave Request</b>
                </h3>
              </div>
            </li>
            <li>
              <div className="deleteUserButton">
                <h3 className="buttonText">
                  <b>Delete User</b>
                </h3>
              </div>
            </li>
            <li>
              <div className="deleteDepartmentButton">
                <h3 className="buttonText2">
                  <b>Delete Department</b>
                </h3>
              </div>
            </li>
            <li>
              <div className="benefitButton">
                <h3 className="buttonText2">
                  <b>View Benefit Request</b>
                </h3>
              </div>
            </li>
          </ul>
        </Container>
      </div>
    </React.Fragment>
  );
}

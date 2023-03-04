import React from "react";
import {Button, Label} from "./components";

import classes from "./assets/styles/App.module.scss";

export function App() {
  return (
    <div className={classes.app}>
      <h1>Hello world!</h1>
      <Label>Button Label</Label>
      <Button cssClass={classes.button}>Hi</Button>
    </div>
  );
}

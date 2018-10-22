import React, { Component } from "react";
import "./App.less";
import styles from "./test.less";
import { Button, Icon } from "antd";

const ButtonGroup = Button.Group;
export default class App extends Component {
  render() {
    console.log(styles.test);
    return (
      <div className="app-container">
        <p className={styles.test}>test</p>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <div className="container">
          <ButtonGroup>
            <Button type="primary">
              <Icon type="left" />
              Go back
            </Button>
            <Button type="primary">
              Go forward
              <Icon type="right" />
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button type="primary" icon="cloud" />
            <Button type="primary" icon="cloud-download" />
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

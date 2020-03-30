import React, { Component } from "react";
import "../App.css";
import view_ic from "./images/view_file.png";

export default class Object extends Component {

  render() {
    const { data } = this.props.dataObject;
    var year = this.props.yearObject;
    var type = "คำสั่งปฏิบัติงาน";
    console.log(year);
    return (
      <div>
        
      </div>
    );
  }
}

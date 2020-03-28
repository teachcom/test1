import React, { Component } from "react";
import "./../App.css";
import Tabletop from "tabletop";
import Timelinerender from "./timelinerender";

var send_data = [];
var year = '';
export default class Timeline extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      send_data,
    };
  }

  handleSort = (index, value) => event => {
    console.log(value);
    var year = value;
    this.setState({ year: value });
  };

  componentDidMount() {
    Tabletop.init({
      key: "1hov_vf4QAoolGNtRh4whSunYidBp106pFLO4pikre8s",
      callback: googleData => {
        console.log("google sheet data --->", googleData);
        this.setState({
          data: googleData
        });
      },
      simpleSheet: true
    });
    this.setState({ year: '2020' });
  }
  render() {
    const { data } = this.state;
    var options = [];
    var prev = "";
    data.forEach(obj => {
      var dateD = obj.Date;
      var lastFour = dateD.substring(dateD.length - 4, dateD.length);
      if (prev != lastFour) {
        options.push(lastFour);
        prev = lastFour;
      }
    });
    console.log(Array.from(options));
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">ข้อมูลด้าน</span>
                <h2 className="colorlib-heading animate-box">
                  การปฏิบัติงานและกิจกรรมที่ได้เข้าร่วม
                  <div></div>
                </h2>
              </div>
            </div>

            <div>
              {options.map((name, index) => (
                <button
                  key={index}
                  className="btn_option"
                  to="#"
                  onClick={this.handleSort(index,name)}
                >
                  {parseInt(name) + parseInt("543")}
                </button>
              ))}
            </div>

            <Timelinerender
              options={{options}}
              data={{ data }}
              year={this.state.year}
            ></Timelinerender>
          </div>
        </section>
      </div>
    );
  }
}

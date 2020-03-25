import React, { Component } from "react";
import "./../App.css";
import Tabletop from "tabletop";
import ImageMapper from 'react-image-mapper';
import Introduction from './introduction'

export default class Timeline extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    Tabletop.init({
      key: "1kGawtJVtMNaAExb_nEqauE79cTAIzcWdJwUGY0JIYaI",
      callback: googleData => {
        this.setState({
          data: googleData
        });
      },
      simpleSheet: true
    });
  }
  
  render() {
    const { data } = this.state;
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
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    {data.map(obj => {
                      var im1 = obj.Picture1.replace(
                        "open?",
                        "uc?export=view&"
                      );
                      var im2 = obj.Picture2.replace(
                        "open?",
                        "uc?export=view&"
                      );
                      var im3 = obj.Picture3.replace(
                        "open?",
                        "uc?export=view&"
                      );
                      return (
                        <div key={obj.Title}>
                          <div className="timeline-entry-inner">
                            <div className="timeline-icon color-5">
                              <i className="icon-pen2" />
                            </div>
                            <div className="timeline-label">
                              <h2 className="btn-titled">
                                {obj.Title} ในวันที่ {obj.Date}
                              </h2>
                              <p>{obj.Detail}</p>
                              <img
                                className="photo"
                                alt={obj.Title}
                                src={im1}
                              />
                              <img
                                className="photo"
                                alt=""
                                src={im2}
                              />
                              
                              <img
                                className="photo"
                                alt=""
                                src={im3}
                              />
                            </div>
                          </div>
                          <br></br>
                        </div>
                      );
                    })}
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          เริ่มปฏิบัติราชการวันแรก <span>11 เมษายน 2018</span>
                        </h2>
                        <p>
                          รายงานตัวและเข้ารับราชการในตำแหน่ง ครูผู้ช่วย เอกการสอนคอมพิมเตอร์ โรงเรียนภูเขียว อำเภอภูเขียว จังหวัดชัยภูมิ ในวันที่ 11 เดือนเมษายน พ.ศ. 2561
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

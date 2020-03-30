import React, { Component } from 'react'
import profile__image from './images/about.jpg'
import Timeline from "./timeline"
import SideItems from "./SideItems"
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";

function onClick(e, item) {
  window.alert(JSON.stringify(item, null, 2));
  console.log(item);
}

const items = [
  { name: "home", label: "Home", Icon: HomeIcon },
  {
    name: "billing",
    label: "Billing",
    Icon: ReceiptIcon,
    items: [
      { name: "statements", label: "Statements", onClick },
      { name: "reports", label: "Reports", onClick }
    ]
  },
  "divider",
  {
    name: "settings",
    label: "Settings",
    Icon: SettingsIcon,
    items: [
      { name: "profile", label: "Profile" },
      { name: "insurance", label: "Insurance", onClick },
      "divider",
      {
        name: "notifications",
        label: "Notifications",
        Icon: NotificationsIcon,
        items: [
          { name: "email", label: "Email", onClick },
          {
            name: "desktop",
            label: "Desktop",
            Icon: DesktopWindowsIcon,
            items: [
              { name: "schedule", label: "Schedule" },
              { name: "frequency", label: "Frequency" }
            ]
          },
          { name: "sms", label: "SMS" }
        ]
      }
    ]
  }
];

export default class Sidebar extends Component {

  
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <SideItems items={items} ></SideItems>
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: `url(${profile__image})`}}/>
              <h2 id="colorlib-logo"><a href="index.html">นายอนุรักษ์ โคผดุง</a></h2>
              <h3 id="colorlib-logo-15">Anurak Khophadung</h3>
              <h3 id="colorlib-logo-10" style={{fontSize:8}}>กลุ่มสาระการเรียนรู้วิทยาศาสตร์และเทคโนโลยี โรงเรียนภูเขียว</h3>
              <span className="email"><i className="icon-mail"></i> anurak.k@phukhieo.ac.th</span>
            </div>
            <br></br>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">ทำความรู้จัก</a></li>
                  <li><a href="#about" data-nav-section="about">ข้อมูลทั่วไป</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">การปฏิบัติงาน</a></li>
                 
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu" >
              <ul>
                <li><a href="#home" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a>
                <a href="#home" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a>
                <a href="#home" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a>
                <a href="#home" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a>
                <a href="#home" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a>
                <a href="#home" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small style={{fontSize: '8px'}}>
                  Thanks <a href="https://www.freecodecamp.org/news/portfolio-app-using-react-618814e35843/" target="_blank" rel="noopener noreferrer">Dhruv </a>
                  and <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration 
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}

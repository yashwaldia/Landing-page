import React from "react";
import LoginIcon from '@mui/icons-material/Login';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import './Work.css'; // Import the new CSS file

const Work = () => {
  const workInfoData = [
    {
      icon: <LoginIcon style={{ fontSize: 60 }} />, // Icon for Pick Meals
      title: "Affiliate $ Social Traffic",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      icon: <EmailIcon style={{ fontSize: 60 }} />, // Icon for Choose How Often
      title: "Email & Messaging Broadcasting",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      icon: <PhoneAndroidIcon style={{ fontSize: 60 }} />, // Icon for Fast Deliveries
      title: "Available in Mobile Applications",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];


  return (
    <div className="work-section-wrapper">

      <div className="work-section-top">
        <h1 className="work-heading">Product Highlights</h1>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-icon-container">
              {data.icon}
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;

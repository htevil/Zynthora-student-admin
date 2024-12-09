import React from "react";
import "./index.css";
import logo from "../../asset/logo.png";
import Submenu_logo from "../../asset/submenu_logo.svg";
import down_logo from "../../asset/down_logo.png";
import Dashboard_logo from "../../asset/dashboard_logo.png";
import Student_logo from "../../asset/student_logo.png";
import Employee_logo from "../../asset/Employee_logo.png";
import Parents_logo from "../../asset/parents_logo.png"
import Class_logo from "../../asset/class_logo.png";
import Subject_logo from "../../asset/subject_logo.png";
import Exam_logo from "../../asset/exam_logo.png";
import Academics_logo from "../../asset/academics_logo.png";
import Accounts_logo from "../../asset/account_logo.png";
import Transportation_logo from "../../asset/transportation_logo.png";
import Notice_logo from "../../asset/notice_logo.png";
import Mangeadmin_logo from "../../asset/manage-admin_logo.png";
import Sitting_logo from "../../asset/setting_logo.png";
import Logout_logo from "../../asset/logout_logo.png";

export default function SideBar() {
  return (
    <div className="sidebar">
      {/* Logo Section */}
      <section id="s1">
        <img src={logo} alt="Logo_img" id="logo" />
        <span>Zynthora Labs</span>
      </section>
      {/* Main Menu Section */}
      <section className="s2">
        <div className="block1">
          <span>MAIN MENU</span>
        </div>
        <div className="block" >
          <span className="subblock">
            <img
              src={Dashboard_logo}
              alt="Dashboard-Icon"
              className="block-img"
            />
            <span>Admin Dashboard</span>
          </span>
        </div>
        <div className="block" style={{backgroundColor:"#EDEDED", color:"black" }}>
          <span className="subblock">
            <img src={Student_logo} alt="Students-Icon" className="block-img" />
            <span>Students</span>
          </span>
          <img src={down_logo} alt="down-logo" className="Submenu-logo" />
        </div>
        <div className="accordion_content">
            <div className="accordion_block">
              <img src={Submenu_logo} alt="Submenu-logo" className="Submenu-logo" />
              <span>Add Details</span> 
            </div>
            <div className="accordion_block"  style={{color:"#007bff"}}>
              <img src={Submenu_logo} alt="Submenu-logo" className="Submenu-logo" />
              <span >Student Details</span> 
            </div>
            <div className="accordion_block">
              <img src={Submenu_logo} alt="Submenu-logo" className="Submenu-logo" />
              <span>Student Promotion</span> 
            </div>
          </div>
        <div className="block">
          <span className="subblock">
            <img
              src={Employee_logo}
              alt="Employee Icon"
              className="block-img"
            />
            <span>Employee</span>
          </span>
          <img src={Submenu_logo} alt="Submenu-logo" className="Submenu-logo" />
        </div>
        <div className="block">
          <span className="subblock">
            <img src={Parents_logo} alt="Parents Icon" className="block-img" />
            <span>Parents</span>
          </span>
          <img src={Submenu_logo} alt="Submenu-logo" className="Submenu-logo" />
        </div>
      </section>

      {/* Products Section */}
      <section className="s3">
        <div className="block1">
          <span>PRODUCTS</span>
        </div>
        <div className="block">
          <span className="subblock">
            <img src={Class_logo} alt="Class-Icon" className="block-img" />
            <span>Class</span>
          </span>
          <img src={Submenu_logo} alt="Submenu-logo" className="Submenu-logo" />
        </div>
        <div className="block">
          <span className="subblock">
            <img src={Subject_logo} alt="Subject-Icon" className="block-img" />
            <span>Subject</span>
          </span>
          <img src={Submenu_logo} alt="Submenu-logo" className="Submenu-logo" />
        </div>
        <div className="block">
          <span className="subblock">
            <img src={Exam_logo} alt="Exam-Icon" className="block-img" />
            <span>Exam</span>
          </span>
          <img src={Submenu_logo} alt="Submenu-logo" className="Submenu-logo" />
        </div>
        <div className="block">
          <span className="subblock" >
            <img src={Accounts_logo} alt="Accounts-Icon" className="block-img" />
            <span>Accounts</span>
          </span>
          <img src={Submenu_logo} alt="Submenu-logo" className="Submenu-logo" />
        </div>
        <div className="block">
          <span className="subblock" >
            <img src={Academics_logo} alt="Academics-Icon" className="block-img" />
            <span>Academics</span>
          </span>
          <img src={Submenu_logo} alt="Submenu-logo" className="Submenu-logo" />
        </div>
        <div className="block">
          <span className="subblock" >
            <img src={Transportation_logo} alt="Transportation-Icon" className="block-img" />
            <span>Transportation</span>
          </span>
        </div>
        <div className="block">
          <span className="subblock" >
            <img src={Notice_logo} alt="Notice-Icon" className="block-img" />
            <span>Notice</span>
          </span>
        </div>
      </section>

      {/* Management Section */}
      <section className="s4">
        <div className="block1">
          <span>MANAGEMENT</span>
        </div>
        <div className="block">
          <span className="subblock" >
            <img src={Mangeadmin_logo} alt="ManageAdmins-Icon" className="block-img" />
            <span>Manage Admins</span>
          </span>
        </div>
        <div className="block">
          <span className="subblock">
            <img src={Sitting_logo} alt="Settings-Icon" className="block-img" />
            <span>Settings</span>
          </span>
        </div>
      </section>

      {/* Logout Section */}
      <section className="s5">
      <div className="block">
          <span className="subblock">
            <img src={Logout_logo} alt="Logout-Icon" className="block-img" />
            <span>Logout</span>
          </span>
        </div>
      </section>
    </div>
  );
}

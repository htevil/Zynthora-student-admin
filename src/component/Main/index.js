import Header from "../Header";
import { studentData } from "../../Data/Student";
import "./index.css";
import Uparrow_logo from "../../asset/up-arrow_logo.png";
import downarrow_logo from "../../asset/down-arrows_logo.png";
import Action_logo from "../../asset/action_logo.png";

export default function Main() {
  return (
    <div className="Main">
      <Header />
      <main>
        <div id="M1">
          <div className="top-div">
            <span>All Student Details</span>
          </div>
          <div className="bottom-div">
            <div className="main_search1">
              <input
                type="text"
                placeholder="Search by Name"
                className="main_search"
              />
            </div>
            <div className="main_search">
              <select>
                <option value="" disabled selected>Search by Class</option>
                <option value="class1">Class 1</option>
                <option value="class2">Class 2</option>
                <option value="class3">Class 3</option>
              </select>
            </div>
            <div className="main_search">
              <select>
                <option value="" disabled selected>Search by Section</option>
                <option value="class1">Section A</option>
                <option value="class2">Section B</option>
                <option value="class3">Section C</option>
              </select>
            </div>
            <button className="search-button">SEARCH</button>
          </div>
        </div>
        <div id="M2">
          <table className="student-table">
            <thead>
              <tr>
                <th id="Lside_block" >
                  <input type="checkbox" style={{ marginRight: "5px" }} />
                </th>
                <th>STD ID</th>
                <th className="filter_class" style={{ padding: "10.5px" }}>
                  Roll No.
                  <div className="filter">
                    <img
                      src={Uparrow_logo}
                      alt="Uparrow-img"
                      className="filter_img"
                    />
                    <img
                      src={downarrow_logo}
                      alt="downarrow-img"
                      className="filter_img"
                    />
                  </div>
                </th>
                <th>Photo</th>
                <th className="filter_class" style={{ padding: "10.5px" }}>
                  Name
                  <div className="filter">
                    <img
                      src={Uparrow_logo}
                      alt="Uparrow-img"
                      className="filter_img"
                    />
                    <img
                      src={downarrow_logo}
                      alt="downarrow-img"
                      className="filter_img"
                    />
                  </div>
                </th>
                <th>Gender</th>
                <th className="filter_class" style={{ padding: "10.5px" }}>
                  Class
                  <div className="filter">
                    <img
                      src={Uparrow_logo}
                      alt="Uparrow-img"
                      className="filter_img"
                    />
                    <img
                      src={downarrow_logo}
                      alt="downarrow-img"
                      className="filter_img"
                    />
                  </div>
                </th>
                <th>Section</th>
                <th>Parents</th>
                <th>DOB</th>
                <th>Phone No.</th>
                <th>Email ID</th>
                <th id="Rside_block">Action</th>
              </tr>
            </thead>
            <tbody>
              {studentData.map((data, index) => (
                <tr key={index}>
                  <td id="Lside_block">
                    <input type="checkbox" />
                  </td>
                  <td>{data.STD_ID}</td>
                  <td>{data.Roll_no}</td>
                  <td>
                    <img
                      src={data.Photo_logo}
                      alt="Photo_img"
                      className="photo"
                    />
                  </td>
                  <td>{data.Name}</td>
                  <td>{data.Gender}</td>
                  <td>{data.Class}</td>
                  <td>{data.Section}</td>
                  <td>{data.Parent}</td>
                  <td>{data.DOB}</td>
                  <td>{data.Phone_no}</td>
                  <td>{data.Email}</td>
                  <td id="Rside_block">
                    <img
                      src={Action_logo}
                      alt="Action-img"
                      className="Action-img"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div id="M3">
          <button className="word-btn">&lt;&lt; Previous</button>
          <button
            className="num-btn"
            style={{ backgroundColor: "#007bff", color: "white" }}
          >
            1
          </button>
          <button className="num-btn">2</button>
          <button className="num-btn">3</button>
          <button className="word-btn">Next &gt;&gt;</button>
        </div>
      </main>
    </div>
  );
}

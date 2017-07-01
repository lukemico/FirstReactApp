import React from "react";
import ReactDOM from "react-dom";
// import HelloWorld from "./components/HelloWorld";
// import ProfilePic from "./components/ProfilePic";
// import ProfileName from "./components/ProfileName";
// import Avatar from "./components/Avatar";
import Home from "./components/Home";
import Search from "./components/Search";
import Loading from "./components/Loading";
import Routes from "./config/Routes";

console.log(Routes);

const USER_DATA = {
  name: "Jeremy Ashkenas",
  username: "jashkenas",
  imageURL: "http://fillmurray.com/200/200"
};

ReactDOM.render(<Search />, document.querySelector("#app"));

import React from "react";
import CommonHeader from "../conponents/Header/commonHeader";
import MyCard from "../conponents/sider/MyCard/MyCard";
import "./main.css";
import { useSelector } from "react-redux";
import MySider from "../conponents/sider/sider";
import MyFooter from "../bottom/bottom";
import { Outlet } from "react-router-dom";

const Main = () => {
  const { myTheme } = useSelector((state) => state.myThemes);

  return (
    <>
      <div
        className={myTheme}
        style={{
          width: "100%",
          // height: "100%",

          margin: "0",
          padding: "0",
          border: "0",
          outline: "0",
          background: "transparen",
        }}
      >
        <CommonHeader />
        <MySider>
          {/* <MyCard /> */}
        </MySider>
        {/* <MyFooter/> */}
        <Outlet/>
      </div>
     
    </>
  );
};

export default Main;

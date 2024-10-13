import React from "react";
import CommonHeader from "../../conponents/Header/commonHeader";
import MyCard from "../../conponents/sider/MyCard/MyCard";
import { useSelector } from "react-redux";
import MySider from "../../conponents/sider/sider";
import MyContent from "../../conponents/Content/Content";
import MyFooter from "../../bottom/bottom";
import { Slider } from "antd";


const Home = () => {
  const { myTheme } = useSelector((state) => state.myThemes);

  return (
    <>
    <div
        className={myTheme}
        style={{
          width: "100%",
          height: "349vh",
          margin: "0",
          padding: "0",
          border: "0",
          outline: "0",
          background: "transparen",
          display:'flex'
        }}
      >
        
        <MyContent/>
        </div>
    </>
  );
};

export default Home;
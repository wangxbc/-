import React from "react";
import { Layout } from "antd";
import { useSelector } from 'react-redux';
import './bottom.css'

const {Footer} = Layout

const MyFooter = () => {
    const {myTheme} = useSelector(state => state.myThemes)
    const {worldTheme} = useSelector(state => state.worldThemes)
    const {cardTheme} = useSelector(state =>state.cardThemes)
    const {cardsTheme} = useSelector(state =>state.cardsThemes)
    const {cardColor} = useSelector(state =>state.cardColors)
    return (
      <Footer
        className={cardColor}
        style={{ height: "150px", position:'relative',bottom:'1%',width:'100%' }}
      >
        <div
         
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            boxSizing: "border-box",
            height: "95%",
            width: "100%",
            position: "relative",
            left: "0%",
            top: "8%",
            border: "0px solid #ccc",
          }}
        >
          <div
            className={cardTheme}
            style={{
              display: "inline-block",
              alignContent:"center",
              paddingLeft: "100%",
              animation: "scroll 180s linear infinite",
            }}
          >
            <ul style={{ fontSize: "80px",fontWeight:'700'}}>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                学海无涯&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                探索无境&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                学海无涯&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                探索无境&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                学海无涯&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                探索无境&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li><li style={{ display: "inline-block", marginRight: "20px" }}>
                学海无涯&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                探索无境&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li><li style={{ display: "inline-block", marginRight: "20px" }}>
                学海无涯&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                探索无境&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li><li style={{ display: "inline-block", marginRight: "20px" }}>
                学海无涯&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                探索无境&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li><li style={{ display: "inline-block", marginRight: "20px" }}>
                学海无涯&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                探索无境&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li><li style={{ display: "inline-block", marginRight: "20px" }}>
                学海无涯&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                探索无境&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li><li style={{ display: "inline-block", marginRight: "20px" }}>
                学海无涯&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                探索无境&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li><li style={{ display: "inline-block", marginRight: "20px" }}>
                学海无涯&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                探索无境&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li><li style={{ display: "inline-block", marginRight: "20px" }}>
                学海无涯&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                探索无境&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li><li style={{ display: "inline-block", marginRight: "20px" }}>
                学海无涯&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                探索无境&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li><li style={{ display: "inline-block", marginRight: "20px" }}>
                学海无涯&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                探索无境&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li><li style={{ display: "inline-block", marginRight: "20px" }}>
                学海无涯&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                探索无境&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li><li style={{ display: "inline-block", marginRight: "20px" }}>
                学海无涯&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                探索无境&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li><li style={{ display: "inline-block", marginRight: "20px" }}>
                学海无涯&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                探索无境&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li><li style={{ display: "inline-block", marginRight: "20px" }}>
                学海无涯&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                探索无境&nbsp;&nbsp;
              </li>
              <li style={{ display: "inline-block", marginRight: "20px" }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li>
            </ul>
          </div>
        </div>
      </Footer>
    );
}

export default MyFooter
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Layout,
} from "antd";
import MyCard from "./MyCard/MyCard";
import  { useState } from 'react';
import { Affix, Card, Space } from 'antd';
import {GithubOutlined,WechatOutlined } from '@ant-design/icons'

const { Header, Footer, Sider, Content } = Layout;

const MySider = () => {
  const { myTheme } = useSelector((state) => state.myThemes);
  const { worldTheme } = useSelector((state) => state.worldThemes);
  const { cardTheme } = useSelector((state) => state.cardThemes);
  const dispatch = useDispatch();
  return (
    <>
      <Sider
        
        style={{
          height: "100%",
         
          width:"40%"
          
        }}
      >
        <MyCard />
      </Sider>
    </>
  );
};

export default MySider;

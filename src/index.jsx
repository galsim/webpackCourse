import * as $ from 'jquery';
import Post from "@models/Post.js";
// import json from "./assets/json.json";
// import xml from "./assets/data.xml";
// import csv from "./assets/data.csv";
import img from "./assets/webpack-logo.png";
import React from 'react'
import {render} from 'react-dom'
import "./styles/style.css";
import './styles/less.less'
import './styles/scss.scss'
import '@/babel'

const post = new Post("Webpack Post title", img);

const App = () => (
  <div className="container">
    <h1>Hello, webpack!</h1>
    <hr />
    <div className="logo"/>
    <hr />
    <pre/>
    <hr />
    <div className="box">
      <h2>Less</h2>
    </div>
    <div className="card">
      <h2>Scss</h2>
    </div>
  </div>
)

render(
<App/>
, document.getElementById('app'))



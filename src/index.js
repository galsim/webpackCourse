import Post from "@models/Post.js";
// import json from "./assets/json.json";
// import xml from "./assets/data.xml";
// import csv from "./assets/data.csv";
import img from "./assets/webpack-logo.png";
import "./styles/style.css";

const post = new Post("Webpack Post title", img);

console.log(post.toString());

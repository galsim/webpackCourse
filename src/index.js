import Post from "./Post.js";
import json from "./assets/json.json";
import img from "./assets/webpack-logo.png";
import "./styles/style.css";

const post = new Post("Webpack Post title", img);

console.log(post.toString());

console.log("JSON", json);

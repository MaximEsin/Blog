import React from "react";
import PostList from "./components/PostList";
import "./styles/App.css";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "HTML", body: "Description" },
    { id: 3, title: "CSS", body: "Description" },
  ]);

  const [posts2, setPosts2] = useState([
    { id: 1, title: "Python", body: "Description" },
    { id: 2, title: "C#", body: "Description" },
    { id: 3, title: "Java", body: "Description" },
  ]);

  return (
    <div className="App">
      <PostList posts={posts} title={"List of front-end posts"} />
      <PostList posts={posts2} title={"List of back-end posts"} />
    </div>
  );
}

export default App;

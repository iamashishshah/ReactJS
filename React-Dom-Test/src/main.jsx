/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useParams,
} from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((posts) => {
        console.log("dada is converted in json format", posts);
        setPosts(posts);
      });
  }, []);
  console.log(posts);
  return (
    <div className="main-container">
      {posts.map((post) => (
        <NavLink
          to={`post/${post.id}`}
          key={post.id}
          style={{
            display: "block",
            color: "blue",
            fontFamily: "sans-serif",
            marginTop: "10px",
            backgroundColor: "black",
            padding: "14px",
            cursor: "pointer",
          }}
        >
          {post.title}
        </NavLink>
      ))}
    </div>
  );
}

function Post() {
  const params = useParams()
  const [postData, setPostData] = useState([])
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.userId}`)
    .then(data => data.json())
    .then((singlePost) => (
      console.log(singlePost),
      setPostData(singlePost)
    ))
  }, [])


  return (
    <div>
      <h1>Post detail will appear here</h1>
      <h2>{postData.title}</h2>
      <p>{postData.body}</p>
    </div>
  );
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Profile() {
  const params = useParams();
  return (
    <div>
      <h1>
        {" "}
        you&apos;re here {params.name} while{" "}
        <strong style={{ color: "Blue" }}>fobb.in</strong> was under development
      </h1>
    </div>
  );
}

function Settings() {
  return <h1>Want to visit setting </h1>;
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="About" element={<About />} />
      <Route path="post/:userId" element={<Post />} />

      <Route path="account">
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

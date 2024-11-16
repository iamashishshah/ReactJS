/* eslint-disable react-refresh/only-export-components */
import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  useParams,
} from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setPosts(data));
    console.log(posts);
  }, []);
  console.log(posts);
  return (
    <div>
      <div className="main-container">
        {posts.map((post) => (
          <NavLink
            to={`/posts/${post.id}`}
            key={post}
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
    </div>
  );
}
function Contact() {
  return <h1>Contact page</h1>;
}
function Return() {
  return <h1>Return page</h1>;
}
function About() {
  return <h1>About page</h1>;
}
function GetIn() {
  return <h1>GetIn page</h1>;
}

function Profile() {
  return <h1>Profile Page</h1>;
}
function Setting() {
  return <h1>Setting Page</h1>;
}
function Login() {
  return <h1>Login Page</h1>;
}

function User() {
  const params = useParams();
  console.log(params);
  return (
    <h1>
      Your name is <i>{params.userName.toLocaleUpperCase()}</i>
    </h1>
  );
}

function Post() {
  const params = useParams();
  const [post, setPost] = useState("");
  console.log(params.postId);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      .then((data) => data.json())
      .then((data) => setPost(data));
  }, []);

  const title = post.title || "Default Title";
  const body = post.body || "Default body content.";
  console.log(post);
  return (
    <div className="container" style={{ color: "white" }}>
      <h1>Post will appear here</h1>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts/:postId" element={<Post />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="return" element={<Return />} />
        <Route path="getin" element={<GetIn />} />
        {/* lets make dynamic route */}
        <Route path="user/:userName" element={<User />} />
        <Route path="account">
          <Route path="settings" element={<Setting />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

import { useContext } from "react"
import App from "../App.jsx"
import Login from "./Login.jsx"
import UserContext from "../context/UserContext.js"


function Profile() {
  const {user} = useContext(UserContext)
  if(!user) return <h1>user not found</h1>
  return (
    <div>
      Profile: {user.username}
      <App />
      <Login />
    </div>
  );
}

export default Profile

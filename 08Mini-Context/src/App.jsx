import Login from "./component/Login.jsx"
import Profile from "./component/Profile.jsx"
import UserContextProvider from "./context/UserContextProvider.jsx"


function App() {
  
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App

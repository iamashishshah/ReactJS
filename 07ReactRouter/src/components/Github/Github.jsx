// import { useEffect, useState } from "react"
import { useLoaderData} from 'react-router-dom'

function Github() {
  // const [data, setData] = useState('')
  // useEffect(()=>{
  //   fetch("https://api.github.com/users/iamashishshah")
  //   .then((res) => res.json())
  //   .then((jsonData) => setData(jsonData) )
  // }, [])

  const data = useLoaderData()
  return (
    <div>
      Github {data["login"]}
      <img src={data["avatar_url"]} alt="" />
    </div>
  )
}

export default Github

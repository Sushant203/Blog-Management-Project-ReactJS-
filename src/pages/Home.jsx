import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [blogs, setBlogs] = useState([])

  const fetchBlogs = async () => {
    const response = await axios.get("https://blog-hqx2.onrender.com/blog")
    setBlogs(response.data)
  }

  useEffect(()=>{
    fetchBlogs()
  },[])

  return (
    <div>
      {blogs.map((val, i) => {
        return <div key={i}>
          {val.title}
          </div>
      })}
    </div>
  )
}

export default Home
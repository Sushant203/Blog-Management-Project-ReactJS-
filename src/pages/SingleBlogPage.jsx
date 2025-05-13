import axios from 'axios';
import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const SingleBlogPage = () => {
    const [singleBlog,setSingleBlog] = useState();
    const {id} = useParams();

     const fetchData = async()=>{
        const response = await axios.get(`https://blog-hqx2.onrender.com/blog/single/${id}`)
         setSingleBlog(response.data);
     }

     useEffect(()=>{
       fetchData();
     },[])
  return (
    <div>
        <h1>My Single Blogs</h1>
           <h1>{singleBlog?.title}</h1>
           <img src={singleBlog?.image} alt="" />
           <p>
            {singleBlog?.content}
           </p>
    </div>
  )
}

export default SingleBlogPage

//task:
//design the single blog page. give specfic height and width to the image make the title bold and font size to 2xl . design description accordingly.
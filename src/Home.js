import { useState, useEffect } from "react"
import BlogList from './BlogList'

const Home = ()=> {
  const [blogs, setblogs] = useState([
    {title: "hello first div", author: "mafuta", id:1},
    {title: "welme to the new para ", author: "Bunny ", id: 2 },
    {title: "navbar", author: "Ytropan", id:3 }
  ]);

  const [name, setName]= useState('mario')

  const handleDelete = (id) =>{
    const newBlogs = blogs.filter(blog =>blog.id !== id)
    setblogs(newBlogs)
  }

  useEffect(() => {
    console.log('use effectr functional')
    console.log(blogs)
    },[name])

  return(
    <div className="Home">
      <div>
        <BlogList blogs= {blogs} title="All Blogs"  handleDelete = {handleDelete}/>
        <button onClick={()=>setName("luigi")}>change name</button>
        <p>{name}</p>
      </div>
    </div>
  )
}

export default Home
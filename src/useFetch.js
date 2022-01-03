const useFetch = ()=> {
  useEffect(() => {
     setTimeout(()=>{
       fetch('http://localhost:8000/blogs')
       .then(res =>{
         if(!res.ok) {
           throw Error('could not fetch the data for that resourse')
         }
         return res.json()
       })
       .then(data => {
         setBlogs(data)
       })
     })
    return () => {
      cleanup
    }
  }, [input]) 

}
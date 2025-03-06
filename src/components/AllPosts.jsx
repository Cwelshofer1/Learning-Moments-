import { useState, useEffect } from "react"
import { getAllPosts } from "../services/PostServices.js"
import "./Allposts.css"
import { User } from "../users/Users.jsx"
import { getAllUsersLikes } from "../services/UserLikesServices.js"
import { PostFilter } from "./PostFilter.jsx"
import { getAllTopics } from "../services/TopicsServices.js"

export const PostListRendering = () => {
    const [posts, setPosts] = useState([])
    const [userLikes, setUserLikes] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [topics, setTopics] = useState([])
    const [selectedTopic, setSelectedTopics] = useState([])


     useEffect(() => {
          
          const postArray = posts.filter(
              (post) => post.topic.name === selectedTopic
            )
              setFilteredPosts(postArray)
      }, [selectedTopic])

      useEffect(() => {
        if(selectedTopic === "Placeholder") {
            setFilteredPosts(posts)
        }
      }, [selectedTopic])
      

    useEffect(() => {
        getAllPosts().then((postArray) => {
            setPosts(postArray)
        })
    }, [])

    useEffect(() => {
        getAllUsersLikes().then((likesArray) => {
        setUserLikes(likesArray)
        })
    }, [])
    
    useEffect(() => {
        getAllTopics().then((topicsArray) => {
        setTopics(topicsArray)
        })
    }, [])

  


    useEffect(() => {
        const findPosts = posts.filter((post) => {
     return post.body.toLowerCase().includes(searchTerm.toLowerCase())
    })
      setFilteredPosts(findPosts)
      }, [searchTerm, posts])

    return (  <>
       
            
          <PostFilter setSearchTerm = {setSearchTerm} topics={topics} setSelectedTopics={setSelectedTopics}/>
       
          
    
        <div className="posts" >
            {filteredPosts.map((postObj) => {
                return <User post={postObj} usersLikes={userLikes} topics={topics} key={postObj.id} />
                
            })}
            
        </div>
        </>
    )
}
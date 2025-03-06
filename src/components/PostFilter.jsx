export const PostFilter = ({ topics, setSearchTerm, setSelectedTopics}) => {
 
    return (
    <>
    <div className="navbar">
        <a href="#">All Posts</a>
        <a href="#">My Posts</a>
        <a href="#">Favorites</a>
        <a href="#">New Posts</a>
        <a href="#">Profile</a>
        <a href="#" className="logout">Logout</a>
        </div>
        <div className="search-container">
        <input    
        onChange={( event ) => 
            {setSearchTerm(event.target.value)}}
            type="text"
            placeholder="Search Posts"
            className="post-search"
          />
            <select placeholder="Topic Select" 
            onChange={(event) => {setSelectedTopics(event.target.value)}}
                  >  
                <option key="0">Placeholder</option>
                 {topics.map(topic => (
            
                 <option key={topic.id}> 
                  {topic.name}
                 </option>))}
                  </select>
                 
       
       
    </div>
    
    </>
    )
}
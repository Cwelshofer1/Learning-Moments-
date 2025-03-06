import "./User.css"

export const User = ({ post, usersLikes }) => {
    const likeCount = usersLikes.filter(like => like.postId === post.id).length;

    return (
        <div className="post">
        <div>
            <div className="post-info"></div>
            <div>{post.title}</div>
            </div>
            <div>
                <div className="post-info"></div>
                <div>{post.body}</div>
                </div>
                <div>
                    <div className="post-info"></div>
                    <div>Number of likes: {likeCount} </div>
                </div>
                </div>
    )
}
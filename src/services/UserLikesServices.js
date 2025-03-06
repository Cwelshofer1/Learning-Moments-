export const getAllUsersLikes = () => {
    return fetch(`http://localhost:8088/usersLikes`).then((res) => 
    res.json()
)
}
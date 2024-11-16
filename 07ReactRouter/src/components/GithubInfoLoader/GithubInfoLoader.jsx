
 const GithubInfoLoader = async() =>{
    const response = await fetch("https://api.github.com/users/iamashishshah")
    return response.json()
}

export default GithubInfoLoader;
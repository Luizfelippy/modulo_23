document.addEventListener('DOMContentLoaded', function() {
    const endPoint = `https://api.github.com/users/luizfelippy`;
    const avatarElement = document.querySelector('#avatar');
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch(endPoint)
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            avatarElement.src = json.avatar_url;
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            reposElement.innerText = json.public_repos;
            followersElement.innerText = json.followers;
            followingElement.innerText = json.following;
            linkElement.href = json.html_url;
        })
        .catch(function(error) {
            console.error('Fetch error:', error);
        });
        
})
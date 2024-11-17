document.addEventListener("DOMContentLoaded", function(){
    let nomeE = document.querySelector('#nome');
    let avatarE = document.querySelector('#avatar');
    let usuarioE = document.querySelector('#usuario');
    let repositorioE = document.querySelector('#repositorio');
    let linkE = document.querySelector('#link');
    let seguidoresE = document.querySelector('#seguidores');
    let seguindoE = document.querySelector('#seguindo');

    fetch('https://api.github.com/users/victorLR')
    .then(function(res){
        return res.json();
    })
    .then(function(json){
        nomeE.innerText =json.name;
        usuarioE.innerText = json.login;
        avatarE.src = json.avatar_url;
        seguindoE.innerText = json.following;
        repositorioE.innerText = json.public_repos;
        seguidoresE.innerText = json.followers;
        linkE.href = json.html_url;
    })
})
// let posturl ='https://devto-photoapp-default-rtdb.firebaseio.com/posts/-N8f3toRvBtvgNHC7dJR.json';
let userurl ='https://devto-photoapp-default-rtdb.firebaseio.com/users/-N8RJPww_niZjLYxXLB2.json';

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');
console.log(postId)

let postsDetailMain = document.querySelector('#post-holder');
let postsLeftAside = document.querySelector('#left-aside');


    const insertPost = (posts) => {

    templateleft=`
<div class="d-flex flex-row col-8 flex-lg-column left-aside-icon-container  col-lg-auto justify-content-evenly py-2" id="icongroup-container">

    <div class=" d-flex flex-lg-column col-2  col-lg-1 justify-content-between" id="icon-counter-container">
        <div class="icon-container" id="like-heart">
            <input type="checkbox" id="aside-icon-checkboxheart" class="checkboxhider">
            <label for="aside-icon-checkboxheart" class="checkedlabel" id="checkboxheaartlabel">
              <img src="./assets/images/SVG/heart.png" alt="" class="aside-icon-default">
              <img src="./assets/images/SVG/hearthover.png" alt="" class="aside-icon-hover">
              <img src="./assets/images/SVG/heartcheked.png" alt="" class="aside-icon-cheked" id="heart">
            </label>
        </div>
        <div class="counter-container d-flex align-items-center justify-content-center">
                <Span>${posts.postLikesCount}</Span>
        </div>
    </div>
    <div class=" d-flex flex-lg-column col-2  col-lg-1 justify-content-between" id="icon-counter-container">
        <div class="icon-container" id="unicorn-click">
            <input type="checkbox" id="aside-icon-checkboxunicorn" class="checkboxhider">
            <label for="aside-icon-checkboxunicorn" class="checkedlabel" id="checkboxheaartlabel">
              <img src="./assets/images/SVG/unicorn.png" alt="" class="aside-icon-default">
              <img src="./assets/images/SVG/unicornhover.png" alt="" class="aside-icon-hover">
              <img src="./assets/images/SVG/unicorncheked.png" alt="" class="aside-icon-cheked" id="unicorn">
            </label>
        </div>
        <div class="counter-container d-flex align-items-center justify-content-center">
            <Span>${posts.postUnicornCount}</Span>
        </div>
    </div>
    <div class=" d-flex flex-lg-column col-2 justify-content-between col-lg-1" id="icon-counter-container">
        <div class="icon-container" id="save-flag">
            <input type="checkbox" id="aside-icon-checkboxsave" class="checkboxhider">
            <label for="aside-icon-checkboxsave" class="checkedlabel" id="checkboxheaartlabel">
              <img src="./assets/images/SVG/save.png" alt="" class="aside-icon-default">
              <img src="./assets/images/SVG/savehover.png" alt="" class="aside-icon-hover">
              <img src="./assets/images/SVG/savercheked.png" alt="" class="aside-icon-cheked" id="save">
            </label>
        </div>
        <div class="counter-container d-flex align-items-center justify-content-center">
            <Span>${posts.postSavedCount}</Span>
        </div>

    </div>
    <div class=" d-flex flex-lg-column col-2 justify-content-between col-lg-1" id="icon-counter-container">
        <div class="icon-container">
            <input type="checkbox" id="aside-icon-checkboxdots" class="checkboxhider">
            <label for="aside-icon-checkboxdots" class="checkedlabel">
            <img src="./assets/images/SVG/dots.png" alt="" class="aside-icon-default">
            <img src="./assets/images/SVG/dotshover2.png" alt="" class="aside-icon-hover">
            <img src="./assets/images/SVG/dotshover2.png" alt="" class="aside-icon-cheked" id="dots">
            <div class="pop-menu-container">
                <ul class="menu-list p-1 m-0 d-flex flex-column" >
                    <li id="list-header"><a class="dropdown-item" href="#"><b>Copylink</b></a></li>
                    <li id="list-item"><a class="dropdown-item" href="#">Share to Twitter</a></li>
                    <li id="list-item"><a class="dropdown-item" href="#">Share to LinkedIn</a></li>
                    <li id="list-item"><a class="dropdown-item" href="#">Share to Reddit</a></li>
                    <li id="list-item"><a class="dropdown-item" href="#">Share to Hacker News</a></li>
                    <li id="list-item"><a class="dropdown-item" href="#">Share to Facebook</a></li>
                    <li id="list-item"><a class="dropdown-item" href="#">Share Post via...</a></li>
                    <li id="list-item"><a class="dropdown-item" href="#" >Report Abuse</a></li>
                </ul>
                <div class="list-menu-icon-container">

                </div>
            </div>
        </div>
    </div>
</div>
`
    let tagsArray2 = posts.postTags.join(' ')
    let tagsArray = tagsArray2.split(" ");
    console.log(tagsArray)
    let tagstemplate=``;
    tagsArray.forEach(cv => {
        console.log(cv)
        tagstemplate+=`<a href="${cv}" class="card-link">#${cv}</a>`
    });
    template = `
  <div class="card ">
    <img src="${posts.postImage}" class="img-top " alt="POSTIMAGE" >
    <div class="link-dev d-flex flex-row px-5" id="post_author_holder">        
        <div class="flex position-relative image-title">
            <a href="https://dev.to/devteam">
                <img class="image-dev" src="https://picsum.photos/40/40" class="radius-default align-middle" width="40" height="40" alt="The DEV Team p>" alt="">
            </a>
        </div>
        <div class="profile-name">
            <a href="https://dev.to/ben" class="name-profile fw-bold ms-3">${posts.postAuthor}
            </a>
        </div>
    </div>
    <div class="card-title text-styles">
        <h1>${posts.postTitle}</h1>
        ${tagstemplate}
    </div>
    <div class="card-text">
        <p>${posts.postBody}</p>
        <a href="/editPost.html?postId=${postId}"><button type="button" class="btn btn-outline-primary">Edit Post</button></a>
    </div>
    
</div>
`;

     postsDetailMain.innerHTML = template;
     postsLeftAside.innerHTML = templateleft;
     return; }
let AuthorDetailMain = document.querySelector('#user-holder');
    const insertUser = (user) => {
         template = `
        <div class="card my-3  rounded-3 "  id="right-aside-top-card">
         <div class="card-header-color rounded-top just" id="right-aside-card">
         -
         </div>
         <h5 class="card-header py-4">
        //*  ${user.userNickname}
         </h5>
         <img src="${user.userProfilepic}" alt="" class="position-absolute rounded-circle" id="profile-pic">
             <div class="card-body d-flex flex-column justify-content-center ">
                 <a href="#" class="btn btn-primary my-2 fw-bold fs-5">
                     Follow
                 </a>
                 <p class="card-text">
                 ${user.userDescription}
                 </p>
                 <button type="button" class="btn btn-outline-secondary">
                     Visit Profile
                 </button>
             </div>
         </div>
         <div class="card my-3  " id="right-aside-bottom-card">
         <div class="card-header py-3 fs-5 fw-bold">
             More From
             <a class="text-decoration-none fw-bold fs-5" href="#Strapi">
             //*${user.userNickname}
             </a>
         </div>
         <ul class="list-group list-group-flush fs-5">
             <li class="list-group-item py-3" >
                 <a  class="text-decoration-none fs-6"  id="right-aside-card-list"href="">
                     <div>
                         CSS Logos: GitHub logo
                     </div>
                     <div>
                         #CSS #beginners #webdev
                     </div>
                 </a>
             </li>
             <li class="list-group-item py-3" >
                 <a class="text-decoration-none fs-6"  id="right-aside-card-list" href="">
                     <div>
                         10 Algorithms Every Developer Should Learn
                     </div>
                     <div>
                         #CSS #beginners #webdev
                     </div>
                 </a>
             </li>
             <li class="list-group-item py-3" >
                 <a class="text-decoration-none fs-6 " id="right-aside-card-list" href="">
                     <div>
                         Pathfinding with Javascript: The A* Algorithm
                     </div>
                     <div>
                         #CSS #beginners #webdev
                     </div>
                 </a>
             </li>
         </ul>
     </div>`;
         AuthorDetailMain.innerHTML = template;
         return; }


// fetch(posturl)
//     .then((res) => {
//         return res.json()
//     })
//     .then((res) => {
//         console.log(res)
//         insertPost(res,);
//     })
//     .catch((error) => {
//         console.log(error)
//     })
/*
 1. crear funcion que reciba el postId
 2. construir el url con el postId
 3. invocar el metodo fetch para llamar el servidor
 4. convertir la respuesta del fetch a json
 5. leer el objeto de tipo json con la información del post
 6. inyectar el detalle del post obtenido por el Id en el html
  */

 const getPostById = (postId) =>{
     let url = 'https://devto-photoapp-default-rtdb.firebaseio.com/posts/' + postId + '/.json'
     fetch( url ,{
         method: 'GET'
    })
    .then(function(plainText){
        let jsonResponsePromise = plainText.json()
        return jsonResponsePromise
    })
    .then((postDetail) =>{
        insertPost(postDetail)
    })
}

getPostById(postId)

fetch(userurl)
.then((res) => {
    return res.json()
    })
    .then((res) => {

        // insertUser(res);
    })
    .catch((error) => {
        console.log(error)
    })

//     let searchClick = document.querySelector('.input-search');
// searchClick.addEventListener('search', () => { window.location.href = `/search.html?searchId=${searchText}` });

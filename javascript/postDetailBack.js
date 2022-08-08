//https://devto-photoapp-default-rtdb.firebaseio.com/posts/-N8RJPxsdXMuHVLLs-30/.json
//https://devto-photoapp-default-rtdb.firebaseio.com/posts/.json
/*
 1. crear funcion que reciba el postId
 2. construir el url con el postId
 3. invocar el metodo fetch para llamar el servidor
 4. convertir la respuesta del fetch a json
 5. leer el objeto de tipo json con la información del post
 6. inyectar el detalle del post obtenido por el Id en el html
  */

// const getPosts = () =>{
//     let url = 'https://devto-photoapp-default-rtdb.firebaseio.com/.json'
//     fetch(url, {
//         method: 'GET'
//     })
//     .then(function(plainText){
//         let jsonResponsePromise = plainText.json()
//         return jsonResponsePromise
//     })
//     .then(json =>{
//     let posts = json.posts
//     const arrayOfPost = Object.entries(posts).map((post)=>({[post[0]]:post[1]}))
//     console.log(arrayOfPost[0])
//     })
//     .catch(error => console.log(error))
// }
// getPosts()


//         /*
//         1.Llamar laconst getPostById = (postId) =>{
//     let url = 'https://devto-photoapp-default-rtdb.firebaseio.com/posts/' + postId + '/.json'
//     fetch( url ,{
//     method: 'GET'
//     })
//     .then(function(plainText){
//         let jsonResponsePromise = plainText.json()
//         return jsonResponsePromise
//     })
//     .then((postDetail) =>{
//         console.log(postDetail) función generatePostHtml y guardar en la variable template
// //         2.Buscar el elemento html en donde se va a inyectar el template
// //         !Evaluar que contentWrapper no sea null
// //         3.Inyectar el contenido de la variable template en el contenido innerHTML
// //         */
//        let template = generatePostHtml(postDetail)
//        let contentWrapper = document.querySelector ('#post-detail')
//        if(contentWrapper!= null) {
//         contentWrapper.innerHTML = template
//        }
//     })
// }

// /*
// 1.recibe el detalle del post como objeto
// X.retornar un string con formato para poder usarse en html
// */
// // const generatePostHtml = (postDetail) =>{
// //     let postDetailTemplate = `
// //     <div class="card">
// //     <img src="..." class="card-img-top" alt="...">
// //     <div class="card-body">
// //     <h5 class="card-title">${postDetail.postTitle}</h5>
// //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// //     <a href="#" class="btn btn-primary">Go somewhere</a>
// //     </div>
// //     </div>
// //     `
// //     return postDetailTemplate
// // }

// /*
// 1. Obtener el postId
// 1.1 Puedes leer el queryParam llamado post_id
// 1.2 Guardar el queryParam en la variable llamada postId
// X. Mandar el postId como argumento para la función getPostById
// */
// // getPostById('-N8RJPxsdXMuHVLLs-30')

// // const urlParams = new URLSearchParams(window.location.search);
// // const postId = urlParams.get('postId');



// let posturl ='https://devto-photoapp-default-rtdb.firebaseio.com/posts/-N8RJPxsdXMuHVLLs-30.json';
// let userurl ='https://devto-photoapp-default-rtdb.firebaseio.com/users/-N8RJPww_niZjLYxXLB2.json';




// let postsDetailMain = document.querySelector('#post-holder');
//     const insertPost = (posts) => {
//      template = '';

//      postsDetailMain.innerHTML = template;
//      return; }
// let AuthorDetailMain = document.querySelector('#user-holder');
//     const insertUser = (user) => {
//         console.log()
//          template = `

//          <div class="card my-3  rounded-3 "  id="right-aside-top-card">
//          <div class="card-header-color rounded-top just" id="right-aside-card">
//          -
//          </div>
//          <h5 class="card-header py-4">
//          ${user.userNickname}
//          </h5>
//          <img src="${user.userProfilepic}" alt="" class="position-absolute rounded-circle" id="profile-pic">
//              <div class="card-body d-flex flex-column justify-content-center ">
//                  <a href="#" class="btn btn-primary my-2 fw-bold fs-5">
//                      Follow
//                  </a>
//                  <p class="card-text">
//                  ${user.userDescription}
//                  </p>
//                  <button type="button" class="btn btn-outline-secondary">
//                      Visit Profile
//                  </button>
//              </div>
//          </div>`;
//          AuthorDetailMain.innerHTML = template;
//          return; }


// fetch(posturl)
//     .then((res) => {
//         return res.json()
//     })
//     .then((res) => {
//          console.log(res.postAuthor)
//         insertPost(res);
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// fetch(userurl)
//     .then((res) => {
//         return res.json()
//     })
//     .then((res) => {
//          console.log(res.userEmail)
//         insertUser(res);
//     })
//     .catch((error) => {
//         console.log(error)
//     })

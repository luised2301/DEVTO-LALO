/*Buscando el id desde la barra del bom (se visualiza en barra de busqueda*/
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('postId');
/*Construir una direccion para hacer fetch a partir de la informacion recibida */
/* https://devto-photoapp-default-rtdb.firebaseio.com/posts/-N8RJQq85IQWKOOw6R1j.json formato al que se le hara fetch*/
// https://devto-photoapp-default-rtdb.firebaseio.com/posts/${myParam}.json
// let url = `https://devto-photoapp-default-rtdb.firebaseio.com/posts/-N8RJQq85IQWKOOw6R1j.json`
let url = `https://devto-photoapp-default-rtdb.firebaseio.com/posts/${myParam}.json`
//! HTML EDIT POST
const insertPostToEdit = (post) => {
let mainHolder = document.querySelector("#main_holder")
console.log(post)
mainHolder.innerHTML =`
 <div class="container">
            <div class="row">
              <div class="card col-12 col-md-9" id="createpost_main">
                <div class="input-group mb-3 pt-5">
                    <button class="btn btn-outline-secondary" type="button" id="save_img_url">Pega aqui tu url de cover
                    </button>
                    <input type="text" id="url_post_img" class="form-control" value ="${post.postImage}" placeholder="Paste here the url of your post cover" aria-label="Example text with button addon" aria-describedby="button-addon1">
                  </div>
                <div class="my-1 ">
                    <label for="exampleFormControlTextarea1" class="form-label" ></label>
                    <textarea class="form-control" id="input_post_title" rows="3" value = "" placeholder="New post title here...">${post.postTitle}</textarea>
                  </div>
                <div class="my-2">
                    <input name="tags" id="tag_value_holder" placeholder="write some tags..." value="${post.postTags}">
                </div>
                <div id="editor">${post.postBody}
                </div>
                  <div class="outside-buttons py-3">
                    <button class=" btn btn-primary outside-button" id="save_btn">Save Edit</button>
                    <button class="btn btn-light outside-button">Save Draft</button>
                    <button class="btn btn-light outside-button"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots-circle-horizontal" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <circle cx="12" cy="12" r="9"></circle>
                        <line x1="8" y1="12" x2="8" y2="12.01"></line>
                        <line x1="12" y1="12" x2="12" y2="12.01"></line>
                        <line x1="16" y1="12" x2="16" y2="12.01"></line>
                     </svg></button>
                     <button class="btn btn-danger outside-button" id="delete_btn">Delete</button>
                </div>
              </div>
              <div class="col-3 d-none d-md-block" id="createpost_help">
                <div class="pt-5">
                    <h4>Writing a Great Post Title</h4>
                    <ul>
                        <li>Think of your post title as a super short (but compelling!) description — like an overview of the actual post in one short sentence.</li>
                        <li>Use keywords where appropriate to help ensure people can find your post by search.</li>
                    </ul>
                </div>
                <div class="pt-5">
                    <h4>Editor Basics</h4>
                    <ul>
                        <li>Use Markdown to write and format posts.
                            Commonly used syntax</li>
                        <li>Embed rich content such as Tweets, YouTube videos, etc. Use the complete URL: {% embed https://... %}. See a list of supported embeds.</li>
                        <li>In addition to images for the post's content, you can also drag and drop a cover image.</li>
                    </ul>
                </div>
              </div>
            </div>
            </div>
          </div> `
}
const editPost = (post) => {
  let hRequest = new XMLHttpRequest()
  hRequest.open("PATCH", url, false);
  hRequest.send(JSON.stringify(post));
  return post.postTitle + 'Edited'
}
fetch(url)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                console.log(res)
                /*Aqui va la funcion del template*/
                insertPostToEdit(res)
                var quill = new Quill('#editor', {
                  theme: 'snow',
                  placeholder:'Write your post content here....\n'
                });
                var input = document.querySelector('input[name=tags]'),
                tagify = new Tagify( input );
                const insertTagValue = (res)=>{
                  let tagValue = document.querySelector("#tag_value_holder")
                  tagValue.value = res.postTags
                }
                let urlPostImg = document.querySelector('#url_post_img')
            let saveImgUrl = document.querySelector('#save_img_url')
            let postTitle = document.querySelector('#input_post_title')
            let postBody = document.querySelector('#editor')
            let publishBtn = document.querySelector("#save_btn")
            let deleteBtn = document.querySelector("#delete_btn")
            urlPostImg.addEventListener('input', () => {
              console.log(urlPostImg.value)
              res.postImage = urlPostImg.value
            })
            deleteBtn.addEventListener('click', () => {
              var result = confirm("Want to delete?");
              if (result) {
              console.log("delete")
              let hRequest = new XMLHttpRequest()

    hRequest.open("Delete", url, false);
    hRequest.send(JSON.stringify(res));
    window.location.href=`/index.html`;
}
              })
            publishBtn.addEventListener('click', () => {
            res.postImage = urlPostImg.value
            res.postTitle = postTitle.value
            res.postBody = quill.root.innerHTML;
            res.postTimeToRead = Math.ceil(quill.getText().length/1500);
            const d = new Date();
            d.getTime();
            res.postChangeDate = d;
            res.postTags=[];
            console.log(res)
            JSON.parse((input.value)).forEach(cv => {
              console.log(cv.value)
              res.postTags.push(cv.value)
            });

            let hRequest = new XMLHttpRequest()

    hRequest.open("PATCH", url, false);
    hRequest.send(JSON.stringify(res));
    window.location.href=`/index.html`;

            })
            
            })
            .catch((error) => {
                console.log(error);
            })
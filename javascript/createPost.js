var quill = new Quill('#editor', {
    theme: 'snow',
    placeholder:'Write your post content here....\n'
  });





  const createPost = (post) => {
    let hRequest = new XMLHttpRequest()

    hRequest.open("POST",'https://devto-photoapp-default-rtdb.firebaseio.com/posts.json', false);
    hRequest.send(JSON.stringify(post));

    return 
}

var input = document.querySelector('input[name=tags]'),
tagify = new Tagify( input );

const otherPost = {
    postBody: "",
    postChangeDate: "",
    postCreationDate: "",
    postImage: "",
    postLikesCount: 0,
    postSavedCount: 0,
    postTags: [],
    postTimeToRead: "",
    postTitle: "",
    postUnicornCount: 0,
}

let urlPostImg = document.querySelector('#url_post_img')
let postAuthorinput = document.querySelector('#post_author')
let postTitle = document.querySelector('#input_post_title')
let postBody = document.querySelector('#editor')
let publishBtn = document.querySelector("#save_btn")




urlPostImg.addEventListener('input', () => {
  console.log(urlPostImg.value)
  otherPost.postImage = urlPostImg.value
})

publishBtn.addEventListener('click', () => {

otherPost.postAuthor = postAuthorinput.value
  otherPost.postImage = urlPostImg.value
  otherPost.postTitle = postTitle.value
  otherPost.postBody = quill.root.innerHTML;
  otherPost.postTimeToRead = Math.ceil(quill.getText().length/1500);
  const d = new Date();
  d.getTime();
  otherPost.postCreationDate =d;  
  otherPost.postTags=[];
  console.log(input.value)
  JSON.parse((input.value)).forEach(cv => {
  otherPost.postTags.push(cv.value)
  });

  
  createPost(otherPost)

  window.location.href="/index.html"
  

})




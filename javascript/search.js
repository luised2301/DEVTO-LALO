let url ='https://devto-photoapp-default-rtdb.firebaseio.com/posts.json';

let params = new URLSearchParams(window.location.search)

const insertFilteredPost = (posts) => {
    let search = params.get('searchId')


    let searchText = '';
    let findInput = document.querySelector('#find-input');
    findInput.addEventListener('input', () => { searchText = findInput.value });
    let searchClick = document.querySelector('.input-search');
    searchClick.addEventListener('search', () => { window.location.href = `/search.html?searchId=${searchText}` });
    let searchText2 = '';
    let findInput2 = document.querySelector('#find-input2');
    findInput2.addEventListener('input', () => { searchText2 = findInput2.value });
    let searchClick2 = document.querySelector('.input-search2');
    searchClick2.addEventListener('search', () => { window.location.href = `/search.html?searchId=${searchText2}` });




let searchBtnHolder = document.querySelector('#btn_left_aside');
let searchTitleHolder = document.querySelector('#search_title_holder');
let strToFilter= search
searchBtnHolder.innerHTML =`<a href="/search.html?searchId=${search}" class="btn active" i aria-current="page">Posts</a>
<a href="#" class="btn">Podcasts</a>
<a href="#" class="btn">People</a>
<a href="/search.html?searchTag=${search}" class="btn">Tags</a>
<a href="#" class="btn">Comments</a>
<a href="#" class="btn">My posts only</a>`
searchTitleHolder.innerHTML =`<b>Search results for ${strToFilter}</b>`;

let strLower = strToFilter.toLowerCase()

let postsMainCards = document.querySelector('#card_holder');
    let template = '';

    for (post in posts){
        let tagstring = posts[post].postTags.toString();


        if(posts[post].postTitle.toLowerCase().match(strLower) ||
        posts[post].postAuthor.toLowerCase().match(strLower)
         || tagstring.toLowerCase().match(strLower)) {

            
             let tagstemplate=``;
             posts[post].postTags.forEach(cv => {
                
                 tagstemplate+=`<a href="search.html?searchTag=${cv}" class="card-link" style="text-decoration: none;">
                 <button type="button" class="btn btn-sm" id=transparent_btn>#${cv}</button>
                 </a>`
                
             });

           
                

        
        template += `<div class="card p-3 m-2" id="card-resume">
        <div class="d-flex" style="height: 3rem;">
            <div>
                <img src="${posts[post].postImage}" class="rounded-circle me-1" alt="Userpic" style="height:40px; width:40px">
            </div>
            <div class="ps-2">
                <span>${posts[post].postAuthor}</span><br>
                <span class="story-postdate-p1"><small>${posts[post].postCreationDate.substring(0, 10)} at </small></span>
                <span class="story-postdate-p1"><small>${posts[post].postCreationDate.split("T")[1].substring(0, 5)}</small></span>
            </div>
    
        </div>
        <div class="card-body ps-5">
          <h5 class="card-title">${posts[post].postTitle}</h5>
           ${tagstemplate}
        </div>
        <div class="d-flex justify-content-between ps-5" style="height: 3rem;">
            <div class="text-center align-middle pt-2">
                <button type="button" class="btn btn-light" id="count-_btn">${posts[post].postLikesCount+posts[post].postSavedCount+posts[post].postUnicornCount} reactions</button>
                <button type="button" class="btn btn-light"id="count-_btn">0 comments</button>
                
            </div>
            <div class=" text-center align-middle pt-2">
                <span>1 min read</span>
                <button type="button" class="btn btn-light">Save</button>
            </div>
    
        </div>
      </div>
    `
    }};

    postsMainCards.innerHTML = template;
    return;
}

const insertFilteredTag = (posts) => {
    let search = params.get('searchTag')

let searchBtnHolder = document.querySelector('#btn_left_aside');
let searchTitleHolder = document.querySelector('#search_title_holder');
let strToFilter= search
searchBtnHolder.innerHTML =`<a href="/search.html?searchId=${search}" class="btn" i aria-current="page">Posts</a>
<a href="#" class="btn">Podcasts</a>
<a href="#" class="btn">People</a>
<a href="/search.html?searchTag=${search}" class="btn active">Tags</a>
<a href="#" class="btn">Comments</a>
<a href="#" class="btn">My posts only</a>`
searchTitleHolder.innerHTML =`<b>Search results for ${search}</b>`;

let strLower = strToFilter.toLowerCase()
let postsMainCards = document.querySelector('#card_holder');
    let template = '';
    for (post in posts){
        let tagstring = posts[post].postTags.toString();
        if(tagstring.toLowerCase().match(strLower)) {
            
            
            let tagstemplate=``;
            posts[post].postTags.forEach(cv => {
                
                tagstemplate+=`<a href="search.html?searchTag=${cv}" class="card-link" style="text-decoration: none;">
                <button type="button" class="btn btn-sm" id=transparent_btn>#${cv}</button>
                </a>`
                
            });
           
                

        
        template += `<div class="card p-3 m-2" id="card-resume">
        <div class="d-flex" style="height: 3rem;">
            <div>
                <img src="${posts[post].postImage}" class="rounded-circle me-1" alt="Userpic" style="height:40px; width:40px">
            </div>
            <div class="ps-2">
                <span>${posts[post].postAuthor}</span><br>
                <span class="story-postdate-p1"><small>${posts[post].postCreationDate.substring(0, 10)} at </small></span>
                <span class="story-postdate-p1"><small>${posts[post].postCreationDate.split("T")[1].substring(0, 5)}</small></span>
            </div>
    
        </div>
        <div class="card-body ps-5">
          <h5 class="card-title">${posts[post].postTitle}</h5>
          ${tagstemplate}
        </div>
        <div class="d-flex justify-content-between ps-5" style="height: 3rem;">
            <div class="text-center align-middle pt-2">
                <button type="button" class="btn btn-light">${posts[post].postLikesCount+posts[post].postSavedCount+posts[post].postUnicornCount} reaction</button>
                <button type="button" class="btn btn-light">0 comments</button>
                
            </div>
            <div class=" text-center align-middle pt-2">
                <span>1 min read</span>
                <button type="button" class="btn btn-light">Save</button>
            </div>
    
        </div>
      </div>
    `
    }};

    postsMainCards.innerHTML = template;
    return;
}

const insertFilteredUser = (posts) => {
    let search = params.get('searchUser')

let searchBtnHolder = document.querySelector('#btn_left_aside');
let searchTitleHolder = document.querySelector('#search_title_holder');
let strToFilter= search
searchBtnHolder.innerHTML =`<a href="#" class="btn" i aria-current="page">Posts</a>
<a href="#" class="btn">Podcasts</a>
<a href="#" class="btn active">People</a>
<a href="#" class="btn">Tags</a>
<a href="#" class="btn">Comments</a>
<a href="#" class="btn">My posts only</a>`
searchTitleHolder.innerHTML =`<b>Search results for ${strToFilter}</b>`;

let strLower = strToFilter.toLowerCase()
let postsMainCards = document.querySelector('#card_holder');
    let template = '';
    for (post in posts){
        if(posts[post].postAuthor.toLowerCase().match(strLower)) {
       
            

                

        
        template += `<div class="card p-3 m-2" id="card-resume">
        <div class="d-flex" style="height: 3rem;">
            <div>
                <img src="${posts[post].postImage}" class="rounded-circle me-1" alt="Userpic" style="height:40px; width:40px">
            </div>
            <div class="ps-2">
                <span>${posts[post].postAuthor}</span><br>
                <span class="story-postdate-p1"><small>${posts[post].postCreationDate.substring(0, 10)} at </small></span>
                <span class="story-postdate-p1"><small>${posts[post].postCreationDate.split("T")[1].substring(0, 5)}</small></span>
            </div>
    
        </div>
        <div class="card-body ps-5">
          <h5 class="card-title">${posts[post].postTitle}</h5>

        </div>
        <div class="d-flex justify-content-between ps-5" style="height: 3rem;">
            <div class="text-center align-middle pt-2">
                <button type="button" class="btn btn-light">${posts[post].postLikesCount+posts[post].postSavedCount+posts[post].postUnicornCount} reaction</button>
                <button type="button" class="btn btn-light">0 comments</button>
                
            </div>
            <div class=" text-center align-middle pt-2">
                <span>1 min read</span>
                <button type="button" class="btn btn-light">Save</button>
            </div>
    
        </div>
      </div>
    `
    }};

    postsMainCards.innerHTML = template;
    return;
}

fetch(url)
    .then((res) => {
        return res.json()
    })
    .then((res) => {
        if (params.has("searchTag")) {
            insertFilteredTag(res);
        }
        else if (params.has("searchUser")) {
            insertFilteredUser(res);
        }
        else
            insertFilteredPost(res);

        
    })
    .catch((error) => {
        console.log(error)
    })



      

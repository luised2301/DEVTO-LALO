// Define URLs for fetching the data
let urlPosts = 'https://devto-photoapp-default-rtdb.firebaseio.com/posts.json';
let urlUsers = 'https://devto-photoapp-default-rtdb.firebaseio.com/users.json';

// Load user Profile data
let userProfile = document.querySelector('#dropdown-user');
const insUserProfile = (user) => {
    let templateUser = '';
    templateUser +=`
    <ul class="dropdown-menu" >
        <li><a class="dropdown-item" href="#">${user[0].userName} ${user[0].userLastname}<br>@${user[0].userNickname}</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a class="dropdown-item" href="#">Dashboard</a></li>
        <li><a class="dropdown-item" href="/createPost.html">Create Post</a></li>
        <li><a class="dropdown-item" href="#">Reading List</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a class="dropdown-item" href="#">Sign Out</a></li>
    </ul>
    <style>
        .dropdown-toggle::after {
            content: none;
                                }
    </style>
    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"
        role="button" aria-expanded="false"><img src="https://www.poblanerias.com/wp-content/archivos/2018/05/Axolotl.jpg" alt="" srcset=""
            class="profile"></a>

</div>
`
userProfile.innerHTML = templateUser;
};


// Select where the cards will be inserted
let postsMainCards = document.querySelector('#main_posts_cards');
let postsMainCards2 = document.querySelector('#main_posts_cards2');

// Function for inserting post cards in the html
const insertPost = (posts, arrKeys, userImg) => {
    // Insert first card (to display an img)
    let template = '';
    let tagsArray = posts[0].postTags.join("\n");
    let tagsArray2 = tagsArray.split("\n");
    template += `
    <a href="./postDetail.html?postId=${arrKeys[0]}" class="post_detail_id">
    <div class="ind_card border-card">
        <ul class="list-group list-group-flush ">
        <img src="${posts[0].postImage}" class="card-img-top" "alt="...">
        <li class="list-group-item user-p1" >
            <!--Individual post-->
            <div class="d-flex user-card-p1">
            <div class="flex-shrink-0 user-pic" id="user_info">
            <img src="${userImg[0].userProfilepic}" alt="" srcset="">
                </div>
                <div class="flex-grow-1 ms-3 user-story-text-p1 lh-1">
                    <span class="story-username-p1"><small>${posts[0].postAuthor}</small></span><br>
                    <span class="story-postdate-p1"><small>${posts[0].postCreationDate}</small></span>
                </div>
            </div>
        </li>
        <li class="list-group-item story-text-p1">
            <div class="story-title-p1-1">${posts[0].postTitle}
            </div>
            <div class="fw-light story-reference-p1">`
    tagsArray2.forEach(cv => {
        template +=
            `<a href="/search.html?searchTag=${cv}" class="post-tags">#${cv} </a>`
    });
    template +=
        `</div>
        </li>
        <li class="list-group-item">
            <div class="card-bottom-p1">
                <div class="bottom-left-p1">
                    <img src="/assets/images/heart.png" class="properties-icon-p1" alt=""
                        srcset=""> ${posts[0].postLikesCount} Reactions
                    <img src="/assets/images/coment.png" class="properties-icon-p1" alt=""
                        srcset=""> 0 Comments
                </div>
                <div class="bottom-right-p1">
                    <span class="story-read-time-p1">${posts[0].postTimeToRead} min read</span><button type="button"
                        class="btn-sm">Save</button>
                </div>
            </div>
        </li>
    </ul>
    </div></a></div>
    `
    postsMainCards.innerHTML = template;
    // Remove the first element from all the arrays
    posts.shift();
    userImg.shift();
    arrKeys.shift();
    // Restart the template variable and insert the remaining post cards.
    template = '';
    for (post in posts) {
        tagsArray = posts[post].postTags.join("\n");
        tagsArray2 = tagsArray.split("\n");
        template += `
        <a href="./postDetail.html?postId=${arrKeys[post]}" class="post_detail_id2">
        <div class="ind_card my-2 border-card">
        <ul class="list-group list-group-flush">
        <li class="list-group-item user-p1">
        <!--Individual post-->
        <div class="d-flex user-card-p1">
        <div class="flex-shrink-0 user-pic" id="user_info">
        <img src="${userImg[post].userProfilepic}" alt="" srcset="">
        </div>
        <div class="flex-grow-1 ms-3 user-story-text-p1 lh-1">
        <span class="story-username-p1"><small>${posts[post].postAuthor}</small></span><br>
        <span class="story-postdate-p1"><small>${posts[post].postCreationDate}</small></span>
        </div>
        </div>
        </li>
        <li class="list-group-item story-text-p1">
        <div class="story-title-p1">${posts[post].postTitle}
        </div>
        <div class="fw-light story-reference-p1">
        `
        tagsArray2.forEach(cv => {
            template +=
                `<a href="/search.html?searchTag=${cv}" class="post-tags">#${cv} </a>`
        });
        template +=
            `
        </li>
        <li class="list-group-item">
        <div class="card-bottom-p1">
                <div class="bottom-left-p1">
                    <img src="/assets/images/heart.png" class="properties-icon-p1" alt="" srcset="">
                    ${posts[post].postLikesCount}
                    <img src="/assets/images/coment.png" class="properties-icon-p1" alt="" srcset=""> 0
                </div>
                <div class="bottom-right-p1">
                    <span class="story-read-time-p1">${posts[post].postTimeToRead} min read</span><button type="button"
                        class="btn-sm">Save</button>
                </div>
            </div>
        </li>
    </ul>
</div></a> `
        postsMainCards2.innerHTML = template;

    };


    return;
};

// Define and store the input value on the 'Search' box
let input = document.querySelector('.input-text');
let findInput = document.querySelector('#find-input');
let searchText = '';
findInput.addEventListener('input', () => { searchText = findInput.value });

//When the search is done and the 'Enter' key is pressed, the search page is displayed with the results
let searchClick = document.querySelector('.input-search');
searchClick.addEventListener('search', () => { window.location.href = `/search.html?searchId=${searchText}` });

//When clicking on the 'Create Post' button it will display the createPost page.
let createPostBtn = document.querySelector('.button-create-post');
createPostBtn.addEventListener('click', () => { window.location.href = `/createPost.html` });

// Fetch the info from the db for both the Posts and the Users data, reverse the arrays and call the insertPost function.
fetch(urlPosts)
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        let arr = Object.values(res);
        let arrKeys = Object.keys(res);
        fetch(urlUsers)
            .then((res) => {
                return res.json()

            })
            .then((res) => {
                let arrUser = Object.values(res);
                insUserProfile(arrUser);
                let arrInv = arr.reverse();
                let arrKeysInv = arrKeys.reverse();
                let arrUserInv = arrUser.reverse();
                insertPost(arrInv, arrKeysInv, arrUserInv);
            })
            .catch((error) => {
                console.log(error);
            })
    })
    .catch((error) => {
        console.log(error);
    });




const postsUrl = "https://muel.no/productapi/wp-json/wp/v2/posts?_embed";
const postsContainer = document.querySelector(".blogcontainer");
const loader = document.querySelector(".loader");

async function getPost(){
    try {
        const response = await fetch(postsUrl);
        const results = await response.json();
        //console.log(results);

        for(let i= 0; i < results.length; i++){
            //console.log(results[i].title);
            loader.classList.remove("loader");
            postsContainer.innerHTML += `<div class="card">
                                         <a href="blogpost.html?id=${results[i].id}">
                                         <h3>${results[i].title.rendered}</h3>
                                         <div>${results[i].excerpt.rendered}</div>
                                         <time>Posted: ${results[i].date} </time> 
                                         </a>
                                         </div>`
        }
    } catch {
        console.log (error);
    }
}

getPost();
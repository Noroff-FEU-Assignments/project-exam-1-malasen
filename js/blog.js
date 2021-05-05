const postsUrl = "https://muel.no/productapi/wp-json/wp/v2/posts?_embed";
const postsContainer = document.querySelector(".blogcontainer");
const loader = document.querySelector(".loader");

async function getPost(){
    try {
        const response = await fetch(postsUrl);
        const results = await response.json();
        console.log(results);

        for(let i= 0; i < results.length; i++){
            console.log(results[i].title);
            loader.classList.remove("loader");
            postsContainer.innerHTML += `<div class="card" style="background-image:url('${results[i]._embedded["wp:featuredmedia"][0].source_url}')">
                                         <h3>${results[i].title.rendered}</h3>
                                         <div>${results[i].excerpt.rendered}</div>
                                         <a href="blogpost.html?id=${results[i].id}"> Continue to read... </a>s
                                         <time>Posted: ${results[i].date} </time> 
                                         </div>`
        }
    } catch {
        console.log (error);
    }
}

getPost();
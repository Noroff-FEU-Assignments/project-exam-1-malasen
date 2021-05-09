const postsUrl = "https://muel.no/productapi/wp-json/wp/v2/posts?_embed";
const postsContainer = document.querySelector(".blogcontainer");

const loader = document.querySelector(".loader");

async function getPost(){
    try {
        const response = await fetch(postsUrl);
        const results = await response.json();
        console.log(results);

        for(let i= 0; i < results.length; i++){
            //console.log(results[i].title);
            loader.classList.remove("loader");
            postsContainer.innerHTML += `<div class="card" >
                                         <a href="blogpost.html?id=${results[i].id}">
                                         <div class="featuredAuthor">Author: ${results[i]._embedded.author[0].name}</div>
                                         <div class="featuredDate"><time>Posted: ${results[i].date} </time></div>
                                         <div class="featuredTags"></div>
                                         <div class="featuredTitle"><h3>${results[i].title.rendered}</h3></div>
                                         <div class="featuredContent">${results[i].excerpt.rendered}</div>
                                         <button class="call-to">Continue Reading</button>
                                         <div class="featuredImg" style="background-image:url('${results[i]._embedded["wp:featuredmedia"][0].source_url}')">
                                         
                                         </div>
                                         </a></div>
                                         `
            }
            
    } catch {
        console.log (error);
    }
}

getPost();
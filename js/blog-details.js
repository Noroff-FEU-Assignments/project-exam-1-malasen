const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const id = params.get("id");
//console.log(id);

const postsUrl = "https://muel.no/productapi/wp-json/wp/v2/posts/" +id + "?_embed";
const postsContainer = document.querySelector(".container");
const loader = document.querySelector(".loader");

async function getPost(){
    try {
        const response = await fetch(postsUrl);
        const results = await response.json();
        console.log(results);
        postsContainer.innerHTML +=results.title.rendered + results.content.rendered;
        
    } catch {
        console.log (error);
    }
}    

getPost();
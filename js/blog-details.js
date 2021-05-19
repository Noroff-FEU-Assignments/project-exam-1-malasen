const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const id = params.get("id");

const postsUrl = "https://muel.no/productapi/wp-json/wp/v2/posts/" +id + "?_embed";
const postsContainer = document.querySelector(".postcontainer");
const loader = document.querySelector(".loader");

async function getPost(){
    try {
        const response = await fetch(postsUrl);
        const results = await response.json();

        loader.style.display="none";
        postsContainer.innerHTML +="<h2>"+ results.title.rendered + "</h2>"+ results.content.rendered;
        
    } catch {
        console.log (error);
    }
}    

getPost();
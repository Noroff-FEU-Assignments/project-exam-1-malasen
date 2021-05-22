const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const id = params.get("id");
const titleUpdate = document.querySelector("title");
const modalImg = document.querySelector(".modal img")



const postsUrl = "https://muel.no/productapi/wp-json/wp/v2/posts/" +id + "?_embed";
const postsContainer = document.querySelector(".postcontainer");
const loader = document.querySelector(".loader");

async function getPost(){
    try {
        const response = await fetch(postsUrl);
        const results = await response.json();

        loader.style.display="none";
        postsContainer.innerHTML +="<h2>"+ results.title.rendered + "</h2>"+ results.content.rendered;
        titleUpdate.innerHTML = "Blog | " + results.title.rendered;

        const img = document.querySelector(".postcontainer img");
        modalImg.innerHTML = img;

    } catch {
        console.log (error);
    }
}    

getPost();

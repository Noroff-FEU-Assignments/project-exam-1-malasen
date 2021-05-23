const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const id = params.get("id");
const titleUpdate = document.querySelector("title");

const postsUrl = "https://muel.no/productapi/wp-json/wp/v2/posts/" +id + "?_embed";
const postsContainer = document.querySelector(".postcontainer");
const loader = document.querySelector(".loader");

const modalImg = document.querySelector(".modal-image");
const modal = document.querySelector(".modal");




async function getPost(){
    try {
        const response = await fetch(postsUrl);
        const results = await response.json();

        loader.style.display="none";
        postsContainer.innerHTML +="<h2>"+ results.title.rendered + "</h2>"+ results.content.rendered;
        titleUpdate.innerHTML = "Blog | " + results.title.rendered;

        const img = document.querySelector(".postcontainer img");
        const span = document.querySelector(".close");

        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = img.src;
            console.log(span);
        }
        span.onclick = function() {
            modal.style.display = "none";
        }
        modal.onclick = function() {
            modal.style.display = "none";
        }
    } catch {
        console.log (error);
    }
}    

getPost();

/*// GET THE REFERENCES
const container = document.querySelector(".container");
const links = document.querySelectorAll("nav a");
let url = "./partials/home.html";
// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
const loadContent...
    /*
    IMPORTANT NOTES:
    loadContent RUNS EVERY TIME A LINK IS CLICKED.
    loadContent REQUIRES THE INPUT. THIS INPUT IS
    THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK.
    EVERY TIME A LINK IS CLICKED, urlFeed WILL GET 
    THE UPDATED PATH TO THE REQUESTED CONTENT.
    */
// RUN THE fetch(urlFeed).then().then().catch()
// CLOSE YOUR FUNCTION loadContent HERE
// CALL loadContent WITH THE CURRENT VALUE OF url 
// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL:

// PREVENT DEFAULT BEHAVIOUR OF A LINK TAG
// GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
// CALL THE FUNCTION loadContent PROVIDING THE href
// VALUE OF THE CLICKED LINK AS THE VALUE FOR THE PARAMETER
// OF loadContent FUNCTION.
// CLOSE YOUR FUNCTION selectContent HERE
// REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER!*/

//HTML PARTIALS
//get the reference to the container
const container = document.querySelector(".container");
const errorContainer = document.querySelector(".error");
let url = "./partials/home.html";
const links = document.querySelectorAll("nav a");

function handleLinkClick(ev) {
    ev.preventDefault();
    // find out which link is clicked
    let currentLink = ev.target;
    url = currentLink.href;
    handleAjax(url);
}

/*links[0].addEventListener("click", handleLinkClick);
links[1].addEventListener("click", handleLinkClick);
links[2].addEventListener("click", handleLinkClick);*/
for (let link of links) {
    link.addEventListener("click", handleLinkClick);
}

function handleAjax(urlParam) {
    fetch(urlParam)
        .then(function (response) {
            if (response.statusText === "OK") {
                return response.text();
            }
            throw new Error(response.statusText);
        })
        .then(function (data) {
            // use your partials

            container.innerHTML = data;
        })
        .catch(function (err) {
            errorContainer.textContent = `${err.name}: ${err.message}`;
        });
}

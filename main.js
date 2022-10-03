let elList = document.querySelector(".list");
let fragment = new DocumentFragment();

let elTemplate = document.querySelector(".template").content;

for (const film of kinolar) {

    let cloneTemplate = elTemplate.cloneNode(true);

    cloneTemplate.querySelector(".film-item");
    cloneTemplate.querySelector(".title").textContent = film.title;
    cloneTemplate.querySelector(".year").textContent = film.year;
    cloneTemplate.querySelector(".cats").textContent = film.cast;
    cloneTemplate.querySelector(".genre").textContent = film.genres;


    fragment.appendChild(cloneTemplate);
}

elList.appendChild(fragment);
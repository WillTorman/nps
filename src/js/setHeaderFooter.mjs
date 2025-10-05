import { parkInfoTemplate, footerTemplate } from "./templates.mjs";

function setHeaderFooter(data) {
    const disclaimer = document.querySelector(".disclaimer > a");

    disclaimer.href = data.url;
    disclaimer.innerHTML = data.fullName;
    document.querySelector("head > title").textContent = data.fullName;
    document.querySelector(".hero-banner > img").src = data.images[0].url;
    document.querySelector(".hero-banner__content").innerHTML =
        parkInfoTemplate(data);
}

function setFooter(data) {
    const footerEl = document.querySelector("#park-footer");
    footerEl.insertAdjacentHTML("afterbegin", footerTemplate(data));
}


// This function is cool to me. I have not thought about
// structuring my code/components like this. Rather than
// build 2 seperate files/components build the functions
// together and then export 1 solo function that combines
// the 2 functions. Got this when comparing the instructors
// source code with mine.
export default function setHeaderFooter(parkData) {
    setHeaderInfo(parkData);
    setFooter(parkData);
}
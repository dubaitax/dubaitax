// =========================
// DUBAI  TAX MAIN JS
// =========================



// Navbar Button Click

const startBtn =
    document.querySelector(".start-btn");

if(startBtn){

    startBtn.addEventListener("click", function(){

        window.location.href =
            "vat.html";
    });
}



// Primary Button

const primaryBtn =
    document.querySelector(".primary-btn");

if(primaryBtn){

    primaryBtn.addEventListener("click", function(){

        window.location.href =
            "vat.html";
    });
}



// Secondary Button

const secondaryBtn =
    document.querySelector(".secondary-btn");

if(secondaryBtn){

    secondaryBtn.addEventListener("click", function(){

        window.location.href =
            "ai-assistant.html";
    });
}



// Service Cards Animation

const cards =
    document.querySelectorAll(".service-card");

cards.forEach(function(card){

    card.addEventListener("mouseenter", function(){

        card.style.transform =
            "translateY(-10px)";

        card.style.transition =
            "0.3s";
    });



    card.addEventListener("mouseleave", function(){

        card.style.transform =
            "translateY(0px)";
    });
});
// ==========================
// BUSINESS COUNTER
// ==========================

let businessCount = localStorage.getItem("businessCount");

if (!businessCount) {
    businessCount = 120;
}

businessCount++;

localStorage.setItem("businessCount", businessCount);

document.getElementById("businessCount").innerText = businessCount;


// ==========================
// TAX COUNTER
// ==========================

let taxCount = localStorage.getItem("taxCount");

if (!taxCount) {
    taxCount = 850;
}

document.getElementById("taxCount").innerText = taxCount;


// ==========================
// TOOL CLICK INCREASE
// ==========================

function increaseTax() {

    taxCount++;

    localStorage.setItem("taxCount", taxCount);

}

document.getElementById("vatTool").addEventListener("click", increaseTax);

document.getElementById("corporateTool").addEventListener("click", increaseTax);

document.getElementById("aiTool").addEventListener("click", increaseTax);
// ==========================
// UAE TAX NEWS BLOGS
// ==========================

const blogs = [

{
title:"UAE VAT Compliance Updates 2026",

summary:"Businesses in the UAE may need updated VAT reporting procedures under the latest compliance framework introduced for 2026.",

source:"https://gulfnews.com"
},

{
title:"Dubai Corporate Tax Filing Changes",

summary:"Companies operating in Dubai are preparing for revised corporate tax filing requirements and reporting standards.",

source:"https://www.khaleejtimes.com"
},

{
title:"Free Zone Tax Benefits Explained",

summary:"UAE free zone businesses continue receiving tax advantages, although new compliance rules are expected in upcoming updates.",

source:"https://www.thenationalnews.com"
}

];

const blogContainer = document.getElementById("blogContainer");

blogs.forEach(blog => {

blogContainer.innerHTML += `

<div class="blog-card">

<h3>${blog.title}</h3>

<p>${blog.summary}</p>

<a href="${blog.source}" target="_blank">
Read Source
</a>

</div>

`;

});

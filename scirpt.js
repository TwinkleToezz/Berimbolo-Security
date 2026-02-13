var card1 = document.getElementsByClassName("card")[0];
var card2 = document.getElementsByClassName("card")[1];
var card3 = document.getElementsByClassName("card")[2];
var card4 = document.getElementsByClassName("card")[3];

card1.onclick = function() {
    card1.style.transform = "scale(1.15)";
};

card2.onclick = function() {
    card2.style.transform = "scale(1.15)";
};

card3.onclick = function() {
    card3.style.transform = "scale(1.15)";
};

card4.onclick = function() {
    card4.style.transform = "scale(1.15)";
};


document.querySelectorAll(".assessment-box").forEach(box => {
    box.addEventListener("click", () => {
        box.classList.toggle("active");
    });
});





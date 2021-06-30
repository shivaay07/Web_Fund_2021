var likes = [9,12,9];
var nineLikes = document.querySelector(".para9");
var twelveLikes = document.querySelector(".para12");
var thirteenLikes = document.querySelector(".para13");

function firstLike() {
    likes[0]++;
    nineLikes.innerHTML = likes[0] + "like(s)";
}

function secondLike() {
    likes[1]++;
    twelveLikes.innerHTML = likes[1] + " like(s)";
}

function thirdLike() {
    likes[2]++;
    thirteenLikes.innerHTML = likes[2] + " like(s)"

}
let tabLinks =document.querySelectorAll(".tabs-title");
// console.log(tabLinks);
let  tabContent = document.querySelectorAll(".tab-content");
// console.log(tabContent);

tabLinks.forEach(function (el) {
        el.addEventListener('click',openTabs);
});
console.log(tabLinks);
function openTabs(el) {

    let liTarget = el.currentTarget;
    let  tab = liTarget.dataset.tab;


    tabContent.forEach(function (el) {
        el.classList.remove('active');

    });

    tabLinks.forEach(function (el) {
        el.classList.remove("active");
    });

    document.querySelector("#"+ tab).classList.add("active");


    liTarget.classList.add("active");
}



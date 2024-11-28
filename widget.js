let btn = document.querySelector("button");
btn.addEventListener("click",()=>{
    let promp = prompt("Are You Ready to Attempt The Wedding Ceremony");
    if(promp=="yes"){
        alert("bus will pick you");
    }
    else{
        alert("No worry, We can understant");
    }
});
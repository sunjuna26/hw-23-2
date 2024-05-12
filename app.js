

let parent = document.querySelector("#parent");

let child = document.querySelector(".child");



window.addEventListener('scroll' , function(){
    let height = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;
    let fromTop = document.documentElement.scrollTop;
    let subHeight = height - clientHeight;
    
    let result = Math.round(fromTop * 100 / subHeight);
    parent.style.background = `conic-gradient(#576574 ${result}%, #D6A2E8 ${result}%)`;

    child.innerHTML = result
});



console.log(result);
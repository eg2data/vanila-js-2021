const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date(); // 이게 뭐지? 왠 대문자로 시작하는 이게 뭐지???
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padEnd(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
} 

getClock(); // 이걸 해줘야 새로고침하자마자 시간 표시 시작
setInterval(getClock, 1000); // 새로고침 후 1초 후의 값이 최초값

// padStart, padEnd




// const title = document.querySelector("h3");
// title.innerText = "Hello!";
// title.style.color = "white";


// const body = document.querySelector("body");

// function handler() {
//     const width = window.innerWidth;

//     if (width > 800) {
//         body.classList.add("sizeOne");
//         console.log("1");
//     } else if (width > 500) {
//         body.classList.add("sizeTwo");
//         console.log("2");
//     } else {
//         body.classList.add("sizeThree");
//         console.log(width);
//     }
// }

// window.addEventListener("resize", handler);


// // 새로고침을 해야만 적용되네 width에 새로운 값. 음..
// // click event와도 연관이 있나
// // resize event와 좀 엮일 수 있나
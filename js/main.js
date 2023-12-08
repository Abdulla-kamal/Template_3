let countDate = new Date("dec 30 2024 23:59:59").getTime();

let counter = setInterval(_=> {
    let dateNow = new Date().getTime();
    let diffDate = countDate - dateNow;
    let days = Math.floor(diffDate /(1000 * 60 * 60 * 24));
    let hours = Math.floor((diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) ;
    let minutes = Math.floor((diffDate % (1000 * 60 * 60 )) / (1000 * 60 )) ;
    let seconds = Math.floor((diffDate % (1000 * 60 )) / 1000 ) ;
    document.querySelector(".events .container .info .time .unit .days").innerHTML = days;
    document.querySelector(".events .container .info .time .unit .hours").innerHTML = hours;
    document.querySelector(".events .container .info .time .unit .minutes").innerHTML = minutes;
    document.querySelector(".events .container .info .time .unit .seconds").innerHTML = seconds;
    if(diffDate < 0) {
        clearInterval(counter);
    }

},1000)
let hr = document.querySelector('#hr');
let mm = document.querySelector('#mm');
let sc = document.querySelector('#sc');
setInterval(() =>{
    let d = new Date();
    let hh = d.getHours() * 30;
    let mn = d.getMinutes() * 6;
    let ss = d.getSeconds() * 6;
    
    hr.style.transform = `rotateZ(${hh+(mn/12)}deg)`;
    mm.style.transform = `rotateZ(${mn}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`; 
});

function clock() {
    let hours = document.getElementById("hour");
    let minute = document.getElementById("min");
    let second = document.getElementById("sec");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    if(h > 12){
        h = h - 12;
    }
    h = (h < 10) ? "0" + h :h;
    m = (m < 10) ? "0" + m :m;
    s = (s < 10) ? "0" + s :s;
    hours.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
};

setInterval(clock,1000);
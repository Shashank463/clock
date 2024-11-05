// btn1.addEventListener('click', function(e) {
//     alert("Hello World !!!")
// })

// btn2.addEventListener('click', function(e) {
//     alert("Welcome !!!")
// })

// btn3.addEventListener('click', function(e) {
//     alert("About !!!")
// })

function updateClockAndDate() {

    let a = new Date();
    let h = a.getHours();
    let m = a.getMinutes();
    let s = a.getSeconds();
    let d = a.getDate();
    let Mn = a.getMonth()+1;
    let y = a.getUTCFullYear();
    console.log(h ,m ,s ,d , Mn, y);
    let x = document.getElementById("dateclock");
    let time = ("Time : "+ h+ " : "+ m+ " : " +s);
    let date = (" Date "+ d+ " - "+ Mn+ " - " +y);
    x.innerHTML = date + "<br><br>" + time;


    // date.innerHTML = (" Date "+ d+ " - "+ Mn+ " - " +y);
    // let z = document.getElementById("date");
    // z.innerHTML = (" Date "+ d+ " - "+ Mn+ " - " +y); 
}

setInterval(updateClockAndDate,1000);
updateClockAndDate();

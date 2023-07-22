let form = document.getElementById('lobby__form')

let displayName = sessionStorage.getItem('display_name')
if(displayName){
    form.name.value = displayName
}
setInterval(myTimer, 1000);

function myTimer() {
    const d = new Date();
    let time = d.toLocaleTimeString();
    let date = d.getDate();
    let day = d.getDay();
    let month1 = d.getMonth();
    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    document.getElementById("time").innerHTML = time + " • " + weekday[day] + ", " + date+" " + month[month1];
}
form.addEventListener('submit', (e) => {
    e.preventDefault()

    sessionStorage.setItem('display_name', e.target.name.value)

    let inviteCode = document.getElementById("room").value;
    
    window.location = `./html/room.html?room=${inviteCode}`
})
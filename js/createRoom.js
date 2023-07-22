let form = document.getElementById('lobby__form')

let displayName = sessionStorage.getItem('display_name')
if(displayName){
    form.name.value = displayName
}

let inviteCode = String(Math.random().toString(36).slice(2))
 document.getElementById('roomid').innerHTML=inviteCode;

 function copied() {
     
    navigator.clipboard.writeText(inviteCode);
    var tooltip = document.getElementById("copyText");
    tooltip.innerHTML = "Copied ";
  }
  
  function toCopy() {
    let tooltip = document.getElementById("copyText");
    tooltip.innerHTML = "Copy to clipboard";
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

    window.location = `./room.html?room=${inviteCode}`
        // only window location changed
    })
    




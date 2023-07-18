let form = document.getElementById('lobby__form')

let displayName = sessionStorage.getItem('display_name')
if(displayName){
    form.name.value = displayName
}

let inviteCode = String(Math.random().toString(36).slice(2))
 document.getElementById('roomid').innerHTML=inviteCode;

 function copied() {
     var copyText = inviteCode;
    navigator.clipboard.writeText(copyText);
    var tooltip = document.getElementById("copyText");
    tooltip.innerHTML = "Copied ";
  }
  
  function toCopy() {
    let tooltip = document.getElementById("copyText");
    tooltip.innerHTML = "Copy to clipboard";
  }

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    sessionStorage.setItem('display_name', e.target.name.value)
    
    // let inviteCode = e.target.room.value
        // inviteCode = String(Math.floor(Math.random() * 10000))
        // inviteCode =  String(Math.random().toString(36).slice(2))
        
        
        // only window location changed
        window.location = `./room.html?room=${inviteCode}`
    })
    




let form = document.getElementById('lobby__form')

let displayName = sessionStorage.getItem('display_name')
if(displayName){
    form.name.value = displayName
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    sessionStorage.setItem('display_name', e.target.name.value)

    let inviteCode = '';
        inviteCode =  String(Math.random().toString(36).slice(2))
    window.location = `./html/room.html?room=${inviteCode}`
})
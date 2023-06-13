const endDate = "29 Nov 2023 11:59 AM"

document.getElementById("end_date").innerText = endDate;
const inputs = document.querySelectorAll("input")

//const clock =() => {

//}

function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now)/ 1000;
    console.log(diff);
    //convert into days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    //convert into hrs
    inputs[1].value = Math.floor(diff / 3600) % 24;
    //convert into mins
    inputs[2].value = Math.floor(diff / 60) % 60;
    //convert into sec
    inputs[3].value = Math.floor(diff) % 60;
    
}

//initial call
clock()

/**
 * 1 day = 24hrs
 * 1hr = 60mins
 * 60min = 3600sec
 */

setInterval(
    () => {
        clock()
    },
)
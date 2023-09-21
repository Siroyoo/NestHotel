const navData =[
    {
        url : "about.html", title : "호텔소개"
    },
    {
        url : "room.html", title : "객실"
    },
    {
        url : "activity.html", title : "시설 및 체험"
    },
    {
        url : "reservation.html", title : "예약하기"
    },
    {
        url : "check-reservation.html", title : "예약확인"
    },
]

function navBar() {
    const navcon = document.querySelectorAll(".main-nav div")
    console.log(navcon);
    for(let i=0; i<navcon.length; i++ ){
        const navA = document.createElement("a")
        navA.href=navData[i].url;
        navA.textContent = navData[i].title;
        
        navcon[i].appendChild(navA);
    }
}
navBar();
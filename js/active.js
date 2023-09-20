const actPage = [
    {
        title : "activity.html"
    }
]

const actContent = [
    {
        image : "image/activity/bar.jpg", text : "럭셔리 바"
    },
    {
        image : "image/activity/fitness.jpg", text : "피트니스"
    },
    {
        image : "image/activity/facility4.jpg", text : "취미 공간"
    },
    {
        image : "image/activity/buffe.jpg", text : "뷔페"
    },
    {
        image : "image/activity/canoe2.jpg", text : "카누 체험"
    },
    {
        image : "image/activity/riding.jpg", text : "승마 체험"
    },
    {
        image : "image/activity/tracking.jpg", text : "트래킹"
    },
    {
        image : "image/activity/star2.jpg", text : "별 구경"
    }
]

function activeContain() {
    const actcon = document.querySelectorAll('.act-wrap-con .act')
    console.log(actcon);
    for(let i=0; i<actcon.length; i++){
        if(i >= 0 && i <= 8){
            console.log(actcon[i]);
           const imgCover = document.createElement('div');
            imgCover.classList.add("act-img")

            const actImg = document.createElement('img');
            actImg.src = actContent[i].image;

            const actA = document.createElement('a');
            actA.classList.add("act-text")
            actA.href = actPage[0].title;

            const actP = document.createElement('p');
            actP.textContent = actContent[i].text;
            
            imgCover.appendChild(actImg);
            actA.appendChild(actP);
            actcon[i].appendChild(imgCover);
            actcon[i].appendChild(actA);
        }
    }
}
activeContain();


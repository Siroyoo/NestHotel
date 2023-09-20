const roominfo = [
    {
        title : "room.html"
    }
]

const roomdata = [
    {
        image : "image/room/room3.jpg", text : "2인 스텐다드 룸"
    },
    {
        image : "image/room/room2.jpg", text : "4인 스텐다드 룸"
    },
    {
        image : "image/room/room5.jpg", text : "싱글 룸"
    },
    {
        image : "image/room/room4.jpg", text : "더블 룸"
    },
    {
        image : "image/room/room9.jpg", text : "슈페리어 룸"
    },
    {
        image : "image/room/room8.jpg", text : "스위트 룸"
    }
]

function createCarousel() {
    const room = document.querySelector('#rooms');

    let currentIndex = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.room-cover');
        console.log(index);
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';

            } else {
                slide.style.display = 'none';
            }
        });    
    }
    function pagenationDotChage(index) {
        const pageDat = document.querySelectorAll('.dot');
        console.log(pageDat);
        pageDat.forEach((dot, i) => {
            if(i === index) {
                dot.classList.add('dot-active');
            }else{
                dot.classList.remove('dot-active');
            }
        });
    }
   

    for (let i = 0; i < roomdata.length; i++) {
        const roomCover = document.createElement('a');
        roomCover.classList.add("room-cover")
        roomCover.classList.add("w-[75rem]")
        roomCover.classList.add("h-[30rem]")
        roomCover.classList.add("rounded-[50px]")
        roomCover.classList.add("overflow-hidden")
        roomCover.classList.add("border")
        roomCover.classList.add("border-solid")
        roomCover.classList.add("bg-teal-900")




        roomCover.href = roominfo[0].title; // 모든 링크가 같은 URL을 사용하는 경우
        

        const contentImg = document.createElement('img');
        contentImg.classList.add("w-[100%]")
        contentImg.classList.add("h-[85%]")
        contentImg.classList.add("object-cover")
        contentImg.src = roomdata[i].image;

        const contentText = document.createElement('p');
        contentText.classList.add("text-[30px]")
        contentText.classList.add("mt-3")
        contentText.classList.add("font-bold")
        contentText.classList.add("justify-center")
        contentText.classList.add("items-center")
        contentText.classList.add("flex")
        contentText.classList.add("text-yellow-100")

        

        contentText.textContent = roomdata[i].text;

        roomCover.appendChild(contentImg);
        roomCover.appendChild(contentText);
        room.appendChild(roomCover);
    }

    const slides = document.querySelectorAll('.room-cover');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    function nextSlide() {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        showSlide(currentIndex);
        pagenationDotChage(currentIndex);
    }
    function prevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }
        showSlide(currentIndex);
        pagenationDotChage(currentIndex);
    }
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    
    function createDot() {
        const dots = document.querySelector('.room-dot');
        for(let i=0; i<roomdata.length; i++){
            const dot = document.createElement('div');
            dot.classList.add("dot")
            dot.style.width = "20px";
            dot.style.height = "20px";
            dot.classList.add("rounded-[25px]")
            dots.appendChild(dot);
        }
    }
    createDot();
    showSlide(currentIndex);
    pagenationDotChage(currentIndex);

}


createCarousel();


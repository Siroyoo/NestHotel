const topNavdata = [
    {
        title : "login.html", text : "로그인"
    },
    {
        title : "join.html", text : "회원가입"
    },
    {
        title : "mypage.html", text : "마이페이지"
    },
    {
        title : "info.html", text : "공지사항"
    }
]

function topNavBar(hrefValue, textValue){
    const topNav = document.querySelector('.top-nav');
    console.log(topNav);
    const login = document.createElement('a');
    login.href=hrefValue;
    login.textContent =textValue;
    topNav.appendChild(login);
}

function topNavCon() {
    for(let i=0; i<topNavdata.length; i++){
        console.log(topNavdata[i]);
        topNavBar(topNavdata[i].title, topNavdata[i].text)
    }

}
topNavCon();
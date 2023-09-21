const data = [
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

function add(hrefValue, textValue){
    const topNav = document.querySelector('.top-nav');
    console.log(topNav);
    const login = document.createElement('a');
    login.href=hrefValue;
    login.textContent =textValue;
    topNav.appendChild(login);
}

function add2() {
    // add("login.html", "로그인")
    // add("join.html", "회원가입")
    // add("mypage.html", "마이페이지")
    // add("info.html", "공지사항")
    for(let i=0; i<data.length; i++){
        console.log(data[i]);
        add(data[i].title, data[i].text)
    }

}
add2();
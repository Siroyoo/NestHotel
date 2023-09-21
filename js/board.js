const postForm = document.getElementById('postForm');
const usernameInput = document.getElementById('username');
const messageInput = document.getElementById('message');
const postList = document.getElementById('postList');
const posts = []; // 더미 데이터를 저장할 배열
const postsPerPage = 5; // 페이지 당 표시할 게시물 수
let currentPage = 1;   // 현재 페이지

// 더미 데이터를 초기화합니다.
posts.push({ id: 1, username: '홍길동', message: '너무 좋았어요 잘 쉬고 갑니다.' });
posts.push({ id: 2, username: '이말년', message: '전부 깨끗해서 좋았어요.' });
posts.push({ id: 3, username: '김동희', message: '좋았구나아아아~~~~.' });
posts.push({ id: 4, username: '성덕선', message: '잘 쓰고 갑니다.' });
posts.push({ id: 5, username: '김선우', message: '가족들도 저도 전부 좋아 했어요 .' });

// 초기 더미 데이터를 화면에 표시합니다.
displayPosts();

postForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // 사용자 입력 가져오기
    const username = usernameInput.value;
    const message = messageInput.value;

    // 새 게시물 생성 및 추가
    const newPost = { id: posts.length + 1, username, message };
    posts.push(newPost);

    // 입력 필드 초기화
    usernameInput.value = '';
    messageInput.value = '';

    // 새로운 게시물을 화면에 표시
    displayPosts();
});

function displayPosts() {
    //현제 게시물 목록 지우기
    postList.innerHTML = '';

    // 현재 페이지에 표시할 게시물의 시작과 끝 인덱스 계산
    const startIndex = (currentPage -1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;


    // 현재 페이지에 표시할 게시글 가져오기
    const postsToDisplay = posts.slice(startIndex, endIndex);
    
    if (postsToDisplay.length === 0) {
        // 게시물이 없을 경우 메시지 표시
        const noPostsMessage = document.createElement('p');
        noPostsMessage.classList.add('empty')
        noPostsMessage.innerText = '게시물이 없습니다.';
        postList.appendChild(noPostsMessage);
    } else {
        // 게시물을 표시
        postsToDisplay.forEach((post) => {
            displayPost(post);
        });
    }

    // 페이지 네이션 컨트롤 추가
    addPaginationControls();

}

function displayPost(post) {
    const postElement = document.createElement('li');
    postElement.classList.add('post');

    postElement.setAttribute('data-id', post.id); // 고유한 ID 설정
    postElement.innerHTML = 
        `<h1>${post.id}</h1><h1>${post.username}</h1><h1>${post.message}</h1>`;
    // 삭제 버튼 추가
    const deleteButton = document.createElement('button');
    deleteButton.innerText = '삭제';
    deleteButton.addEventListener('click', function () {
        deletePost(post.id);
    });

    postElement.appendChild(deleteButton);
    
    postList.appendChild(postElement);
}

function deletePost(postId) {
    // 배열에서 해당 ID의 게시물을 제거
    const index = posts.findIndex((post) => post.id === postId);
    if (index !== -1) {
        posts.splice(index, 1);
    }

    // 화면에서도 해당 게시물 제거
    const postElement = document.querySelector(`.post[data-id="${postId}"]`);
    if (postElement) {
        postElement.remove();
    } 
    
    // 삭제 후 게시물 다시 표시
    displayPosts();
}

function addPaginationControls() {
    // 전체 페이지 수 계산
    const totalPages = Math.ceil(posts.length / postsPerPage);

    // 이전 페이지 버튼 생성
    const prevButton = document.createElement('button');
    prevButton.innerText = '이전 페이지';
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayPosts();
        }
    });

    // 페이지 위치 알림
    const pageButtonsDiv = document.createElement('div');
    pageButtonsDiv.classList.add('page-buttons');
    
    for (let i = 1; i <= totalPages; i++) {
        const pageNumButton = document.createElement('button');
        pageNumButton.innerText = i;
        pageNumButton.addEventListener('click', () => {
            currentPage = i;
            displayPosts();
        });
        pageButtonsDiv.appendChild(pageNumButton);
    }
    

    // 다음 페이지 버튼 생성
    const nextButton = document.createElement('button');
    nextButton.innerText = '다음 페이지';
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayPosts();
        }
    });

    // 페이지네이션 컨트롤을 페이지에 추가
    const paginationDiv = document.createElement('div');
    paginationDiv.classList.add('pagination');
    paginationDiv.appendChild(prevButton);
    paginationDiv.appendChild(pageButtonsDiv);
    paginationDiv.appendChild(nextButton);
    postList.appendChild(paginationDiv);
}

// 초기 게시물 표시
displayPosts();
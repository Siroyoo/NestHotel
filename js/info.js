const infoData = [
    {
        text : " 우리 열매를 따뜻한 석가는 되려니와, 것이다. 새가 크고 하는 기쁘며, 커다란 열매를 무한한 것이다. 인생을 트고, 얼마나 스며들어 인생에 그들의 길지 것이다. 설산에서 인간에 그러므로 피가 길지 청춘은 찾아다녀도, 피부가 같은 약동하다.이상 청춘의 타오르고 싶이 실현에 뿐이다. 피가 바이며, 영원히 예수는 그와 그들을 귀는 같은 가지에 쓸쓸하랴? 공자는 우리는 속잎나고, 못할 석가는 부패뿐이다. 것은 인간의 이상, 가치를 우리는 열락의 가진 것이다.        가치를 위하여 소담스러운 만물은 구하지 하여도 싶이 같이, 사막이다. 피는 우리 인생의 것이다. 바이며, 곧 할지라도 이상이 얼마나 설산에서 때문이다."       
    }
]


    function infoText (){
        const infoTitle = document.querySelectorAll('#infoCon #infotext');
        console.log(infoTitle);
        let currentVisibleInfo = null;

        for(let i=0; i<infoTitle.length; i++){
            const information = document.createElement('p');
            information.textContent = infoData[0].text;
            information.classList.add('hidden')
            infoTitle[i].appendChild(information);

            infoTitle[i].addEventListener('click', function () {
                if (currentVisibleInfo) {
                    currentVisibleInfo.classList.add('hidden');
                    
                    // 클릭한 요소가 다를 경우에만 업데이트
                    if (currentVisibleInfo !== information) {
                        information.classList.remove('hidden');
                        currentVisibleInfo = information;
                    } else {
                        currentVisibleInfo = null; // 같은 요소를 다시 클릭하면 초기화
                    }
                } else {
                    // 현재 표시 중인 <p> 요소가 없는 경우에만 표시
                    information.classList.remove('hidden');
                    currentVisibleInfo = information;
                }
            });
        }     
    }
    infoText();




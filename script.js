// 아이콘과 확대된 이미지에 대한 변수
const iconA = document.getElementById("icon-a");
const iconB = document.getElementById("icon-b");
const overlayA = document.getElementById("overlay-a");
const overlayB = document.getElementById("overlay-b");
const closeA = document.getElementById("close-a");
const closeB = document.getElementById("close-b");

// 아이콘 클릭 시 이미지 확대
iconA.addEventListener("click", () => {
  overlayA.style.display = "flex";
});

iconB.addEventListener("click", () => {
  overlayB.style.display = "flex";
});

// 닫기 버튼 클릭 시 이미지 닫기
closeA.addEventListener("click", () => {
  overlayA.style.display = "none";
});

closeB.addEventListener("click", () => {
  overlayB.style.display = "none";
});

// 배경 클릭 시 닫기
overlayA.addEventListener("click", (event) => {
  if (event.target === overlayA) {
    overlayA.style.display = "none";
  }
});

overlayB.addEventListener("click", (event) => {
  if (event.target === overlayB) {
    overlayB.style.display = "none";
  }
});

// 이미지와 모달 요소를 선택합니다.
const toolsImg = document.getElementById('tools-img');
const modal = document.getElementById('toolsModal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.getElementById('close-btn');

// tools.png 클릭 시 모달을 열고 이미지 확대
toolsImg.onclick = function() {
    modal.style.display = "flex"; // 모달 창을 보이도록 설정
    modalImg.src = "img/tools.png";  // 확대할 이미지 설정
}

// 모달 닫기 버튼 클릭 시 모달을 닫음
closeBtn.onclick = function() {
    modal.style.display = "none"; // 모달 창을 숨김
}

// 모달 외부 클릭 시 모달 닫기
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // 모달 창을 숨김
    }
}


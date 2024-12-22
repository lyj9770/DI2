// 화면 전환 함수
function switchScreen() {
    window.location.href = "3_2misfit.html"; // 두 번째 화면으로 이동
    const audio = document.getElementById('audio');
    audio.play();  // 두 번째 화면이 나오면 오디오를 재생
}

// 랜덤 텍스트 생성 함수
function generateRandomText() {
    const text = "Misfit";
    const size = Math.floor(Math.random() * 35) + 10; // 크기 15~45
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);

    const div = document.createElement("div");
    div.classList.add("random-text");
    div.style.fontSize = `${size}px`;
    div.style.left = `${x}px`;
    div.style.top = `${y}px`;
    div.innerText = text;

    document.body.appendChild(div);

    // 텍스트가 나타났다가 사라지게 하는 애니메이션
    setTimeout(() => {
        div.style.opacity = 1;
    }, 100);

    setTimeout(() => {
        div.style.opacity = 0;
        setTimeout(() => {
            div.remove();
        }, 500);
    }, 2000);
}

// 일정 시간 간격으로 랜덤 텍스트 생성
setInterval(generateRandomText, 300);

window.onload = function () {
    const audio = document.getElementById("audio");
    audio.muted = false; // 음소거 해제
    audio.play().catch((error) => {
        console.warn("자동 재생 실패. 사용자가 클릭해야 재생됩니다:", error);
    });
};

// 리셋 버튼 클릭 시 첫 화면으로 돌아가기
document.getElementById("resetButton").addEventListener("click", function () {
    window.location.href = "index.html"; // index.html로 이동
});
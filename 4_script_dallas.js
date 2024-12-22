// 화면 전환 함수
function switchScreen() {
    window.location.href = "4_2dallas.html"; // 두 번째 화면으로 이동
    const audio = document.getElementById('audio');
    audio.play();  // 두 번째 화면이 나오면 오디오를 재생
}
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

let scrollSpeed = 0.5; // 스크롤 속도 (작을수록 느림)
let intervalTime = 10;  // 10ms 간격으로 실행

let enableScroll = true; // 초기에는 자동 스크롤 활성화

function smoothScroll() {
    if (enableScroll) { // 자동 스크롤이 활성화된 경우에만 실행
        let scrollPosition = window.scrollY; // 현재 스크롤 위치
        let targetPosition = scrollPosition + scrollSpeed; // 이동할 위치 (스크롤을 아래로 내리기)

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// 일정 시간마다 smoothScroll 함수를 실행하는 interval 설정
setInterval(smoothScroll, intervalTime);

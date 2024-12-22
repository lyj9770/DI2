// 화면 전환 함수
function switchScreen() {
    window.location.href = "3_2misfit.html"; // 두 번째 화면으로 이동
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
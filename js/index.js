document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabs");

    tabs.forEach(tab => {
        const buttons = tab.querySelectorAll(".tab-btn");
        const contentContainer = tab.querySelector(".tab-content");

        function displayContent(index) {
            const contentData = buttons[index].dataset.content.split("|");
            contentContainer.innerHTML = `<ul>${contentData.map(item => `<li>${item}</li>`).join("")}</ul>`;
        }

        function highlightButton(activeBtn) {
            buttons.forEach(btn => btn.classList.remove("active"));
            activeBtn.classList.add("active");
        }

        function handleClick(event) {
            const index = [...buttons].indexOf(event.target);
            if (index !== -1) {
                highlightButton(event.target);
                displayContent(index);
            }
        }

        // 초기 설정
        displayContent(0);
        highlightButton(buttons[0]);

        // 이벤트 리스너 추가
        buttons.forEach(btn => btn.addEventListener("click", handleClick));
    });
});

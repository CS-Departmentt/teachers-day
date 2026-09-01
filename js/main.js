document.addEventListener("DOMContentLoaded", () => {

    const text = document.querySelector(".typing-text");

    if (!text) return;

    const originalText = text.textContent;

    text.textContent = "";

    let index = 0;

    function typeText() {

        if (index < originalText.length) {

            text.textContent += originalText.charAt(index);

            index++;

            setTimeout(typeText, 35);

        }

    }

    typeText();

});

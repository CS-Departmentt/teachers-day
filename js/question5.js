const correctAnswer = "teacher";

const input = document.getElementById("answerInput");
const button = document.getElementById("submitBtn");
const message = document.getElementById("message");
const card = document.querySelector(".question-card");

window.addEventListener("load", () => {
    input.focus({ preventScroll: true });
});

button.addEventListener("click", checkAnswer);

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
});

function checkAnswer() {

    const answer = input.value.trim().toLowerCase();

    if (answer === correctAnswer) {

        message.textContent = "✓ FINAL LAYER VERIFIED — INVITATION RECOVERED";
        message.className = "message success";

        button.disabled = true;

        setTimeout(() => {
            window.location.href = "success.html";
        }, 1200);

    } else {

        message.textContent = "✕ INCORRECT ANSWER — FINAL LOCK REMAINS ACTIVE";
        message.className = "message error";

        card.classList.remove("shake");

        void card.offsetWidth;

        card.classList.add("shake");

        input.value = "";
        input.focus({ preventScroll: true });
    }
}

import accounts from './accounts.json';


document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(".prompt input");
    const keys = document.querySelectorAll(".key");

    const focusNext = (index) => index < inputs.length - 1 && inputs[index + 1].focus();
    const focusPrev = (index) => index > 0 && (inputs[index - 1].value = "", inputs[index - 1].focus());

    inputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            input.value = input.value.replace(/\D/g, ""); 
            if (input.value) focusNext(index);
        });
        input.addEventListener("keydown", (e) => e.key === "Backspace" && !input.value && focusPrev(index));
    });

    keys.forEach(key => {
        key.addEventListener("click", () => {
            if (key.dataset.num === "correct") {
                inputs.forEach(input => input.value = "");
                return inputs[0].focus();
            }
            
            if (!/\d/.test(key.textContent)) return;
            
            const activeInput = [...inputs].find(input => !input.value);
            if (activeInput) {
                activeInput.value = key.textContent;
                focusNext([...inputs].indexOf(activeInput));
            }
        });
    });
});

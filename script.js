const btns = document.querySelectorAll("button");
const text = document.getElementById("text");

btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const btnValue = e.target.innerText;
        let textValue = text.value;

        if (btnValue === "uppercase") {
            textValue = textValue.toUpperCase();
        }
        else if (btnValue === "lowercase") {
            textValue = textValue.toLowerCase();
        }
        else if (btnValue === "capitalize") {
            for (let i = 0; i < textValue.length; i++) {
                if (i === 0) {
                    textValue = textValue.charAt(i).toUpperCase() + textValue.slice(i + 1);
                }
            }
        }
        else if (btnValue === "clear") {
            textValue = "";
        }
        else if (btnValue === "copy") {
            text.select();
            document.execCommand("copy");
        }
        else if (btnValue === "remove space") {
            let newText = "";
            for (let i = 0; i < textValue.length; i++) {
                if (textValue[i] !== " " && textValue[i] !== "\t" && textValue[i] !== "\n") {
                    newText += textValue[i];
                }
            }
            textValue = newText;
        }
        else if (btnValue === "backspace") {
            textValue = textValue.substring(0, textValue.length - 1);
        }
        else if (btnValue === "total words") {
            textValue = textValue.split(" ").length
        }

        else if (btnValue === "total characters") {
            let count = 0;
            for (let i = 0; i < textValue.length; i++) {
                if (textValue[i] !== " ") {
                    count++;
                }
            }
            textValue = count.toString();
        }


        text.value = textValue;
    });
});

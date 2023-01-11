const target = document.getElementById('target');
let array = ["développeur", "comique", "créatif"];
let workIndex = 0;
let letterIndex = 0;

const createLetter = () => {
    const letter = document.createElement("span");
    target.appendChild(letter);

    letter.textContent = array[workIndex][letterIndex];

    setTimeout(() => {
        letter.remove();
    }, 3000);
};

const loop = () => {
    setTimeout(() => {
        if (workIndex >= array.length) {
            workIndex = 0;
            letterIndex = 0;
            loop();
        }
       else if( letterIndex < array[workIndex].length) {
           createLetter();
           letterIndex++;
           loop();
       } else {
           workIndex++;
           letterIndex = 0;
           setTimeout(() => {
               loop();
           }, 2800);
       }
    }, 60);
};
loop();
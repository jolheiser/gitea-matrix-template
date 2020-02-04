// These should be the only breakable variables between versions (hopefully)
const divHomeSelector = "div.home";
const bodyDivSelector = "body>div";

(() => {
    // Insert canvas
    const divHome = document.querySelector(divHomeSelector);
    const bodyDiv = document.querySelector(bodyDivSelector);
    if (divHome === null || bodyDiv === null) return;

    const canvasDiv = document.createElement("DIV");
    canvasDiv.classList.add("home-canvas");
    const canvas = document.createElement("CANVAS");
    canvas.id = "c";
    canvasDiv.appendChild(canvas);
    divHome.insertBefore(canvasDiv, divHome.firstChild);

    //Matrix canvas
    const c = document.getElementById("c");
    const ctx = c.getContext("2d");
    //Get client offsets
    const my_height = bodyDiv.offsetHeight;
    const my_width = divHome.offsetWidth;

    //making the canvas full screen
    c.height = my_height;
    c.width = my_width;

    //latin characters - taken from the unicode charset
    let matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    //converting the string into an array of single characters
    matrix = matrix.split("");

    const font_size = 10;
    const columns = c.width / font_size; //number of columns for the rain
    //an array of drops - one per column
    const drops = [];
    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)
    for (let x = 0; x < columns; x++)
        drops[x] = 1;

    //drawing the characters
    function draw() {
        //Black BG for the canvas
        //translucent BG to show trail
        ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
        ctx.fillRect(0, 0, c.width, c.height);

        ctx.fillStyle = "#5AA509"; // Gitea green
        //ctx.fillStyle = "red";
        ctx.font = font_size + "px arial";
        //looping over drops
        for (let i = 0; i < drops.length; i++) {
            //a random chinese character to print
            const text = matrix[Math.floor(Math.random() * matrix.length)];
            //x = i*font_size, y = value of drops[i]*font_size
            ctx.fillText(text, i * font_size, drops[i] * font_size);

            //sending the drop back to the top randomly after it has crossed the screen
            //adding a randomness to the reset to make the drops scattered on the Y axis

            if (drops[i] * font_size > c.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            //incrementing Y coordinate
            drops[i]++;
        }
    }

    setInterval(draw, 35);
})();

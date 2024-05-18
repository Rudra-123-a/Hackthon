document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('mycanvas');
    const context = canvas.getContext('2d');

    function drawDice(number) {   
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = 'Black';
        context.font = '100px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(number, canvas.width / 2, canvas.height / 2);
    }
    function rollDice() {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        drawDice(randomNumber);
    }
    drawDice(1);
    window.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            rollDice();
        }
    });
});
const handleClick = () => {
    let x = document.getElementById('number1').value;
    let y = document.getElementById('number2').value;
    let z = document.getElementById('answer').value;
    let op = document.getElementById('operations').value;


    x = parseInt(x);
    y = parseInt(y);

    if (op === 'add') {
        document.getElementById('answer').value = x + y;
    } else if (op === 'subtract') {
        document.getElementById('answer').value = x - y;
    } else if (op === 'divide') {
        document.getElementById('answer').value = x / y;
    } else if (op === 'multiply') {
        document.getElementById('answer').value = x * y;
    }
}

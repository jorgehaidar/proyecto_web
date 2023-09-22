function cycle() {
    let total = 0

    for (let i = 0; i < 10; i++) {
        total += parseInt(window.prompt('test'));
    }

    document.writeln('Total: ' + total);
}

function validation() {
    field1 = document.getElementById('text1').value;
    field2 = document.getElementById('text2').value;

    result = 'Resultado de la comparacion: '

    if (field1 === '' && field2 === ''){
        result += 'campos vacios';
    } else if (field1 === ''){
        result += 'la caja izquierda esta vacia';
    } else if (field2 === ''){
        result += 'la caja derecha esta vacia';
    } else {
        result += 'ambas cajas estan rellenas';
    }

    document.getElementById('result').innerHTML = result;
}

function build_table(){
    let table = document.getElementsByTagName('tbody').outerHtml = '';

    let count = 1;
    for (let i = 0; i < 5; i++) {
        table += '<th>';
        for (let j = 0; j < 4; j++) {
            table += '<td>'+ (i+1) * Math.pow(10,j) +'</td>'
        }
        table += '</th>';
    }

    document.getElementsByName('tbody').outerHTML = table;

}
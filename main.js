const siguiente = document.querySelector('.button');
const text = document.querySelector('.text');

siguiente.addEventListener('click', insertText);




function* nextText (array) {
    for (let value of array) {
        yield value
    }
}

const texto = nextText(['Aquí me tienes amándote a gritos, a mi me gusta quererte en silencio', 
    'se le va a declarar a la poncha en unos cuantos días', 
    'a la ponchiwis le mama ir a lokiar ', 
    'aguuusto qque se pone echar wz con los panas',
    '<3'
]);


text.innerHTML = texto.next().value
function insertText () {
    text.innerHTML = texto.next().value
}

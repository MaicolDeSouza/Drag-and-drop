// Seleciona todos os cards da paginas
const cards = document.querySelectorAll('.card');
// Seleciona todoas as areas de soltura dos cards
const dropzones = document.querySelectorAll('.dropzone');

// Faço um iteracao em cada card e se o evento passado é chamada a funcao de callback 
cards.forEach(card =>{
    // Quando o evento 'dragstart' ocorrer chama a funcao dragstart
    card.addEventListener('dragstart', dragstart);
    card.addEventListener('drag', drag);
    card.addEventListener('dragend', dragend);
})

// Faço um iteracao em cada dropzone e se o evento passado é chamada a funcao de callback 
dropzones.forEach(dropzone =>{
    // Quando o evento 'dragstart' ocorrer chama a funcao dragstart
    dropzone.addEventListener('dragenter', dragenter);
    dropzone.addEventListener('dragover', dragover);
    dropzone.addEventListener('dragleave', dragleave);
    dropzone.addEventListener('drop', drop);
})

function dragstart(){
    // console.log('start');
    // Quando clicadono card deixa todas as dropzones em uma cor especifica passada via css
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'))
// O this neste contexto se refere ao target, ou seja, ao card
    this.classList.add('is-dragging')

}

function drag(){
    // console.log('on darg');
}

function dragend(){
    // console.log('end');
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))
    this.classList.remove('is-dragging')
}

function dragenter(){
    // console.log('enter on dropzone');
}

function dragover(){
    // console.log('over on dropzone');
    // O this neste contexto se refere ao target, ou seja, ao dropzone
    this.classList.add('over');
// Seleciona o elemento que esta com a classe 'is-dragging'
    const cardBeingDragged = document.querySelector('.is-dragging');
// Insere o elemento acima como filho do dropzone, deixar no final do dropzone
    this.appendChild(cardBeingDragged);


}

function dragleave(){
    // console.log('leave dropzone');
    this.classList.remove('over');
}

function drop(){
    // console.log('dropped on dropzone');
    this.classList.remove('over');
}
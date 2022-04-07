let form = document.querySelector('form');
let ul = document.querySelector('ul');


// Array for storing data, i.e. single-source of truth

let cardsData = JSON.parse(localStorage.getItem('cards')) || [];  

//address submission

form.addEventListener('submit', (event) => { 
    event.preventDefault();

    let title = event.target.elements.title.value;
    let category = event.target.elements.category.value;

    cardsData.push({title: title, category: category});
    localStorage.setItem('cards', JSON.stringify(cardsData));
    createUI(cardsData, ul);

})

//takes care of editing the card

function handleEdit(event, info, id, label) {
    //select the element first
    let elm = event.target;
    //create input element that will replace p
    let input = document.createElement('input');
    // populate input with already existing value
    input.value = info;

    // Take care of updating category upon hitting enter
    input.addEventListener('keyup', (event) => {
        if(event.keyCode === 13) {
            let updatedValue = event.target.value;
            cardsData[id][label] = updatedValue;

            createUI();
            localStorage.setItem('cards', JSON.stringify(cardsData));
        }
    })

    // Take care of updating category upon clicking outside (i.e. the blur event)
    input.addEventListener('blur', (event) => {
            let updatedValue = event.target.value;
            cardsData[id][label] = updatedValue;

            createUI();
            localStorage.setItem('cards', JSON.stringify(cardsData));
    })

    //select parent element
    let parent = event.target.parentElement;
    //replace p with input
    parent.replaceChild(input, elm);

}

// creates UI, which is linked to form

function createUI(data = cardsData, root = ul) {

    root.innerHTML = '';

    let fragment = new DocumentFragment();

    data.forEach((cardInfo, index) => {
        let li = document.createElement('li');
        let p = document.createElement('p');

        p.innerText = cardInfo.category;
        p.addEventListener('dblclick', (event) => handleEdit(event, cardInfo.category, index, 'category'));

        let h2 = document.createElement('h2');

        h2.innerText = cardInfo.title;
        h2.addEventListener('dblclick', (event) => handleEdit(event, cardInfo.title, index, 'title'));

        li.append(p, h2);
        fragment.appendChild(li);
    });

    root.append(fragment);
}

createUI(cardsData, ul);
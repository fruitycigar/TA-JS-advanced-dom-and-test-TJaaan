let root = document.querySelector('ul');

let max = 2;
let index = 0;


function addQuotes() {
    for(let i = 0; i < max; i++) {
        let li = document.createElement('li');
        let bl = document.createElement('blockquote');

        if(quotes[index]) {
            bl.innerText = quotes[index].quoteText;
            let cite = document.createElement('cite');
            cite.innerText = quotes[index].quoteAuthor;
        
            li.append(bl, cite);
            root.append(li);
        
            ++index;;
        }

    }
}

addQuotes();

document.addEventListener('scroll', () => {
    let scrollHeight = document.documentElement.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;
    let clientHeight = document.documentElement.clientHeight;
    if((scrollTop + clientHeight >= scrollHeight) && (index < quotes.length)) {
        addQuotes();
    }
});
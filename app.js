let quotes = [
    {
        name:'Stephen King',
        citation:'Get busy living or get busy dying'
    },
    {
        name: 'John F.Kennedy',
        citation:'Those who dare to fail miserably can achieve greatly'
    },
    {
        name: 'Leonardo Da Vinci',
        citation:'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happended to things'
    },
    {
        name:'Abraham Lincoln',
        citation:'I\'m a success today because I had a friend who believed in me and I didn\'t have the heart to let him down'
    }
    ,
    {
        name: 'Leo Tolstoy',
        citation:'If you want to be happy, be.'
    },
    {
        name:'Marie Helene Kamano',
        citation:'La reussite vient au bout de l\'effort'
    }
];
const quote = document.querySelector('#quote');
const author = document.querySelector('#quoteAuthor');
const quoteBtn = document.querySelector('#quoteBtn');

quoteBtn.addEventListener('click',displayQuote);

function displayQuote(){
    let randomNumber = Math.floor(Math.random()*quotes.length);

    author.innerHTML=quotes[randomNumber].name;
    quote.innerHTML = quotes[randomNumber].citation;
}
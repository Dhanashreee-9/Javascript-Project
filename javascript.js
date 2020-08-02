document.write("This is my first project in JavaScript");


let quotes=['A real friend is one who walks in when the rest of the world walks out.- Walter Winchell',
    'If you live to be 100, I hope I live to be 100 minus 1 day, so I never have to live without you.-Winnie the Pooh',
    'I like to listen. I have learned a great deal from listening carefully. Most people never listen.-Ernest Hemingway',
    'Friendship is born at that moment when one person says to another, ‘What! You too? I thought I was the only one.-C.S. Lewis',
    'True friendship comes when the silence between two people is comfortable.-David Tyson',
    'Sweet is the memory of distant friends! Like the mellow rays of the departing sun, it falls tenderly, yet sadly, on the heart.– Washington Irving',
    'There\'s not a word yet for old friends who’ve just met.– Jim Henson',
    'A single rose can be my garden… a single friend, my world.– Leo Buscaglia',
    'Don\’t make friends who are comfortable to be with. Make friends who will force you to lever yourself up.– Thomas J. Watson',
]


let randomNumber=Math.floor(Math.random()*20);


function NewQuote(){
    let randomNumber =Math.floor(Math.random()*(quotes.length));
    document.getElementById('Quote_Display').innerHTML =quotes[randomNumber];
}


  

  

cards = [
    {
        image:"https://upload.wikimedia.org/wikipedia/commons/d/de/HTML5_oval_logo.png",
        value:1,
        status:"closed"
    },

    {
        image:"https://upload.wikimedia.org/wikipedia/commons/d/de/HTML5_oval_logo.png",
        value:1,
        status:"closed"
    },

    {
     image:"https://www.logolynx.com/images/logolynx/8c/8cdf4c047e99f7389e76aa4e2e7e2803.png",
        value:2,
        status:"closed"
    },

    {
     image:"https://www.logolynx.com/images/logolynx/8c/8cdf4c047e99f7389e76aa4e2e7e2803.png",
        value:2,
        status:"closed"
    },

    {
        image:"https://tse1.mm.bing.net/th?id=OIP._Gb_xK8wcuon63G1GArdzQHaHa&pid=Api&P=0&w=300&h=300",
        value:3,
        status:"closed"
    },

    {
        image:"https://tse1.mm.bing.net/th?id=OIP._Gb_xK8wcuon63G1GArdzQHaHa&pid=Api&P=0&w=300&h=300",
        value:3,
        status:"closed"
    },

    {
        image:"https://tse1.mm.bing.net/th?id=OIP.-2Bcb9bMNz1LF86B2lRR6AAAAA&pid=Api&P=0&w=300&h=300",
        value:4,
        status:"closed"
    },

    {
        image:"https://tse1.mm.bing.net/th?id=OIP.-2Bcb9bMNz1LF86B2lRR6AAAAA&pid=Api&P=0&w=300&h=300",
        value:4,
        status:"closed"
    },

]

 let cardCopy = "cards"


 //------shuffling-------

 let temp;
for(let i=cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}

function displayCards(data){

    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`
            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCard(${index})">
                </div>
            </div>
        `;
    });

    document.getElementById('cards').innerHTML=cardsString;

}

displayCards(cards);

let cardCount=1;
let val1=null,val2=null;
let score=0;
function openCard(index){

    console.log(cards);

    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;

            // reste after one guess 
            val1=null;
            val2=null;
            cardCount=1;
        }
        else{
            alert("Opps! Game Over");
            location.reload();
        }        
    }
    displayCards(cards);
}

const cardArray=[ //array storing grid
    {
        name:"cat",
        img:"images/cat.avif"
    },
    {
        name:"dog",
        img:"images/dog.jpg"
    },
    {
        name:"eagle",
        img:"images/eagle.jpg"
    },
    {
        name:"parrot",
        img:"images/parrot.jpeg"
    },
    {
        name:"rabbit",
        img:"images/rabbit.jpeg"
    },
    {
        name:"squirrel",
        img:"images/squirrel.webp"
    },
    {
        name:"cat",
        img:"images/cat.avif"
    },
    {
        name:"dog",
        img:"images/dog.jpg"
    },
    {
        name:"eagle",
        img:"images/eagle.jpg"
    },
    {
        name:"parrot",
        img:"images/parrot.jpeg"
    },
    {
        name:"rabbit",
        img:"images/rabbit.jpeg"
    },
    {
        name:"squirrel",
        img:"images/squirrel.webp"
    }
    
    
];
let cardsChosen=[]; //name aajayenge if card1==card2 replace white img
let cardsChosenId=[]; //id of that card
let matchedCardsArray=[];
let resultDisplayEl=document.getElementById("result");
cardArray.sort(()=> 0.5- Math.random()); //to shuffle the array
const gridDisplay=document.querySelector(".grid")
console.log(cardArray);
console.log(gridDisplay);
function createBoard(){
    for(let i=0;i<cardArray.length
    ;i++){
        const card=document.createElement("img");
        card.setAttribute("src","images/blank.jpg");
        card.setAttribute("data-id",i);
        card.addEventListener("click",flipCard)
        //console.log(card,i);
        gridDisplay.appendChild(card);
    }
}

createBoard();


function flipCard(){
    // console.log(cardArray)
    // console.log("clicked");
    const cardId= this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    console.log(cardsChosenId)
    console.log(cardsChosen)
    this.setAttribute("src",cardArray[cardId].img);
    if(cardsChosen.length>=2){
        matchCards();
    }

}
const cards = document.querySelectorAll('img')
function matchCards(){
    let cardOne=cardsChosenId[0];
    let name = cardArray[cardOne].name;
    console.log(name);
    let cardTwo=cardsChosenId[1];
    for(let i=0;i<cardArray.length;i++){
      if(i!=cardOne && cardArray[i].name===name ){
        cardTwo=i;
        break;
      }
  }
  console.log(cardOne);
  console.log(cardTwo);
    for(let i=1;i<cardsChosen.length;i++){
      let thirdCard = cardsChosenId[i];
        if(cardsChosen[0]==cardsChosen[i]){
            //cardTwo=i;
            matchedCardsArray.push(cardsChosen[0])
            matchedCardsArray.push(cardsChosen[i])
            console.log(matchedCardsArray)
            alert("Found a MATCH");
            cards[cardOne].setAttribute("src","images/white.avif");
            cards[cardTwo].setAttribute("src","images/white.avif");
            cards[cardOne].removeEventListener('click', flipCard)
            cards[cardTwo].removeEventListener('click', flipCard)
            resultDisplay(cardOne,cardTwo);
            
            
        }
        else{
          setTimeout(function(){
            cards[thirdCard].setAttribute("src","images/blank.jpg");
          },500);
          
        }
    }

    // if(resultDisplayEl.innerHTML>1){
    //   const startEl = document.createElement("button");
    //   startEl.innerHTML="Start Again";
    //   startEl.addEventListener("click",createBoard);
    //   document.body.appendChild(startEl)
    // }
}

function resultDisplay(firstCard,secondCard){
  resultDisplayEl.innerHTML=matchedCardsArray.length/2;
  cardsChosen=[];
  cardsChosenId=[];
  cards[firstCard].setAttribute("src","images/white.avif");
  cards[secondCard].setAttribute("src","images/white.avif");
  setTimeout(function(){
    cards[firstCard].setAttribute("src","images/blank.jpg");
    cards[secondCard].setAttribute("src","images/blank.jpg");
    cards[firstCard].addEventListener("click",function(){
      alert("Already Matched!");
    });
    cards[secondCard].addEventListener("click",function(){
      alert("Already Matched!");
    });
  },700)
  
  
}



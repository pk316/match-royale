
function MemoryGame(){
    this.cardsClicked = [];
    this.resetTime = 1000;
    this.imageArray = [
        'images/barb.png',
        'images/bomber.png',
        'images/giant.png',
        'images/goblin.png',
        'images/hog.png',
        'images/iceWizard.png',
        'images/pekka.png',
        'images/prince.png',
        'images/wizard.png',
    ];
    this.initGame = function () {
        var images = this.imageArray.concat(this.imageArray);
        this.cards = this.createCards(images)
    };
    this.createCards = function(images){
        var cardArray = [];
        for ( var i = 0; i < images.length; i++){
            var newCard = new Card(images[i], this);
            var cardDom = newCard.render();
            $("#gameArea").append(cardDom);
            cardArray.push(newCard);
        }
        return cardArray;
    }
    this.handleCardClick = function(cardObjClicked){

        if(this.cardsClicked.length<2){
            this.cardsClicked.push(cardObjClicked);
            cardObjClicked.revealCard();
        }
        if (this.cardsClicked === 2){
            if(this.cardsClicked[0].getId() === this.cardsClicked[1].getId()){
                console.log('match!!!!!');
                this.matchCount += 2;
                if(this.matchCount === this.cards.length){
                    this.playerWins();
                }
                this.clearCardsClicked();
            } else {
                setTimeout(this.resetCardsClicked.bind(this), this.resetTime);
            }
        }

        this.playerWins = function(){
            alert('you win!');
        }
        
        this.resetCardsClicked = function () {
            for (var i = 0; i < this.cardsClicked.length; i++) {
                this.cardsClicked[i].hideCard();
            }
            this.clearCardsClicked();
        };
        this.clearCardsClicked = function () {
            this.cardsClicked = [];
        };

    }
}






//     this.imageArray =[
//         'images/barb.png', 
//         'images/archer.png',
//         'images/hog.png', 
//         'images/icewiz.png',
//         'images/giant.png', 
//         'images/gob.png', 
//         'images/prince.png', 
//         'images/bomber.png',
//         'images/pekka.png',
//     ];

//     this.shuffleCards = function (imageArray) {
//         var imageArray = imageArray.concat(imageArray);
//         var currentIndex = imageArray.length, temp, randomIndex;
//         while (0 !== currentIndex) {
//             randomIndex = Math.floor(Math.random() * currentIndex);
//             currentIndex -= 1;
//             temp = imageList[currentIndex];
//             imageArray[currentIndex] = imageArray[randomIndex];
//             imageArray[randomIndex] = temp;
//         }
//         return imageArray;
//     };

//     this.createBoard = function (imageArray) {
//         for ( var i = 0; i < imageArray.length; i++){
//             var card = new Card(this, imageArray[i]);
//             var cardElement = card.render();
//             $('.game-container').append(cardElement);
//             this.images.push(card);
//         }
//         return this.cardList;
//         }
//     }
// }

// function Card(parentObj, frontImage) {
//     this.parent = parentObj;
//     this.frontImage = frontImage;

//     //Creates the DOM elements for the card deck and is instantiated in the Game object
//     this.render = function () {
//         var card = $('<div>', {
//             class: 'card'
//         });
//         var flipContainer = $('<div>', {
//             class: 'flip-container'
//         });
//         var front = $('<div>', {
//             class: 'front',
//             css: {
//                 backgroundImage: 'url(' + this.frontImage + ')',
//             }
//         });
//         var back = $('<div>', {
//             class: 'back'
//         });
//         card.append(flipContainer);
//         flipContainer.append(front, back);
//         card.click(this.handleClick.bind(this));
//         this.flipContainer = flipContainer;
//         this.card = card;
//         return card;
//     };

//     //Handles the cards clicked and updates the stats
//     this.handleClick = function () {
//         this.parent.handleCardClick(this);
//         this.parent.updateStats();
//     };

//     //Hides the back of the card, and adds the flip class for animation
//     this.revealSelf = function () {
//         this.flipContainer.toggleClass('flipped');
//         this.card.toggleClass('revealed');
//     };

//     //Shows the back of the card and removes the flip animation 
//     this.hideSelf = function () {
//         this.flipContainer.removeClass('flipped');
//         this.card.removeClass('revealed');
//     };

//     //Targets the front image
//     this.getID = function () {
//         return this.frontImage;
//     };
// }


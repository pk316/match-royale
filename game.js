function MemoryGame(){
    this.cardsClickedArray = [];
    this.matchCount =0;
    this.matchCounter =0;
    this.attempts = 0;
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
        'images/archer.png',
        'images/dragon.png',
        'images/electroWiz.png',
        'images/golem.png',
        'images/knight.png',
        'images/lumberjack.png',
        'images/miniPekka.png',
        'images/musketeer.png',
        'images/princess.png',
        'images/skeleton.png',
        'images/valkyrie.png',
        'images/witch.png'
    ];
    this.initGame = function () {
        var newImageArray = this.selectRandomImages(this.imageArray);
        var images = newImageArray.concat(newImageArray);
        this.cards = this.createCards(images)
    };
    this.selectRandomImages = function(imageArray) {
        var randomImageArray = [];
        while ( randomImageArray.length < 9 ) {
            var randomImage = imageArray.splice(this.randomNum(), 1)
            randomImageArray.push(randomImage);
        }
        return randomImageArray;
    }
    this.randomNum = function (){
        return Math.floor(Math.random() * this.imageArray.length)
    }
    this.createCards = function(images){
        var cardCreatedArray = [];
        for ( var i = 0; i < images.length; i++){
            var newCard = new Card(images[i], this);
            var cardDom = newCard.render();
            $("#game-area").append(cardDom);
            cardCreatedArray.push(newCard);
        }
        return cardCreatedArray;
    }
    this.handleCardClick = function(cardClicked){
        console.log('card clicked', this)
        if(this.cardsClickedArray.length<2){
            if (this.cardsClickedArray[0] === cardClicked) {
                return;
            }
            this.cardsClickedArray.push(cardClicked);
            cardClicked.revealCard();

            if (this.cardsClickedArray.length === 2){
                if(this.cardsClickedArray[0].getId() === this.cardsClickedArray[1].getId()){
                    console.log('match!!!!!');
                    this.attempts++
                    this.matchCount += 2;
                    this.matchCounter++;
                    this.calulateAccuracy();
                    if(this.matchCount === this.cards.length){
                        this.winner();
                    }
                    this.clearCardsClicked();
                } else {
                    setTimeout(this.resetCardsClicked.bind(this), 1000);
                    this.attempts++
                    this.calulateAccuracy();
                }
            }
        }

        this.winner = function(){
            alert('you win!');
        }
        
        this.resetCardsClicked = function () {
            for (var i = 0; i < this.cardsClickedArray.length; i++) {
                this.cardsClickedArray[i].hideCard();
            }
            this.clearCardsClicked();
        };
        this.clearCardsClicked = function () {
            this.cardsClickedArray = [];
        };
        this.displayStats();
    }


    this.calulateAccuracy = function () {
        this.accuracy = (this.matchCounter / this.attempts * 100).toFixed(0);
        return this.accuracy;
    };

    this.displayStats= function() {
        $('.attempts .value').text(this.attempts);
        if (this.accuracy === undefined){
            $('.accuracy .value').text(this.accuracy);
        }else {
            $('.accuracy .value').text(this.accuracy+'%');
        }
    };


    this.resetStats = function() {
        this.matchCount = 0;
        this.matchCounter = 0;
        this.attempts = 0;
        this.accuracy = 0;
        this.cardList = [];
        this.displayStats();
        this.clearClickedCardsList();
    };

    this.resetGame = function() {
        $("#game-area").html('');
        this.resetStats();
        this.createCards(this.shuffleCards(this.gameTypes[this.currentGame]));
    };
    
    this.handleReset = function() {
        $('.reset').click(this.resetGame.bind(this));
    };
}


function MemoryGame(){
    this.cardsClickedArray = [];
    this.matchCount =0;
    this.matchCounter =0;
    this.attempts = 0;
    this.imageArray = [
        'assets/images/barb.png',
        'assets/images/bomber.png',
        'assets/images/giant.png',
        'assets/images/goblin.png',
        'assets/images/hog.png',
        'assets/images/iceWizard.png',
        'assets/images/pekka.png',
        'assets/images/prince.png',
        'assets/images/wizard.png',
        'assets/images/archer.png',
        'assets/images/dragon.png',
        'assets/images/electroWiz.png',
        'assets/images/golem.png',
        'assets/images/knight.png',
        'assets/images/lumberjack.png',
        'assets/images/miniPekka.png',
        'assets/images/musketeer.png',
        'assets/images/princess.png',
        'assets/images/skeleton.png',
        'assets/images/valkyrie.png',
        'assets/images/witch.png'
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
        if(this.cardsClickedArray.length<2){
            if (this.cardsClickedArray[0] === cardClicked) {
                return;
            }
            this.cardsClickedArray.push(cardClicked);
            cardClicked.revealCard();

            if (this.cardsClickedArray.length === 2){
                if(this.cardsClickedArray[0].checkId() === this.cardsClickedArray[1].checkId()){
                    this.attempts++
                    this.matchCount += 2;
                    this.matchCounter++;
                    this.calulateAccuracy();
                    this.matchCards();
                    if(this.matchCount === this.cards.length){
                        this.winner();
                    }    
                    setTimeout(this.handleMatch.bind(this), 1000);
                } else {
                    setTimeout(this.resetCardsClicked.bind(this), 1000);
                    this.attempts++
                    this.calulateAccuracy();
                }
            }
        }
        this.handleMatch = function () {
            for (var i = 0; i < this.cardsClickedArray.length; i++) {
                this.cardsClickedArray[i].handleMatchCard();
            }
            this.clearCardsClicked();
        }

        this.matchCards = function () {
            $('.reveal').addClass('match').fadeTo(1000, 0)
    
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
        this.createCards();
    };
    
    this.handleReset = function() {
        $('.reset').click(this.resetGame.bind(this));
    };
}


function MemoryGame(){
    this.cardsClickedArray = [];
    this.matchCount = 0;
    this.matchCounter = 0;
    this.gamesPlayed = 0;
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
        'assets/images/witch.png',
        'assets/images/balloon.png',
        'assets/images/bats.png',
        'assets/images/minions.png',
        'assets/images/bowler.png',
        'assets/images/bandit.png',
        'assets/images/hunter.png',
        'assets/images/sparky.png',
        'assets/images/megaKnight.png'
    ];

    this.initGame = function() {
        this.createGame();
        this.handleResetClick();
    };

    this.createGame = function() {
        var imageArray = this.imageArray.slice();
        var newImageArray = this.selectRandomImages(imageArray);
        var images = newImageArray.concat(newImageArray);
        var shuffledImages = this.shuffle(images);
        this.cards = this.createCards(shuffledImages);
    }

    this.shuffle = function(images) {
        var shuffled = []
        while (images.length) {
            var image = images.splice(this.randomNum(images), 1)
            shuffled.push(image);
        }
        return shuffled;
    }

    this.selectRandomImages = function(imageArray) {
        var randomImageArray = [];
        while (randomImageArray.length < 9) {
            var randomImage = imageArray.splice(this.randomNum(imageArray), 1)
            randomImageArray.push(randomImage);
        }
        return randomImageArray;
    }

    this.randomNum = function (array) {
        return Math.floor(Math.random() * array.length)
    }

    this.createCards = function(images) {
        var cardCreatedArray = [];
        for ( var i = 0; i < images.length; i++){
            var newCard = new Card(images[i], this);
            var cardDom = newCard.render();
            $('#game-area').append(cardDom);
            cardCreatedArray.push(newCard);
        }
        return cardCreatedArray;
    }

    this.handleCardClick = function(cardClicked) {
        if(this.cardsClickedArray.length < 2){
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
                        setTimeout(this.winner.bind(this), 1000);
                    }    
                    setTimeout(this.handleMatch.bind(this), 1000);
                } else {
                    setTimeout(this.resetCardsClicked.bind(this), 1000);
                    this.attempts++
                    this.calulateAccuracy();
                }
            }
        }

        this.handleMatch = function() {
            for (var i = 0; i < this.cardsClickedArray.length; i++) {
                this.cardsClickedArray[i].handleMatchCard();
            }
            this.clearCardsClicked();
        }

        this.matchCards = function() {
            $('.reveal').addClass('match').fadeTo(1000, 0)
        }

        this.winner = function() {
            this.playerWins();
        }
        
        this.resetCardsClicked = function() {
            for (var i = 0; i < this.cardsClickedArray.length; i++) {
                this.cardsClickedArray[i].hideCard();
            }
            this.clearCardsClicked();
        };
        this.updateStats();
    }

    this.clearCardsClicked = function() {
        this.cardsClickedArray = [];
    };

    this.calulateAccuracy = function() {
        this.accuracy = (this.matchCounter / this.attempts * 100).toFixed(0);
        return this.accuracy;
    };

    this.updateStats= function() {
        $('.attempts .value').text(this.attempts);
        $('.games-played .value').text(this.gamesPlayed);
        if (this.accuracy === undefined){
            $('.accuracy .value').text(this.accuracy);
        }else {
            $('.accuracy .value').text(this.accuracy+'%');
        }
    };

    this.handleResetClick = function() {
        $('.reset').click(this.resetGame.bind(this));
    };

    this.resetGame = function() {
        $('#game-area').html('');
        this.resetStats();
        this.createGame();
    };  

    this.resetStats = function() {
        this.gamesPlayed++;
        this.matchCount = 0;
        this.matchCounter = 0;
        this.attempts = 0;
        this.accuracy = 0;
        this.updateStats();
        this.clearCardsClicked();
    };

    this.playerWins = function() {
        this.winnerModal();
    }


    this.winnerModal = function() {
        $('.modal').show();
        this.closeButton();
    }
    
    this.closeButton = function() {
        $('.close').click(this.closeModal.bind(this));
    }

    this.closeModal= function() {
        $('.modal').hide();
        this.resetGame();
    }
}

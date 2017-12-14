function Game(){
    this.initizialize = function(){
        this.createBoard()
    }

    this.imageArray =[
        'images/barb.png', 
        'images/archer',
        'images/hog.png', 
        'images/icewiz.png',
        'images/giant.png', 
        'images/gob.png', 
        'images/prince.png', 
        'images/bomber.png',
        'images/pekka.png',];


    }


 
 
    // this.handleCardClick = function (cardObj) {
    //     this.soundList.flop.play();
    //     if (this.clickedCardsList.length < 2) {
    //         if (this.clickedCardsList[0] == cardObj) {
    //             return;
    //         }
    //         this.clickedCardsList.push(cardObj);
    //         cardObj.revealSelf();

    //         if (this.clickedCardsList.length === 2) {
    //             if (this.clickedCardsList[0].getID() === this.clickedCardsList[1].getID()) {
    //                 this.matchCount += 2;
    //                 this.matchCounter++;
    //                 this.attempts++;
    //                 this.clearClickedCardsList();
    //                 this.calculateAccuracy();
    //                 this.handleCardMatch();
    //                 setTimeout(() => { this.soundList.match.play() }, this.soundDelay);

    //                 if (this.matchCount === this.cardList.length) {
    //                     this.soundList.victory.play();
    //                     this.victoryModal();
    //                     setTimeout(() => { this.levelChange() }, this.revertTime);
    //                 }
    //             }
    //             else {
    //                 this.attempts++;
    //                 this.calculateAccuracy();
    //                 setTimeout(() => { this.soundList.wrong.play() }, this.soundDelay);
    //                 setTimeout(this.revertClickedCards.bind(this), this.revertTime);
    //             }
    //         }
    //     }
    // };

    // this.clearClickedCardsList = function () {
    //     this.clickedCardsList = [];
    // };

    // this.revertClickedCards = function () {
    //     for (var i = 0; i < this.clickedCardsList.length; i++) {
    //         this.clickedCardsList[i].hideSelf();
    //     }
    //     this.clearClickedCardsList();
    // };

    // this.handleCardMatch = function () {
    //     $('.flipped > .front').fadeTo(500, 0, function () {
    //         $('.revealed').off();
    //     });
    // };




function Card(frontImage, parentObj) {
    this.frontImage = frontImage;
    this.parent = parentObj;
    // this.revealed = false;
    // this.renderedElement = null;

    this.render = function () {
        var card = $('<div>', {
            class: 'card'
        });
        var front = $('<div>', {
            class: 'front',
            css: {
                backgroundImage: `url(${this.frontImage})`,
                minHeight: '135px',
                minWidth: '135px',
                maxHeight: '135px',
                maxWidth: '135px'
            }
        });
        var back = $('<div>', {
            class: 'back',
        })
        card.click(this.handleClick.bind(this));
        this.renderedBack = back;
        card.append(front, back);
        this.card = card;
        return card;
    }

    this.handleClick = function () {
        console.log('card clicked');
        this.parent.handleCardClick(this);
    }

    this.revealCard = function () {
        this.card.toggleClass('flip');
        this.renderedBack.hide();
    }
    this.hideCard = function () {
        this.card.toggleClass('flip');
        this.renderedBack.show();
    }
    this.getId = function () {
        return this.frontImage;
    }
}

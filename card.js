function Card(frontImage, parentObj) {
    this.frontImage = frontImage;
    this.parent = parentObj;

    this.render = function () {
        var card = $('<div>', {
            class: 'card'
        });
        var front = $('<div>', {
            class: 'front',
            css: {
                backgroundImage: `url(${this.frontImage})`,
                // height: '140px',
                // width: '140px'
                // minHeight: '140px',
                // minWidth: '140px',
                // maxHeight: '140px',
                // maxWidth: '140px'
            }
        }).hide();
        var back = $('<div>', {
            class: 'back',
        })
        card.click(this.handleClick.bind(this));
        this.renderedBack = back;
        this.renderedFront = front;
        card.append(front, back);
        this.card = card;
        return card;
    }

    this.handleClick = function () {
        console.log('card clicked');
        this.parent.handleCardClick(this);
    }

    this.revealCard = function () {
        this.card.toggleClass('flip-card');
        this.renderedFront.show()
        this.renderedBack.hide();
    }
    this.hideCard = function () {
        this.card.toggleClass('flip-card');
        this.renderedFront.hide();
        this.renderedBack.show();
    }
    this.getId = function () {
        return this.frontImage;
    }
}

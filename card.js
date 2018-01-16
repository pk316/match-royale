function Card(frontImage, parentObj) {
    this.frontImage = frontImage;
    this.parent = parentObj;
    this.revealed = false;
    this.renderedElement = null;

    this.render = function () {
        var card = $("<div>", {
            class: 'card'
        });
        card.click(this.handleClick.bind(this));
        var front = $("<div>", {
            class: 'front',
            css: {
                backgroundImage: `url(${this.frontImage})`
            }
        });
        var back = $("<div>", {
            class: 'back',
        })
        this.renderedBack = back;
        card.append(front, back);
        this.renderedElement = card;
        return card;
    }

    this.handleClick = function () {
        console.log('card clicked');
        this.parent.handleCardClick(this);
    }

    this.revealCard = function () {
        this.renderedBack.hide();
    }
    this.hideCard = function () {
        this.renderedBack.show();
    }
    this.getId = function () {
        return this.frontImage;
    }
}

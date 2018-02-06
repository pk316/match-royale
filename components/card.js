function Card(front, cardClicked) {
    this.front = front;
    this.cardClicked = cardClicked;

    this.render = function () {
        var card = $('<div>', {
            class: 'card'
        });
        var front = $('<div>', {
            class: 'front',
            css: {
                backgroundImage: `url(${this.front})`,
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
        this.cardClicked.handleCardClick(this);
    }

    this.checkId = function () {
        return this.front;
    }

    this.revealCard = function () {
        this.card.toggleClass('flip-card');
        this.renderedFront.addClass('reveal').show()
        this.renderedBack.hide();
    }

    this.hideCard = function () {
        this.card.toggleClass('flip-card');
        this.card.toggleClass('revealed');
        this.renderedFront.removeClass('reveal').hide();
        this.renderedBack.show();
    }
}

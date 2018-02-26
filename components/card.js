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
        return this.front['0'];
    }

    this.revealCard = function () {
        this.card.toggleClass('flip-card');
        this.renderedFront.toggleClass('reveal').show()
        this.renderedBack.hide();
    }

    this.hideCard = function () {
        this.card.removeClass('flip-card');
        this.renderedFront.removeClass('reveal').hide();
        this.renderedBack.show();
    }

    this.handleMatchCard = function () {
        this.card.addClass('matched')
    }
}
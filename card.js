function Card(frontImage, parentObj){
    this.frontImage = frontImage;
    this.parent = parentObj;
    this.revealed = false;
    this.renderedElement = null;

    this.render = function(){
        var card = $("div",{
            class: 'card'
        });
        card.click(this.handleClick);
        var front = $("<div>",{
            class: 'front',
            css: {
            backgroundImage: `url(${this.frontImage})`
        }
    });      
        var back = $("<div>",{
            class: 'back',
        })
        card.append(front, back);
        this.renderedElement = card;
        return card;
    }

    this.handleClick = function(){
        console.log('handling card click');
    }
}
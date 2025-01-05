class Overworld {
    constructor(config) {
        // NOTE: this helps us draw something in the canvas tag

        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    init() {
        // NOTE: starting to draw stuff on the screen
        // NOTE: to show something on canvas we need to load this image to browser first as background memory
        const image = new Image();
        image.onload = () => {
            this.ctx.drawImage(image,0,0)
        };
        image.src = "/images/maps/DemoLower.png";


        const x = 5;
        const y = 6;

        const shadow = new Image();
        shadow.onload = () => {
            this.ctx.drawImage(
                shadow,
                0, //left cut of the whole sprite
                0, //top cut
                32, //width of cut of the sprite sheet
                32, //height of cut of the sprite sheet
                x * 16 - 8,
                y * 16 - 18,
                32,
                32
            )
        };
        shadow.src = "/image/characters/shadow.png";


        const hero = new Image();
        hero.onload = () => {
            //Draw the hero...
            this.ctx.drawImage(
                hero,
                0, //left cut of the whole sprite
                0, //top cut
                32, //width of cut of the sprite sheet
                32, //height of cut of the sprite sheet
                x * 16 - 8,
                y * 16 - 18,
                32,
                32
            )
        };
        hero.src = "/images/characters/people/hero.png";

    }


}

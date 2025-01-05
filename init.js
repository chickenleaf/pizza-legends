(function (){

    // NOTE: pretty much our starting point in the whole browser game
    const overworld = new Overworld({
        element: document.querySelector(".game-container")
    });
    overworld.init();

})();
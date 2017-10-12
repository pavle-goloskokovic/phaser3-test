var stats = new Stats();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom);
stats.dom.style.cssText = 'position: fixed; bottom: 0; right: 0; cursor: pointer; opacity: 0.9; z-index: 10000;';

var config = {
    type: Phaser.CANVAS,
    width: window.innerWidth,
    height: window.innerHeight,
    scene: {
        preload: preload,
        create: create
    },
    //  Open the Dev Tools
    //  The title of your game will appear in the banner text
    title: 'Prune Games'
};

var game = new Phaser.Game(config);

var _oldStep = game.step;
game.step = function() {
    stats.begin();
    _oldStep.apply(game, arguments);
    stats.end();
};

function preload ()
{
    this.load.image('logo', 'assets/images/logo.png');
    this.load.image('pizza', 'assets/images/pizza.gif');
    this.load.image('pizza-beer', 'assets/images/pizza-beer.jpg');
    this.load.image('pizza-beeer', 'assets/images/pizza-beer.jpeg');

    this.load.svg('homer', 'assets/images/homer.svg');

    this.load.html('html', 'src/html/test.html');
}

function create ()
{
    var logo = this.add.image(0, 0, 'logo');
    var pizza = this.add.image(window.innerWidth/4, window.innerHeight/4, 'pizza');
    var html = this.add.image(window.innerWidth, window.innerHeight, 'html');
    var pizzaBeer = this.add.image(window.innerWidth*3/4, window.innerHeight*3/4, 'pizza-beer');
    var pizzaBeeer = this.add.image(window.innerWidth, window.innerHeight, 'pizza-beeer');
    pizzaBeer.scaleX = pizzaBeer.scaleY = pizzaBeeer.scaleX = pizzaBeeer.scaleY = 0.3;

    var homer = this.add.image(window.innerWidth/2, window.innerHeight/2, 'homer');

    var text = this.add.text(80, 80, 'Game Title: ' + this.game.config.gameTitle, { font: '16px Courier', fill: '#ffffff' });
}



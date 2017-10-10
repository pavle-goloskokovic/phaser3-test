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
}

function create ()
{
    this.add.image(window.innerWidth/2, window.innerHeight/2, 'logo');

    var text = this.add.text(80, 80, 'Game Title: ' + this.game.config.gameTitle, { font: '16px Courier', fill: '#ffffff' });
    /*text.originX = 2;
    text.displayOriginX = 2;
    text.displayOriginY = 2;
    text.originY = 2;*/
    console.log(text);

}



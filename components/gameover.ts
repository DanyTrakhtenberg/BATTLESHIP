class GameOver {
    public static template = 
    '<div class="game-over">' +
    '<h3 class="press-start">PLAYER {{ turn + 1}} WINS!</h3>' +
    '<div class="start-button">' +
    '<a v-on:click="newGame" class="pure-button pure-button-primary href="#">NEW GAME</a>' +
    '</div>' +
    '</div>';

    public static props = ['turn', 'phase'];

    public static methods:any = {
        newGame: function() {
            this.$dispatch('newGame', '');
        }
    }

    public static config = {
        props: GameOver.props,
        template: GameOver.template,
        methods: GameOver.methods
    }
}

Vue.component('gameover', GameOver.config);
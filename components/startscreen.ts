class StartScreen {
    public static template = 
    '<div class="start-screen">' +
    '<h3 class="press-start blink_me">PRESS START</h3>' +
    '<div class="start-button">' +
    '<a v-on:click="start" class="pure-button pure-button-primary" href="#">Start</a>' +
    '</div>' +
    '</div>';
    public static methods:any = {
        start: function() {
            this.$dispatch('newGame','');
        }
    }

    public static config = {
        template: StartScreen.template,
        methods: StartScreen.methods
    }
}

Vue.component('startscreen', StartScreen.config);
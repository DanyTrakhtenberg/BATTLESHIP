var Hud = (function () {
    function Hud() {
    }
    Hud.template = '<div class="hud">' +
        '<h1>Player {{curPlayer}}\'s turn</h1>' +
        '<a v-on:click="fire" class="pure-button pure-button-primary" href="#">Fire</a>' +
        '</div>';
    Hud.props = ['games', 'curPlayer', 'selected'];
    Hud.methods = {
        fire: function () {
            console.log('firing.');
            this.$dispatch('fire', this.selected);
        }
    };
    Hud.config = {
        props: Hud.props,
        template: Hud.template,
        methods: Hud.methods
    };
    return Hud;
})();
Vue.component('hud', Hud.config);

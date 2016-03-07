var Tile = (function () {
    function Tile() {
    }
    Tile.props = ['info', 'coord', 'selected', 'missed', 'hit'];
    Tile.template = '<div v-on:click="setSelected" v-bind:class="{ \'selected\': isSelected, \'missed\': isMissed, \'hit\': isHit }"  class="flex-item">{{coord.x}},{{coord.y}}</div>';
    Tile.computed = {
        isSelected: function () {
            // return this.selected === this.coord.x + ',' + this.coord.y;
            return this.selected.x === this.coord.x && this.selected.y === this.coord.y;
        }
    };
    Tile.methods = {
        setSelected: function () {
            this.$dispatch('selected', { x: this.coord.x, y: this.coord.y });
        }
    };
    Tile.config = {
        props: Tile.props,
        template: Tile.template,
        computed: Tile.computed,
        methods: Tile.methods
    };
    return Tile;
})();
Vue.component('tile', Tile.config);

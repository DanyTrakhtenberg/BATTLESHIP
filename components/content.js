var Content = (function () {
    function Content() {
    }
    Content.props = ['games', 'selected', 'phase', 'hits', 'misses'];
    Content.template = '<div v-for="hit in hits">hit</div>' +
        '<div v-for="miss in misses">miss</div>' +
        '<hud :selected="selected" :cur-player="curPlayer" :games="games"></hud>' +
        '<div class="content">' +
        '<board :selected="selected"></board>' +
        '</div>';
    Content.computed = {
        players: function () {
            console.log(this.games);
            return this.games.Players;
        }
    };
    Content.data = function () {
        return {
            curPlayer: 0
        };
    };
    Content.config = {
        template: Content.template,
        props: Content.props,
        data: Content.data
    };
    return Content;
})();
Vue.component('content', Content.config);

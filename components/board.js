var Board = (function () {
    function Board() {
    }
    Board.props = ['selected', 'hitMap', 'missMap'];
    Board.template = '<row v-for="r in rows" :selected="selected" :tiles="rows[$index]" track-by="$index"></row>';
    Board.data = function () {
        return {
            size: 10
        };
    };
    Board.computed = {
        numb: function () {
            return 10;
        },
        rows: function () {
            var result = [];
            console.log(this.size);
            for (var i = 0; i < this.size; i++) {
                var inner = [];
                for (var j = 0; j < this.size; j++) {
                    inner.push([{ x: i, y: j }]);
                }
                result.push(inner);
            }
            console.log(result);
            return result;
        },
        size: function () {
            return 10;
        }
    };
    Board.config = {
        template: Board.template,
        props: Board.props,
        data: Board.data,
        computed: Board.computed
    };
    return Board;
})();
Vue.component('board', Board.config);

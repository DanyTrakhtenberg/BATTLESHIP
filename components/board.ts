class Board {
	public static props = ['selected','hits','misses','phase'];
	public static template =
	'<row v-for="r in rows" :selected="selected" :hits="hits" :misses="misses" :phase="phase" :tiles="rows[$index]" track-by="$index"></row>';

	public static data = function() {
		return {
			size: 10
		}
	};

	public static computed:any = {
		numb: function() {
			return 10;
		},
		rows: function() {
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
		size: function() {
			return 10;
		}


	}

	public static config = {
		template: Board.template,
		props: Board.props,
		data: Board.data,
		computed: Board.computed
	}
}

Vue.component('board', Board.config);


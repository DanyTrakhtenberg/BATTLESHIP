class Content {
	public static props = ['games','selected', 'phase', 'hits', 'misses','turn'];

	public static template =
	'<div class="main">' +
	'<hud :turn="turn" :phase="phase" :selected="selected" :games="games"></hud>' +
	'<div class="content">' +
	'<board :phase="phase" :hits="hits" :misses="misses" :selected="selected"></board>' +
	'</div>' +
	'<div class="footer">BATTLESHIP</div>' +
	'</div>';


	public static watch:any = {
		hits: function(val, old) {
			console.log('watching hits: ');
			console.log(val);
			console.log(old);			
		},
		misses: function(val, old) {
			console.log('watching misses: ');
			console.log(val);
			console.log(old);
		}
	}

	public static computed = {
		players: function() {


			console.log(this.games);
			return this.games.Players;
		}
	}

	public static data:any = function(){
		return {
			curPlayer: 0
		}
	}

	public static config = {
		template: Content.template,
		props: Content.props,
		data: Content.data,
		watch: Content.watch
	};
}

Vue.component('content', Content.config);
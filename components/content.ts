class Content {
	public static props = ['msg','kills','games','selected', 'phase', 'hits', 'misses','turn'];

	public static template =
	'<div class="main">' +
	'<hud v-if="main || waiting" :kills="kills" :msg="msg" :turn="turn" :phase="phase" :selected="selected" :games="games"></hud>' +
	'<div class="content">' +
	'<board v-if="main || waiting" :phase="phase" :hits="hits" :misses="misses" :selected="selected"></board>' +
	'<startscreen v-if="start"></startscreen>' +
	'</div>' +
	'</div>' +	
	'<div class="footer">BATTLESHIP</div>';


	public static computed:any = {
		main: function() {
			return this.phase === GamePhase.MAIN;
		},
		start: function() {
			return this.phase === GamePhase.START;
		},
		waiting: function() {
			return this.phase === GamePhase.WAITING;
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
		computed: Content.computed
	};
}

Vue.component('content', Content.config);
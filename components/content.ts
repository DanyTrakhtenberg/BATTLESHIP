class Content {
	public static props = ['msg','kills','games','selected', 'phase', 'hits', 'misses','turn'];

	public static template =
	'<div class="main">' +
	'<hud v-if="main || waiting" :kills="kills" :msg="msg" :turn="turn" :phase="phase" :selected="selected" :games="games"></hud>' +
	'<div class="content">' +
	'<board v-if="main || waiting" :phase="phase" :hits="hits" :misses="misses" :selected="selected"></board>' +
	'<startscreen v-if="start"></startscreen>' +
	'<gameover v-if="end" :phase="phase" :turn="turn"></gameover>' +
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
		},
		end: function() {
			return this.phase === GamePhase.END;
		}
	}

	public static config = {
		template: Content.template,
		props: Content.props,
		computed: Content.computed
	};
}

Vue.component('content', Content.config);
class Hud {
	public static template =
	'<div class="hud">'+
	'<h3 class="hud-item turn-title">Player {{turn + 1}}</h1>' +
	'<div class="buttons hud-item">' +
	'<a v-show="!waiting && selectionMade" v-on:click="fire" class="blink_me pure-button pure-button-primary" href="#">Fire</a>' +
	'<a v-show="waiting" v-on:click="nextTurn" class="pure-button pure-button-primary" href="#">Next Turn</a>' +	
	'</div>' +
	'</div>';

	public static props = ['games', 'selected', 'phase','turn'];
	public static methods:any = {
		fire: function() {
			var payload = { x: this.selected.x, y: this.selected.y };
			this.$dispatch('fire', payload);
		},
		nextTurn: function() {
			this.$dispatch('nextTurn');
		}
	}
	public static computed: any = {
		waiting: function() {
			return this.phase === GamePhase.WAITING;
		},
		selectionMade: function() {
			return this.selected.x !== -1 && this.selected.y !== -1;
		}
	}

	public static config = {
		props: Hud.props,
		template: Hud.template,
		methods: Hud.methods,
		computed: Hud.computed
	}
}


Vue.component('hud', Hud.config);
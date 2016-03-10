class Hud {
	public static template =
	'<div class="hud">'+
	'<h3 class="hud-item turn-title">PLAYER {{turn + 1}}</h1>' +
	'<div class="buttons hud-item">' +
	'<a v-show="!waiting && selectionMade" v-on:click="fire" class="blink_me pure-button pure-button-primary" href="#">FIRE</a>' +
	'<a v-show="waiting" v-on:click="nextTurn" class="pure-button pure-button-primary" href="#">NEXT TURN</a>' +	

	'</div>' +	
	'<div class="kill-list">' +
	'<p class="destroyed">TARGETS DESTROYED:</p>' +
	'<p v-for="kill in kills">{{kill}}</p>' +
	'</div>' +
	'<h3 class="hud-message">{{ msg }}</h3>' +	
	'</div>';

	public static props = ['kills', 'games', 'selected', 'phase','turn','msg'];
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
	public static watch: any = {
		kills: function(val, old) {
			console.log('kills: ');
			console.log(val);
		},
		msg: function(val, old) {
			console.log(val);
		}
	}

	public static config = {
		props: Hud.props,
		template: Hud.template,
		methods: Hud.methods,
		computed: Hud.computed,
		watch: Hud.watch
	}
}


Vue.component('hud', Hud.config);
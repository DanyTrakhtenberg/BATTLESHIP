class Hud {
	public static template =
	'<div class="hud">'+
	'<div class="row">'+
    	'<div class="buttons hud-item">' +
        	'<h3 class="turn-title">PLAYER {{turn + 1}}</h1>' +	
        	'<a v-show="!waiting" v-on:click="fire" :disabled="!selectionMade" class="pure-button pure-button-primary" v-bind:class="{ \'blink_me\': selectionMade }" href="#">FIRE</a>' +
        	'<a v-show="waiting" v-on:click="nextTurn" class="pure-button pure-button-primary" href="#">NEXT TURN</a>' +	
    	'</div>' +	
    	'<div class="kill-list hud-item">' +
        	'<p class="destroyed">TARGETS DESTROYED:</p>' +
        	'<p v-for="kill in kills">{{kill}}</p>' +
        '</div>' +
    '</div>' + // end row
    '<div class="row">' +
    	'<div class="hud-item hud-message">' +
        	'<h5>{{ msg }}</h5>' +	
        '</div>' +
    '</div>' + // end row
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

	public static config = {
		props: Hud.props,
		template: Hud.template,
		methods: Hud.methods,
		computed: Hud.computed,
	}
}


Vue.component('hud', Hud.config);
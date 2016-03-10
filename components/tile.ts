class Tile {
	public static props = ['info', 'coord', 'selected', 'hits', 'misses', 'phase'];
	public static template =
	'<div v-on:click="setSelected" v-bind:class="{ \'selected\': isSelected, \'missed\': isMissed, \'hit\': isHit }"  class="flex-item">{{coord.x}},{{coord.y}}<br>{{ isMissed ? \'X\' : \'\' }} {{ isHit ? \'HIT\' : \'\' }}</div>';

	public static computed: any = {
		isSelected: function() {
			return this.selected.x === this.coord.x && this.selected.y === this.coord.y;
		},
		isHit: function() {
			var result = this.hits.some(hit => {
				return hit.x === this.coord.x && hit.y === this.coord.y;
			});			
			if(result) {
				this.hit = true;
			}
			return result;
		},
		isMissed: function() {
			var result = this.misses.some(miss => {
				return miss.x === this.coord.x && miss.y === this.coord.y;
			});						
			if(result) {
				this.miss = true;
			}
			return result;
		},
		message: function() {
			if (this.hit)
				return 'HIT!'
			if (this.miss)
				return 'MISS!'
			return '';
		}		
	}
	public static methods: any = {
		setSelected: function() {
			if (this.isHit || this.isMissed)
				return;
			if (this.phase === GamePhase.WAITING)
				return;
			this.$dispatch('selected', { x: this.coord.x, y: this.coord.y });
		}
	}

	public static data: any = function() {
		return {
			hit: false, 
			miss: false
		};
	}

	public static config:any = {
		props: Tile.props,
		template: Tile.template,
		computed: Tile.computed,
		methods: Tile.methods,
		data: Tile.data
	}
}

Vue.component('tile', Tile.config);

class Row {
	public static props = ['tiles','selected', 'hits', 'misses', 'phase'];
	public static template =
	'<div class="flex-container">' +
	'<tile v-for="n in tiles" :hits="hits" :misses="misses" :phase="phase" :selected="selected" :coord="n[0]"></tile>' +
	'</div>';

	public static computed:any = {
	}

	public static config = {
		template: Row.template,
		props: Row.props,
		computed: Row.computed
	}

}

Vue.component('row', Row.config);
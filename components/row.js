var Row = (function () {
    function Row() {
    }
    Row.props = ['tiles', 'selected'];
    Row.template = '<div class="flex-container">' +
        '<tile v-for="n in tiles" :selected="selected" :coord="n[0]"></tile>' +
        '</div>';
    Row.computed = {};
    Row.config = {
        template: Row.template,
        props: Row.props,
        computed: Row.computed
    };
    return Row;
})();
Vue.component('row', Row.config);

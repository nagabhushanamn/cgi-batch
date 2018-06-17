import Component from '@ember/component';

export default Component.extend({
    currentTab: 1,
    init() {
        this._super(...arguments)
        console.log('my-product component - init()');
    },
    actions: {
        changeTab: function (tabIndex) {
            this.set('currentTab', tabIndex);
        }
    }
});

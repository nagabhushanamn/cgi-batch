import Component from '@ember/component';

export default Component.extend({
    totalCount: 100,
    nums:[1,10,10,100,-100,1000,200],
    init() {
        console.log('counter-box instantiated');
        this._super(...arguments);
    },
    actions: {
        incrementTotalCount() {
            this.set('totalCount', this.get('totalCount') + 1);
        },
    }
});

import Component from '@ember/component';

export default Component.extend({
    count: 0,
    init() {
        console.log('action-button-box instantiated');
        this._super(...arguments);
    },
    actions: {
        handleBtnClick: function () {
            this.set('count', this.get('count') + 1);
            this.get('onAction')();
        },
        handle(){
            console.log('another handler..');
        }
    }
});

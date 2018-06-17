import Route from '@ember/routing/route';


export default Route.extend({
    model() {
        //sample model-data
        const products = [
            {
                id: 111,
                name: 'Laptop',
                price: 240000,
                description: 'New Mac pro',
                image:'images/Laptop.png'
            },
            {
                id: 222,
                name: 'Mobile',
                price: 20000,
                description: 'New  pro',
                image:'images/Mobile.png'
            }
        ];
        return products;
    }
});

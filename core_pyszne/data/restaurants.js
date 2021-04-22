let restaurants = [
    {
        id: 1,
        name: 'Fat burger',
        products: [
            {
                name: 'standart burger',
                price: 10
            },
            {
                name: 'beef burger',
                price: 12
            },
            {
                name: 'farmer burger',
                price: 13
            },
            {
                name: 'chicken burger',
                price: 11
            }
        ]
    },
    {
        id: 2,
        name: 'Pizza Italiana',
        products: [
            {
                name: 'mozarella',
                price: 8
            },
            {
                name: 'neapolitan',
                price: 11
            },
            {
                name: 'pepperoni',
                price: 10
            },
            {
                name: 'capricciosa',
                price: 13
            },
            {
                name: 'vegetarian',
                price: 9
            }
        ]
    },
    {
        id: 3,
        name: 'Asian cousine',
        products: [
            {
                name: 'sushi mix',
                price: 15
            },
            {
                name: 'futomaki',
                price: 11
            },
            {
                name: 'maki',
                price: 10
            },
            {
                name: 'sashimi',
                price: 16
            }
        ]
    }
];

function getRestaurants() {
    return restaurants;
};

function getRestaurantById(id) {
    let idToFind = +id;
    return restaurants.filter(r => r.id === idToFind);
};

module.exports = {
    getRestaurants,
    getRestaurantById

};
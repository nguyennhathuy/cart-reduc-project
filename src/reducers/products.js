

var initialState = [
    {
        id: 1,
        name: 'Iphone 11 Pro Max',
        image: 'https://phucanhcdn.com/media/product/36955_iph11_green.jpg',
        rating: 5,
        price: 1100,
        description: 'Design by Apple in California.'
    },
    {
        id: 2,
        name: 'Iphone 11',
        image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/300x/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone11-purple-select-2019_2_1_3_2.png',
        rating: 4,
        price: 700,
        description: 'Design by Apple in California.'
    },
    {
        id: 3,
        name: 'Macbook Pro 2020 13Inch',
        image: 'https://macone.vn/wp-content/uploads/2020/05/macbookpro2020-grey.jpeg',
        rating: 5,
        price: 1200,
        description: 'Design by Apple in California.'
    }
];

var myReducer = (state = initialState, action) => {
    return state;
};
export default myReducer;
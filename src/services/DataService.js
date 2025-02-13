const catalog = [
    {
        title: "Apple",
        catagory: "Fruit",
        price: 12.5,
        image: "/images/apple.jpeg",
        _id: '1'      
    },
    {
        title: "Watermelon",
        catagory: "Fruit",
        price: 15.0,
        image: "/images/watermelon.avif",
        _id: '2'      
    },
    {
        title: "Orange",
        catagory: "Fruit",
        price: 10.0,
        image: "/images/orange.jpg",
        _id: '3'      
    },
    {
        title: "Kiwi",
        catagory: "Fruit",
        price: 20.0,
        image: "/images/kiwi.jpg",
        _id: '4'     
    },
    {
        title: "Tomato",
        catagory: "Vegatables",
        price: 5.0,
        image: "/images/tomato.jpg",
        _id: '5'

    },
    {
        title: "Potato",
        catagory: "Vegatables",
        price: 4.0,
        image: "/images/potato.jpg",
        _id: '6'
    },
    {
        title: "Brocoli",
        catagory: "Vegatables",
        price: 6.0,
        image: "/images/brocoli.jpg",
        _id: '7'
    },
    { 
        title: "Spinach",
        catagory: "Vegatables",
        price: 3.0,
        image: "/images/spinach.jpg",
        _id: '8'
    }
];

class DataService{
    getProducts(){
        return catalog;
    }
    getCategories(){
        return ['Fruit', 'Vegetable'];
    }
}

export default DataService;
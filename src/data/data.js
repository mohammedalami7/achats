import { staticImages } from "../utils/images";

 const NewArrivalData = [
  {
    id: "new-arrival-1",
    imgSource:staticImages.product1,
    title: "Knitted Joggers",
  },
  {
    id: "new-arrival-2",
    imgSource:staticImages.product2,
    title: "Full Sleeve",
  },
  {
    id: "new-arrival-3",
    imgSource:staticImages.product3,
    title: "Active T-Shirts",
  },
  {
    id: "new-arrival-4",
    imgSource:staticImages.product4,
    title: "Urban Shirts",
  },
  {
    id: "new-arrival-5",
    imgSource:staticImages.product15,
    title: "Urban Shirts",
  },
  {
    id: "new-arrival-6",
    imgSource: staticImages.product16,
    title: "Urban Shirts",
  },
  {
    id: "new-arrival-7",
    imgSource: staticImages.product17,
    title: "Urban Shirts",
  },
];

const savingZoneData = [
  {
    id: "saving-z-1",
    imgSource: staticImages.bigzone1,
    title: "Hawaiian Shirts",
    description: "Dress up in summer vibe",
    discount: 50,
    isLimited: false,
  },
  {
    id: "saving-z-2",
    imgSource: staticImages.bigzone2,
    title: "Printed T-Shirt",
    description: "New Designs Every Week",
    discount: 40,
    isLimited: true,
  },
  {
    id: "saving-z-3",
    imgSource: staticImages.bigzone3,
    title: "Cargo Joggers",
    description: "Move with style & comfort",
    discount: 50,
    isLimited: false,
  },
  {
    id: "saving-z-4",
    imgSource: staticImages.bigzone4,
    title: "Urban Shirts",
    description: "Live In Confort",
    discount: 20,
    isLimited: false,
  },
  {
    id: "saving-z-5",
    imgSource: staticImages.bigzone5,
    title: "Oversized T-Shirts",
    description: "Street Style Icon",
    discount: 60,
    isLimited: false,
  },
];
const products = [
  {
    id: 1,
    imgSource: staticImages.product1,
    title: "Active wear",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 2,
    imgSource: staticImages.product2,
    title: "Shirts",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 3,
    imgSource: staticImages.product3,
    title: "Shirts",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 4,
    imgSource: staticImages.product4,
    title: "Shirts",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 5,
    imgSource: staticImages.product5,
    title: "Shirts",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 6,
    imgSource: staticImages.product6,
    title: "Printed T-Shirts",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 7,
    imgSource: staticImages.product7,
    title: "Plain T-Shirts",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 8,
    imgSource: staticImages.product8,
    title: "Polo T-Shirt",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 9,
    imgSource: staticImages.product9,
    title: "Hoddies & Sweatshirt",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 10,
    imgSource: staticImages.product10,
    title: "Jeans",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 11,
    imgSource: staticImages.product11,
    title: "Boxers",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 12,
    imgSource: staticImages.product12,
    title: "Shirts",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 13,
    imgSource: staticImages.product13,
    title: "Shirts",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 14,
    imgSource: staticImages.product14,
    title: "Shirts",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 15,
    imgSource: staticImages.product15,
    title: "Shirts",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 16,
    imgSource: staticImages.product16,
    title: "Shirts",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 17,
    imgSource: staticImages.product17,
    title: "Printed T-Shirts",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 18,
    imgSource: staticImages.product18,
    title: "Plain T-Shirts",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
  {
    id: 19,
    imgSource: staticImages.product19,
    title: "Polo T-Shirt",
    brand: "Jhanvi’s Brand",
    price: 123.0,
  },
];
const CategoriesMen = [
  {
    id: 1,
    imgSource: staticImages.product1,
    title: "Active wear",
    brand: "Nike's Brand",
    price: 123.0,
    gender:'men'
  },
  {
    id: 2,
    imgSource: staticImages.product2,
    title: "Shirts",
    brand: "Adidas’s Brand",
    price: 100.0,
     gender:'men'
  },
  {
    id: 3,
    imgSource: staticImages.product3,
    title: "Shirts",
    brand: "Nike's Brand",
    price: 99.0,
     gender:'men'
  },
  {
    id: 4,
    imgSource: staticImages.product5,
    title: "Shirts",
    brand: "Palace’s Brand",
    price: 129.0,
     gender:'men'
  },
  {
    id: 5,
    imgSource: staticImages.product6,
    title: "Printed T-Shirts",
    brand: "Nike's Brand",
    price: 113.0,
     gender:'men'
  },
  {
    id: 6,
    imgSource: staticImages.product7,
    title: "Plain T-Shirts",
    brand: "Adidas’s Brand",
    price: 63.0,
     gender:'men'
  },
  {
    id: 7,
    imgSource: staticImages.product9,
    title: "Hoddies & Sweatshirt",
    brand: "Puma’s Brand",
    price: 123.0,
     gender:'men'
  },
  {
    id: 8,
    imgSource: staticImages.product10,
    title: "Jeans",
    brand: "Adidas’s Brand",
    price: 125.0,
     gender:'men'
  },
  {
    id: 9,
    imgSource: staticImages.product11,
    title: "Boxers",
    brand: "Puma’s Brand",
    price: 117.0,
     gender:'men'
  },
];
const CategoriesWomen=[
  
  {
    id: 1,
    imgSource: staticImages.product4,
    title: "Shirts",
    brand: "Puma’s Brand",
    price: 113.0,
    gender:'women'
  },
  {  
    id: 2,
    imgSource: staticImages.product12,
    title: "Shirts",
    brand: "Supreme’s Brand",
    price: 143.0,
    gender:'women'
  },
  {
    id: 3,
    imgSource: staticImages.product13,
    title: "Shirts",
    brand: "Palace’s Brand",
    price: 133.0,
    gender:'women'
  },
  {
    id:4,
    imgSource: staticImages.product14,
    title: "Shirts",
    brand: "Puma’s Brand",
    price: 123.0,
    gender:'women'
  },
  {
    id:5,
    imgSource: staticImages.product15,
    title: "Shirts",
    brand: "Palace’s Brand",
    price: 89.0,
    gender:'women'
  },
  {
    id:6,
    imgSource: staticImages.product16,
    title: "Shirts",
    brand: "Supreme’s Brand",
    price: 47.0,
    gender:'women'
  },
  {
    id:7,
    imgSource: staticImages.product17,
    title: "Printed T-Shirts",
    brand: "Puma’s Brand",
    price: 98.0,
    gender:'women'
  },
  {
    id:8,
    imgSource: staticImages.product18,
    title: "Plain T-Shirts",
    brand: "Supreme’s Brand",
    price: 110.0,
    gender:'women'
  },
  {
    id:9,
    imgSource: staticImages.product19,
    title: "Polo T-Shirt",
    brand: "Palace’s Brand",
    price: 123.0,
    gender:'women'
  },
]


const brandsData = [
  {
    id: "brand-1",
    imgSource: staticImages.brand1,
  },
  {
    id: "brand-2",
    imgSource: staticImages.brand2,
  },
  {
    id: "brand-3",
    imgSource: staticImages.brand3,
  },
  {
    id: "brand-4",
    imgSource: staticImages.brand4,
  },
  {
    id: "brand-5",
    imgSource: staticImages.brand5,
  },
];

const feedbackData = [
  {
    id: "feedback-1",
    imgSource: staticImages.test1,
    name: "Floyd Miles",
    designation: "Marketing Manger",
    rating: 3,
    feedbackText:
      "I am incredibly pleased with my recent shopping experience on this clothing ecommerce website. The user-friendly interface made it a breeze to browse through a wide range of stylish options. The variety of sizes and styles available was impressive, and I found the perfect outfit for a special occasion. ",
  },
  {
    id: "feedback-2",
    imgSource: staticImages.test2,
    name: "Ronald Richards",
    designation: "Teacher",
    rating: 4,
    feedbackText:
      "This clothing ecommerce website has become my go-to destination for fashion finds. The selection is fantastic, catering to various tastes and preferences. From casual wear to elegant pieces, I always discover something unique and stylish. The website's organization and clear product images make it easy to make informed choices. ",
  },
  {
    id: "feedback-3",
    imgSource: staticImages.test3,
    name: "Savannah Nguyen",
    designation: "Student",
    rating: 4,
    feedbackText:
      "I want to express my gratitude for the exceptional service provided by this clothing ecommerce website. Not only is the website intuitive and easy to navigate, but the customer service team also went above and beyond to assist me with a query. ",
  },
  {
    id: "feedback-4",
    imgSource: staticImages.test4,
    name: "Arthur Ramsay",
    designation: "Fashion Designer",
    rating: 4,
    feedbackText:
      "I recently made a purchase from this clothing ecommerce website, and I couldn't be happier with my experience. The website is well-designed, making it easy to navigate and find the items I was looking for. The product descriptions were detailed, helping me make informed decisions.",
  },
];


// const cartItems = [
//   {
//     id: "C001",
//     title: "Blue Flower Print Crop Top",
//     color: "Yellow",
//     size: "M",
//     price: 29.0,
//     quantity: 2,
//     shipping: 0.0,
//     imgSource: staticImages.cart1,
//   },
//   {
//     id: "C002",
//     title: "Blue Flower Print Crop Top",
//     color: "Blue",
//     size: "XL",
//     price: 199.0,
//     quantity: 5,
//     shipping: 0.0,
//     imgSource: staticImages.cart2,
//   },
//   {
//     id: "C003",
//     title: "Blue Flower Print Crop Top",
//     color: "Yellow",
//     size: "M",
//     price: 123.0,
//     quantity: 1,
//     shipping: 5.0,
//     imgSource: staticImages.cart3,
//   },
// ];

const ProductFilterList = [
  {
    id: "prod_filter_1",
    title: "Tops",
  },
  {
    id: "prod_filter_2",
    title: "Printed T-shirts",
  },
  {
    id: "prod_filter_3",
    title: "Plain T-shirts",
  },
  {
    id: "prod_filter_4",
    title: "Kurti",
  },
  {
    id: "prod_filter_5",
    title: "Boxers",
  },
  {
    id: "prod_filter_6",
    title: "Full sleeve T-shirts",
  },
  {
    id: "prod_filter_7",
    title: "Joggers",
  },
  {
    id: "prod_filter_8",
    title: "Payjamas",
  },
  {
    id: "prod_filter_9",
    title: "Jeans",
  },
];

const StyleFilterList = [
  {
    id: "style_filter_1",
    title: "Classic",
  },
  {
    id: "style_filter_2",
    title: "Casual",
  },
  {
    id: "style_filter_3",
    title: "Business",
  },
  {
    id: "style_filter_4",
    title: "Sport",
  },
  {
    id: "style_filter_5",
    title: "Elegant",
  },
  {
    id: "style_filter_6",
    title: "Formal (evening)",
  },
];

export {
  products,
  CategoriesMen,
  CategoriesWomen,
  savingZoneData,
  brandsData,
  NewArrivalData,
  feedbackData,
  ProductFilterList,
  StyleFilterList,
};

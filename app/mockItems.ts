import { itemList } from "./itemList";

export const Products : itemList[] = [
    {
        id: 1,
        name: "Drinks",
        items : [
        {
            itemId: 1,
            itemName : "Coke",
            itemQuantity: 10,
            itemPurchased: 0,
            itemPrice: 40,
            selected: false
        },
        {
            itemId: 2,
            itemName : "Sprite",
            itemQuantity: 15,
            itemPurchased: 0,
            itemPrice: 20,
            selected: false
        },
        {
            itemId: 3,
            itemName : "ThumsUp",
            itemQuantity: 50,
            itemPurchased: 0,
            itemPrice: 40,
            selected: false
        },
    ]
},
    {
        id: 2,
        name: "Cookies",
        items : [
        {
            itemId: 1,
            itemName : "Oreo",
            itemQuantity: 20,
            itemPurchased: 0,
            itemPrice: 30,
            selected: false
        },
        {
            itemId: 2,
            itemName : "MilkBikkis",
            itemQuantity: 40,
            itemPurchased: 0,
            itemPrice: 10,
            selected: false
        },
        {
            itemId: 3,
            itemName : "DarkFantasy",
            itemQuantity: 100,
            itemPurchased: 0,
            itemPrice: 20,
            selected: false
        },
    ]
    }
]
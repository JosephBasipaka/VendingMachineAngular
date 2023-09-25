import { Component } from '@angular/core';
import { itemList } from './itemList';
import { Products } from './mockItems';
import { item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vending Machine';
  items: itemList[] = [...Products];
  itemId: number | undefined;
  filteredItem: itemList | undefined;

  constructor(){
    this.initializeProductQuantity();
    
}
Items() {
    const filteredItems = this.items.filter(item => item.id === this.itemId);
    if (filteredItems.length > 0) {
      this.filteredItem = filteredItems[0];
    } else {
      this.filteredItem = undefined;
    }
  }
  private initializeProductQuantity() {
    for (const itemList of this.items) {
      for (const item of itemList.items) {
    //     const purchasedItems = JSON.parse(localStorage.getItem('selectedItems') || '[]');
    //     console.log('items:',purchasedItems);
    //   const purchasedItem:item | undefined = purchasedItems.find((purchasedItem : item) => purchasedItem.itemId === item.itemId);
    //     console.log('item:',purchasedItem);
    //   if (purchasedItem) {
    //     item.itemQuantity += purchasedItem.itemPurchased;
    //   }
    //   else{
    //   console.log("update:",item);
  // }

  // for (const itemList of this.items) {
  //   for (const item of itemList.items) {
  //     const category = itemList.name;
  //     const purchasedItems = JSON.parse(localStorage.getItem(`${category}PurchasedItems`) || '[]');
  //     const purchasedItem = purchasedItems.find((purchasedItem: item) => purchasedItem.itemId === item.itemId);

  //     if (purchasedItem) {
  //       item.itemQuantity -= purchasedItem.itemPurchased;
  //     }
        item.itemPurchased = 0;
        item.selected = false;
      }
    }
  }
  incrementQuantity(item : item)
  {
    if(item.itemQuantity > 0){
      item.itemQuantity--;
      item.itemPurchased++;
    }
  }
  decrementQuantity(item : item)
  {
    if(item.itemQuantity >= 0 && item.itemPurchased > 0){
      item.itemQuantity++;
    item.itemPurchased--;
  }
  }
  calculateTotalPrice() {
    let totalPrice = 0;
    for (const itemList of this.items) {
      for (const item of itemList.items) {
        if (item.selected) {
          totalPrice += item.itemPurchased * item.itemPrice; 
        }
      }
    }
    return totalPrice;
  }
  buyItems() {
    const selectedItems = [];
  
    for (const itemList of this.items) {
      for (const item of itemList.items) {
        if (item.selected && item.itemPurchased > 0) {
          selectedItems.push({
            itemId: item.itemId,
            itemName: item.itemName,
            itemPurchased: item.itemPurchased,
            itemPrice: item.itemPrice
          });
        }
      }
    }
    // localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    // localStorage.setItem('totalPrice', JSON.stringify(this.calculateTotalPrice()));

  //   for (const itemList of this.items) {
  //     const category = itemList.name;

  // // Retrieve existing purchased items for the category from localStorage
  // const purchasedItems = JSON.parse(localStorage.getItem(`${category}PurchasedItems`) || '[]');

  // // Update purchased items with the latest selected items
  // for (const selectedItem of selectedItems) {
  //   const index = purchasedItems.findIndex((purchasedItem: item) => purchasedItem.itemId === selectedItem.itemId);
  //   if (index !== -1) {
  //     purchasedItems[index].itemPurchased += selectedItem.itemPurchased;
  //   } else {
  //     purchasedItems.push(selectedItem);
  //   }
  // }

  // // Update purchased items for the category in localStorage
  // localStorage.setItem(`${category}PurchasedItems`, JSON.stringify(purchasedItems));

    this.initializeProductQuantity();
  // }
  
}
}

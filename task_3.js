class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    console.log(this.items);
  }
  addItem(newItem) {
    this.items.push(newItem);
  }
  removeItem(removeItem) {
    let index = 0;
    if (this.items.includes(removeItem)) {
      index = this.items.indexOf(removeItem);
     this.items.splice(index, 1);
     
    };
  };
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

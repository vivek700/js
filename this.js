const product = {
  name: "Vanilla lip gloss",
  sku: "w234fg",
  stock: 276,
  getProductInfo: function () {
    console.log(
      //so this is used to access the properties inside the method. where this refers to the object that the method attched to
      //also this works differently in arrow function
      `Stock level for ${this.name} (SKU: ${this.sku}): ${this.stock} `,
    );
  },
};

product.getProductInfo();

//if we do this it will not gonna work
// const productInfo = product.getProductInfo;
// productInfo();
//

//to fix use bind()
//bind basically binds objects to methods
const productInfo = product.getProductInfo.bind(product);
productInfo();

class Product {
  title;
  imageUrl;
  price;
  description;

  constructor(title, imageUrl, price, description) {
    (this.title = title),
      (this.imageUrl = imageUrl),
      (this.price = price),
      (this.description = description);
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  render() {
    const listItem = document.createElement("li");
    listItem.className = "product-item";
    listItem.innerHTML = `
    <div>
        <img src = "${this.product.imageUrl}" alt = ${this.product.title}/>
        <div product-item__content>
        <h1>${this.product.title}</h1>
        <h3>\$${this.product.price}</h3> 
        <p>${this.product.description}</p>
        <button>Add to Cart</button>
        </div>
    </div>
    `;
    //don"t forget to return!!
    return listItem;
  }
}

class ProductList {
  products = [
    new Product(
      "pillow",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202312/0693/belgian-linen-pillow-c.jpg",
      14.99,
      "a nice pillow"
    ),

    new Product(
      "carpet",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202312/0693/belgian-linen-pillow-c.jpg",
      99.99,
      "a nice carpet"
    ),
  ];

  render() {
    const root = document.getElementById("app");
    const ulEl = document.createElement("ul");
    ulEl.className = "product-list";

    this.products.forEach((product) => {
      const productItem = new ProductItem(product);
      const renderedProductItem = productItem.render();
      ulEl.append(renderedProductItem);
      console.log("ulEl:", ulEl);
    });
    root.append(ulEl);
  }
}

const productList = new ProductList();
productList.render();

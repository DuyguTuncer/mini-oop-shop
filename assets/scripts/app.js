class Product {
  title = "default";
  imageUrl;
  price;
  description;

  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }
}

const productList = {
  products: [
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
  ],

  render() {
    const mainRoot = document.getElementById("app");
    const ulEl = document.createElement("ul");
    ulEl.className = "product-list";
    for (const product of this.products) {
      const newLiEl = document.createElement("li");
      newLiEl.className = "product-item";
      newLiEl.innerHTML = `
        <div>
            <img src = "${product.imageUrl}" alt = ${product.title}/>
            <div product-item__content>
            <h1>${product.title}</h1>
            <h3>\$${product.price}</h3> 
            <p>${product.description}</p>
            <button>Add to Cart</button>
            </div>
        </div>
        `;
      ulEl.append(newLiEl);
    }
    mainRoot.append(ulEl);
  },
};

productList.render();

const productCantainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");

export const showproductcontainer =(product) => {
    if(!product){
        return false;
    }
                                                                                                                                                    
    product.forEach((curProd) => {
        const { brand, category, description, id, image, name, price, stock } =
         curProd;

        const productClone = document.importNode(productTemplate.content, true);
        productClone.querySelector(".category").textContent = category;
      productClone.querySelector(".productName").textContent = name;
      productClone.querySelector(".productImage").src = image;
      productClone.querySelector(".productImage").alt = name;
      productClone.querySelector(".productStock").textContent = stock;
      productClone.querySelector(".productDescription").textContent = description;
      productClone.querySelector(".productPrice").textContent = `₹${price}`;
      productClone.querySelector(".productActualPrice").textContent = `₹${
        price * 4
      }`;
      productCantainer.append(productClone);

    })
}

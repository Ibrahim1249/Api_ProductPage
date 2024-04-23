const prdContainer = document.querySelector(".product-container");

async function fetchData(){
    const response = await fetch("https://dummyjson.com/products");
    const jsonData = await response.json();
    const prdData = jsonData.products;

    return displayData(prdData);



}
fetchData()

function displayData(productData){
    productData.forEach((item,index)=>{
        let product = document.createElement("div");
        product.classList.add("product");
        
        let productImg = document.createElement("img");
        let productHeading = document.createElement("h3");
        let productDesc = document.createElement("p");
        let productPrice = document.createElement("span");
        
        productHeading.innerText = item.title;
        
         productImg.src = item.images[0];
        
         productDesc.innerText = item.description;
        
         productPrice.innerText = item.price;
        
         product.append(productHeading);
         product.append(productImg);
         product.append(productDesc);
         product.append(productPrice);
        
         prdContainer.append(product);
    })
}





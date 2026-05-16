interface Product{
    title: string;
    id: number;
    price: number;
}

async function getProducts(): Promise <void> {
    try{
        const answer = await fetch("https://fakestoreapi.com/products/1");
        const product: Product = await answer.json();
        console.log(`Name: ${product.title}\nID: ${product.id}\nPrice: ${product.price}`);  
    } catch(error){
        console.log("Requisition error!");
    }
}
getProducts();
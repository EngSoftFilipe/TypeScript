interface Product{
    title: string;
    id: number;
    price: number;
}

async function getProducts(): Promise <void> {
    try{
        const answer = await fetch("https://fakestoreapi.com/products/1");
        const product: Product = await answer.json();
        console.log(`Nome: ${product.title}\nID: ${product.id}\nPreço: ${product.price}`);  
    } catch(error){
        console.log("Erro na requisição!");
    }
}
getProducts();
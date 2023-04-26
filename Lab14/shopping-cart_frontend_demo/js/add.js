let product = JSON.parse(localStorage.getItem("product"));

if(product!=null){
    document.getElementById('title').value = product.title;
    document.getElementById('description').value = product.description;
    document.getElementById('price').value = product.price;
    document.getElementById('id').value = product.id;
    
    document.getElementById('header-text').innerHTML = "Edit Product";
    document.getElementById('btnRegister').innerHTML = "Save";
    
    localStorage.removeItem("product");
}


async function postProduct(title, description, price) {
    let b = { "title": title, "description": description, "price": price }
    let setting = {
        method: 'POST',
        body: JSON.stringify(b),
        headers: { 'Content-Type': 'application/json' }
    };
    const response = await fetch("http://localhost:3000/products", setting);
    const jsonData = await response.json();
    return jsonData;
}

async function update(id, title, description, price) {
    let b = { "title": title, "description": description, "price": price }
    let setting = {
        method: 'PUT',
        body: JSON.stringify(b),
        headers: { 'Content-Type': 'application/json' }
    };
    const response = await fetch(`http://localhost:3000/products/${id}`, setting);
    const jsonData = await response.json();
    return jsonData;
}


document.getElementById('btnRegister').addEventListener('click', (event) => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const id = document.getElementById('id').value;
    
    if(id==null || id.trim()==""){
        data = postProduct(title, description, price);

        document.getElementById('title').innerHTML = data;
        document.getElementById('myform').reset();
    }
    else {
        data = update(id, title, description, price);
        document.getElementById('title').innerHTML = data;
        
        location.href = "index.html";
    }
   
});
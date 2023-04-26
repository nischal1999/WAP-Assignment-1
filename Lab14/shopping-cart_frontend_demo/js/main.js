window.onload = getProducts;


async function getProducts() {
    const response = await fetch("http://localhost:3000/products");
    const jsonData = await response.json();

    for (let e of jsonData) {
        addNewProductRowToTable(e);
    }

}


function addNewProductRowToTable(product) {
    const row = document.createElement('tr');
  
    let cell = document.createElement('td');
    cell.appendChild(document.createTextNode(product.id));
    row.appendChild(cell);
  
    cell = document.createElement('td');
    cell.appendChild(document.createTextNode(product.title));
    row.appendChild(cell);
  
    cell = document.createElement('td');
    cell.appendChild(document.createTextNode(product.description));
    row.appendChild(cell);
  
    cell = document.createElement('td');
    cell.appendChild(document.createTextNode(product.price));
    row.appendChild(cell);
  
    cell = document.createElement('td');
    const editButton = document.createElement('button');
    editButton.textContent = 'Update';
    editButton.addEventListener('click', () => editProduct(product));
    cell.appendChild(editButton);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteProduct(product.id));
    cell.appendChild(deleteButton);
    row.appendChild(cell);
    document.getElementById('tbodyProductList').appendChild(row);
  }
  function deleteProduct(id) {
    let result = confirm("Do you want to delete this product?");
    if (result) {
        fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
        })
        .then((res) => {
        if (res.ok) {
            alert("Deleted.")
            window.location.reload();
        } 
        });
     }
  }

 
  function editProduct(product) {
    localStorage.setItem("product", JSON.stringify(product));
    location.href = "add.html";
  }

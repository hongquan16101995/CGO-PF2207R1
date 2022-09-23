let array = []
let p1 = new Product("Iphone", 30000000, "White", "Apple")
let p2 = new Product("Samsung Fold4", 40000000, "Black", "Samsung")
array.push(p1)
array.push(p2)
localStorage.setItem("list", JSON.stringify(array))
//đọc thêm về JSON và localStorage

function deleteProduct(index) {
    if (confirm("Bạn chắc chắn muốn xóa?")) {
        array.splice(index,1)
        alert("Xóa thành công")
    }
    localStorage.setItem("list", JSON.stringify(array))
    displayProduct()
}

function editProduct(index) {
    document.getElementById("nameU").value = array[index].name
    document.getElementById("priceU").value = array[index].price
    document.getElementById("colorU").value = array[index].color
    document.getElementById("brandU").value = array[index].brand
    localStorage.setItem("indexUpdate", index)
}

function edit() {
    let name = document.getElementById("nameU").value
    let price = document.getElementById("priceU").value
    let color = document.getElementById("colorU").value
    let brand = document.getElementById("brandU").value
    if (name !== "" && price !== "" && color !== "" && brand !== "") {
        let product = new Product(name, price, color, brand)
        array[localStorage.getItem("indexUpdate")] = product
        alert("Sửa thành công")
    }
    localStorage.setItem("list", JSON.stringify(array))
    document.getElementById("nameU").value = ""
    document.getElementById("priceU").value = ""
    document.getElementById("colorU").value = ""
    document.getElementById("brandU").value = ""
    displayProduct()
}

function displayProduct() {
    array = JSON.parse(localStorage.getItem("list"))
    let data = "<table>"
    data += "<tr>"
    data += "<td><b>Product Name</b></td>"
    data += "<td><b>Product Price</b></td>"
    data += "<td><b>Product Color</b></td>"
    data += "<td><b>Product Brand</b></td>"
    data += "<td colspan='2' style=\"color: red;text-align: right\">" + array.length +" products</td>"
    data += "</tr>"
    for (let i = 0; i < array.length; i++) {
        data += "<tr>"
        data += "<td>" + array[i].name + "</td>"
        data += "<td>" + array[i].price + "</td>"
        data += "<td>" + array[i].color + "</td>"
        data += "<td>" + array[i].brand + "</td>"
        data += "<td><button onclick='editProduct(" + i + ")'>Edit</button></td>"
        data += "<td><button onclick='deleteProduct(" + i + ")'>Delete</button></td>"
        data += "</tr>"
    }
    data += "</table>"
    document.getElementById("display").innerHTML = data
}

function createProduct() {
    let name = document.getElementById("nameC").value 
    let price = document.getElementById("priceC").value 
    let color = document.getElementById("colorC").value 
    let brand = document.getElementById("brandC").value 
    let newProduct = new Product(name, price, color, brand)
    array.push(newProduct)
    document.getElementById("nameC").value = ""
    document.getElementById("priceC").value = ""
    document.getElementById("colorC").value = ""
    document.getElementById("brandC").value = ""
    localStorage.setItem("list",  JSON.stringify(array))
    displayProduct()
}

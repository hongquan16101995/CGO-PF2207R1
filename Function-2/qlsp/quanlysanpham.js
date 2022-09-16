let array = []

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
    let editPro = prompt("Nhập vào tên sản phẩm mới: ")
    if (editPro !== null) {
        array[index] = editPro
        alert("Sửa thành công")
    }
    localStorage.setItem("list", JSON.stringify(array))
    displayProduct()
}

function displayProduct() {
    array = JSON.parse(localStorage.getItem("list"))
    let data = "<table>"
    data += "<tr>"
    data += "<td colspan='2'><b>Product Name</b></td>"
    data += "<td style=\"color: red\">" + array.length +" products</td>"
    data += "</tr>"
    for (let i = 0; i < array.length; i++) {
        data += "<tr>"
        data += "<td>" + array[i] + "</td>"
        data += "<td><button onclick='editProduct(" + i + ")'>Edit</button></td>"
        data += "<td><button onclick='deleteProduct(" + i + ")'>Delete</button></td>"
        data += "</tr>"
    }
    data += "</table>"
    document.getElementById("display").innerHTML = data
}

function createProduct() {
    let newProduct = document.getElementById("create").value 
    array.push(newProduct)
    document.getElementById("create").value = ""
    localStorage.setItem("list",  JSON.stringify(array))
    displayProduct()
}

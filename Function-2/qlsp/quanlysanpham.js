let array = []
//mảng chứa sản phẩm trong giỏ hàng
let arrayCart = []
let p1 = new Product("Iphone", 30000000, "White", 20, "Apple")
let p2 = new Product("Samsung Fold4", 40000000, "Black", 20, "Samsung")
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
    document.getElementById("quantityU").value = array[index].quantity
    document.getElementById("brandU").value = array[index].brand
    localStorage.setItem("indexUpdate", index)
}

function edit() {
    let name = document.getElementById("nameU").value
    let price = document.getElementById("priceU").value
    let color = document.getElementById("colorU").value
    let quantity = document.getElementById("quantityU").value
    let brand = document.getElementById("brandU").value
    if (name !== "" && price !== "" && color !== "" && brand !== "" && quantity !=="") {
        let product = new Product(name, price, color, quantity, brand)
        array[localStorage.getItem("indexUpdate")] = product
        alert("Sửa thành công")
    }
    localStorage.setItem("list", JSON.stringify(array))
    document.getElementById("nameU").value = ""
    document.getElementById("priceU").value = ""
    document.getElementById("colorU").value = ""
    document.getElementById("quantityU").value = ""
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
    data += "<td><b>Product Quantity</b></td>"
    data += "<td><b>Product Brand</b></td>"
    data += "<td colspan='2' style=\"color: red;text-align: right\">" + array.length +" products</td>"
    data += "</tr>"
    for (let i = 0; i < array.length; i++) {
        data += "<tr>"
        data += "<td>" + array[i].name + "</td>"
        data += "<td>" + array[i].price + "</td>"
        data += "<td>" + array[i].color + "</td>"
        data += "<td>" + array[i].quantity + "</td>"
        data += "<td>" + array[i].brand + "</td>"
        data += "<td><button onclick='editProduct(" + i + ")'>Edit</button></td>"
        data += "<td><button onclick='deleteProduct(" + i + ")'>Delete</button></td>"
        //button thêm sản phẩm vào giỏ hàng
        data += "<td><button onclick='addToCart(" + i + ")'>AddCart</button></td>"
        data += "</tr>"
    }
    data += "</table>"
    document.getElementById("display").innerHTML = data
}

function createProduct() {
    let name = document.getElementById("nameC").value 
    let price = document.getElementById("priceC").value 
    let color = document.getElementById("colorC").value 
    let quantity = document.getElementById("quantityC").value 
    let brand = document.getElementById("brandC").value 
    let newProduct = new Product(name, price, color, quantity, brand)
    array.push(newProduct)
    document.getElementById("nameC").value = ""
    document.getElementById("priceC").value = ""
    document.getElementById("colorC").value = ""
    document.getElementById("quantityC").value = ""
    document.getElementById("brandC").value = ""
    localStorage.setItem("list",  JSON.stringify(array))
    displayProduct()
}

//hàm thêm sản phẩm vào giỏ hàng
function addToCart(index) {
    //lấy giỏ hàng tử localStorage
    arrayCart = JSON.parse(localStorage.getItem("cart")) 
    if (arrayCart == null) {
        arrayCart = []
    }
    let check = true
    //kiểm tra nếu sản phẩm đã có thì tăng số lượng, không tạo mới
    for(let i = 0; i < arrayCart.length; i++) {
        if (arrayCart[i].product.name === array[index].name) {
            arrayCart[i].amount += 1
            check = false
            break
        }
    }
    //nếu là sản phẩm mới thì tạo mới trong giỏ hàng
    if (check) {
        let cartElement = new Cart(array[index],1)
        arrayCart.push(cartElement)
    }
    array[index].quantity -= 1
    //lưu 2 mảng vào localstorage
    localStorage.setItem("cart", JSON.stringify(arrayCart))
    localStorage.setItem("list", JSON.stringify(array))
    displayProduct()
    displayCart()
}

//hàm hiển thị giỏ hàng
function displayCart() {
    arr = JSON.parse(localStorage.getItem("cart"))
    let data = "<table>"
    data += "<tr>"
    data += "<td><b>Product Name</b></td>"
    data += "<td><b>Product Price</b></td>"
    data += "<td><b>Product Color</b></td>"
    data += "<td><b>Product Brand</b></td>" 
    data += "<td><b>Product Amount</b></td>"
    data += "<td colspan='2' style=\"color: red;text-align: right\">" + arr.length +" products</td>"
    data += "</tr>"
    for (let i = 0; i < arr.length; i++) {
        data += "<tr>"
        data += "<td>" + arr[i].product.name + "</td>"
        data += "<td>" + arr[i].product.price + "</td>"
        data += "<td>" + arr[i].product.color + "</td>"
        data += "<td>" + arr[i].product.brand + "</td>"
        data += "<td>" + arr[i].amount + "</td>"
        //tạo 2 nút tăng giảm số lượng trong giỏ hàng
        data += "<td><button onclick='upAmount(" + i + ")'>+</button></td>"
        data += "<td><button onclick='downAmount(" + i + ")'>-</button></td>"
        data += "</tr>"
    }
    data += "</table>"
    document.getElementById("displayCart").innerHTML = data
}

//hàm tăng số lượng
function upAmount(index) {
    let name = arrayCart[index].product.name
    for(let i = 0; i < array.length; i++) {
        //điều kiện không tăng quá số lượng sẵn có
        if (array[i].name === name && array[i].quantity > 0) {
            arrayCart[index].amount += 1
            array[i].quantity -= 1
            break
        }
    }
    localStorage.setItem("cart", JSON.stringify(arrayCart))
    localStorage.setItem("list", JSON.stringify(array))
    displayProduct()
    displayCart()
}
//hàm giảm số lượng
function downAmount(index) {
    let name = arrayCart[index].product.name
    for(let i = 0; i < array.length; i++) {
        //điều kiện trả số lượng cho giỏ hàng
        if (array[i].name === name) {
            //nếu đưa số lượng trong giỏ hàng về 0 thì sẽ tự động xóa phần tử đó
            if (arrayCart[index].amount === 1){
                arrayCart.splice(index,1)
            } else {
                arrayCart[index].amount -= 1   
            }
            array[i].quantity += 1
            break
        }
    }
    localStorage.setItem("cart", JSON.stringify(arrayCart))
    localStorage.setItem("list", JSON.stringify(array))
    displayProduct()
    displayCart()
}
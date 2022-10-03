function changeValue() {
    localStorage.setItem("value", document.getElementById("input").value) 
    let demo = {a : 1}
    localStorage.setItem("demo", demo)
}

function displayValue() {
    document.getElementById("result").innerHTML = localStorage.getItem("value")
}

window.onload = displayValue()
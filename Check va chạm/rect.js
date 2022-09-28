class Rectangle {
    x //vị trí bắt đầu vẽ theo phương ngang
    y //vị trí bắt đầu vẽ theo phương dọc
    width
    height
    color
    
    constructor(x, y, widht, height, color) {
        this.x = x
        this.y = y
        this.width = widht
        this.height = height
        this.color = color
    }

    draw() {
        let ctx = document.getElementById("canvas").getContext("2d")
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    move() {
        this.y += 5
        if (this.y === 400) {
            this.y = 50
        }
    }
}
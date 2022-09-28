class Circle {
    x //vị trí tâm theo phương ngang
    y //vị trí tâm theo phương dọc
    radius
    color

    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    draw() {
        let ctx = document.getElementById("canvas").getContext("2d")
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2)
        ctx.fill()
        ctx.closePath()
    }

    move() {
        this.y += 5
        if (this.y === 400) {
            this.y = 100
        }
    }
}
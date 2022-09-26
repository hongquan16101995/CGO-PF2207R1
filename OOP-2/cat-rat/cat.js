class Cat {
    name
    weight
    speed

    constructor(name, weight, speed) {
        this.name = name
        this.weight = weight
        this.speed = speed
    }

    makeNoise() {
        console.log("Meo meo");
    }

    catchRat(rat) {
        if (rat.speed < this.speed && rat.isLive()) {
            this.weight += rat.weight
            rat.status = false
            rat.speed = 0
            rat.weight = 0
            console.log("Chuột ngon")
        } else if (rat.speed < this.speed && !rat.isLive()){
            console.log("Chuột chết không ăn được")
        } else {
            console.log("Chuột chạy nhanh quá, không bắt được")
        }
    }
}
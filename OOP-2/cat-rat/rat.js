class Rat {
    name
    weight
    speed
    status

    constructor(name, weight, speed, status) {
        this.name = name
        this.weight = weight
        this.speed = speed
        this.status = status
    }

    makeNoise() {
        console.log("Chít chít");
    }

    isLive() {
        return this.status
    }

    upSpeed() {
        if (this.status) {
            this.speed += 5
        } 
    }
}
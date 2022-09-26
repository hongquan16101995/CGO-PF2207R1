class Human {
    name
    gender
    weight

    constructor(name, gender, weight) {
        this.name = name
        this.gender = gender
        this.weight = weight
    }

    isMale() {
        if (this.gender == "male") {
            return true
        } else if (this.gender == "female"){
            return false
        }
    }

    setGender(gender) {
        this.gender = gender
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }

    getWeight() {
        return this.weight
    }

    setWeight(weight) {
        this.weight = weight
    }

    say(string) {
        console.log(this.name + " say: " + string);
    }

    checkApple(apple) {
        return !apple.isEmpty()
    }

    eat(apple) {
        if (apple.isEmpty()) {
            console.log("Hết táo rồi!!")
        } else {
            apple.decrease()
            this.weight++
        }
    }
}



class Wagon {
    constructor(capacity) {
        this.passengers = []
        this.capacity = capacity
    }

    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }

    join(traveler) {
        if (this.getAvailableSeatCount()) {
            this.passengers.push(traveler)
        }
    }

    shouldQuarantine() {
        for (let index = 0; index < this.passengers.length; index += 1) {
            let currentTraveler = this.passengers[index]
            if (currentTraveler.isHealthy === false) {
                return true
            }

        }
            return false
    }

    totalFood() {
        let foodintake = 0
        for (let index = 0; index < this.passengers.length; index += 1) {
            let currentTraveler = this.passengers[index]
            foodintake += currentTraveler.food

        }
        return foodintake
    }





}
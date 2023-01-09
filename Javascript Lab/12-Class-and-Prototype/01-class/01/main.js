class Calculator {
    constructor(value=0){
        this.value = value
    }
    sum(number) {
        let result = this.value + number
        return result
    }

    substract(number){
        let result = this.value - number
        return result;
    }

    multiply(number){
        let result = number * this.value
        return result
    }

    divide(number){
        let result = this.value/number
        return result;
    }

    show(){
        alert(this.value)
    }

}

const result = new Calculator()
console.log(result.show());
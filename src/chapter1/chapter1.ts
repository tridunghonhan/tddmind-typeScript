export class Dollar {
    constructor(public amount: number){
        this.amount = amount
    }

    times(multiplier: number):Dollar {
       return new Dollar(multiplier*this.amount)
    }
}
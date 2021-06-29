export class Money {
    constructor(public amount: number){
        this.amount = amount
    }
    equals(aMoney: Money): boolean {
        return aMoney.amount === this.amount;
    }
}

export class Franc extends Money {
    times(multiplier: number):Franc {
       return new Franc(multiplier*this.amount)
    }

}

export class Dollar extends Money{
    times(multiplier: number):Dollar {
       return new Dollar(multiplier*this.amount)
    }
}
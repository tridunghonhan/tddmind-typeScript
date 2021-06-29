export class Franc {
    constructor(public amount: number){
        this.amount = amount
    }

    times(multiplier: number):Franc {
       return new Franc(multiplier*this.amount)
    }

    equals(dollar: Franc): boolean {
        return dollar.amount === this.amount;
    }


}
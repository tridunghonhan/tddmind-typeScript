interface IMoney {
    getClassName(): string;
    equals(object: Money): boolean;
    times(multiplier: number): Money;
}

export class Money implements IMoney{
    static dollar(amount: number): Money{
        return new Dollar(amount);
    }

    static franc(amount: number): Money{
        return new Franc(amount);
    }

    constructor(public amount: number){
        this.amount = amount
    }
    getClassName(){
        return Money.name
    }
    times(multiplier: number): Money{
        return new Money(this.amount*multiplier)
    }
    equals(aMoney: Money): boolean {
        return (aMoney.amount === this.amount) && (aMoney.getClassName() === this.getClassName());
    }
}

export class Franc extends Money {
    times(multiplier: number):Franc {
       return new Franc(multiplier*this.amount)
    }
    getClassName(){
        return Franc.name
    }

}

export class Dollar extends Money{
    times(multiplier: number):Dollar {
       return new Dollar(multiplier*this.amount)
    }
    getClassName(){
        return Dollar.name
    }
}
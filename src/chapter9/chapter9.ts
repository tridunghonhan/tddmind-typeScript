interface IMoney {
    getClassName(): string;
    equals(object: Money): boolean;
    times(multiplier: number): Money;
}

export class Money implements IMoney{
    static dollar(amount: number): Money{
        return new Dollar(amount, "USD");
    }

    static franc(amount: number): Money{
        return new Franc(amount, "CHF");
    }

    protected _currency = '';



    constructor(public amount: number, currency: string){
        this.amount = amount;
        this._currency = currency;
    }

    currency():string {
        return this._currency;
    }

    getClassName(){
        return Money.name
    }
    times(multiplier: number): Money{
        return new Money(this.amount*multiplier, this._currency)
    }
    equals(aMoney: Money): boolean {
        return (aMoney.amount === this.amount) && (aMoney.getClassName() === this.getClassName());
    }
}

export class Franc extends Money {
    // constructor(amount: number, currency: string){
    //     super(amount);
    //     this._currency = currency;
    // }
    times(multiplier: number):Money {
       return new Franc(multiplier*this.amount, "CHF")
    }
    getClassName(){
        return Franc.name
    }

}

export class Dollar extends Money{
    // constructor(amount: number, currency: string){
    //     super(amount);
    //     this._currency = currency;
    // }
    times(multiplier: number):Dollar {
       return new Dollar(multiplier*this.amount, "USD")
    }
    getClassName(){
        return Dollar.name
    }

}
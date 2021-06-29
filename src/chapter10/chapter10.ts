
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
        return (aMoney.amount === this.amount) && (aMoney.currency() === this.currency());
    }
}

export class Franc extends Money {
    getClassName(){
        return Franc.name
    }

}

export class Dollar extends Money{
    getClassName(){
        return Dollar.name
    }
}
export interface Expression{

}

export class Bank {
    reduce(source: Expression, to: String): Money{
        return Money.dollar(10);
    }
}

export class Money implements Expression{
    static dollar(amount: number): Money{
        return new Money(amount, "USD");
    }

    static franc(amount: number): Money{
        return new Money(amount, "CHF");
    }

    protected _currency = '';

    constructor(public amount: number, currency: string){
        this.amount = amount;
        this._currency = currency;
    }

    currency():string {
        return this._currency;
    }
    
    times(multiplier: number): Money{
        return new Money(this.amount*multiplier, this._currency)
    }
    equals(aMoney: Money): boolean {
        return (aMoney.amount === this.amount) && (aMoney.currency() === this.currency());
    }

    plus(money: Money): Expression{
        return new Money(money.amount + this.amount, this._currency)
    }
}




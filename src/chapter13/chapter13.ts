export interface Expression{
    reduce(to: string): Money;
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

    plus(addend: Money): Expression{
        return new Sum(this, addend)
    }

    reduce(to: string): Money {
        return this;
    }
}

export class Sum implements Expression {
    constructor(public augend: Money, public addend:Money){
        this.augend = augend;
        this.addend = addend;
    }
    reduce(to: string): Money {
        let amount = this.augend.amount + this.addend.amount;
        return new Money(amount, to);
    }
}

export class Bank {
    reduce(source: Expression, to: string): Money{
        return source.reduce(to);
    }
}


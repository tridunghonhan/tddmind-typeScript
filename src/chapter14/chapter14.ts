export interface Expression{
    reduce(bank: Bank, to: string): Money;

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

    reduce(bank: Bank, to: string): Money {
        let rate = bank.rate(this._currency, to)
        return new Money(this.amount/rate, to);
    }
}

export class Sum implements Expression {
    constructor(public augend: Money, public addend:Money){
        this.augend = augend;
        this.addend = addend;
    }
    reduce(bank: Bank, to: string): Money {
        let amount = this.augend.amount + this.addend.amount;
        return new Money(amount, to);
    }
}

export class Bank {
    constructor(private rates: Map<Pair,number>){
        this.rates = rates;
    }
    reduce(source: Expression, to: string): Money{
        return source.reduce(this,to);
    }
    addRate(from: string, to: string, rate: number){
        this.rates.set(new Pair(from,to), rate);
    }
    rate(from: string, to: string): number{
        if(from === to) return 1
        let rate = this.rates.get(new Pair(from,to))
        return rate? rate:1;
    }

}


export class Pair {
    constructor(private from: string, private to: string){
        this.from = from
        this.to = to;
    }
    equals(from: string, to: string): boolean {
        return (this.from === from) && (this.to === to);
    }
    hashCode(){
        return 0;
    }
}
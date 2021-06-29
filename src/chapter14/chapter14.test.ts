import { Money, Expression, Bank, Sum, Pair } from "./chapter14";


it("test Multiplication", () => {
    expect(Money.franc(5).times(2).amount).toBe(10);
    expect(Money.franc(5).times(3).amount).toBe(15);
    let anotherFive = Money.franc(5);
    expect(Money.franc(5).equals(anotherFive)).toBe(true);

    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
    expect(Money.franc(5).equals(Money.franc(5))).toBe(true);
    expect(Money.franc(5).equals(Money.franc(6))).toBe(false);

    expect(Money.dollar(5).equals(Money.franc(5))).toBe(false);

    expect(Money.franc(5).times(3).equals(Money.franc(15))).toBe(true);

});

it("test currency", () =>{
    expect(Money.dollar(1).currency()).toBe("USD");
    expect(Money.franc(1).currency()).toBe("CHF");
})



it("test reduce Money with different currency", () =>{
    let pair = new Pair("CHF","USD");
    let map = new Map();
    map.set(pair,2)
    let bank: Bank = new Bank(map);
    let reduce: Money = bank.reduce(Money.franc(2),"USD");
    expect(Money.dollar(1).equals(reduce)).toBe(true);
})

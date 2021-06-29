import { Money, Expression, Bank, Sum } from "./chapter13";


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

// it("test addition", () =>{
//     let five: Money = Money.dollar(5);
//     let sum: Expression = five.plus(five)
//     let bank: Bank = new Bank();
//     let reduce: Money = bank.reduce(sum,"USD");
//      expect(Money.dollar(10).equals(reduce)).toBe(true);
// })

it("test plus return sum", () =>{

    let sum: Expression = new Sum(Money.dollar(3), Money.dollar(4))
    let bank: Bank = new Bank();
    let reduce: Money = bank.reduce(sum,"USD");
    expect(Money.dollar(7).equals(reduce)).toBe(true);
})

it("test reduce Money", () =>{
    let bank: Bank = new Bank();
    let reduce: Money = bank.reduce(Money.dollar(1),"USD");
    expect(Money.dollar(1).equals(reduce)).toBe(true);
})
import { Money } from "./chapter8";


it.only("test FrancMultiplication", () => {
    expect(Money.franc(5).times(2).amount).toBe(10);
    expect(Money.franc(5).times(3).amount).toBe(15);
    let anotherFive = Money.franc(5);
    expect(Money.franc(5).equals(anotherFive)).toBe(true);

    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
    expect(Money.franc(5).equals(Money.franc(5))).toBe(true);
    expect(Money.franc(5).equals(Money.franc(6))).toBe(false);

    expect(Money.dollar(5).equals(Money.franc(5))).toBe(false);

});


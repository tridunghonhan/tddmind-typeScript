import { Franc, Dollar } from "./chapter7";


it.only("test FrancMultiplication", () => {
    let five:Franc = new Franc(5);
    expect(five.times(2).amount).toBe(10);
    expect(five.times(3).amount).toBe(15);
    let anotherFive = new Franc(5);
    expect(five.equals(anotherFive)).toBe(true);

    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
    expect(new Franc(5).equals(new Franc(5))).toBe(true);
    expect(new Franc(5).equals(new Franc(6))).toBe(false);

    expect(new Dollar(5).equals(new Franc(5))).toBe(false);

});


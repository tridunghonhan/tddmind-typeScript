import { Franc } from "./chapter5";


it.only("test FrancMultiplication", () => {
    let five:Franc = new Franc(5);
    expect(five.times(2).amount).toBe(10);
    expect(five.times(3).amount).toBe(15);
});


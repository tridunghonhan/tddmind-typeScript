import { Dollar } from "./chapter1";


it("first multiplication", () => {
    let five:Dollar = new Dollar(5);
    expect(five.times(2).amount).toBe(10);
    expect(five.times(3).amount).toBe(15);
});
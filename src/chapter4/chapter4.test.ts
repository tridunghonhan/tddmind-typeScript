import { Dollar } from "./chapter4";


it("first multiplication", () => {
    let five:Dollar = new Dollar(5);
    expect(five.times(2).amount).toBe(10);
    expect(five.times(3).amount).toBe(15);
});

it("Test equal", () => {
    let five = new Dollar(5);
    let anotherFive = new Dollar(5);
    let six = new Dollar(6);
    expect(five.equals(anotherFive)).toBe(true);
    expect(five).toEqual(anotherFive);
    expect(five.equals(six)).toEqual(false);

    expect(five.times(2)).toEqual(new Dollar(10));
    expect(five.times(3)).toEqual(new Dollar(15));

    
});
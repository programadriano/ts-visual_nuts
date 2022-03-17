import { describe, beforeEach, test, expect } from '@jest/globals'
import { Challenge1 } from '../src/challenge1';

describe('Challenge 1', () => {
    let challenge = new Challenge1();
    test("#should return empty an array if was passed 0 as size list param", () => {
        const printer = challenge.exec(0);
        expect(printer).toEqual([]);
    });

    test("#should return a range of number based on a size list", () => {
        const printer = challenge.exec(10);

        expect(printer.length).toBe(10);
    });

    test("#should return the default much index range size", () => {
        const printer = challenge.exec(100);
        expect(printer.length).toBe(100);
    });

    test("#should return Visual if the third index is divisible by 3", () => {
        const printer = challenge.exec(10);

        expect(printer[3]).toBe("Visual");
    });

    test("#should return Nuts if the first index is divisible by 5", () => {
        const printer = challenge.exec(11);

        expect(printer[5]).toBe("Nuts");
    });

    test("#should return the fifteenth element as Visual Nuts as is divisible by 3 and 5 at same time", () => {
        const printer = challenge.exec(16);

        expect(printer[15]).toBe("Visual Nuts");
    });

    test("#should return the index if its not divisible by 3, 5 or both at same time", () => {
        const printer = challenge.exec(16);

        expect(printer[14]).toEqual(14);
    });

    test("#should test the function as all", () => {
        const printer = challenge.exec(16);

        expect(printer[3]).toEqual("Visual");
        expect(printer[5]).toEqual("Nuts");
        expect(printer[14]).toEqual(14);
        expect(printer[15]).toEqual("Visual Nuts");
    });
});
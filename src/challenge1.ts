export class Challenge1 {

    private range(sizeList: number) {
        return [...Array(sizeList).keys()];
    }

    private isDivisibleTo(num: number, divisor: number) {
        return num % divisor === 0;
    }

    private map(index: number): string | number {
        const isDivisibleBy3 = this.isDivisibleTo(index, 3);
        const isDivisibleBy5 = this.isDivisibleTo(index, 5);

        if (isDivisibleBy3 && isDivisibleBy5) {
            return "Visual Nuts";
        } else if (isDivisibleBy5) {
            return "Nuts";
        } else if (isDivisibleBy3) {
            return "Visual";
        } else {
            return index;
        }
    }

    exec(param: number) {
        const visualNutsList = this.range(param).map((index) =>
            this.map(index)
        );

        console.log(visualNutsList.join("\n"));

        return visualNutsList;
    }

}
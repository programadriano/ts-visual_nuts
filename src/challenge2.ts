import * as data from "./data/countries.json";

export class Challenge2 {

    public getNumberOfCountries: number;
    result: any[] = data.result;
    /**
     *
     */
    constructor() {
        this.getNumberOfCountries = data.result.length;

    }



    findAllCountriesWithOfficialLangBy = (lang: string | RegExp) => {

        let maxEl = []

        const regex = lang instanceof RegExp ? lang : new RegExp(lang)
        const filteredCountries = this.result.filter((c: { languages: string; }) => regex.test(c.languages))
        const max = Math.max(...filteredCountries.map((i: { languages: string | any[]; }) => i.languages.length));
        for (const item of filteredCountries) {
            if (item.languages.length == max) {
                maxEl.push(item)
            }
        }
        return maxEl;
    }


    findCountryWithHighestNumberOfLang() {
        const max = Math.max(...this.result.map(i => i.languages.length));
        const country = [];
        for (const item of this.result) {
            if (item.languages.length === max) {
                country.push(item)
            }
        }
        return country;
    }

    findTheMostCommonOfficialLangOfAllCountries() {
        let max = -Infinity;
        const result = this.result.reduce((c, n) => {
            const langs = n.languages;
            for (let lang of langs) {
                if (!c[lang]) {
                    c[lang] = 1
                } else {
                    c[lang] += 1
                }
                if (c[lang] > max) {
                    max = c[lang]
                }
            }
            return c;
        }, {})
        return Object.fromEntries(Object.entries(result).filter(([k, v]) => v === max))
    }


    exec() {
        console.table({ 'Total Countries': this.getNumberOfCountries })
        console.table({ 'Countries where they officially speak German': this.findAllCountriesWithOfficialLangBy('de') })
        console.table({ 'Country with the highest number of official languages': this.findCountryWithHighestNumberOfLang() })
        console.table({ 'The most common official language(s), of all countries': this.findTheMostCommonOfficialLangOfAllCountries() })
    }

}
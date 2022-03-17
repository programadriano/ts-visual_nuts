import { describe, test, expect } from '@jest/globals'
import { Challenge2 } from '../src/challenge2';

describe('Challenge 2', () => {
    let challenge = new Challenge2();


    test('#getNumberOfCountries should return the length of data countries', () => {
        expect(challenge.getNumberOfCountries).toEqual(7)
    })

    test('#findAllCountriesWithOfficialLangBy should the highests which speaks german', () => {
        const result = challenge.findAllCountriesWithOfficialLangBy('de');
        const expected = [{ country: 'BE', languages: ['nl', 'fr', 'de'] }]
        expect(result).toStrictEqual(expected)
    })

    test('#findCountryWithHighestNumberOfLang should return all countries that have most official langs', () => {
        const result = challenge.findCountryWithHighestNumberOfLang()
        const expected = [
            { country: 'BE', languages: ['nl', 'fr', 'de'] },
            { country: 'EE', languages: ['est', 'ru', 'en'] }
        ]

        expect(result).toStrictEqual(expected)
    })

    test('#findTheMostCommonOfficialLangOfAllCountries should return all the highest count for langs', () => {
        const result = challenge.findTheMostCommonOfficialLangOfAllCountries()
        const expected = { en: 2, nl: 2, de: 2 }

        expect(result).toStrictEqual(expected)
    })

});
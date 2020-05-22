import { DoubleDashParser } from "../../parsers/double-dash-parser";

export const DoubleDashTestCase = () => {
    const errors = [];
    const parameters = [
        '-str',
        '50',
        '-end',
        '20',
        '-sl',
        '120',
        '-heavy',
        '-tank',
        '--mage',
        '20',
        '--thief'
    ];

    console.log(`\nTesting Parameters: "${parameters.join(' ')}"\n`);

    const result = DoubleDashParser(parameters);
    const resultParameters = result.parameters;

    if (resultParameters.mage !== '20') {
        errors.push(`Parameter "mage" should be "20" but got "${result.mage}"`);
    }

    if (resultParameters.thief !== true) {
        errors.push(`Parameter "thief" should be "true" but got "${result.thief}"`);
    }

    result.indexToRemove.forEach(index => {
        parameters.splice(index, 1);
    });

    const filteredParameters = parameters.filter((value, index) => result.indexToRemove.indexOf(index) === -1);

    const splicedParameters = filteredParameters.join(' ');

    const validationString = '-str 50 -end 20 -sl 120 -heavy -tank';

    if (!(splicedParameters === validationString)) {
        errors.push(`After parse, the parameters should be "${validationString}" but got "${splicedParameters}"`);
    }

    return errors;
}
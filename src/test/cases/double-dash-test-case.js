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

    const splicedParameters = parameters.join(' ');

    if (!splicedParameters === '-str 50 -end 20 -sl 120 -heavy -tank') {
        errors.push(`After parse, the parameters should be "-str 50 -end 20 -sl 120 -heavy -tank" but got "${splicedParameters}"`);
    }

    return errors;
}
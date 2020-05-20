import { SingleDashParser } from "../../parsers/single-dash-parser";

export const SingleDashTestCase = () => {
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
        '--thief'
    ];

    console.log(`\nTesting Parameters: "${parameters.join(' ')}"\n`);

    const result = SingleDashParser(parameters);
    const resultParameters = result.parameters;

    if (resultParameters.str !== '50') {
        errors.push(`Parameter "str" should be "50" but got "${result.str}"`);
    }

    if (resultParameters.end !== '20') {
        errors.push(`Parameter "end" should be "20" but got "${result.end}"`);
    }

    if (resultParameters.sl !== '120') {
        errors.push(`Parameter "sl" should be "120" but got "${result.sl}"`);
    }

    if (resultParameters.heavy !== true) {
        errors.push(`Parameter "heavy" should be the boolean "true" but got "${result.heavy}"`);
    }

    if (resultParameters.tank !== true) {
        errors.push(`Parameter "tank" should be the boolean "true" but got "${result.tank}"`);
    }

    result.indexToRemove.forEach(index => {
        parameters.splice(index, 1);
    });

    const splicedParameters = parameters.join(' ');

    if (!splicedParameters === '--mage --thief') {
        errors.push(`After parse, the parameters should be "--mage --thief" but got "${splicedParameters}"`);
    }

    return errors;
}
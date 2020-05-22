import { SingleDashParser } from "../../parsers/single-dash-parser";

export const SingleDashTestCase = () => {
    const errors = [];
    let parameters = [
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

    if (resultParameters.str !== true) {
        errors.push(`Parameter "str" should be the boolean "true" but got "${result.str}"`);
    }

    if (resultParameters.end !== true) {
        errors.push(`Parameter "end" should be the boolean "true" but got "${result.end}"`);
    }

    if (resultParameters.sl !== true) {
        errors.push(`Parameter "sl" should be the boolean "true" but got "${result.sl}"`);
    }

    if (resultParameters.heavy !== true) {
        errors.push(`Parameter "heavy" should be the boolean "true" but got "${result.heavy}"`);
    }

    if (resultParameters.tank !== true) {
        errors.push(`Parameter "tank" should be the boolean "true" but got "${result.tank}"`);
    }

    const filteredParameters = parameters.filter((value, index) => result.indexToRemove.indexOf(index) === -1);

    const splicedParameters = filteredParameters.join(' ');

    const validationString = '50 20 120 --mage --thief';

    if (!(splicedParameters === validationString)) {
        errors.push(`After parse, the parameters should be "${validationString}" but got "${splicedParameters}"`);
    }

    return errors;
}
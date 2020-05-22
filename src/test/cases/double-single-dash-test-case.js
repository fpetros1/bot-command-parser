import { DoubleDashParser } from "../../parsers/double-dash-parser";
import { SingleDashParser } from "../../parsers/single-dash-parser";

export const DoubleSingleDashTestCase = () => {
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
        '--thief',
        '50'
    ];

    console.log(`\nTesting Parameters for Double Dash: "${parameters.join(' ')}"\n`);

    const doubleDashResults = DoubleDashParser(parameters);

    if (doubleDashResults.parameters.mage !== '20') {
        errors.push(`Parameter "mage" should be "20" but got "${doubleDashResults.parameters.mage}"`);
    }

    if (doubleDashResults.parameters.thief !== '50') {
        errors.push(`Parameter "thief" should be "50" but got "${doubleDashResults.parameters.thief}"`);
    }

    const filteredDoubleDashParameters = parameters.filter((value, index) => doubleDashResults.indexToRemove.indexOf(index) === -1);

    const doubleDashSplicedParameters = filteredDoubleDashParameters.join(' ');

    const doubleDashValidationString = '-str 50 -end 20 -sl 120 -heavy -tank';
    
    if (doubleDashSplicedParameters !== doubleDashValidationString) {
        errors.push(`After double dash parse, the parameters should be "${doubleDashValidationString}" but got "${doubleDashSplicedParameters}"`);
    }

    console.log(`Testing Parameters for Single Dash: "${doubleDashSplicedParameters}"\n`);

    const singleDashResults = SingleDashParser(filteredDoubleDashParameters);

    if (singleDashResults.parameters.str !== true) {
        errors.push(`Parameter "str" should be the boolean "true" but got "${singleDashResults.parameters.str}"`);
    }

    if (singleDashResults.parameters.end !== true) {
        errors.push(`Parameter "end" should be the boolean "true" but got "${singleDashResults.parameters.end}"`);
    }

    if (singleDashResults.parameters.sl !== true) {
        errors.push(`Parameter "sl" should be the boolean "true" but got "${singleDashResults.parameters.sl}"`);
    }

    if (singleDashResults.parameters.heavy !== true) {
        errors.push(`Parameter "heavy" should be the boolean "true" but got "${singsingleDashResults.parametersleDashResults.heavy}"`);
    }

    if (singleDashResults.parameters.tank !== true) {
        errors.push(`Parameter "tank" should be the boolean "true" but got "${singleDashResults.parameters.tank}"`);
    }

    const filteredSingleDashParameters = filteredDoubleDashParameters.filter((value, index) => singleDashResults.indexToRemove.indexOf(index) === -1);

    const singleDashSplicedParameters = filteredSingleDashParameters.join(' ');

    const singleDashValidationString = '50 20 120';
    
    if (singleDashSplicedParameters !== singleDashValidationString) {
        errors.push(`After double dash parse, the parameters should be "${singleDashValidationString}" but got "${singleDashSplicedParameters}"`);
    }

    return errors;
}
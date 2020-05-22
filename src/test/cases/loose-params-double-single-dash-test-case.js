import { DoubleDashParser } from "../../parsers/double-dash-parser";
import { SingleDashParser } from "../../parsers/single-dash-parser";
import { LooseParamsParser } from "../../parsers/loose-params-parser";

export const LooseParamsDoubleSingleDashTestCase = () => {
    const errors = [];

    const parameters = [
        'loose1',
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
        '50',
        'loose2',
        'loose3'
    ];

    console.log(`\nTesting Parameters for Loose Params: "${parameters.join(' ')}"\n`);

    const looseParamsResults = LooseParamsParser(parameters);

    if (!looseParamsResults.parameters.loose[0] === 'loose1' || 
        !looseParamsResults.parameters.loose[1] === '50' || 
        !looseParamsResults.parameters.loose[2] === '20' || 
        !looseParamsResults.parameters.loose[3] === '120'||
        !looseParamsResults.parameters.loose[4] === 'loose2' ||
        !looseParamsResults.parameters.loose[5] === 'loose3') {
        errors.push(`Parameter "loose" should be "[ 'loose1', '50', '20', '120', 'loose2', 'loose3' ]" but got "${result.parameters.loose}"`);
    }

    const filteredLooseParameters = parameters.filter((value, index) => looseParamsResults.indexToRemove.indexOf(index) === -1);

    const looseSplicedParameters = filteredLooseParameters.join(' ');

    const looseValidationString = '-str -end -sl -heavy -tank --mage 20 --thief 50';
    
    if (looseSplicedParameters !== looseValidationString) {
        errors.push(`After loose parse, the parameters should be "${looseValidationString}" but got "${looseSplicedParameters}"`);
    }

    console.log(`Testing Parameters for Double Dash: "${parameters.join(' ')}"\n`);

    const doubleDashResults = DoubleDashParser(parameters);

    if (doubleDashResults.parameters.mage !== '20') {
        errors.push(`Parameter "mage" should be "20" but got "${result.mage}"`);
    }

    if (doubleDashResults.parameters.thief !== '50') {
        errors.push(`Parameter "thief" should be "50" but got "${result.thief}"`);
    }

    const filteredDoubleDashParameters = parameters.filter((value, index) => doubleDashResults.indexToRemove.indexOf(index) === -1);

    const doubleDashSplicedParameters = filteredDoubleDashParameters.join(' ');

    const doubleDashValidationString = 'loose1 -str 50 -end 20 -sl 120 -heavy -tank loose2 loose3';
    
    if (doubleDashSplicedParameters !== doubleDashValidationString) {
        errors.push(`After double dash parse, the parameters should be "${doubleDashValidationString}" but got "${doubleDashSplicedParameters}"`);
    }

    console.log(`Testing Parameters for Single Dash: "${doubleDashSplicedParameters}"\n`);

    const singleDashResults = SingleDashParser(filteredDoubleDashParameters);

    if (singleDashResults.parameters.str !== true) {
        errors.push(`Parameter "str" should be the boolean "true" but got "${singleDashResults.str}"`);
    }

    if (singleDashResults.parameters.end !== true) {
        errors.push(`Parameter "end" should be the boolean "true" but got "${singleDashResults.end}"`);
    }

    if (singleDashResults.parameters.sl !== true) {
        errors.push(`Parameter "sl" should be the boolean "true" but got "${singleDashResults.sl}"`);
    }

    if (singleDashResults.parameters.heavy !== true) {
        errors.push(`Parameter "heavy" should be the boolean "true" but got "${singleDashResults.heavy}"`);
    }

    if (singleDashResults.parameters.tank !== true) {
        errors.push(`Parameter "tank" should be the boolean "true" but got "${singleDashResults.tank}"`);
    }

    const filteredSingleDashParameters = filteredDoubleDashParameters.filter((value, index) => singleDashResults.indexToRemove.indexOf(index) === -1);

    const singleDashSplicedParameters = filteredSingleDashParameters.join(' ');

    const singleDashValidationString = 'loose1 50 20 120 loose2 loose3';
    
    if (singleDashSplicedParameters !== singleDashValidationString) {
        errors.push(`After double dash parse, the parameters should be "${singleDashValidationString}" but got "${singleDashSplicedParameters}"`);
    }

    return errors;
}
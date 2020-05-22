import { LooseParamsParser } from "../../parsers/loose-params-parser";

export const LooseParamsTestCase = (customParameters) => {

    const errors = [];
    const parameters = customParameters || [
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
        'loose2',
        'loose3'
    ];

    console.log(`\nTesting Parameters: "${parameters.join(' ')}"\n`);

    const result = LooseParamsParser(parameters);

    if (!result.parameters.loose[0] === 'loose1' || 
        !result.parameters.loose[1] === 'loose2' || 
        !result.parameters.loose[2] === 'loose3') {
        errors.push(`Parameter "loose" should be "[ 'loose1', 'loose2', 'loose3' ]" but got "${result.parameters.loose}"`);
    }

    const filteredParameters = parameters.filter((value, index) => result.indexToRemove.indexOf(index) === -1);

    const splicedParameters = filteredParameters.join(' ');

    const validationString = '-str -end -sl -heavy -tank --mage 20';

    if (!(splicedParameters === validationString)) {
        errors.push(`After parse, the parameters should be "${validationString}" but got "${splicedParameters}"`);
    }

    return errors;
}
export const LooseParamsParser = (commandParameters) => {
    const result = {
        parameters: {},
        indexToRemove: []
    };

    commandParameters.forEach((commandParameter, index) => {
        if (!commandParameter.startsWith('-') && (index === 0 || (index > 0 && !commandParameters[index - 1].startsWith('--')))) {
            const parameterKey = 'loose';
            
            if (!result.parameters[parameterKey]) {
                result.parameters[parameterKey] = [];
            }

            result.parameters[parameterKey].push(commandParameter);
            result.indexToRemove.push(index);
        }
    });

    return result;
}

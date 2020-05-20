export const DoubleDashParser = (commandParameters) => {
    const result = {
        parameters: {},
        indexToRemove: []
    };

    commandParameters.forEach((commandParameter, index) => {
        if (commandParameter.startsWith('--')) {
            const parameterKey = commandParameter.substring(2, commandParameter.length);
            if (index < commandParameters.length - 1) {
                const nextParameter = commandParameters[index + 1];
                if (!nextParameter.startsWith('-')) {
                    result.parameters[parameterKey] = nextParameter;
                    result.indexToRemove.push(index, index+1);
                } else {
                    result.parameters[parameterKey] = true;
                    result.indexToRemove.push(index);
                }
            } else {
                result.parameters[parameterKey] = true;
                result.indexToRemove.push(index);
            }
        }
    });

    return result;
}

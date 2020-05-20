export const SingleDashParser = (commandParameters) => {
    const result = {
        parameters: {},
        indexToRemove: []
    };

    commandParameters.forEach((commandParameter, index) => {
        if (commandParameter.startsWith('-') && commandParameter.charAt(1) !== '-') {
            const parameterKey = commandParameter.substring(1, commandParameter.length);
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

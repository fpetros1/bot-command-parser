export const SingleDashParser = (commandParameters) => {
    const result = {
        parameters: {},
        indexToRemove: []
    };

    commandParameters.forEach((commandParameter, index) => {
        if (commandParameter.startsWith('-') && commandParameter.charAt(1) !== '-') {
            const parameterKey = commandParameter.substring(1, commandParameter.length);
            result.parameters[parameterKey] = true;
            result.indexToRemove.push(index);
        }
    });

    return result;
}

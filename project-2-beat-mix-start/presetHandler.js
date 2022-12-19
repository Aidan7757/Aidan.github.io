// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (stringRequest, presetArrayIndex, newPresetArray) => {
    arrayResult = new Array();
    if (presetArrayIndex > 4 || presetArrayIndex < 0) {
        arrayResult[0] = 404;
        return arrayResult;
    } else {
        arrayResult[0] = 200;
    }
    if (stringRequest != 'GET' && stringRequest != 'PUT') {
        arrayResult[0] = 400;
        return arrayResult;
    } else if (stringRequest === 'GET') {
        arrayResult[1] = presets[presetArrayIndex];
        return arrayResult;
    } else if (stringRequest === 'PUT') {
        arrayResult[1] = newPresetArray;
        presets[presetArrayIndex] = newPresetArray;
        return arrayResult;
    }
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;


const isRealString = (str) => {
    return typeof str === 'string' && str.trim().length > 0 && str != '';
};

module.exports = {isRealString}
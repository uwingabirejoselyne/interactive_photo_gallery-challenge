const transformString = str => {
    const length = str.length;
    
    if (length % 15 === 0) {
        return [...str].reverse().map(char => char.charCodeAt(0)).join(' ');
    }
    if (length % 3 === 0) {
        return [...str].reverse().join('');
    }
    if (length % 5 === 0) {
        return [...str].map(char => char.charCodeAt(0)).join(' ');
    }
    return str;
};



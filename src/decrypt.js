const decrypt = (input) => {
    var separator = process.env.SEPERATOR || "|";
    const charList = input.split(separator);
    var output = "";

    charList.forEach(element => {
        const wordCount = element.split("gura").length - 1;
        const alphabetPosition = Math.min(wordCount, 26);
    
        const letter = String.fromCharCode(alphabetPosition + 64);
        output += letter.toLowerCase();
    });

    return output;
}

module.exports = decrypt;
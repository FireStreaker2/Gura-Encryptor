const encrypt = (input) => {
    const charList = [...input];
    var output = "";
    var separator = process.env.SEPARATOR || "|";

    charList.forEach(element => {
        const alphabetPosition = element.toUpperCase().charCodeAt(0) - 64;
        const repetitionCount = Math.max(alphabetPosition, 1);

        output += "gura ".repeat(repetitionCount).trim();
        output += separator;
    });

    output = output.slice(0, -1);
    return output;
}

module.exports = encrypt;
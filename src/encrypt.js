const encrypt = (input) => {
    const charList = [...input];
    var output = "";
    var separator = process.env.SEPARATOR || "|";

    charList.forEach(element => {
        if (element.length === 1 && /^[a-zA-Z]$/.test(element)) {
            const alphabetPosition = element.toUpperCase().charCodeAt(0) - 64;
            const repetitionCount = Math.max(alphabetPosition, 1);

            output += "gura ".repeat(repetitionCount).trim();
        } else if (!isNaN(element)) {
            const intElement = parseInt(element);

            output += "Gura ".repeat(intElement).trim();
        } else if (/^[!@#$%^&*()]+$/.test(element)) {
            var number;
            switch (element) {
                case "!":
                    number = "1";
                    break;
                case "@":
                    number = "2";
                    break;
                case "#":
                    number = "3";
                    break;
                case "$":
                    number = "4";
                    break;
                case "%":
                    number = "5";
                    break;
                case "^":
                    number = "6";
                    break;
                case "&":
                    number = "7";
                    break;
                case "*":
                    number = "8";
                    break;
                case "(":
                    number = "9";
                    break;
                case ")":
                    number = "0";
                    break;
            }
            
            number = parseInt(number);
            output += "GURA ".repeat(number).trim();
        } else {
            return "Error";
        }

        output += separator;
    });

    output = output.slice(0, -1);
    return output;
}

module.exports = encrypt;
const decrypt = (input) => {
    var separator = process.env.SEPERATOR || "|";
    const charList = input.split(separator);
    var output = "";

    charList.forEach(element => {
        var firstLetter = element[0];
        var secondLetter = element[1];

        /*
        // possible keywords:
        // gura - letters (a-z)
        // Gura - integers (1-9)
        // GURA - symbols (!@#$%^&*())
        */

       if (!firstLetter) {
            output += " ";
       } else if (firstLetter !== firstLetter.toUpperCase()) {
            const wordCount = element.split("gura").length - 1;
            const alphabetPosition = Math.min(wordCount, 26);
        
            const letter = String.fromCharCode(alphabetPosition + 64);
            output += letter.toLowerCase();
        } else if (firstLetter === firstLetter.toUpperCase() && secondLetter === secondLetter.toUpperCase()) {
            const wordCount = element.split("GURA").length - 1;
            
            let symbol;
            switch (wordCount) {
                case 1:
                    symbol = "!";
                    break;
                case 2:
                    symbol = "@";
                    break;
                case 3:
                    symbol = "#";
                    break;
                case 4:
                    symbol = "$";
                    break;
                case 5:
                    symbol = "%";
                    break;
                case 6:
                    symbol = "^";
                    break;
                case 7:
                    symbol = "&";
                    break;
                case 8:
                    symbol = "*";
                    break;
                case 9:
                    symbol = "(";
                    break;
                case 0:
                    symbol = ")";
                    break;
            }

            output += symbol;
        } else if (firstLetter === firstLetter.toUpperCase() && secondLetter !== secondLetter.toUpperCase()) {
            const wordCount = element.split("Gura").length - 1;
            output += wordCount;
        }
    });

    return output;
}

module.exports = decrypt;
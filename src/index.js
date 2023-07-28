module.exports = function toReadable(number) {
    let arrOfNum = [
        ["zero"],
        ["one"],
        ["two", "twen"],
        ["three", "thir"],
        ["four", "for"],
        ["five", "fif"],
        ["six"],
        ["seven"],
        ["eight", "eigh"],
        ["nine"],
    ];
    let humanReadableNum = "";
    let numberArr = number.toString().split("");
    let units = +numberArr[numberArr.length - 1];
    let dozens = +numberArr[numberArr.length - 2];
    let hundreds = +numberArr[numberArr.length - 3];

    //rules for units
    if (numberArr.length == 1 && units == 0) {
        humanReadableNum += arrOfNum[units][0];
    }
    if (numberArr.length >= 1 && units !== 0) {
        if (dozens !== 1) {
            humanReadableNum += arrOfNum[units][0];
        }
    }

    //rules for dozens
    if (numberArr.length >= 2 && dozens !== 0) {
        if (dozens == 1) {
            if (units == 0) {
                humanReadableNum += "ten";
            } else if (units == 1) {
                humanReadableNum += "eleven";
            } else if (units == 2) {
                humanReadableNum += "twelve";
            } else if (units == 4){
                humanReadableNum += "fourteen";
            }else{
                if(!arrOfNum[units][1]){
                    humanReadableNum += arrOfNum[units][0] + "teen"
                }else{
                    humanReadableNum += arrOfNum[units][1] + "teen"
                }
            }
        } else if (dozens > 1) {
            if (!arrOfNum[dozens][1]) {
                humanReadableNum += " " + arrOfNum[dozens][0] + "ty";
            } else {
                humanReadableNum += " " + arrOfNum[dozens][1] + "ty";
            }
        }
    }

    //rules for hundreds
    if (numberArr.length >= 3) {
        humanReadableNum += " hundred " + arrOfNum[hundreds][0];
    }
    return humanReadableNum.split(" ").reverse().join(" ").trim();
};

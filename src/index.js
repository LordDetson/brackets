module.exports = function check(str, bracketsConfig) {
    let arr = [];
    let buff = null;
    let isCorrect = false;
    for (let i = 0; i < str.length; i++) {
        if (arr.length === 0) {
            for (let j = 0; j < bracketsConfig.length; j++) {
                if (str[i] === bracketsConfig[j][0] || str[i] === bracketsConfig[j][1]) {
                    arr.push(str[i]);
                    break;
                }
            }
        } else {
            buff = arr.pop();
            isCorrect = false;
            for (let j = 0; j < bracketsConfig.length; j++) {
                if (buff === bracketsConfig[j][0] && str[i] === bracketsConfig[j][1]) {
                    isCorrect = true;
                    break;
                }
            }
            if (!isCorrect) {
                arr.push(buff);
                arr.push(str[i]);
            }
        }
    }
    return arr.length === 0;
}

module.exports = function toReadable(num) {
    let a = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    if (num == 0) return 'zero';
    if (num < 20) return a[num];
    if (num < 100 && num % 10 == 0) return b[num / 10];
    if ((num > 20) && (num < 100) && (num % 10 != 0)) {
        let firstNumTwoDigit = b[Math.floor(num / 10)]
        let secondNumTwoDigit = a[(num % 10)]
        return `${firstNumTwoDigit} ${secondNumTwoDigit}`
    }
    if (num > 99 && (num % 100) < 20) {
        let firstNumThreeDigit = a[(Math.floor(num / 100))]
        let secondNumThreeDigit = a[(num % 100)]
        return (`${firstNumThreeDigit} hundred ${secondNumThreeDigit}`).replace(/ +/g, " ").trim()
    }
    else {
    let firstNumThreeDigit = a[(Math.floor(num / 100))]
    let secondNumThreeDigit = b[(Math.floor(num/10) % 10)]
    let thirdNumThreeDigit = a[(num%10)]
    return (`${firstNumThreeDigit} hundred ${secondNumThreeDigit} ${thirdNumThreeDigit}`).replace(/ +/g, " ").trim()
    } 
}

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function isPalindrome(str) {
    let strArr = str.split('');
    let reverseArr = strArr.reverse();
    let reverseStr = reverseArr.join('');

    return str === reverseStr;

}

function getCircumference(r) {
    let c = Math.PI * 2 * r;
    return `The circumference is ${c}.`;
}

function getArea(r) {
    let area = Math.PI * (r ** 2);
    return `The area is ${area}.`;
}

module.exports = {
    getFullName,
    isPalindrome,
    getCircumference,
    getArea,
}

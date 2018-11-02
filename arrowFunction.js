var LifeInsurance = require('./insurance');

const ajay = new LifeInsurance(101, "Ajay", 45220);
const ramesh = new LifeInsurance(102, "Ramesh", 45210);

const policyList = [ajay, ramesh];

policyList.forEach(eachPolicy => console.log(eachPolicy.toString()));

let nameList = policyList.map(eachPolicy => eachPolicy.policyHolderName);

let amountList = policyList.map(eachPolicy => eachPolicy.policyAmount);

function showPremium(policyAmount = 2000){
    return policyAmount*.20;
}

function printPremiun(...policyList){
    console.log("Inside printPremium");
    policyList.forEach(eachPolicy => {
        console.log(showPremium(eachPolicy.policyAmount));
    });
}

console.log(nameList);
console.log(amountList);
console.log(showPremium(amountList[0]));
console.log(showPremium(amountList[1]));
console.log(showPremium());

printPremiun(ajay);
printPremiun(ajay,ramesh);
var LifeInsurance = require('./insurance');

class Application {
    static main() {
        const ajay = new LifeInsurance(101, "Ajay", 45220);
        const ramesh = new LifeInsurance(102, "Ramesh", 45210);

        const policyList = [ajay, ramesh];

        for (let i = 0; i < policyList.length; i++) {
            console.log(policyList[i].toString());
            console.log(policyList[1]._policyHolderName);
        }

        // console.log(i);
        var sum = (a,b) => a+b;
        console.log(sum(2,3));
    }
}
Application.main();


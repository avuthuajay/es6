class LifeInsurance {
    constructor(id,policyHolderName,policyAmount){
        this.id= id;
        this._policyHolderName = policyHolderName;
        this.policyAmount = policyAmount;
    }

    set policyHolderName(policyHolderName){
        this.policyHolderName = policyHolderName;
    }
    get policyHolderName(){
        return this._policyHolderName.toUpperCase();
    }

    toString() {
        return `${this.id},${this.policyHolderName},${this.policyAmount}`
    }
}

const ajay = new LifeInsurance(101,"Ajay",1254689);

console.log(ajay.toString());
console.log(ajay.policyHolderName);

module.exports=LifeInsurance;
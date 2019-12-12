


export class Member{

    public email: string
    constructor(
        public id: string,
        public classID: string,
        public name: string,
        public major: string,
        public birthday: string,
        public gender: string,
        public idCard: string,
        public phone: string,
        public address: string,
        public role: string
    ){
        this.email = this.id + "@dlu.edu.vn";
        this.obscuseIdCard();
    }

    private obscuseIdCard(){
     let left3 = this.idCard.substr(0,3)
     let right3 = this.idCard.substr((this.idCard.length-3), this.idCard.length);
     this.idCard = left3 + "xxx"+right3;
    }
}
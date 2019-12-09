


class Classroom{
    private password: string;
    constructor(
        public id: string,
        public sortName: string,
        public fullNane: string,
        public prefix: string
    ){}


    getPassword(): string{
        return this.password;
    }

    setPassword(pwd: string){
        this.password = pwd;
    }
}
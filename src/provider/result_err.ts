

export class ResultErr{
    constructor(
        public state: boolean,
        public message: string,
        public data: any,
    ){}
}
import { Member } from './member';


export class Classroom{
    constructor(
        public id: string,
        public sortName: string,
        public fullName: string,
        public prefix: string,
        public password: string,
        public monitorId: string,
        public teacherId: string,
        public members: Member[] = [],
    ){}

}
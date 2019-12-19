import { Member } from './../models/member';
import { ResultErr } from './result_err';
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from "firebase/app";
import { Classroom } from "./../models/classroom";


@Injectable()
export class FirebaseDataProvider {


    private ref: any;
    private members = [];
    private classrooms = [];
    private rootRefDev = "/classrooms_dev/";
    // private rootRefPro = "/classrooms_prod/";
    private rootRef = this.rootRefDev;

    constructor(private service: AngularFireDatabase) {

    }
    async start() {
        await this.getAllClassroom();
    }

    getAllClassroom() {
        return new Promise<any[]>((resolve, reject) => {
            this.service.list(this.rootRef).valueChanges().subscribe(value => {
                this.classrooms = value;
                console.log(this.classrooms);
                resolve(value);
            })
        });
    }

    getAllMembers(classId: string) {
        return new Promise<any[]>((resolve, reject) => {
            let reft = this.rootRef + classId + "/members";
            this.ref = firebase.database().ref(reft);
            this.service.list(this.ref).valueChanges().subscribe((values) => {
                this.members = values;
                resolve(values);
            })
        })
    }

    getMemberID(id: string, classId: string) {
        this.getAllMembers(classId);
        let meme: Member;
        this.members.forEach((value) => {
            if (value.id.toLowerCase() == id.toLowerCase()) {
                meme = value;
                return meme;
            }
        })
        return null;
    }

    async isClassroomExist(clr: Classroom) {
        let local: any[] = await this.getAllClassroom();
        for (let i = 0; i < local.length; i++) {
            if ((local[i] as Classroom).id == clr.id.toLowerCase()) {
                return true;
            }
        }
        return false;
    }

    async isMemberExist(memberID: string, classID: string) {
        let local = await this.getAllMembers(classID);
        for (let i = 0; i < local.length; i++) {
            if (local[i].id == memberID) {
                return true;
            }
        }
        return false;
    }


    async addClassroom(classroom: Classroom) {
        let flag = await this.isClassroomExist(classroom);
        if (flag) {
            return new ResultErr(false, "Lớp đã tồn tại!", null);
        } else {
            firebase.database().ref(this.rootRef).child(classroom.id).set({
                id: classroom.id,
                fullName: classroom.fullName,
                sortName: classroom.sortName,
                prefix: classroom.prefix,
                password: classroom.password,
                monitorId: classroom.monitorId,
                teacherId: classroom.teacherId,
                members: classroom.members,
            });
            await this.getAllClassroom();
            return new ResultErr(true, "Thêm thành công", this.classrooms);
        }
    }

    delete() {
        this.service.list(this.rootRef).remove();
    }

    deleteMember(classroom: Classroom, member:Member){
        let members: Member[] = classroom.members;
        let indexOf = this.indexOf(members, member);
        classroom.members.splice(indexOf,1);
        this.addClassroom(classroom);
    }

    indexOf(members: Member[], member: Member){
        for(let i =0;i<members.length;i++){
            if(members[i].id == member.id){
                return i;
            }
        }
        return -1;
    }

}
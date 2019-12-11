import { MemberRole, Gender } from './../models/member';
import { ResultErr } from './result_err';
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from "firebase/app";
import { Classroom } from "./../models/classroom";
import { Member } from "../models/member";


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
    start() {
        this.getAllClassroom();
        this.pushDefauleMember();
    }

    pushDefaultClassroom() {
        let ctk40: any = new Classroom("CTK40", "IT", "Công nghệ thông tin k40", "161", "abc");
        let ctk41: any = new Classroom("CTK41", "IT", "Công nghệ thông tin k41", "171", "abc");
        this.addClassroom(ctk40);
        this.addClassroom(ctk41);
    }

    pushDefauleMember() {
        let tinh = new Member("1610227", "CTK40", "Liya", "KTPM", "08-03-1998", Gender.Male, "215395784",
            "0352974899", "Phuong 8, Trang Khanh Du", MemberRole.member);
        let ctk40: any = new Classroom("CTK40", "IT", "Công nghệ thông tin k40", "161", "abc");
        this.addMember(tinh, ctk40);
        console.log("member: " +this.members);
    }

    getAllClassroom() {
        return new Promise<any[]>((resolve, reject) => {
            this.service.list(this.rootRef).valueChanges().subscribe(value => {
                this.classrooms = value;
                resolve(value);
            })
        });
    }

    getAllMembers(classId: string) {
        return new Promise<any[]>((resolve, reject) => {
            let reft = this.rootRef + classId;
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

    addMember(member: Member, clsr: Classroom): ResultErr {
        if (!this.isClassroomExist(clsr)) {
            return new ResultErr(false, "Lớp không tồn tại!", null)
        } else if (!this.isMemberExist(member)) {
            return new ResultErr(false, "Sinh viên bị trùng không tồn tại!", null)
        }
        let reft = this.rootRef + clsr.id;
        this.service.list(reft).push(member);
        this.getAllMembers(clsr.id);
        return new ResultErr(true, null, this.members)
    }

    isClassroomExist(clr: Classroom): boolean {
        this.classrooms.forEach(val => {
            if (val.id.toLowerCase() == clr.id.toLowerCase())
                return true;
        })
        return false;
    }

    isMemberExist(me: Member): boolean {
        this.members.forEach(val => {
            if (val.id.toLowerCase() == me.id.toLowerCase())
                return true;
        })
        return false;
    }


    addClassroom(classroom: Classroom): ResultErr {
        if (this.isClassroomExist(classroom)) {
            return new ResultErr(false, "Mã số sinh viên bị trùng!", null);
        }
        this.service.list(this.rootRef).push(classroom);
        this.getAllClassroom();
        return new ResultErr(false, "Thêm thành công", this.classrooms);
    }

    delete() {
        this.service.list(this.rootRef).remove();
    }

}
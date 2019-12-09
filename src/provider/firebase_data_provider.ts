import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from "firebase/app";
import { of } from "rxjs/observable/of";



@Injectable()
export class FirebaseDataProvider{
    

    private ref: any;
    private classrooms = [];
    private members = [];
    private rootRefDev = "/classrooms_dev/";
    private rootRefPro = "/classrooms_prod/"
    private rootRef = this.rootRefDev;

    constructor(private service: AngularFireDatabase){

    }


    getClassrooms(){
        this.ref = firebase.database().ref(this.rootRef);
        this.service.list(this.ref).valueChanges().subscribe((values)=>{
            this.classrooms = values;
        })
        return this.classrooms;
    }

    getAllMembers(classId: string){
        let reft = this.rootRef+classId;
        this.ref = firebase.database().ref(reft);
        this.service.list(this.ref).valueChanges().subscribe((values)=>{
            this.members = values;
        })
        return this.members;
    }

    getMemberID(id: string, classId: string){
        this.getAllMembers(classId);
        let meme : Member;
        this.members.forEach((value)=>{
            if(value.id == id){
                meme = value;
                return meme;
            }
        })
        return null;
    }

    addMember(member: Member, classId: string){
        let reft = this.rootRef+classId;
        this.service.list(reft).push(member);
    }

    addClassroom(classroom: Classroom){
        this.service.list(this.rootRef).push(classroom);
    }

}
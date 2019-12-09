
class DataObject{
    public teacher: Member = null;
    public Monitor: Member = null;
    constructor(
        public classroom: Classroom,
        public member: Member[]
    ){
    }


    setTeacher(){
        this.member.forEach((mem)=>{
            if (mem.role == MemberRole.teacher){
                this.teacher = mem;
                return;
            }
        })
    }

    setMonitor(){
        this.member.forEach((mem)=>{
            if (mem.role == MemberRole.monitor){
                this.teacher = mem;
                return;
            }
        })
    }
    
}
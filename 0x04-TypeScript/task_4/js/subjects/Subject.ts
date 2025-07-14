namespace Subjects {
    export class Subject {
        protected teacher: Teacher | null = null;

        setTeacher(teacher: Teacher) {
            this.teacher = teacher;
        }
    }
}
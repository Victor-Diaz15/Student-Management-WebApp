export interface IStudentListRes {
    id: number;
    studentId: number;
    studentName: string;
    present: boolean;
    excuse: boolean;
    ausence: boolean;
    created: Date;
    studentExist: boolean
}

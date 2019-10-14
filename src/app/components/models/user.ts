
export interface User {
    email: string;
    studentID: string;
    firstName: string;
    lastName: string;
    isSuper?: boolean;
    totalTime?: number;
    timeTracked?: number;
    lockedOut?: boolean;
}

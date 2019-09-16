export interface User {
    email: string;
    firstName: string;
    lastName: string;
    studentID: string
    isSuper: boolean;
    totalTime?: string;
    lastLoginDay?: string;
    lockedOut?: boolean;
}
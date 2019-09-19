export interface User {
    email: string;
    studentID: string;
    firstName: string;
    lastName: string;
    isSuper: boolean;
    totalTime?: string;
    lastLoginDay?: string;
    lockedOut?: boolean;
}
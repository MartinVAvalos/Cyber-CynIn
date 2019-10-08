
export interface User {
    email: string;
    studentID: string;
    firstName: string;
    lastName: string;
    totalTime?: string;
    lastLoginDay?: string;
    lockedOut?: boolean;
}

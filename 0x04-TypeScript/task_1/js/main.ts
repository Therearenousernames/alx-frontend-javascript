// An interface name Teacher
interface Teacher {
    readonly firstName: string;
    readonly fullTimeEmployee: boolean;
    lastName: string;
    location: string;
    contract: boolean;
    [key: string]: any; // Allow additonal properties
}
// An interface named Directors that extends Teacher 
interface Directors extends Teacher {
    numberOfReports: number;
};

// StudentClass
class StudentClass {
    firstName: string;
    lastName: string;

    // Default constructor 
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomeWork(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}



const teacher: Teacher = {
   firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
}

const director: Directors = {
    firstName: 'Kenneth',
    lastName: 'Brown',
    location: 'Johannesburg',
    fullTimeEmployee: true,
    numberOfReports: 16,
    contract: true,
}

// Function for printing Teacher 
function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;
}

console.log(teacher);
console.log(director);

// Using the printing function 
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// Example of usage 
const student = new StudentClass('Khethelo', 'Njomo');
console.log(student.displayName());
console.log(student.workOnHomeWork());
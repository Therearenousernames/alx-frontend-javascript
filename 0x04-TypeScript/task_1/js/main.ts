// An interface name Teacher
interface Teacher {
    readonly firstName: string;
    readonly fullTimeEmployee: boolean;
    lastName: string;
    location: string;
    contract: boolean;
    [key: string]: any; // Allow additonal properties
}
// An interface named Directprs that extends Teacher 
interface Directors extends Teacher {
    numberOfReports: number;
};

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

console.log(teacher);
console.log(director);
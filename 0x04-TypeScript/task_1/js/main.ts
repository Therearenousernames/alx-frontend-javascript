// An interface name Teacher
interface Teacher {
    readonly firstName: string;
    readonly fullTimeEmployee: boolean;
    lastName: string;
    location: string;
    contract: boolean;
}
// An interface named Directprs that extends Teacher 
interface Director {
    readonly firstName: string;
    readonly lastName: string;
    location: string;
    fullTimeEmployee: boolean;
    numberOfReports: number;
};

const teacher: Teacher = {
   firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
}

const director: Director = {
    firstName: 'Kenneth',
    lastName: 'Brown',
    location: 'Johannesburg',
    fullTimeEmployee: true,
    numberOfReports: 15,
}

console.log(teacher);
console.log(director);
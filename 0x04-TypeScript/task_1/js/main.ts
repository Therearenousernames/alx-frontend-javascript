interface Teacher {
    readonly firstName: string;
    readonly fullTimeEmployee: boolean;
    lastName: string;
    location: string;
    contract: boolean;
}

const teacher: Teacher = {
   firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
}

console.log(teacher);
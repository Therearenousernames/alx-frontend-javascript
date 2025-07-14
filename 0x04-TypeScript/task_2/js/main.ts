interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome():string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Implementing interfaces
class DirectorClass implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks.';
    }
}

class TeacherClass implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}
 
function createEmployee(salary: number | string): DirectorClass | TeacherClass {
    if (typeof salary === 'number' && salary < 500) {
        return new TeacherClass();
    } else {
        return new DirectorClass();
    }
}

function isDirector(employee: DirectorClass | TeacherClass): employee is DirectorClass {
  return employee instanceof DirectorClass;
}

function executeWork(employee: DirectorClass | TeacherClass): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
}

type Subjects = 'Maths' | 'History';

function teachClass(subject: Subjects): string {
    if (subject === 'Maths') {
        return 'Teaching Math';
    }
    return 'Teaching History';
}

// Test Results
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// Test Output
console.log(executeWork(createEmployee(200))); // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks

// Test output 
console.log(teachClass('Maths'));
console.log(teachClass('History'));
function printable(constructor: Function) {
  constructor.prototype.print = function() {
    console.log(this)
  }
}

@printable
class Plant {
  name = "Green Plant"
}

const plant = new Plant();
(plant as any).print();


// Method Decorator
function editable (value: boolean) {
  return function (target: any, propName: string, descriptor: PropertyDescriptor) {
    console.log(target)
    console.log(propName)
    console.log(descriptor)

    descriptor.writable = value
  }
}

// Property Decorator
function overwritable(value: boolean): Function {
  return function(target: any, propName: string) {
    const newDescriptor: PropertyDescriptor = {
      writable: value
    }
    return newDescriptor
  }

}

class Project {
  @overwritable(true)
  projectName: string;

  constructor(name: string) {
    this.projectName = name
  }

  @editable(true)
  calcBudget() {
    console.log(1000)
  }
}

const project = new Project('Super Project');
project.calcBudget();
project.calcBudget = function () {
  console.log(2000)
}
project.calcBudget();
console.log(project)

// Parameter Decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log("Target: ", target);
  console.log("methodName: ", methodName);
  console.log("paramIndex: ", paramIndex);
}

class Course {
  name: string

  constructor(name: string) {
    this.name = name
  }

  printStudentNumbers(mode: string, @printInfo printAll: boolean) {
    if(printAll) {
      console.log(10000)
    } else {
      console.log(2000)
    }
  }
}

const course = new Course("Super Course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false)
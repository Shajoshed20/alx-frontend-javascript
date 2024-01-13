// Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  setAttribute(key: string, value: any): void;
  getAttribute(key: string): any;
}

// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Teacher class implementing Teacher interface
class TeacherClass implements Teacher {
  private _firstName: string;
  private _lastName: string;
  private _fullTimeEmployee: boolean;
  private _yearsOfExperience?: number;
  private _location: string;
  private _additionalAttributes: { [key: string]: any } = {};

  constructor(
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string
  ) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._fullTimeEmployee = fullTimeEmployee;
    this._yearsOfExperience = yearsOfExperience;
    this._location = location;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get fullTimeEmployee(): boolean {
    return this._fullTimeEmployee;
  }

  get yearsOfExperience(): number | undefined {
    return this._yearsOfExperience;
  }

  get location(): string {
    return this._location;
  }

  setAttribute(key: string, value: any): void {
    this._additionalAttributes[key] = value;
  }

  getAttribute(key: string): any {
    return this._additionalAttributes[key];
  }
}

// Directors class implementing Directors interface
class DirectorsClass extends TeacherClass implements Directors {
  private _numberOfReports: number;

  constructor(
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    numberOfReports: number,
    yearsOfExperience?: number,
    location: string
  ) {
    super(firstName, lastName, fullTimeEmployee, yearsOfExperience, location);
    this._numberOfReports = numberOfReports;
  }

  get numberOfReports(): number {
    return this._numberOfReports;
  }
}

// Example usage:
const director = new DirectorsClass(
  "Director",
  "Smith",
  true,
  10,
  undefined,
  "City"
);
console.log(director.numberOfReports); // 10

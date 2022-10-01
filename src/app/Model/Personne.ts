export class Personne{
   
  id: number;
  name: string;
  firstname: string;
  age: number;
  cin: number;
  job: string;
  path:string;

  constructor( id=0, age=0, name= '',firstname='',job='',path='',cin=0) {

    this.id = id;
    this.age = age;
    this.name = name;
    this.firstname = firstname;
    this.job = job;
    this.cin = cin;
    this.path = path;
  }
}
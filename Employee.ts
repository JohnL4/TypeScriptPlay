import Person from "./Person";

/**
 * An employee in an organization.
 */
export default class Employee extends Person
{
   private _boss: Person;
   private _subordinates: Employee[] = [];

   constructor(aName: string) { super(aName) }

   /**
    * Gets this employee's boss.
    */
   get boss(): Person
   {
      return this._boss;
   }

   /**
    * Sets this employee's boss.
    */
   set boss(aBoss: Person)
   {
      this._boss = aBoss;
   }

   /**
    * Gets this Employee's array of subordinate Employees.
    */
   get subordinate(): Employee[]
   {
      return this._subordinates;
   }
   
   /**
    * Adds the given Employee to this Employee's list of subordinates, and also sets the given Employee's boss to be
    * this Employee.
    */
   addSubordinate(anEmployee: Employee): void
   {
      this._subordinates.push(anEmployee);
      anEmployee.boss = this;
   }

   toString(): string
   {
      let retval = super.toString();
      if (this._subordinates.length > 0)
         retval = retval + ` with subordinates [` + this._subordinates.join(', ') + "]";
      return retval;
   }

   identity<T>(anArray: Array<T>): Array<T> 
   {
      console.log(`Length of array is: ${anArray.length}`);
      return anArray;
   }

}

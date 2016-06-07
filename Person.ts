/**
 * A person.
 */
export default class Person
{
   private static __objectSeq: number = 1;

   private _id: number;

   constructor (private _name: string)
   {
      this._id = Person.__objectSeq++;
   }

   /**
    * Gets Person's name.
    */
   get name(): string
   {
      return this._name;
   }

   /**
    * Sets Person's name.
    */
   set name(aName:string)
   {
      this._name = aName;
   }

   toString(): string
   {
      return `Person ${this._id}: ${this._name}`;
   }
}

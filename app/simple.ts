function foo( ctor: Function)
{
   console.log( `In decorator foo, ctor = ${ctor}`);
}

function bar( ctorOrPrototype: any, memberName: string, memberPropDesc: PropertyDescriptor )
{
   console.log( `In decorator bar, ctorOrPrototype = ${ctorOrPrototype}, memberName = ${memberName}, memberPropDesc = ${memberPropDesc}`);
}

function g()
{
   console.log( "g() called");
}

@foo
class C
{
   @bar
   f()
   {
      console.log( "f() called");
   }
}

// -------------------------------------------------  button_1_click  --------------------------------------------------

function button_1_click()
{
   let msgDiv = document.getElementById("msgDiv");
   if (msgDiv == null)
   {
      console.log( "Attempt to find msgDiv failed.");
      return;
   }
   if (msgDiv.classList.contains( "bg-blue"))
   {
      console.log( "swap blue for red");
      msgDiv.classList.remove( "bg-blue");
      msgDiv.classList.add( "bg-red");
   }
   else if (msgDiv.classList.contains( "bg-red"))
   {
      console.log( "swap red for blue");
      msgDiv.classList.remove( "bg-red");
      msgDiv.classList.add( "bg-blue");
   }
}

function button_2_click()
{
   console.log( "Button 2 clicked...");
   let c = new C();
   c.f();
   g();
   console.log( "Button 2 click handler done.");
}

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


// Corrections
/**
 * 
 * Since you are creating an obj that each of it's property will hold an array of members in organization 
 * and each item in this array  is the details of the member in the organization
 * this means that u don't need to hard code it inside your code, this array must only be filled during the time 
 * you are using this program not the time u are writing it, so the above members shouldn't be there
 * 
 * Again, since you are going to be updating this object from the time u are using it, this means that u have to create a method or function to 
 * be updating this obj, (I will choose to use function because the object is a global object and it is not bounded to any class or another object,
 * hence it can be updated from anywhere)
 */

//  Our Global Object
let members = {};

/**
 * The object above holds all our member, now we need to update it
 * Here is the function to add members to it
 *  */ 

 function addMember(id, memberDetailsArray) {
     /**
      * In this function we have @param(id and memberDetailsArray) as our parameter
      * This is because we are going to be updating object, and each property in the object will hold an array
      * 
      * this id must be unique to each member, we would have generated a unique id randomly while adding to the object
      * but because we need to identify this members by ourself, we need to make sure that we know each user's id, incase we need 
      * get the details of any user we can just call the id on the object and it will return the desired user's details
      * 
      * secondly we have memberDetailsArray, this is nothing but the array that contains the user details 
      */


      /**
       * now we need to check if id and memberDetailsArray is entered before updating, this is to make sure of accuracy
       * of our object, and make sure our function is efficient. Now remember that by default any variable that u created without
       * value has the value of undefined and undefined is falsy so if nothing is entered in both of them it will be false,
       * so we are going to use the power of this falsy and truthy behaviour of javascript
       */

       if(id && memberDetailsArray) {
        /**
         * We are now sure that id and memberDetailsArray is filled, now we need to make sure that memberDetailsArray is 
         * an array and id is a string
         *  */
        
         if(typeof id == "string" && memberDetailsArray.constructor.toString().indexOf('Array') > -1) {
            //  I used memberDetailsArray.constuctor.toString().indexOf('Array') to check if memberDetailsArray is array instead of
            // typeof memberDetailsArray, because typeof any array will return object instead of array, the method I used is out of this context 
            // but you can study it
            
            // Now we update the member
            members[id] = memberDetailsArray
            
         } else {
            //  Always tell ur user his fault
             console.log("id must be a string and memberDetailsArray")
         }
       } else {
          //  Always tell ur user his fault
          console.log("id and memberDetailsArray must be filled")
           
       }
 }

//  Now let's create another function that will help us get any user that we want
function getUser(id){
    return members[id]
}

// DONE

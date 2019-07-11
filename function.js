
const member = {};
var displayOutPut;
var addMember;

 var createNewLine = function () {
   return "\n";
}
var newLine = createNewLine() ;

displayOutPut = function (name, sex) {
         member.name = name;
         member.sex  = sex;

         member.displayMember = function () {
             var info;
             info =  "Name" + " : "   + this.name ;
             info += " " + newLine;
             info += "Gender/sex : " + this.sex;
             console.log(info);
         }

         return member;
    }

addMember = [displayOutPut("Okechukwu Somtokwo","Male"),
             displayOutPut("john ifem","Male"),
             displayOutPut("Thompson IdontKnow","Male")];

addMember.forEach(function (name) {
    name.displayMember()
})s

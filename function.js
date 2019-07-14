// WRITE A SIMPLE PROGRAM 
// THE OUTPUT SHOULD LOOK LIKE THIS

// ====================
/* STUDENT INFORMATION 
   ====================

   NAME: JOHN IFEMEZUO ANAYO
   REG.NO: FPOCSNB17027
   LEVEL:ND1 REGULAR II */

// THE INFORMATION YOU INPUT CARRIES ARRAYS OF NAME.

var CreatDetails;
var arrayOfStudent;
var displaydetail;

var spacers = {
    newline : function () {
         return "\n";
    },

    border : function () {
        var simbol;
        simbol = "====================="
        return simbol;
    },
    
}

var newline = spacers.newline();
var border  = spacers.border();

var label = function (hold) {
    hold = border + newline;
    hold += "Registerd Information" + newline;
    hold += border;
    return hold
}

CreatDetails = function (name,reg,level,program) {
    this.name =  name;
    this.reg  =  reg;
    this.level = level;
    this.program = program;

    this.showdetails = function () {
        var register;
        register = "Name    : " + this.name + newline;
        register += "Reg.No  : " + this.reg + newline;
        register += "Level   : " + this.level + newline;
        register += "Program : " + this.program ;
        return register
    }
}


arrayOfStudent = {
    nd1 : [
        {
            name : "victor Tochukwu",
            "Reg.No" : "FPOCSNB17027",
            level : "Nd2",
            program: "regular 1"
        },
        {
            name : "Sam Chimaoge",
            "Reg.No" : "FPOCSNB17030",
            level : "Nd2",
            program: "regular 2"
        },
        {
            name : "Onyebuchi Mmeso",
            "Reg.No" : "FPOCSNB17001",
            level : "Nd2",
            program: "regular 1"
        },
        {
            name : "Stanley Tochukwu",
            "Reg.No" : "FPOCSNB17027",
            level : "Hnd3",
            program: "On IT right know."
        },
        {
            name : "Godwin Idontknowhisothername",
            "Reg.No" : "FPOCSNB17000",
            level : "Hnd4",
            program: "On IT right know."
        },
    ]
}

console.log(label())
detailfunc = new CreatDetails(arrayOfStudent.nd1[0].name,arrayOfStudent.nd1[0]["Reg.No"],arrayOfStudent.nd1[0].level,arrayOfStudent.nd1[0].program);
console.log(detailfunc.showdetails())

console.log(border);
detailfunc = new CreatDetails(arrayOfStudent.nd1[3].name,arrayOfStudent.nd1[3]["Reg.No"],arrayOfStudent.nd1[3].level,arrayOfStudent.nd1[3].program);
console.log(detailfunc.showdetails())

console.log(border);
detailfunc = new CreatDetails(arrayOfStudent.nd1[4].name,arrayOfStudent.nd1[4]["Reg.No"],arrayOfStudent.nd1[4].level,arrayOfStudent.nd1[4].program);
console.log(detailfunc.showdetails())



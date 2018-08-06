const Student = require('./student');

//Return 1 if A>B;
//Return 0 if A<B;
//Return -1 if A#B;

function compare(A,B){
	var numofsub=A.marks.length;
	var count=0;
	for (var i=0;i<numofsub;i++){
        if(A.marks[i]>B.marks[i])
        	count++;
        else
        	count--;
	}
    if(count==numofsub)
    	return 1;
    if(count==-numofsub)
    	return 0;
    else
    return -1;
}


//var A=new Student("A",[56,45,67]);
//var B=new Student("B",[44,9,33]);
//console.log(compare(A,B));
module.exports={compare:compare};
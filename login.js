function run(){
    var data=document.getElementById("inp1").value
    var count=0
    var special="#$%^&*,-_"
    // var ar=[]
    // var alp="abcdefghijklmnopqrstuvwxyz123456789."
    var num=0
    for(var i=0;i<data.length;i++){
        if(special.includes(data[i])){
             alert("invalid")
             return
            // break
        }
        else if(data[data.length-1]=="."){
            alert("invalid")
            return
        }
        else if(data[i]=="@"){
            count++
            var num=i
        }
        

    }
    if(num>0 && num!=data.length-1 && count==1){
        alert("valid")
}
else{
    alert("invalid")
}
}
//     console.log(ar)
//     if(count==1 && num>6){
//         if(num!=data.length-1 && num!=0){
//             alert("valid")
//         }
//         else{
//             alert("invalid")
//         }
//     }
//     if(count==1 && num<6){
//         alert("invalid")
//     }
//     if(num<6){
//         if(count>1 || count==0){
//             alert("invalid")
//             }
//     }
    
// }
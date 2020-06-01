function mostrar(){

     var n1 = document.getElementById('n1')
     n1= Number(n1.value)
    var res = document.getElementById('res') //div

    var res2 = document.getElementById('res2') // texto caixa
    res2.innerHTML=``
     var c1 =document.getElementById('c1')
   c1.innerHTML=`Tabuada do ${n1}: `  
   res2.style.width="105px"
   res2.style.height="199px"
     for(var i=0;i<=10;i++){
         var soma = n1 * i ;
   res2.innerHTML+= ` \n ${n1} x ${i} = ${soma}  `
   
   
     }


}

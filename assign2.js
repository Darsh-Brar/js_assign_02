let brar=[]

 arrAdd(brar)

    function arrAdd(brar){
     brar.push(1,2,3)
   
    console.log(`Initial Values of Array Elements`,brar)
    
    for(let i=0;i<brar.length;i++)  {
      
       brar[i]=brar[i]+2
    }
    
    console.log(`Values of array Elements after Addition`,brar)
    }

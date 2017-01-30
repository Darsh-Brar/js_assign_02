
 let singh=[]
  loopArr(singh)
 
  function loopArr(singh){
     singh.push(1,'dog','one')
     
     for(let i=0; i<singh.length; i++)
       {
         console.log(`Index Value '+ 1 +' :`,singh[i])
       }
     console.log(`Index Value of array Elements after Addition`,singh)
        }
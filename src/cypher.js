
function cifra ()
{
  let arrayAux = [];
  let arrayAux1 = [];
  let str = document.getElementById('cipher').value;
  let end = str.length;
  let word = "" ;
  let word1;
  let cif = parseInt(document.getElementById('chave').value);

  for( let i=0;i<end;i++){
  arrayAux.push(str.charCodeAt(i)); 
    arrayAux1[i]=arrayAux[i];        
 if (arrayAux[i]>=65 && arrayAux[i]<=90){ 

    arrayAux1[i]=((arrayAux1[i] - 65 + cif )%26) + 65; 
   
   } else{
     if(arrayAux[i]>=97 && arrayAux[i]<=122){ 
      arrayAux1[i]=((arrayAux1[i] - 97 + cif )%26) + 97; 
     }
   }

  word1 = arrayAux1[i];
  word = word+String.fromCharCode(word1);
  
}


document.getElementById('btCifra').addEventListener('click',cifra);
document.getElementById('resp').value = word;

return document.getElementById('resp').innerHTML="<div id= mensagem> Resultado <span>"+
    "<input type=text name=resultado id=resp size=40 value='"+word+"'> <br>"
   

}

function decifra ()
{
  let arrayAux = [];
  let arrayAux1 = [];
  let str = document.getElementById('cipher').value;
  let end = str.length;
  let word = "" ;
  let word1;
  let cif = parseInt(document.getElementById('chave').value);


  
 for( let i=0;i<end;i++){
  arrayAux.push(str.charCodeAt(i)); 
  arrayAux1[i]=arrayAux[i];         
 if (arrayAux[i]>=65 && arrayAux[i]<=90){ 

    arrayAux1[i]=((arrayAux1[i] - 90 - cif )%26) + 90; 
   
   } else{
     if(arrayAux[i]>=97 && arrayAux[i]<=122){ 
      arrayAux1[i]=((arrayAux1[i] - 122 - cif )%26) + 122; 
     }
   }

  word1 = arrayAux1[i];
  word = word+String.fromCharCode(word1);
  
}

document.getElementById('btDecifra').addEventListener('click',decifra);
document.getElementById('resp').value = word;
return document.getElementById('resp').innerHTML="<div id= mensagem> Resultado <span>"+
    "<input type=text name=resultado id=resp size=40 value='"+word+"'> <br>"
} 

function cifra (str,cif){
    let arrayAux = [];
    let arrayAux1 = [];
    let end = str.length;
    let word = "" ;
    let word1;
  
    //console.log(end);
  for( let i=0;i<end;i++){
    arrayAux.push(str.charCodeAt(i)); //insere a letra em ASC no array
    arrayAux1[i]=arrayAux[i];         //copia do array para manipulação
    arrayAux1[i]=((arrayAux1[i] - 90 + cif )%26)+90;
    if(arrayAux1[i]>90){
      arrayAux1[i]=(arrayAux1[i]%90)+64;
    }
    word1 = arrayAux1[i];
    //word.fromCharCode(65, 66, 67);
    word = word+String.fromCharCode(word1);
    //arrayAux1[i]=(65-(arrayAux1[i] + cif)%26)+65;
    //console.log("Letra cifrada",arrayAux1[i], word);
           //((codigoDaLetraASC - cod1aLetra + desloc) % tamDoAlfabeto)+ cod1aLetra
  }
  console.log(word);
  return word;
  }
   
  
  function decifra (str,cif){
    let arrayAux = [];
    let arrayAux1 = [];
    let end = str.length;
    let word = "" ;
    let word1;
  
    //console.log(end);
  for( let i=0;i<end;i++){
    arrayAux.push(str.charCodeAt(i)); //insere a letra em ASC no array
    arrayAux1[i]=arrayAux[i];         //copia do array para manipulação
    arrayAux1[i]=((arrayAux1[i] - 90 - cif )%26)+90;
    if(arrayAux1[i]>90){
      arrayAux1[i]=(arrayAux1[i]%90)+64;
    }
    word1 = arrayAux1[i];
    //word.fromCharCode(65, 66, 67);
    word = word+String.fromCharCode(word1);
    //arrayAux1[i]=(65-(arrayAux1[i] + cif)%26)+65;
    //console.log("Letra cifrada",arrayAux1[i], word);
           //((codigoDaLetraASC - cod1aLetra + desloc) % tamDoAlfabeto)+ cod1aLetra
  }
  console.log(word);
  return word;
  }
   
  var a = "outro teste"
  
   cifra(a,7)
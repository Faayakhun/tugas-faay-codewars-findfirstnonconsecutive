function firstNonConsecutive (arr) {
    for(let i=0; i < arr.length - 1; i++) {
      const angkaSekarang = arr[i];
      const angkaSelanjutnya = arr[i+1];
      if(angkaSekarang + 1 != angkaSelanjutnya) {
        return angkaSelanjutnya
      }
    }
    return null;
  }
  
console.log(firstNonConsecutive([1,2,3,4,5,7,9]))
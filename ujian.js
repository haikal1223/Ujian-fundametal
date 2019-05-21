function getMiddle(a){
    var huruf = a.split('')

  var hasil = ''
    for(i = 0; i < huruf.length; i++){
        if(huruf.length % 2 == 0){
            hasil+= huruf.indexOf(huruf.length % 2)
        }else{

        }
    }
    return hasil
}
console.log(getMiddle('test'));

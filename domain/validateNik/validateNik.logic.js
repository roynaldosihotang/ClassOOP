var validateNikLogic = require('../person/person.logic')

class validateNik extends validateNikLogic{
  constructor(...args) {
    super(...args)
  }


validateLength(){
        if(this.nik.length != 16){
            return "tidak sesuai"
        } else{
            return "sama"
        }

}   

validatebod(){
    if(super.getWeekType() == 0){
        return "tidak bisa dibandingkan, tanggal tidak valid"
    }
    var huruf = 0
    if(this.validateLength() === 'tidak sesuai'){
        return "tidak bisa dibandingkan, NIK tidak 16 digit"
    } else{
        for(var i =0;i<this.nik.length; i++){
            if(isNaN(this.nik[i])){
                huruf = huruf+1
            }
        }
        if(huruf>0){
            return "tidak bisa dibandingkan, ada input huruf di NIK"
        } else{
            var day_nik = this.nik[6].concat(this.nik[7])
            var month_nik = this.nik[8].concat(this.nik[9])
            var year_nik = this.nik[10].concat(this.nik[11])

            var date_bod = this.bod.split("-");
            var year_bod = date_bod[0][date_bod[0].length-2].concat(date_bod[0][date_bod[0].length-1])
            var month_bod = date_bod[1]
            var day_bod = date_bod[2]

            if(Number(year_nik) == Number(year_bod) && Number(month_nik) == Number(month_bod) && Number(day_nik) == Number(day_bod) ){
                return "sama & valid"
            } else{
                return "tidak sama & tidak valid"
            }

            }
        }
    }


print(){
    console.log(`Panjang Nik ${this.validateLength()}`)
    console.log(`Nik dan bod ${this.validatebod()}`)
}



}


module.exports = validateNik;

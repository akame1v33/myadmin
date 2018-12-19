export class NumberUtil {


    static isDecimal(number):boolean{
        return (number % 1 != 0)
    } 
  
    static toDecimal(number:any, numberOfDecimalPoint:number=1):any{
      if( number == Infinity ){
        return 0.0;
      }
      return Math.abs(number).toFixed(numberOfDecimalPoint);
    }
  
    static toMoney(money:number, minimumFractionDigits:number=0, maximumFractionDigits:number=0){
      // console.log(money , " = " ,maximumFractionDigits );
     return Number( Math.abs(money).toFixed(maximumFractionDigits)  ).toLocaleString(undefined, {
        minimumFractionDigits: minimumFractionDigits,
        maximumFractionDigits: maximumFractionDigits,
      });
    }
}

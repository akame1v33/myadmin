import { Observable } from 'rxjs';

export class StatsUtil {

  public static share(value: number, total: number) {
    return (value / total) * 100;
  }

  public static cagr(endingYearValue: number, beginningYearValue: number, rangeOfYear: number) {
    // console.log(endingYearValue , " = " , beginningYearValue);
    return (Math.pow((endingYearValue / beginningYearValue), (1.0 / (rangeOfYear - 1.0))) - 1.0) * 100;

  }

  public static difference(endingYearValue: number, beginningYearValue: number) {
    return (endingYearValue - beginningYearValue);
  }

  public static changes(difference: number, beginningYearValue: number) {
    if( beginningYearValue == 0 ){
      return 0;
    }
    let changes = (difference / beginningYearValue) * 100;
    return changes;
  }

  public static calculateStartEndRange(years: any[]): number {
    let range = 0;
    let max = 0;
    let min = 0;
    Observable.from(years)
      .max()
      .subscribe(output => max = output);
    Observable.from(years)
      .min()
      .subscribe(output => min = output);
    return max - min + 1;
  }//calculateStartEndRange
}

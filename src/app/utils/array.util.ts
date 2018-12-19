export class ArrayUtil {

    /**
     * 
     * @param singleArray
     * @returns single array if input is not string then return empty array
     */
    public static toSingleArray(singleArray: string | Array<any>) {
        // console.log('single array -> ', singleArray);
        // console.log(  singleArray instanceof Array );
        if (typeof singleArray == "string") {
            return [singleArray];
        } else if (typeof singleArray == "number") {
            return [singleArray];
        } else if (singleArray instanceof Array) {
            if (singleArray.length >= 1) {
                return singleArray;
            }
        }
        return [];
    }
}

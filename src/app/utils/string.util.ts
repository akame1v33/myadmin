export class StringUtil {

    public static toTitleCase(title:string):string {

        const ignoreList = [
            "in",
            "of",
            "on",
            "is",
        ];

            return title.split(" ")
            .map(part => {
                let stringPart = part;
                if( part.length > 2 ) {
                    stringPart = part.substring(0,1).toLocaleUpperCase() + part.substring(1).toLocaleLowerCase();
                } else {
                    if( ignoreList.indexOf( stringPart.toLocaleLowerCase() ) >= 0  ){
                        stringPart = stringPart.toLocaleLowerCase();    
                    }
                }
                return stringPart;
            })
            .reduce((acc, val) => {   
                acc += " "+val;
                return acc;
            }, "");

    }
}

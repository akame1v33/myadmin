export interface DeviceAvailability {
    mobile?:boolean;
    tablet?:boolean;
    desktop?:boolean;
    innerWidth:number;
}


export class ResponsiveUtil {

    public static getCurrentDeviceSize() : DeviceAvailability {
        let innerWidth = window.innerWidth;

        let isMobile = (innerWidth < 768 );
        let isTablet = (innerWidth > 768 && innerWidth < 1130);
        let isDesktop = (innerWidth > 1130);
        
        return {
            innerWidth:innerWidth,
            mobile:isMobile,
            desktop:isDesktop,
            tablet:isTablet
        }

    }
}

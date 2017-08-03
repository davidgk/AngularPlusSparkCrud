package pruebas.partner.model;

import java.math.BigInteger;

/**
 * @author david.kotlirevsky
 */
public class PartnerType {

    private Long partnerTypeKey;
    private String name;

    public static PartnerType create(String name, String key) {
        PartnerType partnerType = new PartnerType();
        partnerType.partnerTypeKey=new Long(key);
        partnerType.name=name;
        return partnerType;
    }

}

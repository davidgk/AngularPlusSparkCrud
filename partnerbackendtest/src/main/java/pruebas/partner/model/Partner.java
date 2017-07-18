package pruebas.partner.model;

import java.math.BigInteger;

/**
 * @author david.kotlirevsky
 */
public class Partner {

    private String name;
    private BigInteger partner_key;
    private BigInteger partner_id;

    public static Partner create(String name, String key, String id) {
        Partner partner = new Partner();
        partner.name = name;
        partner.partner_key = new BigInteger(key);
        partner.partner_id = new BigInteger(id);
        return partner;
    }

}

package pruebas.partner.model;

/**
 * @author david.kotlirevsky
 */
public class Partner {

    private String name;
    private String status;
    private Long partner_key;
    private Long partner_id;

    public static Partner create(String name, String key, String status, String id) {
        Partner partner = new Partner();
        partner.name = name;
        partner.status = status;
        partner.partner_key = new Long(key);
        partner.partner_id = new Long(id);
        return partner;
    }

}

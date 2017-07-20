package pruebas.partner.services;

import pruebas.partner.model.Partner;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author david.kotlirevsky
 */
public class PartnerService {

    private static Map<String, Partner> partners;

    static{
        partners = new HashMap<>();
        partners.put("1",Partner.create("Carlos", "1" , "enabled",  "1") );
        partners.put("2",Partner.create("Julian", "2" , "enabled",  "2") );
    }
    public static PartnerService create() {
        PartnerService partnerService = new PartnerService();
        return partnerService;
    }

    public List getAllPartners() {
        ArrayList partnersList = new ArrayList(partners.values());
        return partnersList;

    }

    public Partner getPartner(String id) {
        Partner partner = partners.get(id);
        return partner;
    }



}

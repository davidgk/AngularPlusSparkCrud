package pruebas.partner.services;

import pruebas.partner.model.Partner;
import pruebas.partner.model.PartnerType;
import util.OthersUtils;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author david.kotlirevsky
 */
public class PartnerService {

    private static Map<String, Partner> partners;
    private static Map<String, PartnerType> partnerTypes;

    static{
        partners = new HashMap<>();
        partners.put("1",Partner.create("Carlos", "1" , "enabled",  "1") );
        partners.put("2",Partner.create("Julian", "2" , "enabled",  "2") );
        partnerTypes = new HashMap<>();
        partnerTypes.put("1",PartnerType.create("OneType", "1") );
        partnerTypes.put("2",PartnerType.create("TwoType", "2") );
    }
    public static PartnerService create() {
        PartnerService partnerService = new PartnerService();
        return partnerService;
    }

    public List getAllPartners() {
        return OthersUtils.getListFromMap(partners);
    }



    public Partner getPartner(String id) {
        Partner partner = partners.get(id);
        return partner;
    }


    public List getPartnersTypes() {
        return OthersUtils.getListFromMap(partnerTypes);
    }
}

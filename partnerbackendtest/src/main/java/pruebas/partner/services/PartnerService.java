package pruebas.partner.services;

import pruebas.partner.model.Partner;

import java.util.Arrays;
import java.util.List;

/**
 * @author david.kotlirevsky
 */
public class PartnerService {

    public static PartnerService create() {
        PartnerService partnerService = new PartnerService();
        return partnerService;
    }

    public List getAllPartners() {
       Partner partner01 = Partner.create("Carlos", "1" , "enabled",  "1");
       Partner partner02 = Partner.create("Julian", "2" , "enabled","2");
       return Arrays.asList(partner01, partner02);

    }
}

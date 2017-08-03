package pruebas.partner.services;

import pruebas.partner.model.Partner;
import pruebas.partner.model.PartnerConfiguration;
import pruebas.partner.model.PartnerStatus;
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
    private static Map<String, PartnerConfiguration> partnerConfiguration;
    private static Map<String, PartnerStatus> status;

    static{
        partners = new HashMap<>();
        partners.put("1",Partner.create("Carlos", "1" , "enabled",  "1") );
        partners.put("2",Partner.create("Julian", "2" , "enabled",  "2") );
        partnerTypes = new HashMap<>();
        partnerTypes.put("1",PartnerType.create("OneType", "1") );
        partnerTypes.put("2",PartnerType.create("TwoType", "2") );
        partnerConfiguration= new HashMap<>();
        partnerConfiguration.put("1",PartnerConfiguration.createSimple(1L, 1L, 2L,3L, true));
        partnerConfiguration.put("2",createPartnerConfiguration("2"));
        status = new HashMap<>();
        status.put("1", PartnerStatus.create("enabled", 1L) );
        status.put("2",  PartnerStatus.create("disabled", 2L) );
        status.put("3",  PartnerStatus.create("deleted", 3L) );
        status.put("4",  PartnerStatus.create("canceled", 4L) );


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

    public PartnerConfiguration getPartnerConfigurationById( String key) {
       return this.partnerConfiguration.get(key);
    }

    private static PartnerConfiguration createPartnerConfiguration(String key) {
        PartnerConfiguration partnerConfiguration = PartnerConfiguration.create(new Long(key),
            new Long("1"),"1", "some url notif",  true, 100,
            "1",1,"true", "websiteUrl","address1"
            ,"address2","city","state","zipcode","country","contactFirstName",
            "contactLastName","1234561231312","asd@asd.com.ar","supportUrl",
            "1111111111","supportEmail@as.com",true, "cascadeDisableDescriptors","clientAutoClosed"
            ,true, true, 1, 1L, 1, 1, true, 1L);
        return partnerConfiguration;
    }

    public PartnerType getPartnerTypeByKey(String key) {
        return partnerTypes.get(key);
    }

    public List getAllPartnerStatus() {
        return OthersUtils.getListFromMap(status);
    }

    public PartnerStatus getPartnerStatusByKey(String key) {
        return status.get(key);
    }
}

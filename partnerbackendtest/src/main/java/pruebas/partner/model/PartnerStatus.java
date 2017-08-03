package pruebas.partner.model;

/**
 * @author david.kotlirevsky
 */
public class PartnerStatus {

    private String name;
    private Long partnerStatusKey;

    public static PartnerStatus create(String name, Long partnerStatusKey) {
        PartnerStatus partnerStatus = new PartnerStatus();
        partnerStatus.name = name;
        partnerStatus.partnerStatusKey = partnerStatusKey;

        return partnerStatus;
    }

}

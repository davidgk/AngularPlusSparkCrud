package pruebas.partner.model;

/**
 * @author david.kotlirevsky
 */
public class BillingEntity {
    private Long key;
    private String fakeBillingEntityName;

    public static BillingEntity create(String name, Long key) {
        BillingEntity billingEntity = new BillingEntity();
        billingEntity.fakeBillingEntityName = name;
        billingEntity.key = key;
        return billingEntity;
    }

}

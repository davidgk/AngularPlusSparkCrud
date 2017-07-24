package pruebas.partner.model;

/**
 * @author david.kotlirevsky
 */
public class BillingEntity {
    private String name;

    public static BillingEntity create(String name) {
        BillingEntity billingEntity = new BillingEntity();
        billingEntity.name = name;
        return billingEntity;
    }

}

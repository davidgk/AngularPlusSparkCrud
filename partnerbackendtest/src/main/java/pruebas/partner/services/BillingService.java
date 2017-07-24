package pruebas.partner.services;

import pruebas.partner.model.BillingEntity;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author david.kotlirevsky
 */
public class BillingService {

    private static Map<String, BillingEntity> entities;

    static{
        entities = new HashMap<>();
        entities.put("1", BillingEntity.create("BillingEntity_01") );
        entities.put("2", BillingEntity.create("BillingEntity_02") );
    }


    public static BillingService create() {
        BillingService billingService = new BillingService();
        return billingService;
    }

    public List getBillingEntities() {
        ArrayList result = new ArrayList(entities.values());
        return result;
    }
}

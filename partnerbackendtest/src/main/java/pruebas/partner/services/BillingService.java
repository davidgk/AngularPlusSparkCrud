package pruebas.partner.services;

import pruebas.partner.model.BillingEntity;
import util.OthersUtils;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author david.kotlirevsky
 */
public class BillingService {

    private static Map<String, BillingEntity> entities;
    private static Map<String, String> status;

    static{
        entities = new HashMap<>();
        entities.put("1", BillingEntity.create("BillingEntity_01") );
        entities.put("2", BillingEntity.create("BillingEntity_02") );
        status = new HashMap<>();
        status.put("1", "enabled" );
        status.put("2", "disabled");
        status.put("3", "deleted");
        status.put("4", "canceled");
    }


    public static BillingService create() {
        BillingService billingService = new BillingService();
        return billingService;
    }

    public List getBillingEntities() {
        return OthersUtils.getListFromMap(entities);

    }

    public List getBillingStatus() {
        return OthersUtils.getListFromMap(status);
    }
}

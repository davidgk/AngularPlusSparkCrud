package pruebas.partner.services;

import pruebas.partner.model.ContractEntity;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author david.kotlirevsky
 */
public class IntegrationService {


    private static Map<String, String> integrationStatus;

    static{
        integrationStatus = new HashMap<>();
        integrationStatus.put("1", "API" );
        integrationStatus.put("2", "MYC" );
    }
    public static IntegrationService create() {
        IntegrationService integrationService = new IntegrationService();
        return integrationService;
    }

    public List<ContractEntity> getAllintegrationStatus() {
        ArrayList result = new ArrayList(integrationStatus.values());
        return result;

    }
}

package pruebas.partner.services;

import pruebas.partner.model.ContractEntity;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author david.kotlirevsky
 */
public class ContractEntityService {


    private static Map<String, ContractEntity> contractEntitities;

    static{
        contractEntitities = new HashMap<>();
        contractEntitities.put("1", ContractEntity.create("ContractEntity_01") );
        contractEntitities.put("2", ContractEntity.create("ContractEntity_02") );
    }
    public static ContractEntityService create() {
        ContractEntityService contractEntityService = new ContractEntityService();
        return contractEntityService;
    }

    public List<ContractEntity> getAllContactEntities() {
        ArrayList result = new ArrayList(contractEntitities.values());
        return result;

    }
}

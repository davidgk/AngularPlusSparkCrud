package pruebas.partner.model;

/**
 * @author david.kotlirevsky
 */
public class ContractEntity {

    private String name;

    public static ContractEntity create(String name) {
        ContractEntity contractEntity = new ContractEntity();
        contractEntity.name = name;
        return contractEntity;
    }

}

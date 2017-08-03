package pruebas.partner.model;

/**
 * @author david.kotlirevsky
 */
public class ContractEntity {
    private Long contractEntityKey;
    private String name;

    public static ContractEntity create(String name, Long key) {
        ContractEntity contractEntity = new ContractEntity();
        contractEntity.name = name;
        contractEntity.contractEntityKey = key;
        return contractEntity;
    }

}

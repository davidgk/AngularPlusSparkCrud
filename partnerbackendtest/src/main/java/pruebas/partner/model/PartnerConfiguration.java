package pruebas.partner.model;

/**
 * @author david.kotlirevsky
 */
public class PartnerConfiguration {
    private Long partnerConfigurationKey;
    private Long partnerKey;
    private Long fakeBillingEntityKey;
    /*private String version;
    private String notificationUrl;
    private Boolean requireAcquirerReferenceNumber;
    private Integer maxAttempts;
    private String attemptsInterval;
    private Integer active;
    private String canReadPiiDetail;
    private String websiteUrl;
    private String address1;
    private String address2;
    private String city;
    private String state;
    private String zipcode;
    private String country;
    private String contactFirstName;
    private String contactLastName;
    private String contactPhone;
    private String contactEmail;
    private String supportUrl;
    private String supportPhone;
    private String supportEmail;
    private Boolean autoCloseCases;
    private String cascadeDisableDescriptors;
    private String updated;
    private String created;
    private String clientAutoClosed;
    private Boolean enableInvoiceCreditNotifications;
    private Boolean ignoreSixMonthDisableDeleteRule;
    private Integer contractEntityKey;
    private Integer partnerStatusKey;
    private Integer partnerTypeKey;
    private Integer billingPartnerId;*/
    private Boolean isClientLevelContractEntity;

    public static PartnerConfiguration create(Long partnerConfigurationKey, Long partnerKey, String
        version, String notificationUrl, Boolean requireAcquirerReferenceNumber
        , Integer maxAttempts, String attemptsInterval, Integer active, String canReadPiiDetail,
        String websiteUrl, String address1, String  address2, String city,
        String state, String zipcode, String country, String contactFirstName,
        String contactLastName, String contactPhone, String contactEmail, String supportUrl,
        String supportPhone, String supportEmail, Boolean autoCloseCases, String cascadeDisableDescriptors,
        String clientAutoClosed, Boolean enableInvoiceCreditNotifications,
        Boolean ignoreSixMonthDisableDeleteRule, Integer contractEntityKey,
        Integer partnerStatusKey, Integer partnerTypeKey, Integer billingPartnerId,
        Boolean isClientLevelContractEntity, Long fakeBillingEntityKey) {
        PartnerConfiguration partnerConfiguration = new PartnerConfiguration();
        partnerConfiguration.partnerConfigurationKey= partnerConfigurationKey;
        partnerConfiguration.partnerKey= partnerKey;
        /*partnerConfiguration.version= version;
        partnerConfiguration.notificationUrl= notificationUrl;
        partnerConfiguration.requireAcquirerReferenceNumber=requireAcquirerReferenceNumber;
        partnerConfiguration.maxAttempts= maxAttempts;
        partnerConfiguration.attemptsInterval= attemptsInterval;
        partnerConfiguration.active= active;
        partnerConfiguration.canReadPiiDetail= canReadPiiDetail;
        partnerConfiguration.websiteUrl= websiteUrl;
        partnerConfiguration.address1= address1;
        partnerConfiguration.address2= address2;
        partnerConfiguration.city= city;
        partnerConfiguration.state= state;
        partnerConfiguration.zipcode= zipcode;
        partnerConfiguration.country= country;
        partnerConfiguration.contactFirstName= contactFirstName;
        partnerConfiguration.contactLastName= contactLastName;
        partnerConfiguration.contactPhone= contactPhone;
        partnerConfiguration.contactEmail= contactEmail;
        partnerConfiguration.supportUrl= supportUrl;
        partnerConfiguration.supportPhone= supportPhone;
        partnerConfiguration.supportEmail= supportEmail;
        partnerConfiguration.autoCloseCases= autoCloseCases;
        partnerConfiguration.cascadeDisableDescriptors= cascadeDisableDescriptors;
        partnerConfiguration.clientAutoClosed= clientAutoClosed;
        partnerConfiguration.enableInvoiceCreditNotifications=enableInvoiceCreditNotifications;
        partnerConfiguration.ignoreSixMonthDisableDeleteRule=ignoreSixMonthDisableDeleteRule;
        partnerConfiguration.contractEntityKey= contractEntityKey;
        partnerConfiguration.partnerStatusKey= partnerStatusKey;
        partnerConfiguration.partnerTypeKey= partnerTypeKey;
        partnerConfiguration.billingPartnerId= billingPartnerId;*/
        partnerConfiguration.isClientLevelContractEntity= isClientLevelContractEntity;
        partnerConfiguration.fakeBillingEntityKey= fakeBillingEntityKey;
        return partnerConfiguration;
    }

    public static PartnerConfiguration createSimple(Long partnerConfigurationKey, Long partnerKey,  Boolean isClientLevelContractEntity) {
        PartnerConfiguration partnerConfiguration = new PartnerConfiguration();
        partnerConfiguration.partnerConfigurationKey= partnerConfigurationKey;
        partnerConfiguration.partnerKey= partnerKey;
        partnerConfiguration.isClientLevelContractEntity= isClientLevelContractEntity;
        partnerConfiguration.fakeBillingEntityKey= 1L;
        return partnerConfiguration;
    }


}

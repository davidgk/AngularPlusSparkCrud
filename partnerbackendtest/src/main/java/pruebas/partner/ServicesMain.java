package pruebas.partner;

import pruebas.partner.model.BillingEntity;
import pruebas.partner.model.ContractEntity;
import pruebas.partner.model.Partner;
import pruebas.partner.services.BillingService;
import pruebas.partner.services.ContractEntityService;
import pruebas.partner.services.IntegrationService;
import pruebas.partner.services.PartnerService;
import spark.Request;
import spark.Response;

import java.util.List;

import static spark.Spark.*;
import static util.JsonUtil.json;

/**
 * @author david.kotlirevsky
 */
public class ServicesMain {

    private static PartnerService partnerService;
    private static ContractEntityService contractEntitiesService;
    private static BillingService billlingService;
    private static IntegrationService integrationService;

    public static void main(String[] args )
    {
        port(getHerokuAssignedPort());
        enableCORS("*", "*", "*");
        initServices();
        // contractor
        get("/contractor", (req, res) -> getAllContactEntities(), json());
        get("/contractor/partner/:key", (req, res) -> getContractByPartnerId(req.params("id")), json());
        //Billing
        get("/billing/entity", (req, res) -> getBillingEntities(), json());
        get("/billing/entity/:key", (req, res) -> getBillingEntityBykey(req.params("key")), json());
        // Partner
        get("/partner", (req, res) -> partnerService.getAllPartners(), json());
        get("/partner/status", (req, res) -> getAllPartnerStatus(), json());
        get("/partner/status/:key", (req, res) -> partnerService.getPartnerStatusByKey(req.params("key")), json());
        get("/partner/type", (req, res) -> partnerService.getPartnersTypes(), json());
        get("/partner/type/:key", (req, res) -> partnerService.getPartnerTypeByKey(req.params("key")), json());
        get("/partner/configuration/:key", (req, res) -> partnerService.getPartnerConfigurationById(req.params("key")), json());
        get("/partner/:id", (req, res) -> getPartnerById(req,res), json());
        //Integration
        get("/integrations/status", (req, res) -> integrationService.getAllintegrationStatus(), json());
    }

    private static ContractEntity getContractByPartnerId(String id) {
        return  contractEntitiesService.getById(id);
    }

    private static BillingEntity getBillingEntityBykey(String key) {
        return billlingService.getBillingEntityBykey(key);
    }

    static List getBillingEntities() {
        return billlingService.getBillingEntities();
    }
    static List getAllPartnerStatus() {        return partnerService.getAllPartnerStatus();
    }

    static List getAllContactEntities() {
        return contractEntitiesService.getAllContactEntities();
    }

    private static void initServices() {
        partnerService = PartnerService.create();
        contractEntitiesService = ContractEntityService.create();
        billlingService = BillingService.create();
        integrationService = IntegrationService.create();
    }

    static Partner getPartnerById(Request req, Response res) {
        String id = req.params(":id");
        Partner partner = partnerService.getPartner(id);
        if (partner != null) {
            return partner;
        }
        res.status(400);
        res.body("Partner not found");
        return null;
    }

    static int getHerokuAssignedPort() {
        ProcessBuilder processBuilder = new ProcessBuilder();
        if (processBuilder.environment().get("PORT") != null) {
            return Integer.parseInt(processBuilder.environment().get("PORT"));
        }
        return 8090; //return default port if heroku-port isn't set (i.e. on localhost)
    }


    // Enables CORS on requests. This method is an initialization method and should be called once.
    private static void enableCORS(final String origin, final String methods, final String headers) {

        options("/*", (request, response) -> {

            String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");
            if (accessControlRequestHeaders != null) {
                response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);
            }

            String accessControlRequestMethod = request.headers("Access-Control-Request-Method");
            if (accessControlRequestMethod != null) {
                response.header("Access-Control-Allow-Methods", accessControlRequestMethod);
            }

            return "OK";
        });

        before((request, response) -> {
            response.header("Access-Control-Allow-Origin", origin);
            response.header("Access-Control-Request-Method", methods);
            response.header("Access-Control-Allow-Headers", headers);
            // Note: this may or may not be necessary in your particular application
            response.type("application/json");
        });
    }
}

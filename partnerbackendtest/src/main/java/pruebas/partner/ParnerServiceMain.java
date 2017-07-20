package pruebas.partner;

import pruebas.partner.model.Partner;
import pruebas.partner.services.PartnerService;
import spark.Request;
import spark.Response;

import static spark.Spark.*;
import static util.JsonUtil.json;

/**
 * @author david.kotlirevsky
 */
public class ParnerServiceMain {

    private static PartnerService partnerService;

    public static void main(String[] args )
    {
        port(getHerokuAssignedPort());
        enableCORS("*", "*", "*");
        partnerService = PartnerService.create();
        get("/partners", (req, res) -> partnerService.getAllPartners(), json());
        get("/partners/:id", (req, res) -> getPartnerById(req,res), json());
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

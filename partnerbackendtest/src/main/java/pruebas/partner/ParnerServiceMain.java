package pruebas.partner;

import pruebas.partner.services.PartnerService;

import static spark.Spark.get;
import static spark.Spark.port;
import static util.JsonUtil.json;

/**
 * @author david.kotlirevsky
 */
public class ParnerServiceMain {

    public static void main( String[] args )
    {
        port(getHerokuAssignedPort());
        PartnerService partnerService = PartnerService.create();
        get("/partner", (req, res) -> partnerService.getAllPartners(), json());
    }

    static int getHerokuAssignedPort() {
        ProcessBuilder processBuilder = new ProcessBuilder();
        if (processBuilder.environment().get("PORT") != null) {
            return Integer.parseInt(processBuilder.environment().get("PORT"));
        }
        return 4567; //return default port if heroku-port isn't set (i.e. on localhost)
    }
}

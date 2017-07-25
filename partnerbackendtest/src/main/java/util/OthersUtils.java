package util;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * @author david.kotlirevsky
 */
public class OthersUtils {

    public static List getListFromMap(Map map) {
        ArrayList partnersList = new ArrayList(map.values());
        return partnersList;
    }
}

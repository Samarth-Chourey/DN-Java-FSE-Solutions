import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class ProductUtil {

    static List<Product> products = new ArrayList<>();

    // Adding and Sorting the product Array
    public static void addProduct(Product addProduct) {
        products.add(addProduct);
        products.sort(Comparator.comparingInt(p -> p.getProductId()));
    }

    public static List<Product> getProductList() {
        return products;
    }

    // Code For Linear Search
    public static Boolean linearSearch(List<Product> products, int findProductById) {
        int size = products.size();

        for (int i = 0; i < size; i++) {
            if (findProductById == products.get(i).getProductId()) {
                return true;
            }
        }

        return false;
    }

    // Code for Binary Search
    public static Boolean binarySearch(List<Product> products, int findProductById) {
        int size = products.size();
        int low = 0, high = size - 1;

        while (low <= high) {
            int mid = ((low + high) / 2);

            Product currProduct = products.get(mid);

            if (currProduct.getProductId() == findProductById) {
                return true;
            }

            if (currProduct.getProductId() < findProductById) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }

        }

        return false;
    }
}


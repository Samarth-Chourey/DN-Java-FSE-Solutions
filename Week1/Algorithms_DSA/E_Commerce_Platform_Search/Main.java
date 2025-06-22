public class Main {
    public static void main(String[] args) {
        System.out.println("Welcome to E-Commerce platform search");
        ProductUtil.addProduct(new Product(1, "Mobile", "Electronics"));
        ProductUtil.addProduct(new Product(3, "Shoes", "Fashion"));
        ProductUtil.addProduct(new Product(2, "Laptop", "Electronics"));

        int findProductById = 2;
        // Linear Search Test Result
        boolean linearSearchResult = ProductUtil.linearSearch(ProductUtil.getProductList(), findProductById);
        if (linearSearchResult)
            System.out.println("Product: " + findProductById + " found successfully.");
        else
            System.out.println("Product not found!");

        findProductById = 5;
        // Binary Search Test Result
        boolean binarySearchResult = ProductUtil.binarySearch(ProductUtil.getProductList(), findProductById);
        if (binarySearchResult)
            System.out.println("Product: " + findProductById + " found successfully.");
        else
            System.out.println("Product not found!");
    }
}

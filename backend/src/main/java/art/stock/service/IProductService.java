package art.stock.service;

import art.stock.model.Product;

import java.util.List;

public interface IProductService {
    List<Product> getAllProducts();
    Product getProductById(Integer id);
    void createProduct(Product product);
    void deleteProduct(Integer id);
}

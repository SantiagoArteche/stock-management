package art.stock.controller;


import art.stock.exception.NotFoundException;
import art.stock.model.Product;
import art.stock.service.ProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/products")
@CrossOrigin(value = "http://localhost:5173")
public class ProductController {
    private static final Logger logger = LoggerFactory.getLogger(ProductController.class);

    @Autowired
    private ProductService productService;

    @GetMapping()
    public List<Product> getAll(){
        List<Product> products = this.productService.getAllProducts();
        products.forEach(product -> logger.info(product.toString()));
        return products;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getById(@PathVariable Integer id){
        Product product = this.productService.getProductById(id);

        if(product != null)
            return ResponseEntity.ok(product);
        else
            throw new NotFoundException("Product with id " + id + " not found");

    }

    @PostMapping()
    public Product createProduct(@RequestBody Product product){
        this.productService.createProduct(product);
        return product;
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@RequestBody Product product, @PathVariable Integer id){
        Product exist = this.productService.getProductById(id);

        if(exist != null){
            exist.setName(product.getName());
            exist.setDescription(product.getDescription());
            exist.setPrice(product.getPrice());
            this.productService.createProduct(product);
            return ResponseEntity.ok(exist);
        }else{
            throw new NotFoundException("Product with id " + id + " not found" );
        }
    }

    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable Integer id){
        Product product = this.productService.getProductById(id);

        if(product != null) {
            this.productService.deleteProduct(id);
            return "Product with id " + id + " was deleted";
        }
        else{
            throw new NotFoundException("Product with id " + id + " not found" );
        }
    }

}

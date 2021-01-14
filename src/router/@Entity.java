@Entity
@Data
public class Product {

    @Id
    @GeneratedValue
    private Integer id;

    private String name;

    public Product() {
    }

    public Product(String name) {
        this.name = name;
    }

    public Product(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

}

    public String change() {
        Product product = new Product("xx");
        changeValue(product);
        return product.toString();

    }
    
    public void changeValue(Product product) {
         product.setName("123");
    }
    
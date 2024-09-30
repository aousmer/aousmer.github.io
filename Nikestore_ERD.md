erDiagram
   

    PRODUCT {
        int product_id PK
        string model
        string size
        string color
        float price
        int stock_quantity
    }
    
    CUSTOMER {
        int customer_id PK
        string name
        string email
        string phone
        string address
    }
    
    SALE {
        int sale_id PK 
        int customer_id FK 
        int product_id FK 
        int quantity
        date sale_date
    }

    INVENTORY {
        int inventory_id PK 
        int product_id FK 
        int quantity_available
        date last_restocked
    }

    CUSTOMER ||--o{  SALE : makes
    PRODUCT ||--o{  SALE : includes
    PRODUCT ||--o{ INVENTORY : stocked_in

1. _Customer_
* **Attributes**: customer_id, name, email, phone, address
* **Relationship**: A customer can make multiple sales.

2. _Product_
* **atributes**: product_id, name, size, color, price, stock_quantity
* **Relationships**:
  * A product can be included in multiple sales.
  * A product can be stocked in multiple inventory records.

3. -Sale-
* **Attributes**: sale_id, customer_id, product_id, quantity, sale_date

* **Relationships**:
  * Each sale is made by one customer and includes one product.

4. _Inventory_
* **Attributes**: inventory_id, product_id, quantity_available, last_restocked

* **Relationships**: Each inventory record is related to one product.

import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

//여기다가 한번에 정리하는 느낌이었음
const DUMMY_PRODUCTS = [
  {
    id: "product1",
    title: "Test",
    price: 6,
    description: "This is the first product - amazing!",
  },
  {
    id: "product2",
    title: "Another Test",
    price: 10,
    description: "This is the second product - awesome!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;

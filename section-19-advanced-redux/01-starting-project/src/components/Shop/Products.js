import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: "Starbuck",
    price: 100,
    description: "This is a first product - amazing!",
  },
  {
    id: 2,
    title: "Koi The",
    price: 90,
    description: "This is a first product - amazing!",
  },
  {
    id: 3,
    title: "Phuc Long",
    price: 40,
    description: "This is a first product - amazing!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;

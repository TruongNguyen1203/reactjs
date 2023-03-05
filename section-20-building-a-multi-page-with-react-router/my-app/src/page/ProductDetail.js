const { useParams, Link } = require("react-router-dom");

const ProductDetail = () => {
  const param = useParams();

  return (
    <div>
      <h1>Product Detail</h1>
      <p>{param.id}</p>
      <p><Link to=".." relative='path'>Back</Link></p>
    </div>
  );
};

export default ProductDetail;

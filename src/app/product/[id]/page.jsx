export default async function ProductDetail({ params }) {
  const product = await getProductById(params.id);
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>Price: ৳{product.price}</p>
      {/* more details */}
    </div>
  );
}
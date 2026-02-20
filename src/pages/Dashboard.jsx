import React, { useState, useMemo } from "react";
import { useFetchProducts } from "../hooks/useFetchProducts";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

const Dashboard= () => {
  const { products, loading, error } = useFetchProducts();
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(
    () =>
      products.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      ),
    [products, search]
  );

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h1 className="heading">Dashboard</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <div className="grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

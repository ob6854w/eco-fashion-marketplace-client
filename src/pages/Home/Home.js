import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import Main from "../../components/Main/Main";
import Products from "../../components/Products/Products";
import Brand from "../../components/Brand/Brand";
import Section2 from "../../components/Section2/Section2";
import useProductsAndBrands from "../../hooks/useProductsAndBrands";

function Home() {
  const {
    products,
    brands,
  } = useProductsAndBrands()

  return (
    <>
      <Hero />
      <Section />
      <Main />
      <Products products={products} />
      <Brand brands={brands} />
      <Section2 />
    </>
  );
}

export default Home;

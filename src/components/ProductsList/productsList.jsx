import { Container, ItemList, SectionProducts } from "./style";

const ProductList = ({ products }) => {
  return (
    <Container>
      <h2>Lista de Produtos Cadastrados</h2>
      <SectionProducts>
        {products.map((product) => (
          <ItemList key={product.code}>
            <h5>Produto: {product.name}</h5>
            <p>Descrição do produto: {product.description}</p>
            <span>Preço: {product.price}</span>
          </ItemList>
        ))}
      </SectionProducts>
    </Container>
  );
};

export default ProductList;

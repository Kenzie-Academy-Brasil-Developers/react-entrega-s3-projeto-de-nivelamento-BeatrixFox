import { useState } from "react";
import ProductList from "../ProductsList/productsList";
import { Container, FormContainer } from "./style";

export const Form = () => {
  const [codeList, setCodeList] = useState(["10", "11", "12"]);
  const [message, setMessage] = useState("");
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [products, setProducts] = useState([
    {
      code: 10,
      name: "Smart TV Led 50 Semp",
      description:
        "SK8300 4K HDR Android Wi-Fi 3 HDMI 2 USB Controle Remoto com atalhos Chromecast Integrado",
      price: "2299.99",
      discount: "190.99",
    },
    {
      code: 11,
      name: "Smartphone Samsung Galaxy A72 128GB",
      description:
        "4G Wi-Fi Tela 6.7 Dual Chip 6GB RAM Câmera Quádrupla + Selfie 32MP - Preto",
      price: "1988.40",
      discount: "87.89",
    },
    {
      code: 12,
      name: "Smartwatch Samsung Galaxy Watch Active",
      description:
        "4O Galaxy Watch Active é o smartwatch ideal para quem tem um estilo de vida ativo e saudável. Ele é leve, confortável e monitora diariamente suas atividades físicas, e os comportamentos de nível de stress e sono",
      price: "678.60",
      discount: "110.19",
    },
  ]);

  const HandleSubmit = (code, name, description, price, discount) => {
    !codeList.includes(code)
      ? setCodeList([...codeList, code])
      : setMessage("Esse codigo já existe");
    !codeList.includes(code) && setMessage("");

    !codeList.includes(code) &&
      setProducts([
        ...products,
        {
          code: code,
          name: name,
          description: description,
          price: price,
          discount: discount,
        },
      ]);
  };

  return (
    <Container>
      <header>
        <p>
          Total da compra :{" R$ "}
          {products
            .reduce((total, item) => total + Number(item.price), 0)
            .toFixed(2)}
        </p>
        <p>
          Total de economia :{" R$ "}
          {products
            .reduce((total, item) => total + Number(item.discount), 0)
            .toFixed(2)}
        </p>
      </header>

      <h1>Formulário de cadastro de produtos</h1>
      <FormContainer>
        <span>{message}</span>
        <input
          type="text"
          placeholder="*Codigo"
          value={code}
          onChange={(event) => setCode(event.target.value)}
        />
        <input
          type="text"
          placeholder="*Nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="*Descrição"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          type="text"
          placeholder="*Preço"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <input
          type="text"
          placeholder="*Desconto"
          value={discount}
          onChange={(event) => setDiscount(event.target.value)}
        />
        <button
          onClick={() => HandleSubmit(code, name, description, price, discount)}
        >
          Enviar!
        </button>
      </FormContainer>

      <section>
        <ProductList products={products}></ProductList>
      </section>
    </Container>
  );
};

export default Form;

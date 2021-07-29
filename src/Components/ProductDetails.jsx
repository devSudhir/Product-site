import { useParams } from "react-router-dom";
export const ProductDetails = ({ product }) => {
  const param = useParams();
  console.log("param", param);
  console.log(product);
  return product.map((ele) =>
    ele.id === Number(param.id) ? (
      <div>
        <img
          src={ele.image}
          alt=""
          style={{ border: "2px solid greenyellow", width: "300px" }}
        />
        <h2>Title: {ele.title}</h2>
        <h3>Price: ${ele.price}</h3>
        <h4>Category: {ele.category}</h4>
        <p>{ele.description}</p>
      </div>
    ) : (
      ""
    )
  );
};

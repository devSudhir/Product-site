import styled from "styled-components";
import { Link } from "react-router-dom";
export function Products({ product }) {
  const Main = styled.div`
    width: 90vw;
    margin: 20px auto;
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px;
    & > div {
      width: 30vw;
      padding: 10px;
    }
    & > div > img {
      height: 300px;
      width: 300px;
    }
  `;
  return (
    <Main>
      {product.map((ele) => {
        return (
          <div>
            <img
              src={ele.image}
              alt=""
              style={{ border: "2px solid greenyellow" }}
            />
            <h2>Title: {ele.title}</h2>
            <h3>Price: ${ele.price}</h3>
            <h4>Category: {ele.category}</h4>
            <Link to={`/Product/${ele.id}`}>More details</Link>;
          </div>
        );
      })}
    </Main>
  );
}

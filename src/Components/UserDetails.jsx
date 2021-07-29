import { useParams } from "react-router-dom";
export const UserDetails = () => {
  const param = useParams();
  console.log(param);
  return <h3>{`User is ${param.id}`}</h3>;
};

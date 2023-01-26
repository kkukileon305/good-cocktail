import { useParams } from 'react-router-dom';

const Detail = () => {
  const { idDrink } = useParams();

  return <div>{idDrink}</div>;
};
export default Detail;

import { useSelector } from 'react-redux';
import './styles.css';

const FruitsPage = () => {
  const fruits = useSelector((state) => state.fruits);

  return (
    <div className="fruit__container">
      <p>My fruits list using redux: </p>
      {fruits.map((fruit, index) => (
        <div className={`${fruit} inferior__container`}>
          <p key={index}>{fruit}</p>
        </div>
      ))}
    </div>
  );
};

export default FruitsPage;

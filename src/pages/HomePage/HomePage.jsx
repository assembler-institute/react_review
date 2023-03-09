import { useContext } from 'react';
import Data from '../../db/data.json';
import Card from '../../components/Card/Card';
import { UserContext } from '../../context/user/UserContext';

function HomePage() {
  const { users } = Data;
  const { userData } = useContext(UserContext);

  console.log({ userData });
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        marginTop: '2rem',
      }}
    >
      <h1>Welcome: {userData.email}</h1>
      {users.slice(0, 5).map(({ id, firstName, image }) => {
        return <Card key={id} id={id} name={firstName} image={image} />;
      })}
    </div>
  );
}

export default HomePage;

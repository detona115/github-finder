import UserResults from '../components/layout/users/UserResults';
import UserSearch from '../components/layout/users/UserSearch';

function Home() {
  return (
    <div>
      {/* SEARCH COMPONENT */}
      <UserSearch />
      <UserResults />
    </div>
  );
}

export default Home;

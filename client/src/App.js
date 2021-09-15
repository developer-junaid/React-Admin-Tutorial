// React Admin
import { Admin, Resource } from "react-admin";

// Provider
import restProvider from "ra-data-simple-rest";

// Components
import PostList from "./components/PostList";

// App
function App() {
  return (
    <Admin dataProvider={restProvider("http://localhost:3000")}>
      <Resource name="posts" list={PostList} />
    </Admin>
  );
}

export default App;

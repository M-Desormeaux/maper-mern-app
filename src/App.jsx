import { BaseStyle } from "./AppStyle";
import { Layout } from "./components/Layout/Layout";
import { Auth } from "./pages/Auth";
import { UserList } from "./pages/UserList";

const App = () => {
  return (
    <>
      <BaseStyle />
      <Layout>
        <Auth />
        <UserList />
      </Layout>
    </>
  );
};

export default App;

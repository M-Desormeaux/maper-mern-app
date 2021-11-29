import { BaseStyle } from "./AppStyle";
import { Layout } from "./components/Layout/Layout";
import { Auth } from "./pages/Auth";

const App = () => {
  return (
    <>
      <BaseStyle />
      <Layout>
        <Auth />
      </Layout>
    </>
  );
};

export default App;

import { Helmet } from "react-helmet";
import Logo from "../components/Logo";

const Home: React.FC = () => (
  <div>
    <Helmet>
      <title>Home - React Demo</title>
    </Helmet>
    <Logo />
  </div>
);

export default Home;

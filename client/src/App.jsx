import { Welcome, Services, Transactions, Divorce } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Welcome />
    </div>
    <Services />
    <Transactions />
    <Divorce />
  </div>
);

export default App;

import "./App.css";
import JotaiAndReactQuery from "./JotaiAndReactQuery";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <JotaiAndReactQuery />
      </div>
    </QueryClientProvider>
  );
}

export default App;

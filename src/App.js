import './App.css';
import {QueryClient, QueryClientProvider} from "react-query";
import {TodoApp} from "./components/TodoApp/TodoApp";
import {MainWrapper} from "./Styles";

function App() {

  const queryClient = new QueryClient()

  return (
      <QueryClientProvider client={queryClient}>
          <MainWrapper>
              <TodoApp />
          </MainWrapper>
      </QueryClientProvider>
  );
}

export default App;

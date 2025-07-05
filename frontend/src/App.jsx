import { BusinessProvider } from "./context/BusinessContext"
import Dashboard from "./pages/Dashboard"

// Here defined the Business Provider to work all over the components
// used Icons from react-icons package
// fetching react-query & axios

const App = () =>
  <BusinessProvider>
    <Dashboard />
  </BusinessProvider>
  


export default App

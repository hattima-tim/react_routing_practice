import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
// import HelloWorld from "./helloWorld";
import Expenses from "./epenses";
import Invoices from "./invoices";
import Invoice from "./invoice";
function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
            <Route path=":id" element={<Invoice />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <main style={{ textAlign: "center" }}>
              <h1>404</h1>
              <p>Page not found</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;

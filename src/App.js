import { ThemeContext, useMode } from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
// import Dashboard from "./pages/dashboard";
import Applications from "./pages/applications";
// import Contacts from "./pages/contacts";
// import Form from "./pages/form";
import Calendar from "./pages/calendar";
// import Bar from "./pages/bar";
// import Line from "./pages/line";
// import Pie from "./pages/pie";

function App() {
  const { colorMode, theme } = useMode();
  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              {/* <Route path="/" element={<Dashboard />} /> */}
              <Route path="/applications" element={<Applications />} />
              {/* <Route path="/contacts" element={<Contacts />} /> */}
              {/* <Route path="/form" element={<Form />} /> */}
              <Route path="/calendar" element={<Calendar />} />
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;

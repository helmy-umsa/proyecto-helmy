import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './pages/Pages.css';

export default function App() {
  return <RouterProvider router={router} />;
}

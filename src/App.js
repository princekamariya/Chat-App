import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./style.scss";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
function App() {
    const { currentUser } = useContext(AuthContext);
    console.log(currentUser);

    const ProtectedRoute = ({ children }) => {
        if (!currentUser) {
            return <Navigate to="/login" />;
        }

        return children;
    };
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route
                        index
                        element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

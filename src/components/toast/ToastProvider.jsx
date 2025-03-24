import { createContext, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

const ToastProvider = ({ children }) => {
    const setSuccessMessage = (message) => {
        toast.success(message, { position: "bottom-right" });
    };

    const setErrorMessage = (message) => {
        toast.error(message, { position: "bottom-right" });
    };

    return (
        <ToastContext.Provider value={{ setSuccessMessage, setErrorMessage }}>
            {children}
            <ToastContainer />
        </ToastContext.Provider>
    );
};

export default ToastProvider;
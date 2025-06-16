import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import type {FormValues} from "../components/MultiFieldFormWithValidation.tsx";

const FormInputPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const submittedData = location.state as FormValues | null;

    useEffect(() => {
        document.title = "Form Submission Details";
    }, []);

    if (!submittedData) {
        return (
            <div className="max-w-sm mx-auto mt-10 text-center">
                <p>No form data available.</p>
                <button
                    onClick={() => navigate("/")}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Back to Form
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-sm mx-auto mt-10 space-y-4">
            <h2 className="text-2xl font-semibold text-center">Submitted Data</h2>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Message:</strong> {submittedData.message}</p>

            <div className="text-center">
                <button
                    onClick={() => navigate("/")}
                    className="mt-6 px-4 py-2 bg-gray-300 text-black rounded"
                >
                    Back to Form
                </button>
            </div>
        </div>
    );
};

export default FormInputPage;
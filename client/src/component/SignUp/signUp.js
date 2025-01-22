import "../SignUp/signUp.css";
import { useState } from "react";
import { validateEmail } from "../utils/utils";
import axios from 'axios';

const PasswordErrorMessage = () => {
    return (
        <p className="FieldError">Password should have at least 8 characters</p>
    );
};

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        value: "",
        isTouched: false,
    });
    const [role, setRole] = useState("role");
    const [show, setShow] = useState(false);

    const getIsFormValid = () => {
        return (
            firstName &&
            validateEmail(email) &&
            password.value.length >= 8 &&
            role !== "role"
        );
    };

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword({
            value: "",
            isTouched: false,
        });
        setRole("role");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Account created!");
        try {
            // Make a POST request to the backend login API
            const response = axios.post('http://localhost:5000/api/SignUp', {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                role: role
            });

            // Check if login is successful
            if (response.data.success) {
                alert("SignUp successful")
                console.log('SignUp successful!');
                // Redirect or update UI after successful login
            } else {
                setShow(true); // Show error message
            }
        } catch (error) {
            console.error('Login failed:', error);
            setShow(true); // Show error message if request fails
        }


        clearForm();
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Sign Up</h2>
                    <div className="Field">
                        <label>
                            First name <sup>*</sup>
                        </label>
                        <input
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                            placeholder="First name"
                        />
                    </div>
                    <div className="Field">
                        <label>Last name</label>
                        <input
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}
                            placeholder="Last name"
                        />
                    </div>
                    <div className="Field">
                        <label>
                            Email address <sup>*</sup>
                        </label>
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            placeholder="Email address"
                        />
                    </div>
                    <div className="Field">
                        <label>
                            Password <sup>*</sup>
                        </label>
                        <input
                            value={password.value}
                            type="password"
                            onChange={(e) => {
                                setPassword({ ...password, value: e.target.value });
                            }}
                            onBlur={() => {
                                setPassword({ ...password, isTouched: true });
                            }}
                            placeholder="Password"
                        />
                        {password.isTouched && password.value.length < 8 ? (
                            <PasswordErrorMessage />
                        ) : null}
                    </div>
                    <div className="Field">
                        <label>
                            Role <sup>*</sup>
                        </label>
                        <select value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="role">Role</option>
                            <option value="individual">Individual</option>
                            <option value="business">Business</option>
                        </select>
                    </div>
                    <button type="submit" disabled={!getIsFormValid()}>
                        Create account
                    </button>
                </fieldset>
            </form>
        </div>
    );
}

export default App; 
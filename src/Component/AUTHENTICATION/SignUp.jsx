import logo from "../Image/1.png";
import logo1 from "../Image/5.png";
import logo2 from "../Image/4.png";
import logo3 from "../Image/6.png";
import logo4 from "../Image/7.png";
import logo5 from "../Image/8.png";
import face from "../Image/3.jpeg";
import ai2 from "../Image/2ai.mp4";
import logo6 from "../Image/9.gif";
import logo7 from "../Image/10.png";
import logo8 from "../Image/11.webm";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import Main from "../Main.jsx/Main";
import { useNavigate } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignUp() {
  const navigate = useNavigate();
  // const handleSignIn = () => {
  //   navigate("/Main");
  // };
  // ------------------------------------
  // validation;
  const [email, setEmail] = useState("");

  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);
  const timerRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const passwordPattern = /^(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/;
  const [loading, setLoading] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // ======================

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    // setEmail(emailValue);

    setEmail(e.target.value);
    // setEmailError("");

    // Regular expression to validate the email format
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(emailValue)) {
    //   toast.error("Please enter a valid email address.");
    //   // setEmailError("Please enter a valid email address.");
    // }
  };

  // ======================
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
    // setShowPassword(false);

    // Start the timer to hide the password after 3 seconds
    setTimeout(() => {
      setShowPassword(false);
    }, 1000);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
    // setShowConfirmPassword(false);

    setTimeout(() => {
      setShowConfirmPassword(false);
    }, 1000);
  };
  const handleSubmit = (event) => {
    event?.preventDefault();
    setLoading(true);
    // Clear previous error message
    setErrorMessage("");
    if (loading) {
      return setLoading(false);
    }
    // Check if any field is empty
    if (!email || !userName || !password || !confirmPassword) {
      setErrorMessage("Please fill out all fields.");
      toast.error("Please fill out the fields.");
      return setLoading(false);
    }
    if (!passwordPattern.test(password)) {
      toast.error(
        "please enter you password with  number and a Uppercase letter."
      );
      setErrorMessage(
        "Password should have at least one special character and one capital letter."
      );
      return setLoading(false);
    }
    if (password.trim() === "") {
      console.log("Please enter a password");
      return setLoading(false);
    }

    if (confirmPassword.trim() === "") {
      console.log("Please confirm your password");
      return setLoading(false);
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      console.log("Passwords do not match");
      return setLoading(false);
    }
    if (!termsChecked) {
      toast.error("Please agree to the Terms & Conditions.");
      return setLoading(false);
    }

    if (emailRegex?.test(email)) {
      console.log("first email check");
      // toast.error("Please enter a valid email address.");
      // setEmailError("Please enter a valid email address.");
      axios
        .post("http://localhost:80/auth/signUp", {
          email,
          userName,
          password,
          userType: "0",
          // confirmPassword,
        })
        .then((response) => {
          setLoading(false);
          setEmail("");
          toast.success("Otp Sent Successfully!");
          toggleSignup29();
          // toggleSignup25();
          console.log("Sign-up successful.");
        })
        .catch((error) => {
          setLoading(false);
          if (
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            // Display the error message from the API response
            const errorMessage = error.response.data.message;
            toast.error(errorMessage);
          } else {
            // Display a generic error message
            toast.error("An error occurred. Please try again.");
          }
          console.error("Sign-up error:", error);
          setErrorMessage("Sign-up failed. Please try again.");
        });
    } else {
      toast.error("Please enter a valid email address.");
      setLoading(false);
    }
  };

  // ------------------------------------
  const handleSignIn = (event) => {
    // event?.preventDefault();
    // setLoading(true);
    // if (loading) {
    //   return setLoading(false);
    // }
    // setErrorMessage("");
    // setLoading(true);

    // if (loading) {
    //   return;
    // }
    event?.preventDefault();
    setLoading(true);
    // Clear previous error message
    setErrorMessage("");

    if (!email || !password) {
      setErrorMessage("Please fill out all fields.");
      return;
      setLoading(false);
    }
    if (emailRegex?.test(email)) {
      axios
        .post("http://localhost:80/auth/login", {
          email,
          password,
          deviceToken: "test",
        })
        .then((response) => {
          setLoading(false);
          const token = response?.data?.data?.token;
          localStorage.setItem(
            "userInfo",
            JSON.stringify(response?.data?.data)
          );
          localStorage.setItem("token", token);
          localStorage.getItem("token");
          if (response && response.data && response.data.message) {
            // Display the success message from the API response
            const successMessage = response.data.message;
            toast.success(successMessage);
          } else {
            // Display a generic success message
            toast.success("Sign-in successful");
          }
          toggleSignup26();
          console.log("Sign-in successful.");
          // toast.success("Sign-in Succesfully.");

          navigate("/Main");
        })
        .catch((error) => {
          setLoading(false);
          if (
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            // Display the error message from the API response
            const errorMessage = error.response.data.message;
            toast.error(errorMessage);
          } else {
            // Display a generic error message
            toast.error("Sign in failed");
          }
          console.error("Sign-up error:", error);
          setErrorMessage("Sign-up failed. Please try again.");
        });
    } else {
      toast.error("Please enter a valid email address.");
      setLoading(false);
    }
  };

  // Make the API call

  // ===========================================
  const handleSendOTP = (event) => {
    setLoading(true);

    event.preventDefault();
    if (loading) {
      return;
    }
    // Clear previous error message
    setErrorMessage("");

    // Check if the email field is empty
    if (!email) {
      setErrorMessage("Please enter your email.");
      return setLoading(false);
    }

    axios
      .post("http://localhost:80/auth/forgot_password", {
        email,
      })
      .then((response) => {
        setLoading(false);
        if (response && response.data && response.data.message) {
          // Display the success message from the API response
          const successMessage = response.data.message;
          toast.success(successMessage);
        } else {
          // Display a generic success message
          toast.success("Operation completed successfully.");
        }
        toggleSignup27();

        // Handle successful OTP sending here
        console.log("OTP sent successfully.");
      })
      .catch((error) => {
        setLoading(false);
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          // Display the error message from the API response
          const errorMessage = error.response.data.message;
          toast.error(errorMessage);
        } else {
          // Display a generic error message
          toast.error("Wrong email addredd");
        }
        console.error("Sign-up error:", error);
        setErrorMessage("Sign-up failed. Please try again.");
      });
  };

  // ----------------------
  // for otp modal---
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const otpBoxes = useRef([]);
  console.log("otp", otp);
  const handleChange = (e, index) => {
    const { value } = e.target;
    const updatedOTP = [...otp];
    updatedOTP[index] = value;
    setOTP(updatedOTP);

    if (value !== "" && index !== otp.length - 1) {
      otpBoxes.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index !== 0 && otp[index] === "") {
      otpBoxes.current[index - 1].focus();
    }
  };
  const handleOtpSubmit = (e) => {
    setLoading(true);

    e.preventDefault();
    if (loading) {
      return;
    }
    // Check if all six OTP digits are entered
    if (otp.filter((digit) => digit === "").length === 0) {
      const otpValue = otp.join("");
      console.log("otpValue", otpValue);

      // Call the API with OTP in the request body
      axios
        .post("http://localhost:80/auth/otp_verification", {
          otp: otpValue,
        })
        .then((response) => {
          setLoading(false);
          setOTP(["", "", "", "", "", ""]);
          if (response && response.data && response.data.message) {
            // Display the success message from the API response
            const successMessage = response.data.message;
            toast.success(successMessage);
          } else {
            // Display a generic success message
            toast.success("Operation completed successfully.");
          }
          toggleSignup28();
          // API call successful
          // Perform navigation to the main page
          // Add your navigation code here
        })
        // .catch((error) => {
        //   // toggleSignup28();
        //   // toast.success("Otp Succesfully");
        //   // API call failed
        //   toast.error("please enter an valid otp");
        //   console.log("API call failed:", error);
        // });
        .catch((error) => {
          setLoading(false);
          if (
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            // Display the error message from the API response
            const errorMessage = error.response.data.message;
            toast.error(errorMessage);
          } else {
            // Display a generic error message
            toast.error("Please enter an valid otp");
          }
          console.error("Sign-up error:", error);
          setErrorMessage("Sign-up failed. Please try again.");
        });
    } else {
      // Display error message or perform appropriate validation
      console.log("Please enter all six OTP digits");
    }
  };
  const verifyhandleOtpSubmit = (e) => {
    setLoading(true);

    e.preventDefault();
    if (loading) {
      return;
    }
    // Check if all six OTP digits are entered
    if (otp.filter((digit) => digit === "").length === 0) {
      const otpValue = otp.join("");
      console.log("otpValue", otpValue);

      // Call the API with OTP in the request body
      axios
        .post("http://localhost:80/auth/otp_verification", {
          otp: otpValue,
        })
        .then((response) => {
          setLoading(false);
          setOTP(["", "", "", "", "", ""]);

          if (response && response.data && response.data.message) {
            // Display the success message from the API response
            const successMessage = response.data.message;
            toast.success(successMessage);
          } else {
            // Display a generic success message
            toast.success("Operation completed successfully.");
          }
          // toggleSignup28();
          toggleSignup25();

          // API call successful
          // Perform navigation to the main page
          // Add your navigation code here
        })
        .catch((error) => {
          setLoading(false);
          if (
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            // Display the error message from the API response
            const errorMessage = error.response.data.message;
            toast.error(errorMessage);
          } else {
            // Display a generic error message
            toast.error("Please enter an valid otp");
          }
          console.error("Sign-up error:", error);
          setErrorMessage("Sign-up failed. Please try again.");
        });
    } else {
      // Display error message or perform appropriate validation
      console.log("Please enter all six OTP digits");
    }
  };
  // ======================
  const handleResetPassword = (e) => {
    setLoading(true);

    e.preventDefault();
    // if (handleResetPassword) {
    //   return
    // }
    // Perform form validation
    if (password.trim() === "") {
      console.log("Please enter a password");
      return setLoading(false);
    }

    if (confirmPassword.trim() === "") {
      console.log("Please confirm your password");
      return setLoading(false);
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      console.log("Passwords do not match");
      return setLoading(false);
    }

    // Call the API to reset the password
    axios
      .post("http://localhost:80/auth/reset_password", {
        email,
        password,
      })
      .then((response) => {
        setLoading(false);
        if (response && response.data && response.data.message) {
          // Display the success message from the API response
          const successMessage = response.data.message;
          toast.success(successMessage);
        } else {
          // Display a generic success message
          toast.success("Operation completed successfully.");
        }
        // Password reset successful
        // toggleSignup12();
        toggleSignup25();
        console.log("Password reset successful");
        // Perform any necessary actions after successful password reset
      })
      .catch((error) => {
        setLoading(false);
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          // Display the error message from the API response
          const errorMessage = error.response.data.message;
          toast.error(errorMessage);
        } else {
          // Display a generic error message
          toast.error("Please enter an valid otp");
        }
        console.error("Sign-up error:", error);
        setErrorMessage("Sign-up failed. Please try again.");
      });
  };
  // ======================
  // resendOtp
  const resendOtp = () => {
    setLoading(true);

    if (loading) {
      return;
    }
    axios
      .post("http://localhost:80/auth/resend_otp", {
        email,
      })
      .then((response) => {
        setLoading(false);
        if (response && response.data && response.data.message) {
          // Display the success message from the API response
          const successMessage = response.data.message;
          toast.success(successMessage);
        } else {
          // Display a generic success message
          toast.success("Operation completed successfully.");
        }
        // Password reset successful
        // toggleSignup12();
        console.log("Password reset successful");
        // Perform any necessary actions after successful password reset
      })
      .catch((error) => {
        setLoading(false);
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          // Display the error message from the API response
          const errorMessage = error.response.data.message;
          toast.error(errorMessage);
        } else {
          // Display a generic error message
          toast.error("Please enter an valid otp");
        }
        console.error("Sign-up error:", error);
        setErrorMessage("Sign-up failed. Please try again.");
      });
  };
  // ======================
  // const handleEmailChange = (e) => {
  //   const inputValueAsd = e.target.value;
  //   console.log("handleemailchange cliekd", inputValueAsd);
  //   const regex = /@gmail\.com$/;

  //   if (!regex.test(inputValueAsd)) {
  //     setEmail(inputValueAsd);
  //   } else {
  //     console.log("please enter a proper email address");
  //   }
  // };
  // const [emailError, setEmailError] = useState("");
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // const handleEmailChange = (e) => {
  //   const emailValue = e.target.value;
  //   // setEmail(emailValue);

  //   setEmail(e.target.value);
  //   // setEmailError("");

  //   // Regular expression to validate the email format
  //   // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   // if (!emailRegex.test(emailValue)) {
  //   //   toast.error("Please enter a valid email address.");
  //   //   // setEmailError("Please enter a valid email address.");
  //   // }
  // };

  // // ======================

  const [showSignup25, setShowSignup25] = useState(false);
  const [showSignup12, setShowSignup12] = useState(true);
  const [showSignup26, setShowSignup26] = useState(false);
  const [showSignup27, setShowSignup27] = useState(false);
  const [showSignup28, setShowSignup28] = useState(false);
  const [showSignup29, setShowSignup29] = useState(false);
  const toggleSignup25 = () => {
    setuserName("");
    setEmail("");
    setConfirmPassword("");
    setPassword("");
    setShowSignup25(true);
    setShowSignup27(false);
    setShowSignup28(false);
    setShowSignup12(false);
    setShowSignup29(false);
    setShowSignup26(false);
  };
  const toggleSignup29 = () => {
    setuserName("");
    // setEmail("");
    setConfirmPassword("");
    setPassword("");
    setShowSignup29(true);
    setShowSignup25(false);
    setShowSignup27(false);
    setShowSignup28(false);
    setShowSignup12(false);
    setShowSignup26(false);
  };
  const toggleSignup12 = () => {
    setuserName("");

    setEmail("");
    setConfirmPassword("");
    setPassword("");
    setShowSignup12(!showSignup12);
    setShowSignup28(false);
    setShowSignup29(false);
    setShowSignup26(false);
    setShowSignup25(false);
  };
  const toggleSignup26 = () => {
    setuserName("");

    // setEmail("");
    setConfirmPassword("");
    setPassword("");
    setShowSignup26(true);
    setShowSignup29(false);
    setShowSignup12(false);
    setShowSignup25(false);
    setShowSignup27(false);

    setShowSignup28(false);
  };
  const toggleSignup27 = () => {
    setuserName("");

    // setEmail("");
    setConfirmPassword("");
    setPassword("");
    setShowSignup27(true);
    setShowSignup25(false);
    setShowSignup12(false);
    setShowSignup26(false);
    setShowSignup28(false);
    setShowSignup26(false);
  };
  const toggleSignup28 = () => {
    setuserName("");

    // setEmail("");
    setConfirmPassword("");
    setPassword("");
    setShowSignup28(true);
    setShowSignup29(false);
    setShowSignup27(false);
    setShowSignup25(false);
    setShowSignup12(false);
    setShowSignup26(false);
  };

  const [isplaying, setIsplaying] = useState(true);
  useEffect(() => {}, [isplaying]);

  return (
    <>
      <div className="a111c44">
        <Container fluid>
          <Row className="m-0 p-0">
            <Col lg={1}>
              <div className="Signup4 justify-content-lg-start d-flex justify-content-center align-items-center p-4 ">
                <img className="Signup5 main_Logo " src={logo} alt="" />
              </div>
            </Col>
            <Col lg={6} className="d-lg-block d-none">
              <div>
                {/* <div className="Signup4"> */}
                {/* <img className="Signup5 main_Logo p-5" src={logo} alt="" /> */}
                {/* </div> */}
                <div className="Signup7 d-flex justify-content-center align-items-center p-5">
                  <img src={logo7} alt="face image" className="Signup9 w-100" />
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div className="Signup3">
                <div className="Signup10 d-md-block"></div>
                <div className="Signup11  px-5 d-flex justify-content-center align-items-lg-center align-items-start ">
                  {showSignup12 && (
                    <div className="Signup12">
                      <div className="Signup13 text-center text-lg-start fs-4">
                        <h2>Create your account</h2>
                      </div>
                      <div className=" text-center text-lg-start text-white my-3 mb-4 fs-6">
                        Created for developers by developers
                      </div>
                      {/* <form onSubmit={handleSubmit}> */}
                      <Form className="SignupForm" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="email"
                            placeholder="Email"
                            className="Signup17 p-3"
                            name="email"
                            autoComplete="off"
                            required
                            value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            onChange={handleEmailChange}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="User_name"
                            className="Signup17 p-3"
                            name="name"
                            autoComplete="off"
                            required
                            value={userName}
                            onChange={(e) => setuserName(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            className="Signup17 p-3"
                            name="password"
                            autoComplete="off"
                            required
                            value={password}
                            minLength="6"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="password"
                            placeholder="Confirm password"
                            className="Signup17 p-3"
                            name="confirmPassword"
                            autoComplete="off"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />{" "}
                          <div className="Signup18 my-4">
                            <input
                              checked={termsChecked}
                              onChange={() => {
                                console.log("termschecked", termsChecked);
                                setTermsChecked(!termsChecked);
                              }}
                              className="Signup19"
                              type="checkbox"
                            />
                            <span className="Signup20 ms-2">
                              I agree to the Terms & Conditions
                            </span>
                          </div>
                          <Button
                            disabled={loading}
                            className={`my-1 p-3  Signup21 btn w-100  ${
                              loading ? "loading" : ""
                            }`}>
                            <span>
                              <div
                                className="Signup22"
                                onClick={() => handleSubmit()}
                                type="submit">
                                {loading ? "Loading..." : "Create Account"}
                              </div>
                            </span>
                          </Button>
                          <div
                            className="Signup23 my-4"
                            onClick={toggleSignup25}>
                            Already have an account ?{" "}
                            <div className="Signup24"> Sign In</div>
                          </div>
                        </Form.Group>
                      </Form>
                      {/* </form> */}
                    </div>
                  )}
                  {showSignup25 && (
                    <div className="Signup12">
                      <div className="Signup13 text-center text-lg-start fs-4">
                        <h2>Sign In</h2>
                      </div>
                      <div className=" text-center text-lg-start text-white my-3 mb-4 fs-6">
                        Login to manage your account
                      </div>
                      {/* <form onSubmit={handleSubmit}> */}
                      <Form className="SignupForm" onSubmit={handleSignIn}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="email"
                            placeholder="Email"
                            className="Signup17 p-3"
                            name="email"
                            autoComplete="off"
                            required
                            value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            onChange={handleEmailChange}
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            className="Signup17 p-3"
                            name="password"
                            autoComplete="off"
                            required
                            value={password}
                            minLength="6"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <div
                            onClick={toggleSignup26}
                            className="Signup18 my-4 d-flex justify-content-end text-end">
                            <span className="Signup20 ms-2 ">
                              Forgot Password ?
                            </span>
                          </div>
                          {/* <Button
                            disabled={loading}
                            className={`my-1 p-3  Signup21 btn w-100   ${
                              loading ? "loading" : ""
                            }`}> */}
                          {/* <div
                            className="Signup22"
                            onClick={() => handleSignIn()}
                            type="submit">
                            {loading ? "Loading..." : "Sign In"}
                          </div> */}
                          {/* </Button> */}
                          <Button
                            disabled={loading}
                            type="submit"
                            className={`my-1 p-3  Signup21 btn w-100   ${
                              loading ? "loading" : ""
                            }`}>
                            <div className="Signup22" type="submit">
                              {loading ? "Loading..." : "Sign In"}
                            </div>
                          </Button>
                          <div
                            className="Signup23 my-4"
                            onClick={toggleSignup12}>
                            Don't have an account ?{" "}
                            <div className="Signup24"> Sign Up</div>
                          </div>
                        </Form.Group>
                      </Form>
                      {/* </form> */}
                    </div>
                  )}
                  {showSignup26 && (
                    <div className="Signup12">
                      <div className="Signup13 text-center text-lg-start fs-4">
                        <h2>Forgot Password</h2>
                      </div>
                      <div className=" text-center text-lg-start text-white my-3 mb-4 fs-6">
                        Please enter your Email
                      </div>
                      {/* <form onSubmit={handleSubmit}> */}
                      <Form className="SignupForm" onSubmit={handleSendOTP}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="email"
                            placeholder="Email"
                            className="Signup17 p-3"
                            name="email"
                            autoComplete="off"
                            required
                            value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            onChange={handleEmailChange}
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Button
                            disabled={loading}
                            type="submit"
                            className={`my-1 p-3  Signup21 btn w-100   ${
                              loading ? "loading" : ""
                            }`}>
                            <div className="Signup22" type="submit">
                              {loading ? "Loading..." : "Send OTP"}
                            </div>
                          </Button>
                          <div
                            className="Signup23 my-4"
                            onClick={toggleSignup25}>
                            Already have an account ?{" "}
                            <div className="Signup24"> Sign In</div>
                          </div>
                        </Form.Group>
                      </Form>
                      {/* </form> */}
                    </div>
                  )}
                  {showSignup27 && (
                    <div className="Signup12">
                      <div className="Signup13 text-center text-lg-start fs-4">
                        <h2>OTP Verification</h2>
                      </div>
                      <div className=" text-center text-lg-start text-white my-3 mb-4 fs-6">
                        Please enter your One Time Password
                      </div>
                      {/* <form onSubmit={handleSubmit}> */}
                      <Form className="SignupForm" onSubmit={handleOtpSubmit}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="email"
                            placeholder="Email"
                            className="Signup17 p-3"
                            name="email"
                            autoComplete="off"
                            required
                            value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            // onChange={handleEmailChange}
                          />
                        </Form.Group>

                        <Form.Group>
                          <div className="signup2a d-flex justify-content-center align-items-center my-4">
                            {otp.map((digit, index) => (
                              <div
                                className="Signup26 d-flex justify-content-center align-items-center"
                                key={index}>
                                <input
                                  className="Signup26as"
                                  type="text"
                                  maxLength="1"
                                  required
                                  value={digit}
                                  onChange={(e) => handleChange(e, index)}
                                  onKeyDown={(e) => handleKeyDown(e, index)}
                                  ref={(ref) => {
                                    otpBoxes.current[index] = ref;
                                  }}
                                />
                              </div>
                            ))}
                          </div>
                        </Form.Group>
                        <div
                          onClick={resendOtp}
                          className="Signup18 my-4 d-flex justify-content-end text-end">
                          <span className="Signup20 ms-2 ">Resend OTP</span>
                        </div>
                        <Form.Group className="mb-3">
                          <Button
                            disabled={loading}
                            type="submit"
                            className={`my-1 p-3  Signup21 btn w-100   ${
                              loading ? "loading" : ""
                            }`}>
                            <div className="Signup22" type="submit">
                              {loading ? "Loading..." : "Send OTP"}
                            </div>
                          </Button>
                          <div
                            className="Signup23 my-4"
                            onClick={toggleSignup25}>
                            Already have an account ?{" "}
                            <div className="Signup24"> Sign Up</div>
                          </div>
                        </Form.Group>
                      </Form>
                      {/* </form> */}
                    </div>
                  )}
                  {showSignup28 && (
                    <div className="Signup12">
                      <div className="Signup13 text-center text-lg-start fs-4">
                        <h2>Reset Password</h2>
                      </div>
                      <div className=" text-center text-lg-start text-white my-3 mb-4 fs-6">
                        Please Reset your password
                      </div>
                      {/* <form onSubmit={handleSubmit}> */}
                      <Form
                        className="SignupForm"
                        onSubmit={handleResetPassword}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            className="Signup17 p-3"
                            name="password"
                            autoComplete="off"
                            required
                            value={password}
                            minLength="6"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </Form.Group>{" "}
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            className="Signup17 p-3"
                            name="confirmPassword"
                            autoComplete="off"
                            required
                            value={confirmPassword}
                            minLength="6"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          {/* <Button
                            disabled={loading}
                            className={`my-1 p-3  Signup21 btn w-100   ${
                              loading ? "loading" : ""
                            }`}> */}
                          {/* <div
                            className="Signup22"
                            onClick={() => handleSignIn()}
                            type="submit">
                            {loading ? "Loading..." : "Sign In"}
                          </div> */}
                          {/* </Button> */}
                          <Button
                            disabled={loading}
                            type="submit"
                            className={`my-1 p-3  Signup21 btn w-100   ${
                              loading ? "loading" : ""
                            }`}>
                            <div className="Signup22" type="submit">
                              {loading ? "Loading..." : "Reset Password "}
                            </div>
                          </Button>
                          <div
                            className="Signup23 my-4"
                            onClick={toggleSignup25}>
                            Already have an account ?{" "}
                            <div className="Signup24"> Sign In</div>
                          </div>
                        </Form.Group>
                      </Form>
                      {/* </form> */}
                    </div>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default SignUp;

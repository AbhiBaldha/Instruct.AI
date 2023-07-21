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
import { Form, useNavigate } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

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
    event.preventDefault();
    setLoading(true);
    // Clear previous error message
    setErrorMessage("");
    if (loading) {
      return setLoading(false);
    }
    // Check if any field is empty
    if (!email || !userName || !password || !confirmPassword) {
      setErrorMessage("Please fill out all fields.");
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

    console.log("Sign-up button clicked. Ready to make API call.");
    // Submit the form
    // ...
  };

  // ------------------------------------
  const handleSignIn = (event) => {
    event.preventDefault();
    setLoading(true);
    if (loading) {
      return;
    }
    setErrorMessage("");
    setLoading(true);

    if (loading) {
      return;
    }
    if (!email || !password) {
      setErrorMessage("Please fill out all fields.");
      return;
      setLoading(false);
    }

    // Make the API call
    axios
      .post("http://localhost:80/auth/login", {
        email,
        password,
        deviceToken: "test",
      })
      .then((response) => {
        setLoading(false);
        const token = response?.data?.data?.token;
        localStorage.setItem("userInfo", JSON.stringify(response?.data?.data));
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
  };
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
    if (handleResetPassword) {
      return;
    }
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
  // const mainCall = () => {
  //   <Main />;
  // };
  const [isplaying, setIsplaying] = useState(true);
  useEffect(() => {
    // setIsplaying(true);
  }, [isplaying]);
  // console.log("isplaying", isplaying);

  return (
    <>
      <div className="Signup1">
        <div className="Signup2">
          <div className="Signup4">
            <img className="Signup5" src={logo} alt="" />
            <div className="Signup6"></div>
          </div>
          <div className="Signup7">
            {/* ==================== */}

            {/* <video className="Signup9" loop autoPlay={true} muted>
              <source className="Signup9" src={ai2} type="video/mp4" />
            </video> */}
            {/* ==================== */}
            {/* <video className="Signup9" type="video/mp4" src={ai2}></video> */}
            {/* <ReactPlayer url={ai2} height="504px" width={504} loop={true} /> */}
            {/* <video className="Signup9" type="video/mp4" src={ai2}></video> */}
            {/* <img className="Signup9" src={face} alt="face logo" /> */}
            {/* <img
              src={logo8}
              // src="https://cdn.dribbble.com/users/7379292/screenshots/15401203/media/a452ce0193001e90bc3d93853b33f9fa.gif"
              alt="face image"
              className="Signup9"
              // className="Signup10"
            /> */}
            {/* <div className="Signuo9a"> */}
            <img
              src={logo7}
              // src="https://cdn.dribbble.com/users/7379292/screenshots/15401203/media/a452ce0193001e90bc3d93853b33f9fa.gif"
              alt="face image"
              className="Signup9"
              // className="Signup10"
            />
            {/* <video className="Signup9" loop autoPlay={true} muted>
                <source className="Signup9" src={logo8} type="video/mp4" />
              </video> */}
            {/* </div> */}
          </div>
          <div className="Signup8"></div>
        </div>
        <div className="Signup3">
          <div className="Signup10"></div>
          <div className="Signup11">
            {showSignup12 && (
              <div className="Signup12">
                <div className="Signup13">Create your account</div>
                <div className="Signup14">
                  Created for developers by developers
                </div>
                {/* =============================== */}
                {/* =================================== */}{" "}
                <form className="SignupForm" onSubmit={handleSubmit}>
                  {/* {errorMessage && (
                    <div className="error-message">{errorMessage}</div>
                  )} */}
                  <div className="Signup17">
                    <div className="Signup16">
                      {/* Email */}
                      <input
                        className="inputa"
                        type="email"
                        name="email"
                        placeholder="Email"
                        autoComplete="off"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="Signup17">
                    <div className="Signup16">
                      {/* User Name */}
                      <input
                        className="inputa"
                        type="text"
                        name="name"
                        placeholder="User Name"
                        autoComplete="off"
                        required
                        value={userName}
                        onChange={(e) => setuserName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="Signup17">
                    <div className="Signup16">
                      {/* Password */}
                      <input
                        className="inputa"
                        type={showConfirmPassword ? "text" : "password"}
                        // type="password"
                        name="password"
                        placeholder="Password"
                        autoComplete="off"
                        required
                        value={password}
                        minLength="6"
                        onChange={(e) => setPassword(e.target.value)}
                      />{" "}
                      <div
                        className="eye-icon"
                        onClick={() => handleToggleConfirmPassword()}>
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                      </div>
                    </div>
                  </div>
                  <div className="Signup17">
                    <div className="Signup16">
                      {/* Confirm Password */}
                      <input
                        className="inputa"
                        // type="password"
                        type={showPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        autoComplete="off"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <div
                        className="eye-icon"
                        onClick={() => handleTogglePassword()}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </div>
                    </div>
                  </div>{" "}
                  <div className="Signup18">
                    <input
                      checked={termsChecked}
                      onChange={() => {
                        console.log("termschecked", termsChecked);
                        setTermsChecked(!termsChecked);
                      }}
                      className="Signup19"
                      type="checkbox"
                    />
                    <span className="Signup20">
                      I agree to the Terms & Conditions
                    </span>
                  </div>
                  <button
                    disabled={loading}
                    className={`Signup21 ${loading ? "loading" : ""}`}>
                    <span
                    // className="Signup21"
                    // onClick={toggleSignup25}
                    >
                      <div
                        className="Signup22"
                        onClick={console.log("handleSubmit", handleSubmit)}
                        type="submit">
                        {loading ? "Loading..." : "Create Account"}
                      </div>
                    </span>
                  </button>
                  <div className="Signup23" onClick={toggleSignup25}>
                    Already have an account ?{" "}
                    <div className="Signup24"> Sign In</div>
                  </div>
                </form>
                {/* ====================================== */}
              </div>
            )}
            {/* ------------------- */}
            {showSignup29 && (
              <form onSubmit={verifyhandleOtpSubmit}>
                <div className="Signup25">
                  <div className="Signup13">OTP Verification</div>
                  <div className="Signup14">
                    Please enter your One Time Password
                  </div>
                  <div className="Signup15">
                    <div className="Signup16">{email}</div>
                  </div>
                  <div className="Signup27">
                    <div className="Signup26">
                      {otp.map((digit, index) => (
                        <div className="Signup26" key={index}>
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
                  </div>
                  <div className="Signup18">
                    <span className="Signup20a" onClick={resendOtp}>
                      Resend OTP
                    </span>
                  </div>
                  <button
                    disabled={loading}
                    type="submit"
                    className={`Signup21 ${loading ? "loading" : ""}`}>
                    <div
                    //  className="Signup21"
                    >
                      {loading ? "Loading..." : "Verify Otp"}
                      {/* Verify Otp */}
                    </div>
                  </button>
                  <div className="Signup23" onClick={toggleSignup12}>
                    Don't have an account?{" "}
                    <div className="Signup24">Sign Up</div>
                  </div>
                </div>
              </form>
            )}
            {/* ----------------------------- */}
            {showSignup25 && (
              <div className="Signup25">
                <div className="Signup13">Sign In</div>
                <div className="Signup14">Login to manage your account</div>
                <form className="SignupForm" onSubmit={handleSignIn}>
                  <div className="Signup15">
                    <div className="Signup16">
                      {/* Email Here */}
                      <input
                        className="inputa"
                        type="email"
                        name="email"
                        placeholder="Email"
                        autoComplete="off"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="Signup17">
                    <div className="Signup16">
                      {/* Password */}
                      <input
                        className="inputa"
                        type={showPassword ? "text" : "password"}
                        // type="password"
                        name="password"
                        placeholder="Password"
                        autoComplete="off"
                        minLength="6"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />{" "}
                      <div className="eye-icon" onClick={handleTogglePassword}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </div>
                    </div>
                  </div>
                  {/* {errorMessage && (
                    <div className="error-message">{errorMessage}</div>
                  )} */}
                  <div className="Signup18" onClick={toggleSignup26}>
                    <span className="Signup20a">Forgot Password?</span>
                  </div>
                  <button
                    disabled={loading}
                    type="
                  submit"
                    className={`Signup21 ${loading ? "loading" : ""}`}>
                    <div
                    //  className="Signup21"
                    >
                      {/* Sign In */}
                      {loading ? "Loading..." : "Sign In"}
                    </div>
                  </button>
                </form>
                <div className="Signup23" onClick={toggleSignup12}>
                  Don't have an account? <div className="Signup24">Sign Up</div>
                </div>
              </div>
            )}{" "}
            {showSignup26 && (
              <div className="Signup25">
                <div className="Signup13">Forgot Password</div>
                <div className="Signup14">Please enter your Email</div>
                <form className="SignupForm" onSubmit={handleSendOTP}>
                  <div className="Signup15">
                    <div className="Signup16">
                      {/* Email Here */}
                      <input
                        className="inputa"
                        type="email"
                        name="email"
                        placeholder="Email"
                        autoComplete="off"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <button
                    disabled={loading}
                    type="submit"
                    className={`Signup21 ${loading ? "loading" : ""}`}>
                    <div
                    // className="Signup21"
                    >
                      {/* Send OTP */}
                      {loading ? "Loading..." : "Send OTP"}
                    </div>
                  </button>
                </form>
                <div className="Signup23" onClick={toggleSignup25}>
                  Already have an account?{" "}
                  <div className="Signup24">Sign In</div>
                </div>
              </div>
            )}{" "}
            {showSignup27 && (
              <form onSubmit={handleOtpSubmit}>
                <div className="Signup25">
                  <div className="Signup13">OTP Verification</div>
                  <div className="Signup14">
                    Please enter your One Time Password
                  </div>
                  <div className="Signup15">
                    <div className="Signup16">{email}</div>
                  </div>
                  <div className="Signup27">
                    <div className="Signup26">
                      {otp.map((digit, index) => (
                        <div className="Signup26" key={index}>
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
                  </div>
                  <div className="Signup18">
                    <span className="Signup20a" onClick={resendOtp}>
                      Resend OTP
                    </span>
                  </div>
                  <button
                    type="submit"
                    className={`Signup21 ${loading ? "loading" : ""}`}
                    // disabled={loading}
                  >
                    <div
                    //  className="Signup21"
                    >
                      {/* Reset Password */}
                      {loading ? "Loading..." : "Reset Password "}
                    </div>
                  </button>
                  <div className="Signup23" onClick={toggleSignup26}>
                    Wrong Email Address?
                    <div className="Signup24">Click here</div>
                  </div>
                </div>
              </form>
            )}
            {showSignup28 && (
              <div className="Signup25">
                <div className="Signup13">Reset Password</div>
                <div className="Signup14">Please Reset your password</div>
                <form onSubmit={handleResetPassword}>
                  <div className="Signup15">
                    <div className="Signup16">
                      {/* Password */}
                      <input
                        className="inputa"
                        // type="password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        minLength="6"
                        autoComplete="off"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <div className="eye-icon" onClick={handleTogglePassword}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </div>
                    </div>
                  </div>
                  <div className="Signup15">
                    <div className="Signup16">
                      {/* Confirm Password */}
                      <input
                        className="inputa"
                        // type="password"
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        autoComplete="off"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                      <div
                        className="eye-icon"
                        onClick={() => handleToggleConfirmPassword()}>
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`Signup21 ${loading ? "loading" : ""}`}>
                    <div
                    //  className="Signup21"
                    >
                      {/* Reset Password */}
                      {loading ? "Loading..." : "Reset Password "}
                    </div>
                  </button>
                </form>
                <div className="Signup23" onClick={toggleSignup25}>
                  Already have an account?{" "}
                  <div className="Signup24">Sign In</div>
                </div>
              </div>
            )}{" "}
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;

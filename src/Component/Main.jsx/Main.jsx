import "../All.css";
import { LuEdit, LuStars } from "react-icons/lu";
import Hamburger from "hamburger-react";

import {
  BiEdit,
  BiMessageSquareEdit,
  BiMoon,
  BiSolidSun,
} from "react-icons/bi";
import { Line } from "react-chartjs-2";
import { IoMdLock } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import { ImFilesEmpty } from "react-icons/im";
import { IoAddCircleOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { FiEdit, FiEdits } from "react-icons/fi";
import logomain from "../Image/logo.png";
import logomain2 from "../Image/logomain1.png";
import newchat from "../Image/newchat.png";
import { BsCheckLg } from "react-icons/bs";
import { RxCross2, RxCross2s } from "react-icons/rx";
import { FaHandsClapping } from "react-icons/fa6";
import right from "../Image/right.png";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"; // You can choose a different style if you prefer
import { vs } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import {
  AiOutlineCheck,
  AiOutlineDelete,
  AiOutlineDislike,
  AiOutlineInfoCircle,
  AiOutlineInfoCircles,
  AiOutlineLike,
  AiOutlineSend,
} from "react-icons/ai";
import React, { useEffect, useRef, useState } from "react";
import logo from "../Image/1.png";
import logo12 from "../Image/12.png";
import { Form, useNavigate } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";

// ==============================
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import axios from "axios";
import toast from "react-hot-toast";
import moment from "moment/moment";
import Clipboard from "clipboard";

import { MDBProgress, MDBProgressBar } from "mdb-react-ui-kit";
import CopyToClipboard from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { Dropdown } from "bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Chat } from "./Chat";

// ==============================

function Main() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [CopyALlCOde, setCopyALlCOde] = useState([]);
  const [isActivebutton, setIsActivebutton] = useState(false);
  const [EditActive, setEditActive] = useState(false);

  const [buttonActive, setbuttonActive] = useState(false);
  const [isTitleEditing, setIsTitleEditing] = useState(false);
  const [activeItemId, setActiveItemId] = useState(null);
  const [StoreClickedIdOnly, setStoreClickedIdOnly] = useState([]);
  // ==========================
  const [textToCopy, setTextToCopy] = useState([]);
  const [copied, setCopied] = useState(false);

  console.log("textToCopy", textToCopy);
  // const handleCopyClick = () => {
  //   // Create a temporary textarea element to copy the text
  //   const tempTextarea = document.createElement("textarea");
  //   tempTextarea.value = textToCopy;
  //   document.body.appendChild(tempTextarea);

  //   // Select the text inside the textarea and copy it
  //   tempTextarea.select();
  //   document.execCommand("copy");

  //   // Remove the temporary textarea element
  //   document.body.removeChild(tempTextarea);
  // };
  // ==========================

  const myDivRef = useRef(null);
  const [TitleStore, setTitleStore] = useState([]);
  const [Title, setTitle] = useState();

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  // ==================
  const [QuesTitleStore, setQuesTitleStore] = useState([]);
  const [QTitle, setQTitle] = useState();

  const handleOnChangeQuestion = (e) => {
    setQTitle(e.target.value);
  };
  useEffect(() => {
    const myDiv = myDivRef?.current;
    if (myDiv) {
      myDiv.scrollTop = myDiv?.scrollHeight;
    }
  });
  // ============================
  const token = localStorage.getItem("token");
  console.log(token, "TOKENwdswqdwefwf");
  const config = {
    headers: { Authorization: token },
  };
  // ==============================

  const CustomBar = (props) => {
    const { x, y, width, height } = props;

    // Custom shape with border radius
    const borderRadius = 10;
    const path = `
      M ${x + borderRadius},${y}
      H ${x + width - borderRadius}
      Q ${x + width},${y} ${x + width},${y + borderRadius}
      V ${y + height - borderRadius}
      Q ${x + width},${y + height} ${x + width - borderRadius},${y + height}
      H ${x + borderRadius}
      Q ${x},${y + height} ${x},${y + height - borderRadius}
      V ${y + borderRadius}
      Q ${x},${y} ${x + borderRadius},${y}
      Z
    `;

    return <path d={path} stroke="#0062ff" fill="#0062ff" />;
  };
  const tooltipStyles = {
    backgroundColor: "#111c44",
    color: "#ffffff",
    borderWidth: 0,
    borderColor: "none",
    itemStyle: { color: "#ffffff" }, // Set the label text color to white
    labelStyle: { color: "#111c44" },
    valueStyle: { color: "#111c44" },
  };
  // ==============================
  const navigate = useNavigate();
  const toogleSignUppage = () => {
    localStorage.removeItem("token");

    navigate("/");
  };
  const [isLightTheme, setIsLightTheme] = useState(true); // initial theme is set to light
  console.log("isLightTheme", isLightTheme);

  const [active, setactive] = useState(false);
  // function to handle theme change
  const toggleTheme = () => {
    setIsLightTheme((prevTheme) => !prevTheme);
    setactive(true);
  };
  // -------------------
  const [inputValue, setInputValue] = useState("");
  const [containerActive, setContainerActive] = useState(false);
  const [containerActive1, setContainerActive1] = useState(false);
  const [activeScreen, setActiveScreen] = useState("new");
  const handleNavigation = (screen) => {
    setActiveScreen(screen);
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);

    setInputValue(e.target.value);
    setContainerActive(e.target.value.length > 0);
    setContainerActive1(e.target.value.length > 0);
  };
  // const handleInputChange1 = (e) => {
  //   setInputValue(e.target.value);
  //   setContainerActive1(e.target.value.length > 0);
  // };
  const [value, setValue] = useState("");

  console.log("value", value);
  // -----------------------------------------------
  const [UserProfile, setUserProfile] = useState([]);

  const UserProfileGet = () => {
    axios
      .get("https://instruct-ai-mk73.onrender.com/user/get_profile", config)
      .then((response) => {
        setUserProfile(response?.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    UserProfileGet();
  }, []);

  // console.log("getRoomResponse", getRoomResponse);

  // -----------------------------------------------
  // -----------------------------------------------
  // messsage send api
  // -----------------------------------------------
  const [RoomsearchHistoryData, setRoomsearchHistorydata] = useState([]);

  const RoomsearchHistory = () => {
    axios
      .get("https://instruct-ai-mk73.onrender.com/user/get/historyRoom", config)
      .then((response) => {
        setRoomsearchHistorydata(response?.data);
        if (response && response.data && response.data.message) {
          // Display the success message from the API response
          const successMessage = response.data.message;
          toast.success(successMessage);
        } else {
          // Display a generic success message
          toast.success("Sign-in successful");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    RoomsearchHistory();
  }, []);

  // console.log("getRoomResponse", getRoomResponse);

  // -----------------------------------------------
  // -----------------------------------------------
  const [weeklyGraph, setweeklyGraph] = useState([]);

  const weeklyGraphData = () => {
    axios
      .get(
        "https://instruct-ai-mk73.onrender.com/user/get/weeklyReport",
        config
      )
      .then((response) => {
        setweeklyGraph(response?.data);
        if (response && response.data && response.data.message) {
          // Display the success message from the API response
          const successMessage = response.data.message;
          toast.success(successMessage);
        } else {
          // Display a generic success message
          toast.success("fetching error");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    weeklyGraphData();
  }, []);

  // console.log("weeklyGraph", weeklyGraph);

  // -----------------------------------------------
  const totalCount = weeklyGraph?.data?.total_count ?? 0;
  const maxCount = 400;
  const progressPercentage = (totalCount / maxCount) * 100;
  const data = weeklyGraph?.data?.weekly_data
    ?.map((item) => ({
      name: moment(item?.date).format("ddd"),
      uv: item?.count,
      // === 0 ? "No data" : item?.count,
      amt: item?.count,
      //  === 0 ? "No data" : item?.count,
    }))
    ?.sort((a, b) => {
      const days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
      const aIndex = days.indexOf(a.name);
      const bIndex = days.indexOf(b.name);

      // If both days are "Today", keep them in sequence
      if (aIndex === bIndex && a.name === "Today") {
        return 0;
      }

      // If one of them is "Today", move it to the end
      if (a.name === "Today") {
        return 1;
      } else if (b.name === "Today") {
        return -1;
      }

      // Otherwise, sort based on their normal order
      return aIndex - bIndex;
    });
  // -----------------------------------------------
  // messsage send api
  const [isNewChatClicked, setIsNewChatClicked] = useState(false);
  const [isUpdateClicked, setisUpdateClicked] = useState(false);

  const handleNewChatClick = () => {
    if (isNewChatClicked) {
      QuerySendTrue();
      console.log("firstaaaaaaaaaaaaaaa");
      setIsNewChatClicked(true);
      // setfget_historyRoom_by_id("");
      // setValue("");
    } else if (isUpdateClicked) {
      setisUpdateClicked(true);
      QueryUpdate();
      // console.log("Condition 2 is true");
    } else {
      // console.log("firstaaaaaaaaaaaaaaa", isNewChatClicked);

      QuerySend();
    }
  };
  // -----------------------------------------------
  const [fget_historyRoom_by_id, setfget_historyRoom_by_id] = useState("");
  console.log("valuea?._idqwqasdsa", fget_historyRoom_by_id);

  const [getRoomResponse, setgetRoomResponse] = useState([]);
  const get_historyRoom_by_id = (fget_historyRoom_by_id) => {
    if (fget_historyRoom_by_id) {
      axios
        .get(
          `https://instruct-ai-mk73.onrender.com/user/get/historyRoom/${fget_historyRoom_by_id}`,
          config
        )
        .then((response) => {
          RoomsearchHistory();

          console.log(response.data, "asdzcAD");
          setgetRoomResponse(response?.data?.data?.[0]);
          // Do something with the response data
        })
        .catch((error) => {
          console.error(error);
          // Handle error
        });
    }
  };

  useEffect(() => {
    if (fget_historyRoom_by_id) {
      get_historyRoom_by_id(fget_historyRoom_by_id);
    }
  }, []);
  console.log("getRoomResponse", getRoomResponse);

  // -----------------------------------------------
  // messsage send api
  // -----------------------------------------------
  const [first, setfirst] = useState([]);
  const QuerySend = () => {
    const body = {
      message: value,
      isFirstTime: false,
      historyRoomId: fget_historyRoom_by_id,
    };
    if (value) {
      axios
        .post(
          "https://instruct-ai-mk73.onrender.com/user/ChatWithGpt",
          body,
          config
        )
        .then((response) => {
          get_historyRoom_by_id(fget_historyRoom_by_id);

          setValue("");
          setContainerActive(false);
          console.log("valuelog", value);
          console.log("QuerySendResponse", response?.data);
          // Do something with the response data
        })
        .catch((error) => {
          console.error(error);
          // Handle error
        });
    }
  };

  // ----------------------------------------------- // -----------------------------------------------
  // messsage send api
  // -----------------------------------------------
  const [UpdateApi, setUpdateApi] = useState([]);
  const [UpdateApiId, setUpdateApiId] = useState([]);
  const QueryUpdate = () => {
    const body = {
      // message: value,
      // isFirstTime: false,
      // historyRoomId: fget_historyRoom_by_id,
      chatId: UpdateApiId,
      message: value,
    };
    if (value) {
      axios
        .put(
          "https://instruct-ai-mk73.onrender.com/user/update/chat/by_id",
          body,
          config
        )
        .then((response) => {
          setisUpdateClicked(false);
          // get_historyRoom_by_id(UpdateApiId);
          get_historyRoom_by_id(fget_historyRoom_by_id);

          setValue("");
          setContainerActive(false);
          console.log("valuelog", value);
          console.log("QuerySendResponseasdsadsa", response?.data);
          // Do something with the response data
        })
        .catch((error) => {
          console.error(error);
          // Handle error
        });
    }
  };

  // -----------------------------------------------
  const [updateQuery, setupdateQuery] = useState([]);
  const HistoryUpdate = (id_for_update) => {
    const body = {
      title: Title,
      historyRoomId: id_for_update,
    };
    if (Title) {
      axios
        .put(
          "https://instruct-ai-mk73.onrender.com/user/update/historyRoom/by_id",
          body,
          config
        )
        .then((response) => {
          get_historyRoom_by_id(fget_historyRoom_by_id);
          setbuttonActive(false);
          setIsTitleEditing(false);
          setValue("");
          setContainerActive(false);
          console.log("valuelog", value);
          console.log("QuerySendResponse", response?.data);
          // Do something with the response data
        })
        .catch((error) => {
          console.error(error);
          // Handle error
        });
    }
  };
  // -----------------------------------------------
  const HistoryDelete = (id_for_delete) => {
    if (id_for_delete) {
      axios
        .delete(
          `https://instruct-ai-mk73.onrender.com/user/delete/historyRoom/${id_for_delete}`,
          config
        )
        .then((response) => {
          RoomsearchHistory();

          if (response && response.data && response.data.message) {
            // Display the success message from the API response
            const successMessage = response.data.message;
            toast.success(successMessage);
          } else {
            // Display a generic success message
            toast.success("fetching error");
          }
          console.log(response.data, "asdzcAD");
          // Do something with the response data
        })
        .catch((error) => {
          console.error(error);
          // Handle error
        });
    }
  };

  // -----------------------------------------------
  const textareaRef = useRef(null);
  const newQuery = () => {
    setIsNewChatClicked(true);
    console.log("abhi4", isNewChatClicked);

    setfget_historyRoom_by_id("");
    setgetRoomResponse("");
    // get_historyRoom_by_idclick();
    handleNavigation("new");
    console.log("firstaaaaaaaaaaaaaaa");
    setValue("");
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
    // QuerySendTrue();
  };
  console.log("133456", fget_historyRoom_by_id);
  const [newQueryID, setnewQueryID] = useState("");
  const QuerySendTrue = () => {
    const body = {
      message: value,
      isFirstTime: true,
      historyRoomId: "",
    };
    if (value) {
      axios
        .post(
          "https://instruct-ai-mk73.onrender.com/user/ChatWithGpt",
          body,
          config
        )
        .then((response) => {
          setIsNewChatClicked(false);
          setActiveId(response?.data?.data?.historyRoom?._id);
          setfget_historyRoom_by_id(response?.data?.data?.historyRoom?._id);
          get_historyRoom_by_id(response?.data?.data?.historyRoom?._id);
          get_historyRoom_by_id(response?.data?.data?.historyRoom?._id);
          // console.log(
          //   "setfget_historyRoom_by_id1as",
          //   setfget_historyRoom_by_id
          // );
          setValue("");
          setContainerActive(false);
          console.log("valuelog", value);
          console.log(
            "QuerySendResponse",
            response?.data?.data?.historyRoom?._id
          );
          // Do something with the response data
        })
        .catch((error) => {
          console.error(error);
          // Handle error
        });
    }
  };
  console.log("setfget_historyRoom_by_id1as", fget_historyRoom_by_id);
  // -----------------------------------------------

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  const adjustHeight = (element) => {
    element.style.height = "auto"; // Reset the height to auto

    // Calculate the scroll height of the content
    const scrollHeight = element?.scrollHeight;

    // Set the height based on the scroll height with appropriate limits
    if (scrollHeight <= 50) {
      element.style.height = "50px";
    } else if (scrollHeight <= 150) {
      element.style.height = scrollHeight + "px";
    } else {
      element.style.height = "150px";
    }
  };
  // -------------------
  const [isClicked, setIsClicked] = useState(false);
  const [clickedId, setClickedId] = useState(null);
  const [activeId, setActiveId] = useState(null);
  console.log("activeIdaaaaaaa", activeId);

  const handleL2Click = (clickedId) => {
    setActiveId(clickedId);
    setfget_historyRoom_by_id(clickedId);

    get_historyRoom_by_id(clickedId);
    if (textareaRef?.current) {
      textareaRef?.current.focus();
    }
  };
  const handleL2ClickText = (clickedId) => {
    if (textareaRef?.current) {
      textareaRef?.current.focus();
    }
  };
  console.log("sdfacrr", activeId);
  // const getClassNames = () => {
  //   if (isClicked) {
  //     return isLightTheme ? "L2 light clicked-class" : "L2 dark clicked-class";
  //   } else {
  //     return isLightTheme ? "L2 light" : "L2 dark";
  //   }
  // };
  // =====================================================
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const performTask = (taskNumber) => {
    // Replace the switch case with your specific tasks based on the selected option.
    switch (taskNumber) {
      case 1:
        // Task 1 logic
        handleNavigation("About-Profile");

        console.log("Task 1 selected");
        break;
      case 2:
        // Task 2 logic
        console.log("Task 2 selected");
        break;
      case 3:
        // Task 3 logic
        toogleSignUppage();
        console.log("Task 3 selected");
        break;
      default:
        console.log("Invalid task number");
    }
  };
  // = = = = = = = = = = = = = = = = = = = = = = = = = = = =
  const UpdateUserName = UserProfile?.data;
  console.log("Updasdas11", UpdateUserName);

  const [username, setUsername] = useState(UpdateUserName);

  console.log("usernameAsd", username);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    setUsername(UpdateUserName?.userName);
    setEmail(UpdateUserName?.email);
  }, []);
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validate the fields
    if (
      username.trim() === "" ||
      fullName.trim() === "" ||
      email.trim() === ""
    ) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    if (!isValidEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // All validations pass, call the API using Axios
    const userData = {
      userName: username,
      // fullName: fullName,
      email: email,
      aboutMe: aboutMe,
    };

    axios
      .put(
        "https://instruct-ai-mk73.onrender.com/user/update_profile",
        userData,
        config
      )
      .then((response) => {
        console.log(response.data);
        // Reset the error message and clear the form
        setErrorMessage("");
        setUsername("");
        setFullName("");
        setEmail("");
        setAboutMe("");
      })
      .catch((error) => {
        // Handle errors here
        console.error(error);
      });
  };
  //  = = = = = = = = = = = = = = = = =
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessagePassword, setErrorMessagePassword] = useState("");

  const isValidPassword = (password) => {
    return password.length >= 8;
  };

  const handleSaveChangesPassword = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validate the fields
    if (
      oldPassword.trim() === "" ||
      newPassword.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      // setErrorMessagePassword("Please fill in all required fields.");
      toast.error("Please fill out  all Password");

      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Password don't matched");

      // setErrorMessagePassword("New passwords do not match.");
      return;
    }

    if (!isValidPassword(newPassword)) {
      toast.error("sdfsd");
      // setErrorMessagePassword("Password should be at least 8 characters long.");
      return;
    }

    // All validations pass, call the API using Axios
    const passwordData = {
      old_password: oldPassword,
      new_password: newPassword,
    };

    axios
      .post(
        "https://instruct-ai-mk73.onrender.com/user/change_password",
        passwordData,
        config
      )
      .then((response) => {
        toast.success("Password Chasnge Succesfully");
        // Handle the API response if needed
        console.log(response.data);
        // Reset the error message and clear the form
        setErrorMessage("");
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      })
      .catch((error) => {
        // Handle errors here
        console.error(error);
      });
  };

  return (
    <>
      <Container fluid>
        <div
          //  className="container"
          className={
            isLightTheme ? "containeramain light" : "containeramain dark"
          }>
          <div className="mainpart">
            <Row className="m-0 p-0">
              <Col lg={4} xl={3} className="d-lg-block d-none">
                <div
                  className={isLightTheme ? "LeftPart light" : "LeftPart dark"}

                  //  className="LeftPart"
                >
                  {/* <Row> */}
                  {/* <Col lg={2}> */}
                  <div
                    //  className="l1"
                    className={isLightTheme ? "l1 light" : "l1 dark"}>
                    {/* <h2>INSTRUCT AI</h2> */}
                    {isLightTheme ? (
                      <img className="l1a" src={logo12} alt=";logo" />
                    ) : (
                      <img className="l1a" src={logo} alt=";logo" />
                    )}
                  </div>
                  {/* </Col> */}

                  {/* ----------------------------------------- */}
                  {/* <Col lg={7}> */}
                  <div
                    // className="l5"
                    className={isLightTheme ? "l5 light" : "l5"}>
                    {/* ----------------------------- */}
                    {RoomsearchHistoryData?.data?.length > 0 ? (
                      RoomsearchHistoryData?.data?.map((val) => {
                        console.log(
                          "valueAASA12324",
                          RoomsearchHistoryData?.data?.length
                        );

                        if (val?._id === 1) {
                          // Render data for _id 1
                          console.log("valueAASA", val);

                          return (
                            <>
                              <div className="day1">Today</div>
                              {val?.data?.length > 0 &&
                                val?.data?.map((valuea) => {
                                  const isActive = valuea?._id === activeId;

                                  console.log("abhi", valuea?._id);
                                  console.log("abhi1", activeId);
                                  console.log("sdsfsdccbgfsras", isActive);
                                  const isActive1 = valuea?._id === activeId;
                                  const titleSelect = valuea?.title;
                                  return (
                                    <div
                                      key={valuea?._id}
                                      className={`${
                                        isLightTheme ? "L2 light" : "L2 dark"
                                      } ${
                                        isActive ? "activehistorydark" : ""
                                      } ${
                                        isActive1 ? "activehistorylight" : ""
                                      }`}>
                                      <div
                                        onClick={() => {
                                          handleNavigation("history");
                                          handleL2Click(valuea?._id);

                                          setfget_historyRoom_by_id(
                                            valuea?._id
                                          );
                                          console.log("abhi2", valuea?._id);
                                        }}
                                        className={
                                          isLightTheme ? "l3 light" : "l3 dark"
                                        }>
                                        <LuStars />
                                      </div>
                                      <div className="l4">
                                        {/* <input
                                    className="r14ainput"
                                    type="text"
                                    placeholder={valuea?.title}
                                  /> */}
                                        {/* {valuea?.title} */}
                                        {isTitleEditing &&
                                        StoreClickedIdOnly === valuea?._id ? (
                                          <input
                                            className="r14ainput"
                                            type="text"
                                            placeholder={valuea?.title}
                                            value={Title}
                                            readOnly={!isTitleEditing}
                                            onChange={handleOnChange}
                                          />
                                        ) : (
                                          <div
                                            onClick={() => {
                                              setbuttonActive(false);

                                              handleNavigation("history");
                                              handleL2Click(valuea?._id);
                                              setfget_historyRoom_by_id(
                                                valuea?._id
                                              );
                                              console.log("abhi3", valuea?._id);
                                              setIsTitleEditing(false);
                                            }}
                                            className="l4">
                                            {valuea?.title}
                                          </div>
                                        )}
                                      </div>
                                      {isActive && !buttonActive ? (
                                        <BiMessageSquareEdit
                                          className="logoclass"
                                          onClick={() => {
                                            setIsTitleEditing(!isTitleEditing);
                                            setStoreClickedIdOnly(valuea?._id); // Set the ID of the item being edited
                                            setTitle(valuea?.title);
                                            setbuttonActive(true);
                                            // setActiveId("");
                                            // setIsActive(false);
                                          }}
                                        />
                                      ) : null}
                                      {isActive && !buttonActive ? (
                                        <AiOutlineDelete
                                          onClick={() => {
                                            console.log("jeetlodo");
                                            HistoryDelete(valuea?._id);
                                          }}
                                          className="logoclass"
                                        />
                                      ) : null}
                                      {buttonActive && isActive ? (
                                        <BsCheckLg
                                          className="logoclassWright"
                                          onClick={() => {
                                            HistoryUpdate(valuea?._id);
                                            // setActiveId(valuea?._id);
                                            // setbuttonActive(false);
                                            // setIsTitleEditing(!isTitleEditing);
                                            // setStoreClickedIdOnly(valuea?._id); // Set the ID of the item being edited
                                            // setTitle(valuea?.title);
                                          }}
                                        />
                                      ) : // <img
                                      //   src={right}
                                      //   alt="asdas"
                                      //   className="logoclassWright"
                                      // />
                                      null}{" "}
                                      {buttonActive && isActive ? (
                                        <RxCross2
                                          className="logoclassWright"
                                          onClick={() => {
                                            setActiveId(valuea?._id);
                                            setbuttonActive(false);
                                            setIsTitleEditing(false);
                                            // setIsTitleEditing(!isTitleEditing);
                                            // setStoreClickedIdOnly(valuea?._id); // Set the ID of the item being edited
                                            // setTitle(valuea?.title);
                                          }}
                                        />
                                      ) : null}
                                    </div>
                                  );
                                })}
                            </>
                          );
                        } else if (val?._id === 2) {
                          // Render data for _id 1
                          console.log("valueAASA", val);

                          return (
                            <>
                              <div className="day1">Tommorow</div>

                              {val?.data?.length > 0 &&
                                val?.data?.map((valuea) => {
                                  const isActive = valuea?._id === activeId;

                                  console.log("abhi", valuea?._id);
                                  console.log("abhi1", activeId);
                                  console.log("sdsfsdccbgfsras", isActive);
                                  const isActive1 = valuea?._id === activeId;
                                  const titleSelect = valuea?.title;
                                  return (
                                    <div
                                      key={valuea?._id}
                                      className={`${
                                        isLightTheme ? "L2 light" : "L2 dark"
                                      } ${
                                        isActive ? "activehistorydark" : ""
                                      } ${
                                        isActive1 ? "activehistorylight" : ""
                                      }`}>
                                      <div
                                        onClick={() => {
                                          handleNavigation("history");
                                          handleL2Click(valuea?._id);

                                          setfget_historyRoom_by_id(
                                            valuea?._id
                                          );
                                          console.log("abhi2", valuea?._id);
                                        }}
                                        className={
                                          isLightTheme ? "l3 light" : "l3 dark"
                                        }>
                                        <LuStars />
                                      </div>
                                      <div className="l4">
                                        {/* <input
                                    className="r14ainput"
                                    type="text"
                                    placeholder={valuea?.title}
                                  /> */}
                                        {/* {valuea?.title} */}
                                        {isTitleEditing &&
                                        StoreClickedIdOnly === valuea?._id ? (
                                          <input
                                            className="r14ainput"
                                            type="text"
                                            placeholder={valuea?.title}
                                            value={Title}
                                            readOnly={!isTitleEditing}
                                            onChange={handleOnChange}
                                          />
                                        ) : (
                                          <div
                                            onClick={() => {
                                              setbuttonActive(false);

                                              handleNavigation("history");
                                              handleL2Click(valuea?._id);
                                              setfget_historyRoom_by_id(
                                                valuea?._id
                                              );
                                              console.log("abhi3", valuea?._id);
                                              setIsTitleEditing(false);
                                            }}
                                            className="l4">
                                            {valuea?.title}
                                          </div>
                                        )}
                                      </div>
                                      {isActive && !buttonActive ? (
                                        <BiMessageSquareEdit
                                          className="logoclass"
                                          onClick={() => {
                                            setIsTitleEditing(!isTitleEditing);
                                            setStoreClickedIdOnly(valuea?._id); // Set the ID of the item being edited
                                            setTitle(valuea?.title);
                                            setbuttonActive(true);
                                            // setActiveId("");
                                            // setIsActive(false);
                                          }}
                                        />
                                      ) : null}
                                      {isActive && !buttonActive ? (
                                        <AiOutlineDelete
                                          onClick={() => {
                                            HistoryDelete(valuea?._id);
                                          }}
                                          className="logoclass"
                                        />
                                      ) : null}
                                      {buttonActive && isActive ? (
                                        <BsCheckLg
                                          className="logoclassWright"
                                          onClick={() => {
                                            HistoryUpdate(valuea?._id);
                                            // setActiveId(valuea?._id);
                                            // setbuttonActive(false);
                                            // setIsTitleEditing(!isTitleEditing);
                                            // setStoreClickedIdOnly(valuea?._id); // Set the ID of the item being edited
                                            // setTitle(valuea?.title);
                                          }}
                                        />
                                      ) : // <img
                                      //   src={right}
                                      //   alt="asdas"
                                      //   className="logoclassWright"
                                      // />
                                      null}{" "}
                                      {buttonActive && isActive ? (
                                        <RxCross2
                                          className="logoclassWright"
                                          onClick={() => {
                                            setActiveId(valuea?._id);
                                            setbuttonActive(false);
                                            setIsTitleEditing(false);
                                            // setIsTitleEditing(!isTitleEditing);
                                            // setStoreClickedIdOnly(valuea?._id); // Set the ID of the item being edited
                                            // setTitle(valuea?.title);
                                          }}
                                        />
                                      ) : null}
                                    </div>
                                  );
                                })}
                            </>
                          );
                        } else if (val?._id === 7) {
                          // Render data for _id 1
                          console.log("valueAASA", val);

                          return (
                            <>
                              <div className="day1">a week ago</div>

                              {val?.data?.length > 0 &&
                                val?.data?.map((valuea) => {
                                  const isActive = valuea?._id === activeId;

                                  console.log("abhi", valuea?._id);
                                  console.log("abhi1", activeId);
                                  console.log("sdsfsdccbgfsras", isActive);
                                  const isActive1 = valuea?._id === activeId;
                                  const titleSelect = valuea?.title;
                                  return (
                                    <div
                                      key={valuea?._id}
                                      className={`${
                                        isLightTheme ? "L2 light" : "L2 dark"
                                      } ${
                                        isActive ? "activehistorydark" : ""
                                      } ${
                                        isActive1 ? "activehistorylight" : ""
                                      }`}>
                                      <div
                                        onClick={() => {
                                          handleNavigation("history");
                                          handleL2Click(valuea?._id);

                                          setfget_historyRoom_by_id(
                                            valuea?._id
                                          );
                                          console.log("abhi2", valuea?._id);
                                          setIsNewChatClicked(false);
                                        }}
                                        className={
                                          isLightTheme ? "l3 light" : "l3 dark"
                                        }>
                                        <LuStars />
                                      </div>
                                      <div className="l4">
                                        {/* <input
                                    className="r14ainput"
                                    type="text"
                                    placeholder={valuea?.title}
                                  /> */}
                                        {/* {valuea?.title} */}
                                        {isTitleEditing &&
                                        StoreClickedIdOnly === valuea?._id ? (
                                          <input
                                            className="r14ainput"
                                            type="text"
                                            placeholder={valuea?.title}
                                            value={Title}
                                            readOnly={!isTitleEditing}
                                            onChange={handleOnChange}
                                          />
                                        ) : (
                                          <div
                                            onClick={() => {
                                              // setbuttonActive(false);

                                              handleNavigation("history");
                                              handleL2Click(valuea?._id);
                                              setfget_historyRoom_by_id(
                                                valuea?._id
                                              );
                                              console.log("abhi3", valuea?._id);
                                              setIsTitleEditing(false);
                                            }}
                                            className="l4">
                                            {valuea?.title}
                                          </div>
                                        )}
                                      </div>
                                      {isActive && !buttonActive ? (
                                        <BiMessageSquareEdit
                                          className="logoclass"
                                          onClick={() => {
                                            setIsTitleEditing(!isTitleEditing);
                                            setStoreClickedIdOnly(valuea?._id); // Set the ID of the item being edited
                                            setTitle(valuea?.title);
                                            setbuttonActive(true);
                                            // setActiveId("");
                                            // setIsActive(false);
                                          }}
                                        />
                                      ) : null}
                                      {isActive && !buttonActive ? (
                                        <AiOutlineDelete
                                          onClick={() => {
                                            HistoryDelete(valuea?._id);
                                          }}
                                          className="logoclass"
                                        />
                                      ) : null}
                                      {buttonActive && isActive ? (
                                        <BsCheckLg
                                          className="logoclassWright"
                                          onClick={() => {
                                            HistoryUpdate(valuea?._id);
                                            // setActiveId(valuea?._id);
                                            // setbuttonActive(false);
                                            // setIsTitleEditing(!isTitleEditing);
                                            // setStoreClickedIdOnly(valuea?._id); // Set the ID of the item being edited
                                            // setTitle(valuea?.title);
                                          }}
                                        />
                                      ) : // <img
                                      //   src={right}
                                      //   alt="asdas"
                                      //   className="logoclassWright"
                                      // />
                                      null}{" "}
                                      {buttonActive && isActive ? (
                                        <RxCross2
                                          className="logoclassWright"
                                          onClick={() => {
                                            setActiveId(valuea?._id);
                                            setbuttonActive(false);
                                            setIsTitleEditing(false);
                                            // setIsTitleEditing(!isTitleEditing);
                                            // setStoreClickedIdOnly(valuea?._id); // Set the ID of the item being edited
                                            // setTitle(valuea?.title);
                                          }}
                                        />
                                      ) : null}
                                    </div>
                                  );
                                })}
                            </>
                          );
                        } else if (val?._id === 14) {
                          // Render data for _id 1
                          console.log("valueAASA", val);

                          return (
                            <>
                              <div className="day1">15 days ago</div>
                              {val?.data?.length > 0 &&
                                val?.data?.map((valuea) => {
                                  const isActive = valuea?._id === activeId;

                                  console.log("abhi", valuea?._id);
                                  console.log("abhi1", activeId);
                                  console.log("sdsfsdccbgfsras", isActive);
                                  const isActive1 = valuea?._id === activeId;
                                  const titleSelect = valuea?.title;
                                  return (
                                    <div
                                      key={valuea?._id}
                                      className={`${
                                        isLightTheme ? "L2 light" : "L2 dark"
                                      } ${
                                        isActive ? "activehistorydark" : ""
                                      } ${
                                        isActive1 ? "activehistorylight" : ""
                                      }`}>
                                      <div
                                        onClick={() => {
                                          setIsNewChatClicked(false);

                                          handleNavigation("history");
                                          handleL2Click(valuea?._id);

                                          setfget_historyRoom_by_id(
                                            valuea?._id
                                          );
                                          console.log("abhi2", valuea?._id);
                                        }}
                                        className={
                                          isLightTheme ? "l3 light" : "l3 dark"
                                        }>
                                        <LuStars />
                                      </div>
                                      <div className="l4">
                                        {/* <input
                                    className="r14ainput"
                                    type="text"
                                    placeholder={valuea?.title}
                                  /> */}
                                        {/* {valuea?.title} */}
                                        {isTitleEditing &&
                                        StoreClickedIdOnly === valuea?._id ? (
                                          <input
                                            className="r14ainput"
                                            type="text"
                                            placeholder={valuea?.title}
                                            value={Title}
                                            readOnly={!isTitleEditing}
                                            onChange={handleOnChange}
                                          />
                                        ) : (
                                          <div
                                            onClick={() => {
                                              setbuttonActive(false);

                                              handleNavigation("history");
                                              handleL2Click(valuea?._id);
                                              setfget_historyRoom_by_id(
                                                valuea?._id
                                              );
                                              console.log("abhi3", valuea?._id);
                                              setIsTitleEditing(false);
                                            }}
                                            className="l4">
                                            {valuea?.title}
                                          </div>
                                        )}
                                      </div>
                                      {isActive && !buttonActive ? (
                                        <BiMessageSquareEdit
                                          className="logoclass"
                                          onClick={() => {
                                            setIsTitleEditing(!isTitleEditing);
                                            setStoreClickedIdOnly(valuea?._id); // Set the ID of the item being edited
                                            setTitle(valuea?.title);
                                            setbuttonActive(true);
                                            // setActiveId("");
                                            // setIsActive(false);
                                          }}
                                        />
                                      ) : null}
                                      {isActive && !buttonActive ? (
                                        <AiOutlineDelete
                                          onClick={() => {
                                            HistoryDelete(valuea?._id);
                                          }}
                                          className="logoclass"
                                        />
                                      ) : null}
                                      {buttonActive && isActive ? (
                                        <BsCheckLg
                                          className="logoclassWright"
                                          onClick={() => {
                                            HistoryUpdate(valuea?._id);
                                            // setActiveId(valuea?._id);
                                            // setbuttonActive(false);
                                            // setIsTitleEditing(!isTitleEditing);
                                            // setStoreClickedIdOnly(valuea?._id); // Set the ID of the item being edited
                                            // setTitle(valuea?.title);
                                          }}
                                        />
                                      ) : // <img
                                      //   src={right}
                                      //   alt="asdas"
                                      //   className="logoclassWright"
                                      // />
                                      null}{" "}
                                      {buttonActive && isActive ? (
                                        <RxCross2
                                          className="logoclassWright"
                                          onClick={() => {
                                            setActiveId(valuea?._id);
                                            setbuttonActive(false);
                                            setIsTitleEditing(false);
                                            // setIsTitleEditing(!isTitleEditing);
                                            // setStoreClickedIdOnly(valuea?._id); // Set the ID of the item being edited
                                            // setTitle(valuea?.title);
                                          }}
                                        />
                                      ) : null}
                                    </div>
                                  );
                                })}
                            </>
                          );
                        } else if (val?._id === 30) {
                          // Render data for _id 1
                          console.log("valueAASA", val);

                          return (
                            <>
                              <div className="day1">a Month ago</div>

                              {val?.data?.length > 0 &&
                                val?.data?.map((valuea) => {
                                  const isActive = valuea?._id === activeId;

                                  console.log("abhi", valuea?._id);
                                  console.log("abhi1", activeId);
                                  console.log("sdsfsdccbgfsras", isActive);
                                  const isActive1 = valuea?._id === activeId;
                                  const titleSelect = valuea?.title;
                                  return (
                                    <div
                                      key={valuea?._id}
                                      className={`${
                                        isLightTheme ? "L2 light" : "L2 dark"
                                      } ${
                                        isActive ? "activehistorydark" : ""
                                      } ${
                                        isActive1 ? "activehistorylight" : ""
                                      }`}>
                                      <div
                                        onClick={() => {
                                          handleNavigation("history");
                                          handleL2Click(valuea?._id);

                                          setfget_historyRoom_by_id(
                                            valuea?._id
                                          );
                                          console.log("abhi2", valuea?._id);
                                        }}
                                        className={
                                          isLightTheme ? "l3 light" : "l3 dark"
                                        }>
                                        <LuStars />
                                      </div>
                                      <div className="l4">
                                        {/* <input
                                    className="r14ainput"
                                    type="text"
                                    placeholder={valuea?.title}
                                  /> */}
                                        {/* {valuea?.title} */}
                                        {isTitleEditing &&
                                        StoreClickedIdOnly === valuea?._id ? (
                                          <input
                                            className="r14ainput"
                                            type="text"
                                            placeholder={valuea?.title}
                                            value={Title}
                                            readOnly={!isTitleEditing}
                                            onChange={handleOnChange}
                                          />
                                        ) : (
                                          <div
                                            onClick={() => {
                                              setbuttonActive(false);

                                              handleNavigation("history");
                                              handleL2Click(valuea?._id);
                                              setfget_historyRoom_by_id(
                                                valuea?._id
                                              );
                                              console.log("abhi3", valuea?._id);
                                              setIsTitleEditing(false);
                                            }}
                                            className="l4">
                                            {valuea?.title}
                                          </div>
                                        )}
                                      </div>
                                      {isActive && !buttonActive ? (
                                        <BiMessageSquareEdit
                                          className="logoclass"
                                          onClick={() => {
                                            setIsTitleEditing(!isTitleEditing);
                                            setStoreClickedIdOnly(valuea?._id); // Set the ID of the item being edited
                                            setTitle(valuea?.title);
                                            setbuttonActive(true);
                                            // setActiveId("");
                                            // setIsActive(false);
                                          }}
                                        />
                                      ) : null}
                                      {isActive && !buttonActive ? (
                                        <AiOutlineDelete
                                          onClick={() => {
                                            HistoryDelete(valuea?._id);
                                          }}
                                          className="logoclass"
                                        />
                                      ) : null}
                                      {buttonActive && isActive ? (
                                        <BsCheckLg
                                          className="logoclassWright"
                                          onClick={() => {
                                            HistoryUpdate(valuea?._id);
                                            // setActiveId(valuea?._id);
                                            // setbuttonActive(false);
                                            // setIsTitleEditing(!isTitleEditing);
                                            // setStoreClickedIdOnly(valuea?._id); // Set the ID of the item being edited
                                            // setTitle(valuea?.title);
                                          }}
                                        />
                                      ) : // <img
                                      //   src={right}
                                      //   alt="asdas"
                                      //   className="logoclassWright"
                                      // />
                                      null}{" "}
                                      {buttonActive && isActive ? (
                                        <RxCross2
                                          className="logoclassWright"
                                          onClick={() => {
                                            setActiveId(valuea?._id);
                                            setbuttonActive(false);
                                            setIsTitleEditing(false);
                                            // setIsTitleEditing(!isTitleEditing);
                                            // setStoreClickedIdOnly(valuea?._id); // Set the ID of the item being edited
                                            // setTitle(valuea?.title);
                                          }}
                                        />
                                      ) : null}
                                    </div>
                                  );
                                })}
                            </>
                          );
                        }
                      })
                    ) : (
                      <div className="a1">
                        <center>
                          <div className="a2">
                            <div className="a3">
                              <h1>
                                <ImFilesEmpty />
                              </h1>
                            </div>
                            <div className="a4">No History Available .</div>
                            <div className="a4">Please Create a new Room .</div>
                          </div>
                        </center>
                      </div>
                    )}

                    {/* ----------------------------- */}
                  </div>
                  {/* </Col> */}
                  {/* ----------------------------------------- */}
                  {/* <Col lg={3}> */}

                  <div
                    //  className="l6"
                    className={isLightTheme ? "l6 light" : "l6 dark"}>
                    <div
                      //  className="l17"
                      className={isLightTheme ? "l17 light" : "l17 dark"}>
                      <div
                        //  className="l12"
                        className={isLightTheme ? "l12 light" : "l12 dark"}>
                        Credits
                      </div>
                      {/* <div
                  //  className="l13"
                  className={isLightTheme ? "l13 light" : "l13"}>
                  <div
                    //  className="l14"
                    className={isLightTheme ? "l14 light" : "l14"}></div>
                </div> */}
                      <ProgressBar className="prg1" now={progressPercentage} />
                      <div
                        // className="l15"
                        className={isLightTheme ? "l15 light" : "l15 dark"}>
                        {weeklyGraph?.data?.total_count}/{maxCount} credits used
                      </div>
                      {/* jeetchart */}
                      {/* <div className="l16">
                        <BarChart width={260} height={185} data={data}>
                          <XAxis dataKey="name" stroke="#8884d8" />
                          <Tooltip contentStyle={tooltipStyles} />
                          <Bar
                            dataKey="uv"
                            fill="#0062ff"
                            barSize={15}
                            radius={[10, 10, 0, 0]}
                          />
                        </BarChart>
                      </div> */}
                    </div>
                    {/* 
            <div className="l7">
              <div className="l8">
                {" "}
                <div className="l9"></div>
                <div className="l10">Abhi Baldha</div>
                <div className="l11"></div>
                <div className="l11"></div>
              </div>
            </div> */}
                  </div>
                  {/* </Col> */}
                  {/* </Row> */}
                </div>
              </Col>
              {/* lodooooo */}
              <Col lg={8} xl={9} className="abhi m-0 p-0">
                <div
                  className={
                    isLightTheme ? "RightPart light" : "RightPart dark"
                  }

                  //  className="RightPart"
                >
                  <div className="r1">
                    {/* ------------------------------------------ */}
                    {/* <div
                //  className="r2"
                className={isLightTheme ? "r2 light" : "r2 dark"}>
                <div className="r3">
                  <input className="r4" type="search" name="" id="" />
                </div>
                <div
                  //  className="r5"
                  className={isLightTheme ? "r5 light" : "r5 dark"}>
                  <IoMdLock />
                </div>{" "}
                <div
                  //  className="r5"
                  className={isLightTheme ? "r5 light" : "r5 dark"}>
                  <AiOutlineInfoCircle />
                </div>{" "}
                <div
                  // className="r5"
                  className={isLightTheme ? "r5 light" : "r5 dark"}
                  onClick={toggleTheme}>
                  {isLightTheme ? <BiMoon /> : <BiSolidSun />}
                </div>
                <div
                  onClick={toogleSignUppage}
                  className={isLightTheme ? "r6 light" : "r6 dark"}

                  //  className="r6"
                ></div>
              </div>
              <div className="r7">
                <div
                  //  className="r8"
                  className={isLightTheme ? "r8 light" : "r8 dark"}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptates molestias omnis vero excepturi saepe. Sint aut,
                  repellat eaque optio aliquam nihil, commodi odit ea aperiam
                  inventore magnam hic? Quis consequuntur laboriosam quasi illum
                  dignissimos, fuga eaque, cumque saepe incidunt, aperiam
                  molestiae reiciendis delectus recusandae aliquid eos nulla
                  tempora nisi ipsum.
                </div>
              </div>
              <div className="r9">
                <div
                  //  className="r10"
                  className={isLightTheme ? "r10 light" : "r10 dark"}
                  s>
                  <div
                    //  className="r10a"
                    className={isLightTheme ? "r10a light" : "r10a dark"}>
                    Type your message
                  </div>
                </div>
                <div
                  //  className="r11"
                  className={isLightTheme ? "r11 light" : "r11 dark"}>
                  Submit
                </div>
              </div> */}
                    {/* ------------------------------------------ */}
                    <div className="p-lg-0 p-4 pb-0">
                      <div
                        //  className="r2"
                        className={
                          isLightTheme
                            ? "r2 d-flex justify-content-lg-end align-items-center "
                            : "r2 dark d-flex justify-content-lg-end align-items-center "
                        }>
                        <div className="r2a1 mt-lg-4 me-lg-5 p-4 d-flex justify-content-lg-end justify-content-between ">
                          <div className="d-lg-none d-block">
                            <div className="as12" onClick={handleShow}>
                              <RiMenu2Fill />
                            </div>
                          </div>
                          <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                              <Offcanvas.Title>Instruct Ai</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                              <div
                                className={
                                  isLightTheme
                                    ? "LeftPart w-100 light"
                                    : "LeftPart dark"
                                }

                                //  className="LeftPart"
                              >
                                {/* <Row> */}
                                {/* <Col lg={2}> */}

                                {/* </Col> */}

                                {/* ----------------------------------------- */}
                                {/* <Col lg={7}> */}
                                <div
                                  // className="l5"
                                  className={isLightTheme ? "l5 light" : "l5"}>
                                  {/* ----------------------------- */}
                                  {RoomsearchHistoryData?.data?.length > 0 ? (
                                    RoomsearchHistoryData?.data?.map((val) => {
                                      console.log(
                                        "valueAASA12324",
                                        RoomsearchHistoryData?.data?.length
                                      );

                                      if (val?._id === 1) {
                                        // Render data for _id 1
                                        console.log("valueAASA", val);

                                        return (
                                          <>
                                            <div className="day1">Today</div>
                                            {val?.data?.length > 0 &&
                                              val?.data?.map((valuea) => {
                                                const isActive =
                                                  valuea?._id === activeId;

                                                console.log(
                                                  "abhi",
                                                  valuea?._id
                                                );
                                                console.log("abhi1", activeId);
                                                console.log(
                                                  "sdsfsdccbgfsras",
                                                  isActive
                                                );
                                                const isActive1 =
                                                  valuea?._id === activeId;
                                                const titleSelect =
                                                  valuea?.title;
                                                return (
                                                  <div
                                                    key={valuea?._id}
                                                    className={`${
                                                      isLightTheme
                                                        ? "L2 light"
                                                        : "L2 dark"
                                                    } ${
                                                      isActive
                                                        ? "activehistorydark"
                                                        : ""
                                                    } ${
                                                      isActive1
                                                        ? "activehistorylight"
                                                        : ""
                                                    }`}>
                                                    <div
                                                      onClick={() => {
                                                        handleNavigation(
                                                          "history"
                                                        );
                                                        handleL2Click(
                                                          valuea?._id
                                                        );

                                                        setfget_historyRoom_by_id(
                                                          valuea?._id
                                                        );
                                                        console.log(
                                                          "abhi2",
                                                          valuea?._id
                                                        );
                                                      }}
                                                      className={
                                                        isLightTheme
                                                          ? "l3 light"
                                                          : "l3 dark"
                                                      }>
                                                      <LuStars />
                                                    </div>
                                                    <div className="l4">
                                                      {/* <input
                                    className="r14ainput"
                                    type="text"
                                    placeholder={valuea?.title}
                                  /> */}
                                                      {/* {valuea?.title} */}
                                                      {isTitleEditing &&
                                                      StoreClickedIdOnly ===
                                                        valuea?._id ? (
                                                        <input
                                                          className="r14ainput"
                                                          type="text"
                                                          placeholder={
                                                            valuea?.title
                                                          }
                                                          value={Title}
                                                          readOnly={
                                                            !isTitleEditing
                                                          }
                                                          onChange={
                                                            handleOnChange
                                                          }
                                                        />
                                                      ) : (
                                                        <div
                                                          onClick={() => {
                                                            setbuttonActive(
                                                              false
                                                            );

                                                            handleNavigation(
                                                              "history"
                                                            );
                                                            handleL2Click(
                                                              valuea?._id
                                                            );
                                                            setfget_historyRoom_by_id(
                                                              valuea?._id
                                                            );
                                                            console.log(
                                                              "abhi3",
                                                              valuea?._id
                                                            );
                                                            setIsTitleEditing(
                                                              false
                                                            );
                                                          }}
                                                          className="l4">
                                                          {valuea?.title}
                                                        </div>
                                                      )}
                                                    </div>
                                                    {isActive &&
                                                    !buttonActive ? (
                                                      <BiMessageSquareEdit
                                                        className="logoclass"
                                                        onClick={() => {
                                                          setIsTitleEditing(
                                                            !isTitleEditing
                                                          );
                                                          setStoreClickedIdOnly(
                                                            valuea?._id
                                                          ); // Set the ID of the item being edited
                                                          setTitle(
                                                            valuea?.title
                                                          );
                                                          setbuttonActive(true);
                                                          // setActiveId("");
                                                          // setIsActive(false);
                                                        }}
                                                      />
                                                    ) : null}
                                                    {isActive &&
                                                    !buttonActive ? (
                                                      <AiOutlineDelete
                                                        onClick={() => {
                                                          console.log(
                                                            "jeetlodo"
                                                          );
                                                          HistoryDelete(
                                                            valuea?._id
                                                          );
                                                        }}
                                                        className="logoclass"
                                                      />
                                                    ) : null}
                                                    {buttonActive &&
                                                    isActive ? (
                                                      <BsCheckLg
                                                        className="logoclassWright"
                                                        onClick={() => {
                                                          HistoryUpdate(
                                                            valuea?._id
                                                          );
                                                          // setActiveId(valuea?._id);
                                                          // setbuttonActive(false);
                                                          // setIsTitleEditing(!isTitleEditing);
                                                          // setStoreClickedIdOnly(valuea?._id); // Set the ID of the item being edited
                                                          // setTitle(valuea?.title);
                                                        }}
                                                      />
                                                    ) : // <img
                                                    //   src={right}
                                                    //   alt="asdas"
                                                    //   className="logoclassWright"
                                                    // />
                                                    null}{" "}
                                                    {buttonActive &&
                                                    isActive ? (
                                                      <RxCross2
                                                        className="logoclassWright"
                                                        onClick={() => {
                                                          setActiveId(
                                                            valuea?._id
                                                          );
                                                          setbuttonActive(
                                                            false
                                                          );
                                                          setIsTitleEditing(
                                                            false
                                                          );
                                                          // setIsTitleEditing(!isTitleEditing);
                                                          // setStoreClickedIdOnly(valuea?._id); // Set the ID of the item being edited
                                                          // setTitle(valuea?.title);
                                                        }}
                                                      />
                                                    ) : null}
                                                  </div>
                                                );
                                              })}
                                          </>
                                        );
                                      } else if (val?._id === 2) {
                                        // Render data for _id 1
                                        console.log("valueAASA", val);

                                        return (
                                          <>
                                            <div className="day1">Tommorow</div>

                                            {val?.data?.length > 0 &&
                                              val?.data?.map((valuea) => {
                                                const isActive =
                                                  valuea?._id === activeId;

                                                console.log(
                                                  "abhi",
                                                  valuea?._id
                                                );
                                                console.log("abhi1", activeId);
                                                console.log(
                                                  "sdsfsdccbgfsras",
                                                  isActive
                                                );
                                                const isActive1 =
                                                  valuea?._id === activeId;
                                                const titleSelect =
                                                  valuea?.title;
                                                return (
                                                  <div
                                                    key={valuea?._id}
                                                    className={`${
                                                      isLightTheme
                                                        ? "L2 light"
                                                        : "L2 dark"
                                                    } ${
                                                      isActive
                                                        ? "activehistorydark"
                                                        : ""
                                                    } ${
                                                      isActive1
                                                        ? "activehistorylight"
                                                        : ""
                                                    }`}>
                                                    <div
                                                      onClick={() => {
                                                        handleNavigation(
                                                          "history"
                                                        );
                                                        handleL2Click(
                                                          valuea?._id
                                                        );

                                                        setfget_historyRoom_by_id(
                                                          valuea?._id
                                                        );
                                                        console.log(
                                                          "abhi2",
                                                          valuea?._id
                                                        );
                                                      }}
                                                      className={
                                                        isLightTheme
                                                          ? "l3 light"
                                                          : "l3 dark"
                                                      }>
                                                      <LuStars />
                                                    </div>
                                                    <div className="l4">
                                                      {/* <input
                                    className="r14ainput"
                                    type="text"
                                    placeholder={valuea?.title}
                                  /> */}
                                                      {/* {valuea?.title} */}
                                                      {isTitleEditing &&
                                                      StoreClickedIdOnly ===
                                                        valuea?._id ? (
                                                        <input
                                                          className="r14ainput"
                                                          type="text"
                                                          placeholder={
                                                            valuea?.title
                                                          }
                                                          value={Title}
                                                          readOnly={
                                                            !isTitleEditing
                                                          }
                                                          onChange={
                                                            handleOnChange
                                                          }
                                                        />
                                                      ) : (
                                                        <div
                                                          onClick={() => {
                                                            setbuttonActive(
                                                              false
                                                            );

                                                            handleNavigation(
                                                              "history"
                                                            );
                                                            handleL2Click(
                                                              valuea?._id
                                                            );
                                                            setfget_historyRoom_by_id(
                                                              valuea?._id
                                                            );
                                                            console.log(
                                                              "abhi3",
                                                              valuea?._id
                                                            );
                                                            setIsTitleEditing(
                                                              false
                                                            );
                                                          }}
                                                          className="l4">
                                                          {valuea?.title}
                                                        </div>
                                                      )}
                                                    </div>
                                                    {isActive &&
                                                    !buttonActive ? (
                                                      <BiMessageSquareEdit
                                                        className="logoclass"
                                                        onClick={() => {
                                                          setIsTitleEditing(
                                                            !isTitleEditing
                                                          );
                                                          setStoreClickedIdOnly(
                                                            valuea?._id
                                                          ); // Set the ID of the item being edited
                                                          setTitle(
                                                            valuea?.title
                                                          );
                                                          setbuttonActive(true);
                                                          // setActiveId("");
                                                          // setIsActive(false);
                                                        }}
                                                      />
                                                    ) : null}
                                                    {isActive &&
                                                    !buttonActive ? (
                                                      <AiOutlineDelete
                                                        onClick={() => {
                                                          HistoryDelete(
                                                            valuea?._id
                                                          );
                                                        }}
                                                        className="logoclass"
                                                      />
                                                    ) : null}
                                                    {buttonActive &&
                                                    isActive ? (
                                                      <BsCheckLg
                                                        className="logoclassWright"
                                                        onClick={() => {
                                                          HistoryUpdate(
                                                            valuea?._id
                                                          );
                                                          // setActiveId(valuea?._id);
                                                          // setbuttonActive(false);
                                                          // setIsTitleEditing(!isTitleEditing);
                                                          // setStoreClickedIdOnly(valuea?._id); // Set the ID of the item being edited
                                                          // setTitle(valuea?.title);
                                                        }}
                                                      />
                                                    ) : // <img
                                                    //   src={right}
                                                    //   alt="asdas"
                                                    //   className="logoclassWright"
                                                    // />
                                                    null}{" "}
                                                    {buttonActive &&
                                                    isActive ? (
                                                      <RxCross2
                                                        className="logoclassWright"
                                                        onClick={() => {
                                                          setActiveId(
                                                            valuea?._id
                                                          );
                                                          setbuttonActive(
                                                            false
                                                          );
                                                          setIsTitleEditing(
                                                            false
                                                          );
                                                          // setIsTitleEditing(!isTitleEditing);
                                                          // setStoreClickedIdOnly(valuea?._id); // Set the ID of the item being edited
                                                          // setTitle(valuea?.title);
                                                        }}
                                                      />
                                                    ) : null}
                                                  </div>
                                                );
                                              })}
                                          </>
                                        );
                                      } else if (val?._id === 7) {
                                        // Render data for _id 1
                                        console.log("valueAASA", val);

                                        return (
                                          <>
                                            <div className="day1">
                                              a week ago
                                            </div>

                                            {val?.data?.length > 0 &&
                                              val?.data?.map((valuea) => {
                                                const isActive =
                                                  valuea?._id === activeId;

                                                console.log(
                                                  "abhi",
                                                  valuea?._id
                                                );
                                                console.log("abhi1", activeId);
                                                console.log(
                                                  "sdsfsdccbgfsras",
                                                  isActive
                                                );
                                                const isActive1 =
                                                  valuea?._id === activeId;
                                                const titleSelect =
                                                  valuea?.title;
                                                return (
                                                  <div
                                                    key={valuea?._id}
                                                    className={`${
                                                      isLightTheme
                                                        ? "L2 light"
                                                        : "L2 dark"
                                                    } ${
                                                      isActive
                                                        ? "activehistorydark"
                                                        : ""
                                                    } ${
                                                      isActive1
                                                        ? "activehistorylight"
                                                        : ""
                                                    }`}>
                                                    <div
                                                      onClick={() => {
                                                        handleNavigation(
                                                          "history"
                                                        );
                                                        handleL2Click(
                                                          valuea?._id
                                                        );

                                                        setfget_historyRoom_by_id(
                                                          valuea?._id
                                                        );
                                                        console.log(
                                                          "abhi2",
                                                          valuea?._id
                                                        );
                                                        setIsNewChatClicked(
                                                          false
                                                        );
                                                      }}
                                                      className={
                                                        isLightTheme
                                                          ? "l3 light"
                                                          : "l3 dark"
                                                      }>
                                                      <LuStars />
                                                    </div>
                                                    <div className="l4">
                                                      {/* <input
                                    className="r14ainput"
                                    type="text"
                                    placeholder={valuea?.title}
                                  /> */}
                                                      {/* {valuea?.title} */}
                                                      {isTitleEditing &&
                                                      StoreClickedIdOnly ===
                                                        valuea?._id ? (
                                                        <input
                                                          className="r14ainput"
                                                          type="text"
                                                          placeholder={
                                                            valuea?.title
                                                          }
                                                          value={Title}
                                                          readOnly={
                                                            !isTitleEditing
                                                          }
                                                          onChange={
                                                            handleOnChange
                                                          }
                                                        />
                                                      ) : (
                                                        <div
                                                          onClick={() => {
                                                            // setbuttonActive(false);

                                                            handleNavigation(
                                                              "history"
                                                            );
                                                            handleL2Click(
                                                              valuea?._id
                                                            );
                                                            setfget_historyRoom_by_id(
                                                              valuea?._id
                                                            );
                                                            console.log(
                                                              "abhi3",
                                                              valuea?._id
                                                            );
                                                            setIsTitleEditing(
                                                              false
                                                            );
                                                          }}
                                                          className="l4">
                                                          {valuea?.title}
                                                        </div>
                                                      )}
                                                    </div>
                                                    {isActive &&
                                                    !buttonActive ? (
                                                      <BiMessageSquareEdit
                                                        className="logoclass"
                                                        onClick={() => {
                                                          setIsTitleEditing(
                                                            !isTitleEditing
                                                          );
                                                          setStoreClickedIdOnly(
                                                            valuea?._id
                                                          ); // Set the ID of the item being edited
                                                          setTitle(
                                                            valuea?.title
                                                          );
                                                          setbuttonActive(true);
                                                          // setActiveId("");
                                                          // setIsActive(false);
                                                        }}
                                                      />
                                                    ) : null}
                                                    {isActive &&
                                                    !buttonActive ? (
                                                      <AiOutlineDelete
                                                        onClick={() => {
                                                          HistoryDelete(
                                                            valuea?._id
                                                          );
                                                        }}
                                                        className="logoclass"
                                                      />
                                                    ) : null}
                                                    {buttonActive &&
                                                    isActive ? (
                                                      <BsCheckLg
                                                        className="logoclassWright"
                                                        onClick={() => {
                                                          HistoryUpdate(
                                                            valuea?._id
                                                          );
                                                          // setActiveId(valuea?._id);
                                                          // setbuttonActive(false);
                                                          // setIsTitleEditing(!isTitleEditing);
                                                          // setStoreClickedIdOnly(valuea?._id); // Set the ID of the item being edited
                                                          // setTitle(valuea?.title);
                                                        }}
                                                      />
                                                    ) : // <img
                                                    //   src={right}
                                                    //   alt="asdas"
                                                    //   className="logoclassWright"
                                                    // />
                                                    null}{" "}
                                                    {buttonActive &&
                                                    isActive ? (
                                                      <RxCross2
                                                        className="logoclassWright"
                                                        onClick={() => {
                                                          setActiveId(
                                                            valuea?._id
                                                          );
                                                          setbuttonActive(
                                                            false
                                                          );
                                                          setIsTitleEditing(
                                                            false
                                                          );
                                                          // setIsTitleEditing(!isTitleEditing);
                                                          // setStoreClickedIdOnly(valuea?._id); // Set the ID of the item being edited
                                                          // setTitle(valuea?.title);
                                                        }}
                                                      />
                                                    ) : null}
                                                  </div>
                                                );
                                              })}
                                          </>
                                        );
                                      } else if (val?._id === 14) {
                                        // Render data for _id 1
                                        console.log("valueAASA", val);

                                        return (
                                          <>
                                            <div className="day1">
                                              15 days ago
                                            </div>
                                            {val?.data?.length > 0 &&
                                              val?.data?.map((valuea) => {
                                                const isActive =
                                                  valuea?._id === activeId;

                                                console.log(
                                                  "abhi",
                                                  valuea?._id
                                                );
                                                console.log("abhi1", activeId);
                                                console.log(
                                                  "sdsfsdccbgfsras",
                                                  isActive
                                                );
                                                const isActive1 =
                                                  valuea?._id === activeId;
                                                const titleSelect =
                                                  valuea?.title;
                                                return (
                                                  <div
                                                    key={valuea?._id}
                                                    className={`${
                                                      isLightTheme
                                                        ? "L2 light"
                                                        : "L2 dark"
                                                    } ${
                                                      isActive
                                                        ? "activehistorydark"
                                                        : ""
                                                    } ${
                                                      isActive1
                                                        ? "activehistorylight"
                                                        : ""
                                                    }`}>
                                                    <div
                                                      onClick={() => {
                                                        setIsNewChatClicked(
                                                          false
                                                        );

                                                        handleNavigation(
                                                          "history"
                                                        );
                                                        handleL2Click(
                                                          valuea?._id
                                                        );

                                                        setfget_historyRoom_by_id(
                                                          valuea?._id
                                                        );
                                                        console.log(
                                                          "abhi2",
                                                          valuea?._id
                                                        );
                                                      }}
                                                      className={
                                                        isLightTheme
                                                          ? "l3 light"
                                                          : "l3 dark"
                                                      }>
                                                      <LuStars />
                                                    </div>
                                                    <div className="l4">
                                                      {/* <input
                                    className="r14ainput"
                                    type="text"
                                    placeholder={valuea?.title}
                                  /> */}
                                                      {/* {valuea?.title} */}
                                                      {isTitleEditing &&
                                                      StoreClickedIdOnly ===
                                                        valuea?._id ? (
                                                        <input
                                                          className="r14ainput"
                                                          type="text"
                                                          placeholder={
                                                            valuea?.title
                                                          }
                                                          value={Title}
                                                          readOnly={
                                                            !isTitleEditing
                                                          }
                                                          onChange={
                                                            handleOnChange
                                                          }
                                                        />
                                                      ) : (
                                                        <div
                                                          onClick={() => {
                                                            setbuttonActive(
                                                              false
                                                            );

                                                            handleNavigation(
                                                              "history"
                                                            );
                                                            handleL2Click(
                                                              valuea?._id
                                                            );
                                                            setfget_historyRoom_by_id(
                                                              valuea?._id
                                                            );
                                                            console.log(
                                                              "abhi3",
                                                              valuea?._id
                                                            );
                                                            setIsTitleEditing(
                                                              false
                                                            );
                                                          }}
                                                          className="l4">
                                                          {valuea?.title}
                                                        </div>
                                                      )}
                                                    </div>
                                                    {isActive &&
                                                    !buttonActive ? (
                                                      <BiMessageSquareEdit
                                                        className="logoclass"
                                                        onClick={() => {
                                                          setIsTitleEditing(
                                                            !isTitleEditing
                                                          );
                                                          setStoreClickedIdOnly(
                                                            valuea?._id
                                                          ); // Set the ID of the item being edited
                                                          setTitle(
                                                            valuea?.title
                                                          );
                                                          setbuttonActive(true);
                                                          // setActiveId("");
                                                          // setIsActive(false);
                                                        }}
                                                      />
                                                    ) : null}
                                                    {isActive &&
                                                    !buttonActive ? (
                                                      <AiOutlineDelete
                                                        onClick={() => {
                                                          HistoryDelete(
                                                            valuea?._id
                                                          );
                                                        }}
                                                        className="logoclass"
                                                      />
                                                    ) : null}
                                                    {buttonActive &&
                                                    isActive ? (
                                                      <BsCheckLg
                                                        className="logoclassWright"
                                                        onClick={() => {
                                                          HistoryUpdate(
                                                            valuea?._id
                                                          );
                                                          // setActiveId(valuea?._id);
                                                          // setbuttonActive(false);
                                                          // setIsTitleEditing(!isTitleEditing);
                                                          // setStoreClickedIdOnly(valuea?._id); // Set the ID of the item being edited
                                                          // setTitle(valuea?.title);
                                                        }}
                                                      />
                                                    ) : // <img
                                                    //   src={right}
                                                    //   alt="asdas"
                                                    //   className="logoclassWright"
                                                    // />
                                                    null}{" "}
                                                    {buttonActive &&
                                                    isActive ? (
                                                      <RxCross2
                                                        className="logoclassWright"
                                                        onClick={() => {
                                                          setActiveId(
                                                            valuea?._id
                                                          );
                                                          setbuttonActive(
                                                            false
                                                          );
                                                          setIsTitleEditing(
                                                            false
                                                          );
                                                          // setIsTitleEditing(!isTitleEditing);
                                                          // setStoreClickedIdOnly(valuea?._id); // Set the ID of the item being edited
                                                          // setTitle(valuea?.title);
                                                        }}
                                                      />
                                                    ) : null}
                                                  </div>
                                                );
                                              })}
                                          </>
                                        );
                                      } else if (val?._id === 30) {
                                        // Render data for _id 1
                                        console.log("valueAASA", val);

                                        return (
                                          <>
                                            <div className="day1">
                                              a Month ago
                                            </div>

                                            {val?.data?.length > 0 &&
                                              val?.data?.map((valuea) => {
                                                const isActive =
                                                  valuea?._id === activeId;

                                                console.log(
                                                  "abhi",
                                                  valuea?._id
                                                );
                                                console.log("abhi1", activeId);
                                                console.log(
                                                  "sdsfsdccbgfsras",
                                                  isActive
                                                );
                                                const isActive1 =
                                                  valuea?._id === activeId;
                                                const titleSelect =
                                                  valuea?.title;
                                                return (
                                                  <div
                                                    key={valuea?._id}
                                                    className={`${
                                                      isLightTheme
                                                        ? "L2 light"
                                                        : "L2 dark"
                                                    } ${
                                                      isActive
                                                        ? "activehistorydark"
                                                        : ""
                                                    } ${
                                                      isActive1
                                                        ? "activehistorylight"
                                                        : ""
                                                    }`}>
                                                    <div
                                                      onClick={() => {
                                                        handleNavigation(
                                                          "history"
                                                        );
                                                        handleL2Click(
                                                          valuea?._id
                                                        );

                                                        setfget_historyRoom_by_id(
                                                          valuea?._id
                                                        );
                                                        console.log(
                                                          "abhi2",
                                                          valuea?._id
                                                        );
                                                      }}
                                                      className={
                                                        isLightTheme
                                                          ? "l3 light"
                                                          : "l3 dark"
                                                      }>
                                                      <LuStars />
                                                    </div>
                                                    <div className="l4">
                                                      {/* <input
                                    className="r14ainput"
                                    type="text"
                                    placeholder={valuea?.title}
                                  /> */}
                                                      {/* {valuea?.title} */}
                                                      {isTitleEditing &&
                                                      StoreClickedIdOnly ===
                                                        valuea?._id ? (
                                                        <input
                                                          className="r14ainput"
                                                          type="text"
                                                          placeholder={
                                                            valuea?.title
                                                          }
                                                          value={Title}
                                                          readOnly={
                                                            !isTitleEditing
                                                          }
                                                          onChange={
                                                            handleOnChange
                                                          }
                                                        />
                                                      ) : (
                                                        <div
                                                          onClick={() => {
                                                            setbuttonActive(
                                                              false
                                                            );

                                                            handleNavigation(
                                                              "history"
                                                            );
                                                            handleL2Click(
                                                              valuea?._id
                                                            );
                                                            setfget_historyRoom_by_id(
                                                              valuea?._id
                                                            );
                                                            console.log(
                                                              "abhi3",
                                                              valuea?._id
                                                            );
                                                            setIsTitleEditing(
                                                              false
                                                            );
                                                          }}
                                                          className="l4">
                                                          {valuea?.title}
                                                        </div>
                                                      )}
                                                    </div>
                                                    {isActive &&
                                                    !buttonActive ? (
                                                      <BiMessageSquareEdit
                                                        className="logoclass"
                                                        onClick={() => {
                                                          setIsTitleEditing(
                                                            !isTitleEditing
                                                          );
                                                          setStoreClickedIdOnly(
                                                            valuea?._id
                                                          ); // Set the ID of the item being edited
                                                          setTitle(
                                                            valuea?.title
                                                          );
                                                          setbuttonActive(true);
                                                          // setActiveId("");
                                                          // setIsActive(false);
                                                        }}
                                                      />
                                                    ) : null}
                                                    {isActive &&
                                                    !buttonActive ? (
                                                      <AiOutlineDelete
                                                        onClick={() => {
                                                          HistoryDelete(
                                                            valuea?._id
                                                          );
                                                        }}
                                                        className="logoclass"
                                                      />
                                                    ) : null}
                                                    {buttonActive &&
                                                    isActive ? (
                                                      <BsCheckLg
                                                        className="logoclassWright"
                                                        onClick={() => {
                                                          HistoryUpdate(
                                                            valuea?._id
                                                          );
                                                          // setActiveId(valuea?._id);
                                                          // setbuttonActive(false);
                                                          // setIsTitleEditing(!isTitleEditing);
                                                          // setStoreClickedIdOnly(valuea?._id); // Set the ID of the item being edited
                                                          // setTitle(valuea?.title);
                                                        }}
                                                      />
                                                    ) : // <img
                                                    //   src={right}
                                                    //   alt="asdas"
                                                    //   className="logoclassWright"
                                                    // />
                                                    null}{" "}
                                                    {buttonActive &&
                                                    isActive ? (
                                                      <RxCross2
                                                        className="logoclassWright"
                                                        onClick={() => {
                                                          setActiveId(
                                                            valuea?._id
                                                          );
                                                          setbuttonActive(
                                                            false
                                                          );
                                                          setIsTitleEditing(
                                                            false
                                                          );
                                                          // setIsTitleEditing(!isTitleEditing);
                                                          // setStoreClickedIdOnly(valuea?._id); // Set the ID of the item being edited
                                                          // setTitle(valuea?.title);
                                                        }}
                                                      />
                                                    ) : null}
                                                  </div>
                                                );
                                              })}
                                          </>
                                        );
                                      }
                                    })
                                  ) : (
                                    <div className="a1">
                                      <center>
                                        <div className="a2">
                                          <div className="a3">
                                            <h1>
                                              <ImFilesEmpty />
                                            </h1>
                                          </div>
                                          <div className="a4">
                                            No History Available .
                                          </div>
                                          <div className="a4">
                                            Please Create a new Room .
                                          </div>
                                        </div>
                                      </center>
                                    </div>
                                  )}

                                  {/* ----------------------------- */}
                                </div>
                                {/* </Col> */}
                                {/* ----------------------------------------- */}
                                {/* <Col lg={3}> */}

                                <div
                                  //  className="l6"
                                  className={
                                    isLightTheme ? "l6 light" : "l6 dark"
                                  }>
                                  <div
                                    //  className="l17"
                                    className={
                                      isLightTheme ? "l17 light" : "l17 dark"
                                    }>
                                    <div
                                      //  className="l12"
                                      className={
                                        isLightTheme ? "l12 light" : "l12 dark"
                                      }>
                                      Credits
                                    </div>
                                    {/* <div
                  //  className="l13"
                  className={isLightTheme ? "l13 light" : "l13"}>
                  <div
                    //  className="l14"
                    className={isLightTheme ? "l14 light" : "l14"}></div>
                </div> */}
                                    <ProgressBar
                                      className="prg1"
                                      now={progressPercentage}
                                    />
                                    <div
                                      // className="l15"
                                      className={
                                        isLightTheme ? "l15 light" : "l15 dark"
                                      }>
                                      {weeklyGraph?.data?.total_count}/
                                      {maxCount} credits used
                                    </div>
                                    <div className="l16">
                                      <BarChart
                                        width={260}
                                        height={185}
                                        data={data}>
                                        <XAxis
                                          dataKey="name"
                                          stroke="#8884d8"
                                        />
                                        <Tooltip contentStyle={tooltipStyles} />
                                        <Bar
                                          dataKey="uv"
                                          fill="#0062ff"
                                          barSize={15}
                                          radius={[10, 10, 0, 0]}
                                        />
                                      </BarChart>
                                    </div>
                                  </div>
                                  {/* 
            <div className="l7">
              <div className="l8">
                {" "}
                <div className="l9"></div>
                <div className="l10">Abhi Baldha</div>
                <div className="l11"></div>
                <div className="l11"></div>
              </div>
            </div> */}
                                </div>
                                {/* </Col> */}
                                {/* </Row> */}
                              </div>
                            </Offcanvas.Body>
                          </Offcanvas>
                          <div className="d-flex r2a1a">
                            <div
                              // className="r3"
                              className={isLightTheme ? "r3 light" : "r3 dark"}
                              onClick={() => {
                                newQuery();
                                setfget_historyRoom_by_id("");
                                setActiveId("");
                              }}>
                              <div
                                //  className="r3a"
                                className={isLightTheme ? "r3a light" : "r3a "}>
                                <IoAddCircleOutline />
                              </div>
                              <div
                                //  className="r3b"
                                className={
                                  isLightTheme
                                    ? "r3b d-sm-block d-none light"
                                    : "r3b d-sm-block d-none  "
                                }>
                                New Chat
                              </div>
                            </div>
                            <div
                              //  className="r5"
                              className={
                                isLightTheme
                                  ? "r5 d-md-block  d-none light"
                                  : "r5 d-md-block  d-none dark"
                              }>
                              <IoMdLock />
                            </div>{" "}
                            <div
                              //  className="r5"
                              className={
                                isLightTheme
                                  ? "r5 d-md-block  d-none light"
                                  : "r5 d-md-block  d-none dark"
                              }>
                              <AiOutlineInfoCircle />
                            </div>{" "}
                            <div
                              // className="r5"
                              className={isLightTheme ? "r5 light" : "r5 dark"}
                              onClick={toggleTheme}>
                              {isLightTheme ? <BiMoon /> : <BiSolidSun />}
                            </div>
                            <div
                              // onClick={toogleSignUppage}
                              className={isLightTheme ? "r6 light" : "r6 dark"}
                              onMouseEnter={toggleDropdown}
                              onMouseLeave={toggleDropdown}
                              //  className="r6"
                            >
                              <img
                                className={
                                  isLightTheme ? "r6 light" : "r6 dark"
                                }
                                src={UserProfile?.data?.profileImage}
                                alt=""
                              />
                              {showDropdown && (
                                <div className="dropdown opt">
                                  <ul className="opt13">
                                    <li className="opt15">
                                      <div className="opt16">
                                        <span className="opt18">
                                          <FaHandsClapping />
                                        </span>
                                        <span className="opt17"></span>
                                        Hi
                                        <span className="opt19">
                                          {" "}
                                          {UserProfile?.data?.userName}
                                        </span>
                                      </div>{" "}
                                    </li>

                                    <li
                                      className="opt11"
                                      onClick={() => performTask(1)}>
                                      <div className="opt14">Profile</div>
                                    </li>
                                    <li
                                      className="opt11"
                                      onClick={() => performTask(2)}>
                                      <div className="opt14">Task 2</div>
                                    </li>
                                    <li
                                      className="opt11"
                                      onClick={() => performTask(3)}>
                                      <div className="opt14">Log Out</div>
                                    </li>
                                  </ul>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ==== pikino========================= */}
                    {/* <div className="r13"></div> */}
                    {/* ============================= */}
                    {/* ----------------- bot chat--------------------- */}
                    {/* <Chat /> */}
                    {activeScreen === "history" && (
                      <div ref={myDivRef} className="r14 px-5 w-100  d-flex  ">
                        <div className="r25 w-100">
                          {/* ---------------  yash1   ---------------- */}
                          {/* {activeScreen === "history" && (
                            <> */}
                          {getRoomResponse?.chat_data?.map((val, index) => {
                            // const response ={valquestion}
                            const response = val?.answer;
                            console.log("response123", response);
                            const codeBlockRegex = /```([\s\S]+?)```/g;
                            const renderMessage = (msg, index) => {
                              const msgFORCopy = msg;

                              if (index % 2 !== 0) {
                                const firstWordJAva = "";
                                // const words = msg.trim().split(" ");
                                // const firstWordJAva =
                                //   words.length > 0 ? words[0] : "";
                                const lines = msg.split("\n");
                                const chunks = [];

                                for (const line of lines) {
                                  const words = line.split(" ");
                                  let currentChunk = words[0];

                                  for (let i = 1; i < words.length; i++) {
                                    if (
                                      (currentChunk + " " + words[i]).length <=
                                      15
                                    ) {
                                      currentChunk += " " + words[i];
                                    } else {
                                      chunks.push(currentChunk);
                                      currentChunk = words[i];
                                    }
                                  }

                                  chunks.push(currentChunk);
                                }

                                console.log(chunks, "aaaaasss");
                                console.log("msg123123", firstWordJAva);
                                const firstSpaceIndex = msg.indexOf("\n");

                                // Extract the content after the first space
                                const newText =
                                  firstSpaceIndex !== -1
                                    ? msg.substring(firstSpaceIndex + 1)
                                    : msg;
                                console.log("newText", newText);
                                return (
                                  <div
                                    //  className="r30"
                                    className={
                                      isLightTheme ? "r30 light " : "r30 dark  "
                                    }>
                                    {" "}
                                    <div
                                      //  className="r31"
                                      className={
                                        isLightTheme
                                          ? "r31 light "
                                          : "r31 dark  "
                                      }>
                                      <div className="r32">
                                        {/* {firstWordJAva} */}

                                        {chunks[0]}
                                      </div>

                                      <div
                                        className="r33"
                                        onClick={() => {
                                          setCopyALlCOde(msg);
                                          // setTextToCopy(finalCodeBlocks);
                                          handleCopyClick(index, msg);
                                        }}>
                                        {copied[index] ? "Copied" : "Copy"}
                                      </div>
                                    </div>{" "}
                                    <div className="r34">
                                      <div
                                        className="r34a"
                                        // dangerouslySetInnerHTML={{
                                        // __html: finalCodeBlocks,
                                        // }}
                                      >
                                        <SyntaxHighlighter
                                          // language={
                                          //   firstWords && firstWords[index]
                                          // }
                                          // language={React}
                                          // language="react"
                                          style={vs2015}
                                          //   language={firstWords[index]}
                                          // style={vs}
                                        >
                                          {/* <code> */}
                                          {/* {split?.[1]} */}
                                          {newText}
                                          {/* </code> */}
                                        </SyntaxHighlighter>
                                        {/* <code>{finalCodeBlocks}</code> */}
                                      </div>
                                    </div>
                                  </div>
                                );
                              } else {
                                return (
                                  // <p key={index} className="code-block">
                                  <div key={index} className="r34a1">
                                    <code
                                      //  className="cod1"
                                      className={
                                        isLightTheme ? "cod1  " : "cod1 dark "
                                      }>
                                      {/* {split?.[0]} */}
                                      {msg.replace(/```/g, "")}
                                    </code>
                                  </div>
                                  // </p>
                                );
                              }
                            };
                            const messageBlocks =
                              response.split(codeBlockRegex);
                            // -----------------------

                            const handleCopyClick = (index, msg) => {
                              // Create a temporary textarea element to copy the text
                              const tempTextarea =
                                document.createElement("textarea");
                              tempTextarea.value = msg;

                              document.body.appendChild(tempTextarea);

                              // Select the text inside the textarea and copy it
                              tempTextarea.select();
                              document.execCommand("copy");

                              // Remove the temporary textarea element
                              document.body.removeChild(tempTextarea);

                              // Set the copied status for the clicked element's index to true
                              setCopied((prevStatus) => ({
                                ...prevStatus,
                                [index]: true,
                              }));

                              // Reset the copied status to false after 4 seconds
                              setTimeout(() => {
                                setCopied((prevStatus) => ({
                                  ...prevStatus,
                                  [index]: false,
                                }));
                              }, 4000);
                            };
                            // -----------------------
                            return (
                              <>
                                {/* ------------------------------- */}
                                <Container fluid className="">
                                  <div>
                                    <div className="p-0 pt-4">
                                      <div className="chat1 p-3 d-flex  ">
                                        <Row className="m-0 p-0 w-100 align-items-start">
                                          <Col
                                            sm={1}
                                            lg={1}
                                            xl={1}
                                            md={1}
                                            className="p-0 col-1 sm-1">
                                            <div className="chat2 ">
                                              {getRoomResponse?.user_data?.map(
                                                (abc) => {
                                                  return (
                                                    <>
                                                      <img
                                                        className="chat3"
                                                        src={abc?.profileImage}
                                                        alt="asd"
                                                      />
                                                    </>
                                                  );
                                                }
                                              )}
                                            </div>
                                          </Col>
                                          <Col
                                            className="p-0 col-1"
                                            lg={10}
                                            sm={10}
                                            md={10}
                                            xl={10}>
                                            <div className="chat4 ps-4   mt-3 justify-content-start d-flex">
                                              {val?.question}
                                            </div>
                                          </Col>
                                          <Col
                                            className="p-0 col-1"
                                            lg={1}
                                            md={1}
                                            sm={1}
                                            xl={1}>
                                            <div className="chat6 mt-3     justify-content-end d-flex">
                                              <BiEdit />
                                            </div>
                                          </Col>
                                        </Row>
                                      </div>
                                    </div>
                                  </div>
                                </Container>
                                <Container fluid className="mt-4">
                                  <div>
                                    <div className="p-0">
                                      <div className="chat1 p-3 d-flex  ">
                                        <Row className="m-0 p-0  w-100   align-items-start">
                                          <Col
                                            // sm={1}
                                            lg={1}
                                            // md={1}
                                            xl={1}
                                            className="p-0 col-1">
                                            <div className="chat270px d-flex align-items-center justify-content-center">
                                              <div className="chat2 ">
                                                <img
                                                  // className="chat3"
                                                  className="r22a"
                                                  src={logomain2}
                                                  alt="asd"
                                                />
                                              </div>
                                            </div>
                                          </Col>
                                          <Col
                                            // sm={11}
                                            className="p-0 col-11"
                                            lg={11}
                                            // md={11}
                                            xl={11}>
                                            <div className="chat4 ps-4   mt-3 justify-content-start  ">
                                              {messageBlocks.map((msg, index) =>
                                                renderMessage(msg, index)
                                              )}
                                            </div>
                                          </Col>
                                        </Row>
                                      </div>
                                    </div>
                                  </div>
                                </Container>
                                {/* <div
                                  className={
                                    isLightTheme
                                      ? "abhiFOR1 light p-4"
                                      : "abhiFOR1 dark  p-4"
                                  }>
                                  <div
                                    className={
                                      isLightTheme ? "r22 light " : "r22 dark  "
                                    }>
                                    <img
                                      className="r22a"
                                      src={logomain2}
                                      alt=""
                                    />
                                  </div>
                                  <div>
                                    {messageBlocks.map((msg, index) =>
                                      renderMessage(msg, index)
                                    )}
                                  </div>
                                </div> */}
                              </>
                            );
                          })}
                          {/* </>
                          )} */}
                          {/* ------------- yash2 ------------------ */}{" "}
                          {/* here active that came  */}
                          {/* ------------------------------- */}
                          {/* {activeScreen === "new" && <></>} */}
                        </div>
                      </div>
                    )}{" "}
                    {activeScreen === "new" && (
                      <div ref={myDivRef} className="r14 px-5 w-100  d-flex  ">
                        <div className="r25 w-100">
                          {/* ---------------  yash1   ---------------- */}
                          {/* {activeScreen === "history" && (
                            <> */}
                          {getRoomResponse?.chat_data?.map((val, index) => {
                            // const response ={valquestion}
                            const response = val?.answer;
                            console.log("response123", response);
                            const codeBlockRegex = /```([\s\S]+?)```/g;
                            const renderMessage = (msg, index) => {
                              const msgFORCopy = msg;

                              if (index % 2 !== 0) {
                                const firstWordJAva = "";
                                // const words = msg.trim().split(" ");
                                // const firstWordJAva =
                                //   words.length > 0 ? words[0] : "";
                                const lines = msg.split("\n");
                                const chunks = [];

                                for (const line of lines) {
                                  const words = line.split(" ");
                                  let currentChunk = words[0];

                                  for (let i = 1; i < words.length; i++) {
                                    if (
                                      (currentChunk + " " + words[i]).length <=
                                      15
                                    ) {
                                      currentChunk += " " + words[i];
                                    } else {
                                      chunks.push(currentChunk);
                                      currentChunk = words[i];
                                    }
                                  }

                                  chunks.push(currentChunk);
                                }

                                console.log(chunks, "aaaaasss");
                                console.log("msg123123", firstWordJAva);
                                const firstSpaceIndex = msg.indexOf("\n");

                                // Extract the content after the first space
                                const newText =
                                  firstSpaceIndex !== -1
                                    ? msg.substring(firstSpaceIndex + 1)
                                    : msg;
                                console.log("newText", newText);
                                return (
                                  <div
                                    //  className="r30"
                                    className={
                                      isLightTheme ? "r30 light " : "r30 dark  "
                                    }>
                                    {" "}
                                    <div
                                      //  className="r31"
                                      className={
                                        isLightTheme
                                          ? "r31 light "
                                          : "r31 dark  "
                                      }>
                                      <div className="r32">
                                        {/* {firstWordJAva} */}

                                        {chunks[0]}
                                      </div>

                                      <div
                                        className="r33"
                                        onClick={() => {
                                          setCopyALlCOde(msg);
                                          // setTextToCopy(finalCodeBlocks);
                                          handleCopyClick(index, msg);
                                        }}>
                                        {copied[index] ? "Copied" : "Copy"}
                                      </div>
                                    </div>{" "}
                                    <div className="r34">
                                      <div
                                        className="r34a"
                                        // dangerouslySetInnerHTML={{
                                        // __html: finalCodeBlocks,
                                        // }}
                                      >
                                        <SyntaxHighlighter
                                          // language={
                                          //   firstWords && firstWords[index]
                                          // }
                                          // language={React}
                                          // language="react"
                                          style={vs2015}
                                          //   language={firstWords[index]}
                                          // style={vs}
                                        >
                                          {/* <code> */}
                                          {/* {split?.[1]} */}
                                          {newText}
                                          {/* </code> */}
                                        </SyntaxHighlighter>
                                        {/* <code>{finalCodeBlocks}</code> */}
                                      </div>
                                    </div>
                                  </div>
                                );
                              } else {
                                return (
                                  // <p key={index} className="code-block">
                                  <div key={index} className="r34a1">
                                    <code
                                      //  className="cod1"
                                      className={
                                        isLightTheme ? "cod1  " : "cod1 dark "
                                      }>
                                      {/* {split?.[0]} */}
                                      {msg.replace(/```/g, "")}
                                    </code>
                                  </div>
                                  // </p>
                                );
                              }
                            };
                            const messageBlocks =
                              response.split(codeBlockRegex);
                            // -----------------------

                            const handleCopyClick = (index, msg) => {
                              // Create a temporary textarea element to copy the text
                              const tempTextarea =
                                document.createElement("textarea");
                              tempTextarea.value = msg;

                              document.body.appendChild(tempTextarea);

                              // Select the text inside the textarea and copy it
                              tempTextarea.select();
                              document.execCommand("copy");

                              // Remove the temporary textarea element
                              document.body.removeChild(tempTextarea);

                              // Set the copied status for the clicked element's index to true
                              setCopied((prevStatus) => ({
                                ...prevStatus,
                                [index]: true,
                              }));

                              // Reset the copied status to false after 4 seconds
                              setTimeout(() => {
                                setCopied((prevStatus) => ({
                                  ...prevStatus,
                                  [index]: false,
                                }));
                              }, 4000);
                            };
                            // -----------------------
                            return (
                              <>
                                {/* ------------------------------- */}
                                <Container fluid className="">
                                  <div>
                                    <div className="p-0 pt-4">
                                      <div className="chat1 p-3 d-flex  ">
                                        <Row className="m-0 p-0 w-100 align-items-start">
                                          <Col
                                            sm={1}
                                            lg={1}
                                            xl={1}
                                            md={1}
                                            className="p-0 col-1 sm-1">
                                            <div className="chat2 ">
                                              {getRoomResponse?.user_data?.map(
                                                (abc) => {
                                                  return (
                                                    <>
                                                      <img
                                                        className="chat3"
                                                        src={abc?.profileImage}
                                                        alt="asd"
                                                      />
                                                    </>
                                                  );
                                                }
                                              )}
                                            </div>
                                          </Col>
                                          <Col
                                            className="p-0 col-1"
                                            lg={10}
                                            sm={10}
                                            md={10}
                                            xl={10}>
                                            <div className="chat4 ps-4   mt-3 justify-content-start d-flex">
                                              {val?.question}
                                            </div>
                                          </Col>
                                          <Col
                                            className="p-0 col-1"
                                            lg={1}
                                            md={1}
                                            sm={1}
                                            xl={1}>
                                            <div className="chat6 mt-3     justify-content-end d-flex">
                                              <BiEdit />
                                            </div>
                                          </Col>
                                        </Row>
                                      </div>
                                    </div>
                                  </div>
                                </Container>
                                <Container fluid className="mt-4">
                                  <div>
                                    <div className="p-0">
                                      <div className="chat1 p-3 d-flex  ">
                                        <Row className="m-0 p-0  w-100   align-items-start">
                                          <Col
                                            // sm={1}
                                            lg={1}
                                            // md={1}
                                            xl={1}
                                            className="p-0 col-1">
                                            <div className="chat270px d-flex align-items-center justify-content-center">
                                              <div className="chat2 ">
                                                <img
                                                  // className="chat3"
                                                  className="r22a"
                                                  src={logomain2}
                                                  alt="asd"
                                                />
                                              </div>
                                            </div>
                                          </Col>
                                          <Col
                                            // sm={11}
                                            className="p-0 col-11"
                                            lg={11}
                                            // md={11}
                                            xl={11}>
                                            <div className="chat4 ps-4   mt-3 justify-content-start  ">
                                              {messageBlocks.map((msg, index) =>
                                                renderMessage(msg, index)
                                              )}
                                            </div>
                                          </Col>
                                        </Row>
                                      </div>
                                    </div>
                                  </div>
                                </Container>
                                {/* <div
                                  className={
                                    isLightTheme
                                      ? "abhiFOR1 light p-4"
                                      : "abhiFOR1 dark  p-4"
                                  }>
                                  <div
                                    className={
                                      isLightTheme ? "r22 light " : "r22 dark  "
                                    }>
                                    <img
                                      className="r22a"
                                      src={logomain2}
                                      alt=""
                                    />
                                  </div>
                                  <div>
                                    {messageBlocks.map((msg, index) =>
                                      renderMessage(msg, index)
                                    )}
                                  </div>
                                </div> */}
                              </>
                            );
                          })}
                          {/* </>
                          )} */}
                          {/* ------------- yash2 ------------------ */}{" "}
                          {/* here active that came  */}
                          {/* ------------------------------- */}
                          {/* {activeScreen === "new" && <></>} */}
                        </div>
                      </div>
                    )}{" "}
                    <div className=" px-5 w-100  d-flex  ">
                      {/* asd */}
                      {activeScreen === "new" && (
                        <div className="r15 p-3">
                          <div
                            className={
                              isLightTheme
                                ? ` custom-input-containera  ${
                                    containerActive ? "active" : ""
                                  }`
                                : ` custom-input-container  ${
                                    containerActive ? "active" : ""
                                  }`
                            }>
                            <textarea
                              ref={textareaRef}
                              placeholder="Send a message"
                              value={value}
                              onChange={handleInputChange}
                              onInput={(event) => adjustHeight(event.target)}
                              // className={`custom-input ${
                              //   containerActive ? "active" : ""
                              // }`}
                              className={
                                isLightTheme
                                  ? `custom-inputa ${
                                      containerActive ? "active" : ""
                                    }`
                                  : `custom-input ${
                                      containerActive ? "active" : ""
                                    }`
                              }
                            />
                            <button
                              onClick={() => {
                                handleNewChatClick();
                                // QuerySend();
                              }}
                              className={
                                isLightTheme
                                  ? `custom-buttona ${
                                      containerActive ? "active" : ""
                                    }`
                                  : `custom-button ${
                                      containerActive ? "active" : ""
                                    }`
                              }
                              // className={`custom-button ${
                              //   containerActive ? "active" : ""
                              // }`}
                            >
                              <AiOutlineSend />
                            </button>
                          </div>
                          {/* <span
                            //  className="r20"
                            className={isLightTheme ? "r20  light " : "r20  "}>
                            Free Research Preview. Instruct.ai may produce
                            inaccurate information about people, places, or
                            facts. Instruct.ai Sep 26 Version
                          </span> */}
                        </div>
                      )}
                      {activeScreen === "history" && (
                        <div className="r15 p-3">
                          {/* <div className="r15a">
                  <div className="r15b">
                    <input
                        className={isLightTheme ? "r24  light " : "r24  "}>

                      type="text"
                      placeholder="Send a message"
                      className="r15d"
                    />
                  </div>
                  <div className="r15c">Send</div>
                </div> */}
                          <div
                            className={
                              isLightTheme
                                ? ` custom-input-containera  ${
                                    containerActive ? "active" : ""
                                  }`
                                : ` custom-input-container  ${
                                    containerActive ? "active" : ""
                                  }`
                            }>
                            <textarea
                              ref={textareaRef}
                              placeholder="Send a message"
                              value={value}
                              onChange={handleInputChange}
                              onInput={(event) => adjustHeight(event.target)}
                              // className={`custom-input ${
                              //   containerActive ? "active" : ""
                              // }`}
                              className={
                                isLightTheme
                                  ? `custom-inputa ${
                                      containerActive ? "active" : ""
                                    }`
                                  : `custom-input ${
                                      containerActive ? "active" : ""
                                    }`
                              }
                            />
                            <button
                              onClick={() => {
                                handleNewChatClick();
                                // QuerySend();
                              }}
                              className={
                                isLightTheme
                                  ? `custom-buttona ${
                                      containerActive ? "active" : ""
                                    }`
                                  : `custom-button ${
                                      containerActive ? "active" : ""
                                    }`
                              }
                              // className={`custom-button ${
                              //   containerActive ? "active" : ""
                              // }`}
                            >
                              <AiOutlineSend />
                            </button>
                          </div>
                          {/* <span
                            //  className="r20"
                            className={isLightTheme ? "r20  light " : "r20  "}>
                            Free Research Preview. Instruct.ai may produce
                            inaccurate information about people, places, or
                            facts. Instruct.ai Sep 26 Version
                          </span> */}
                        </div>
                      )}
                    </div>
                    {/* ---- jeetlodo---------------------------------- */}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Main;

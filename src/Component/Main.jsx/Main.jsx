import "../All.css";
import { LuEdit, LuStars } from "react-icons/lu";
import { BiMessageSquareEdit, BiMoon, BiSolidSun } from "react-icons/bi";
import { Line } from "react-chartjs-2";
import { IoMdLock } from "react-icons/io";
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
import { useNavigate } from "react-router-dom";
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

// ==============================
function Main() {
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
      <div
        //  className="container"
        className={
          isLightTheme ? "containeramain light" : "containeramain dark"
        }
      >
        <div className="mainpart">
          <div
            className={isLightTheme ? "LeftPart light" : "LeftPart dark"}

            //  className="LeftPart"
          >
            <div
              //  className="l1"
              className={isLightTheme ? "l1 light" : "l1 dark"}
            >
              {/* <h2>INSTRUCT AI</h2> */}
              {isLightTheme ? (
                <img className="l1a" src={logo12} alt=";logo" />
              ) : (
                <img className="l1a" src={logo} alt=";logo" />
              )}
            </div>
            {/* ----------------------------------------- */}
            <div
              // className="l5"
              className={isLightTheme ? "l5 light" : "l5"}
            >
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
                                } ${isActive ? "activehistorydark" : ""} ${
                                  isActive1 ? "activehistorylight" : ""
                                }`}
                              >
                                <div
                                  onClick={() => {
                                    handleNavigation("history");
                                    handleL2Click(valuea?._id);

                                    setfget_historyRoom_by_id(valuea?._id);
                                    console.log("abhi2", valuea?._id);
                                  }}
                                  className={
                                    isLightTheme ? "l3 light" : "l3 dark"
                                  }
                                >
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
                                        setfget_historyRoom_by_id(valuea?._id);
                                        console.log("abhi3", valuea?._id);
                                        setIsTitleEditing(false);
                                      }}
                                      className="l4"
                                    >
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
                                } ${isActive ? "activehistorydark" : ""} ${
                                  isActive1 ? "activehistorylight" : ""
                                }`}
                              >
                                <div
                                  onClick={() => {
                                    handleNavigation("history");
                                    handleL2Click(valuea?._id);

                                    setfget_historyRoom_by_id(valuea?._id);
                                    console.log("abhi2", valuea?._id);
                                  }}
                                  className={
                                    isLightTheme ? "l3 light" : "l3 dark"
                                  }
                                >
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
                                        setfget_historyRoom_by_id(valuea?._id);
                                        console.log("abhi3", valuea?._id);
                                        setIsTitleEditing(false);
                                      }}
                                      className="l4"
                                    >
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
                                } ${isActive ? "activehistorydark" : ""} ${
                                  isActive1 ? "activehistorylight" : ""
                                }`}
                              >
                                <div
                                  onClick={() => {
                                    handleNavigation("history");
                                    handleL2Click(valuea?._id);

                                    setfget_historyRoom_by_id(valuea?._id);
                                    console.log("abhi2", valuea?._id);
                                    setIsNewChatClicked(false);
                                  }}
                                  className={
                                    isLightTheme ? "l3 light" : "l3 dark"
                                  }
                                >
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
                                        setfget_historyRoom_by_id(valuea?._id);
                                        console.log("abhi3", valuea?._id);
                                        setIsTitleEditing(false);
                                      }}
                                      className="l4"
                                    >
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
                                } ${isActive ? "activehistorydark" : ""} ${
                                  isActive1 ? "activehistorylight" : ""
                                }`}
                              >
                                <div
                                  onClick={() => {
                                    setIsNewChatClicked(false);

                                    handleNavigation("history");
                                    handleL2Click(valuea?._id);

                                    setfget_historyRoom_by_id(valuea?._id);
                                    console.log("abhi2", valuea?._id);
                                  }}
                                  className={
                                    isLightTheme ? "l3 light" : "l3 dark"
                                  }
                                >
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
                                        setfget_historyRoom_by_id(valuea?._id);
                                        console.log("abhi3", valuea?._id);
                                        setIsTitleEditing(false);
                                      }}
                                      className="l4"
                                    >
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
                                } ${isActive ? "activehistorydark" : ""} ${
                                  isActive1 ? "activehistorylight" : ""
                                }`}
                              >
                                <div
                                  onClick={() => {
                                    handleNavigation("history");
                                    handleL2Click(valuea?._id);

                                    setfget_historyRoom_by_id(valuea?._id);
                                    console.log("abhi2", valuea?._id);
                                  }}
                                  className={
                                    isLightTheme ? "l3 light" : "l3 dark"
                                  }
                                >
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
                                        setfget_historyRoom_by_id(valuea?._id);
                                        console.log("abhi3", valuea?._id);
                                        setIsTitleEditing(false);
                                      }}
                                      className="l4"
                                    >
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
            {/* ----------------------------------------- */}

            <div
              //  className="l6"
              className={isLightTheme ? "l6 light" : "l6 dark"}
            >
              <div
                //  className="l17"
                className={isLightTheme ? "l17 light" : "l17 dark"}
              >
                <div
                  //  className="l12"
                  className={isLightTheme ? "l12 light" : "l12 dark"}
                >
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
                  className={isLightTheme ? "l15 light" : "l15 dark"}
                >
                  {weeklyGraph?.data?.total_count}/{maxCount} credits used
                </div>
                <div className="l16">
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
          </div>
          <div
            className={isLightTheme ? "RightPart light" : "RightPart dark"}

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
              <div
                //  className="r2"
                className={isLightTheme ? "r2 light" : "r2 dark"}
              >
                <div
                  // className="r3"
                  className={isLightTheme ? "r3 light" : "r3 dark"}
                  onClick={() => {
                    newQuery();
                    setfget_historyRoom_by_id("");
                    setActiveId("");
                  }}
                >
                  <div
                    //  className="r3a"
                    className={isLightTheme ? "r3a light" : "r3a "}
                  >
                    <IoAddCircleOutline />
                  </div>
                  <div
                    //  className="r3b"
                    className={isLightTheme ? "r3b light" : "r3b "}
                  >
                    New Chat
                  </div>
                  {/* <input className="r4" type="search" name="" id="" /> */}
                </div>
                <div
                  //  className="r5"
                  className={isLightTheme ? "r5 light" : "r5 dark"}
                >
                  <IoMdLock />
                </div>{" "}
                <div
                  //  className="r5"
                  className={isLightTheme ? "r5 light" : "r5 dark"}
                >
                  <AiOutlineInfoCircle />
                </div>{" "}
                <div
                  // className="r5"
                  className={isLightTheme ? "r5 light" : "r5 dark"}
                  onClick={toggleTheme}
                >
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
                    className={isLightTheme ? "r6 light" : "r6 dark"}
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

                        <li className="opt11" onClick={() => performTask(1)}>
                          <div className="opt14">Profile</div>
                        </li>
                        <li className="opt11" onClick={() => performTask(2)}>
                          <div className="opt14">Task 2</div>
                        </li>
                        <li className="opt11" onClick={() => performTask(3)}>
                          <div className="opt14">Log Out</div>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="r13"></div>
              {/* ----------------- bot chat--------------------- */}
              {activeScreen === "history" && (
                <div ref={myDivRef} className="r14">
                  <div className="r25">
                    {/* <div className="r21">
                    <div className="r22">
                      <img className="r22a" src={logomain2} alt="" />
                    </div>
                    <div className="r23">
                      is Jeet is a good fuck toy ? yes its giid fuck toy Morbi
                    </div>
                    <div className="r24">
                      <BiMessageSquareEdit />
                    </div>
                  </div>
                  <div className="r21answer">
                    <div className="r22">
                      <img className="r22a" src={logomain2} alt="" />
                    </div>
                    <div className="r23">
                      is Jeet is a good fuck toy ? yes its giid fuck toy Morbi
                      is Jeet is a good fuck toy ? yes its giid fuck toy Morbi
                      is Jeet is a good fuck toy ? yes its giid fuck toy Morbi
                      is Jeet is a good fuck toy ? yes its giid fuck toy Morbi
                      is Jeet is a good fuck toy ? yes its giid fuck toy Morbi
                      is Jeet is a good fuck toy ? yes its giid fuck toy Morbi
                      is Jeet is a good fuck toy ? yes its giid fuck toy Morbi
                      is Jeet is a good fuck toy ? yes its giid fuck toy Morbi
                      is Jeet is a good fuck toy ? yes its giid fuck toy Morbi
                      is Jeet is a good fuck toy ? yes its giid fuck toy Morbi
                      is Jeet is a good fuck toy ? yes its giid fuck toy Morbi
                      is Jeet is a good fuck toy ? yes its giid fuck toy Morbi
                    </div>
                    <div className="r24answer">
                      <div className="r24">
                        <AiOutlineLike />
                      </div>{" "}
                      <div className="r24">
                        <AiOutlineDislike />
                      </div>
                    </div>
                  </div> */}
                    {/* ---------------  yash1   ---------------- */}
                    {activeScreen === "history" && (
                      <>
                        {getRoomResponse?.chat_data?.map((val, index) => {
                          // const response ={valquestion}
                          const response = val?.answer;
                          console.log("response123", response);
                          const codeBlockRegex = /```([\s\S]+?)```/g;
                          const renderMessage = (msg, index) => {
                            const msgFORCopy = msg;
                            if (index % 2 !== 0) {
                              return (
                                <div
                                  //  className="r30"
                                  className={
                                    isLightTheme ? "r30 light " : "r30 dark  "
                                  }
                                >
                                  {" "}
                                  <div
                                    //  className="r31"
                                    className={
                                      isLightTheme ? "r31 light " : "r31 dark  "
                                    }
                                  >
                                    <div className="r32">
                                      {/* React Js */}
                                      {/* {firstWords} */}
                                      asd
                                    </div>
                                    {/* <div className="r33"> Copy</div> */}

                                    <div
                                      className="r33"
                                      onClick={() => {
                                        setCopyALlCOde(msg);
                                        // setTextToCopy(finalCodeBlocks);
                                        handleCopyClick(index, msg);
                                      }}
                                    >
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
                                        {msg}
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
                                    }
                                  >
                                    {/* {split?.[0]} */}
                                    {msg.replace(/```/g, "")}
                                  </code>
                                </div>
                                // </p>
                              );
                            }
                          };
                          const messageBlocks = response.split(codeBlockRegex);
                          // -----------------------

                          const handleCopyClick = (index, msg) => {
                            // Create a temporary textarea element to copy the text
                            const tempTextarea = document.createElement(
                              "textarea"
                            );
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
                              <div
                                // className="r21"
                                className={
                                  isLightTheme ? "r21 light " : "r21 dark  "
                                }
                              >
                                <div
                                  //  className="r22"
                                  className={
                                    isLightTheme ? "r22 light " : "r22 dark  "
                                  }
                                >
                                  {getRoomResponse?.user_data?.map((abc) => {
                                    return (
                                      <>
                                        <img
                                          className="r22ab"
                                          src={abc?.profileImage}
                                          alt=""
                                        />
                                      </>
                                    );
                                  })}
                                </div>
                                {/* <div
                                className={isLightTheme ? "r23 light " : "r23"}>
                                {val?.question}
                              </div> */}
                                {EditActive ? (
                                  <>
                                    {" "}
                                    <div
                                      className={
                                        isLightTheme ? "r23 light " : "r23"
                                      }
                                    >
                                      {val?.question}
                                      {/* <code> */}
                                      {/* <input
                                      placeholder={val?.question}
                                      type="text"
                                      value={QTitle}
                                      onChange={handleOnChangeQuestion}
                                      className="inputUpdate1"
                                    /> */}
                                      {/* <textarea
                                      // rows={6}
                                      placeholder={val?.question}
                                      type="text"
                                      value={QTitle}
                                      onChange={handleOnChangeQuestion}
                                      className="inputUpdate1"></textarea> */}
                                      {/* <textarea
                                      ref={textareaRef}
                                      placeholder={val?.question}
                                      value={QTitle}
                                      onChange={handleOnChangeQuestion}
                                      onInput={(event) =>
                                        adjustHeight(event.target)
                                      }
                                      // className={`custom-input ${
                                      //   containerActive ? "active" : ""
                                      // }`}
                                      className={
                                        isLightTheme
                                          ? `custom-inputa1 ${
                                              containerActive ? "active" : ""
                                            }`
                                          : `custom-input ${
                                              containerActive ? "active" : ""
                                            }`
                                      }
                                    /> */}
                                      {/* </code> */}
                                    </div>
                                    <div
                                      onClick={() => {
                                        setEditActive(true);
                                        // setQTitle(val?.question);
                                        setValue(val?.question);
                                        setUpdateApiId(val?._id);
                                        setisUpdateClicked(true);
                                        handleL2ClickText(val?._id);
                                      }}
                                      className={
                                        isLightTheme ? "r24 light " : "r24"
                                      }
                                    >
                                      <BiMessageSquareEdit />
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    {" "}
                                    <div
                                      className={
                                        isLightTheme ? "r23 light " : "r23"
                                      }
                                    >
                                      {val?.question}
                                    </div>
                                    <div
                                      onClick={() => {
                                        setEditActive(true);
                                        setValue(val?.question);
                                        setUpdateApiId(val?._id);
                                        setisUpdateClicked(true);
                                        handleL2ClickText();
                                      }}
                                      className={
                                        isLightTheme ? "r24 light " : "r24"
                                      }
                                    >
                                      <BiMessageSquareEdit />
                                    </div>
                                  </>
                                )}
                              </div>{" "}
                              {/* ------------------------------- */}
                              <div className="abhiFOR1">
                                <div
                                  // className="r22"
                                  className={
                                    isLightTheme ? "r22 light " : "r22 dark  "
                                  }
                                >
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
                              </div>
                            </>
                          );
                        })}
                      </>
                    )}{" "}
                    {/* ------------- yash2 ------------------ */}{" "}
                    {/* here active that came  */}
                    {activeScreen === "new" && (
                      <>
                        {getRoomResponse?.chat_data?.length > 0 ? (
                          getRoomResponse?.chat_data?.map((val, index) => {
                            // const response ={valquestion}
                            const response = val?.answer;
                            console.log("response123", response);
                            const codeBlockRegex = /```([\s\S]+?)```/g;
                            const renderMessage = (msg, index) => {
                              const msgFORCopy = msg;
                              if (index % 2 !== 0) {
                                return (
                                  <div
                                    //  className="r30"
                                    className={
                                      isLightTheme ? "r30 light " : "r30 dark  "
                                    }
                                  >
                                    {" "}
                                    <div
                                      //  className="r31"
                                      className={
                                        isLightTheme
                                          ? "r31 light "
                                          : "r31 dark  "
                                      }
                                    >
                                      <div className="r32">
                                        {/* React Js */}
                                        {/* {firstWords} */}
                                        asd
                                      </div>
                                      {/* <div className="r33"> Copy</div> */}

                                      <div
                                        className="r33"
                                        onClick={() => {
                                          setCopyALlCOde(msg);
                                          // setTextToCopy(finalCodeBlocks);
                                          handleCopyClick(index, msg);
                                        }}
                                      >
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
                                          {msg}
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
                                      }
                                    >
                                      {/* {split?.[0]} */}
                                      {msg.replace(/```/g, "")}
                                    </code>
                                  </div>
                                  // </p>
                                );
                              }
                            };
                            const messageBlocks = response.split(
                              codeBlockRegex
                            );
                            // -----------------------

                            const handleCopyClick = (index, msg) => {
                              // Create a temporary textarea element to copy the text
                              const tempTextarea = document.createElement(
                                "textarea"
                              );
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
                                <div
                                  // className="r21"
                                  className={
                                    isLightTheme ? "r21 light " : "r21 dark  "
                                  }
                                >
                                  <div
                                    //  className="r22"
                                    className={
                                      isLightTheme ? "r22 light " : "r22 dark  "
                                    }
                                  >
                                    {getRoomResponse?.user_data?.map((abc) => {
                                      return (
                                        <>
                                          <img
                                            className="r22ab"
                                            src={abc?.profileImage}
                                            alt=""
                                          />
                                        </>
                                      );
                                    })}
                                  </div>
                                  {/* <div
                                className={isLightTheme ? "r23 light " : "r23"}>
                                {val?.question}
                              </div> */}
                                  {EditActive ? (
                                    <>
                                      {" "}
                                      <div
                                        className={
                                          isLightTheme ? "r23 light " : "r23"
                                        }
                                      >
                                        {val?.question}
                                        {/* <code> */}
                                        {/* <input
                                      placeholder={val?.question}
                                      type="text"
                                      value={QTitle}
                                      onChange={handleOnChangeQuestion}
                                      className="inputUpdate1"
                                    /> */}
                                        {/* <textarea
                                      // rows={6}
                                      placeholder={val?.question}
                                      type="text"
                                      value={QTitle}
                                      onChange={handleOnChangeQuestion}
                                      className="inputUpdate1"></textarea> */}
                                        {/* <textarea
                                      ref={textareaRef}
                                      placeholder={val?.question}
                                      value={QTitle}
                                      onChange={handleOnChangeQuestion}
                                      onInput={(event) =>
                                        adjustHeight(event.target)
                                      }
                                      // className={`custom-input ${
                                      //   containerActive ? "active" : ""
                                      // }`}
                                      className={
                                        isLightTheme
                                          ? `custom-inputa1 ${
                                              containerActive ? "active" : ""
                                            }`
                                          : `custom-input ${
                                              containerActive ? "active" : ""
                                            }`
                                      }
                                    /> */}
                                        {/* </code> */}
                                      </div>
                                      <div
                                        onClick={() => {
                                          setEditActive(true);
                                          // setQTitle(val?.question);
                                          setValue(val?.question);
                                          setUpdateApiId(val?._id);
                                          setisUpdateClicked(true);
                                          handleL2ClickText(val?._id);
                                        }}
                                        className={
                                          isLightTheme ? "r24 light " : "r24"
                                        }
                                      >
                                        <BiMessageSquareEdit />
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      {" "}
                                      <div
                                        className={
                                          isLightTheme ? "r23 light " : "r23"
                                        }
                                      >
                                        {val?.question}
                                      </div>
                                      <div
                                        onClick={() => {
                                          setEditActive(true);
                                          setValue(val?.question);
                                          setUpdateApiId(val?._id);
                                          setisUpdateClicked(true);
                                          handleL2ClickText();
                                        }}
                                        className={
                                          isLightTheme ? "r24 light " : "r24"
                                        }
                                      >
                                        <BiMessageSquareEdit />
                                      </div>
                                    </>
                                  )}
                                </div>{" "}
                                {/* ------------------------------- */}
                                <div className="abhiFOR1">
                                  <div
                                    // className="r22"
                                    className={
                                      isLightTheme ? "r22 light " : "r22 dark  "
                                    }
                                  >
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
                                </div>
                              </>
                            );
                          })
                        ) : (
                          <div className="a4">
                            <img src={newchat} alt="new chat" />
                          </div>
                        )}
                      </>
                    )}
                    {/* ------------------------------- */}
                    {/* {activeScreen === "new" && <></>} */}
                  </div>
                </div>
              )}{" "}
              {activeScreen === "new" && (
                <div ref={myDivRef} className="r14">
                  <div className="r25">
                    {/* <div className="r21">
                    <div className="r22">
                      <img className="r22a" src={logomain2} alt="" />
                    </div>
                    <div className="r23">
                      is Jeet is a good fuck toy ? yes its giid fuck toy Morbi
                    </div>
                    <div className="r24">
                      <BiMessageSquareEdit />
                    </div>
                  </div>
                  <div className="r21answer">
                    <div className="r22">
                      <img className="r22a" src={logomain2} alt="" />
                    </div>
                    <div className="r23">
                      is Jeet is a good fuck toy ? yes its giid fuck toy Morbi
                      is Jeet is a good fuck toy ? yes its giid fuck toy Morbi
                      is Jeet is a good fuck toy ? yes its giid fuck toy Morbi
                      is Jeet is a good fuck toy ? yes its giid fuck toy Morbi
                      is Jeet is a good fuck toy ? yes its giid fuck toy Morbi
                      is Jeet is a good fuck toy ? yes its giid fuck toy Morbi
                      is Jeet is a good fuck toy ? yes its giid fuck toy Morbi
                      is Jeet is a good fuck toy ? yes its giid fuck toy Morbi
                      is Jeet is a good fuck toy ? yes its giid fuck toy Morbi
                      is Jeet is a good fuck toy ? yes its giid fuck toy Morbi
                      is Jeet is a good fuck toy ? yes its giid fuck toy Morbi
                      is Jeet is a good fuck toy ? yes its giid fuck toy Morbi
                    </div>
                    <div className="r24answer">
                      <div className="r24">
                        <AiOutlineLike />
                      </div>{" "}
                      <div className="r24">
                        <AiOutlineDislike />
                      </div>
                    </div>
                  </div> */}
                    {/* ---------------  dfsd   ---------------- */}
                    {activeScreen === "history" && (
                      <>
                        {getRoomResponse?.chat_data?.map((val, index) => {
                          // const response ={valquestion}
                          const response = val?.answer;
                          console.log("response123", response);

                          const regex = /```[\s\S]*?```/g;
                          const codeBlocks = response.match(regex);
                          const extractedCodeBlocks = codeBlocks?.map(
                            (codeBlock) => codeBlock.slice(3, -3)
                          );
                          const firstWords = extractedCodeBlocks?.map(
                            (codeBlock) => {
                              const match = codeBlock.match(/^\w+/);
                              return match ? match[0] : null;
                            }
                          );
                          const modifiedCodeBlocks = extractedCodeBlocks?.map(
                            (codeBlock, index) => {
                              const firstWord = firstWords[index];
                              const modifiedCodeBlock = codeBlock.replace(
                                new RegExp(`^${firstWord}\\s*`),
                                ""
                              );
                              return modifiedCodeBlock.trim();
                            }
                          );

                          const formattedCodeBlocks = modifiedCodeBlocks?.map(
                            (codeBlock) => {
                              const lines = codeBlock.split("\n");
                              const formattedLines = lines.map((line) =>
                                line.trim()
                              );
                              return formattedLines.join("\n");
                            }
                          );

                          const finalCodeBlocks =
                            formattedCodeBlocks &&
                            formattedCodeBlocks.join("\n\n");
                          console.log("modifiedCodeBlocksasd", finalCodeBlocks);
                          // const finalCodeBlocks1 = finalCodeBlocks;

                          const regex1 = /([\s\S]*)```/; // `
                          // const regex1 = /([\s\S]*)\n\n```/;

                          const match = val?.answer.match(regex1);
                          const textBeforeCode = match ? `\n\n${match[1]}` : "";
                          console.log("val?.answerval", textBeforeCode);

                          // console.log("val?.answerval", val?.answer);
                          // const textBeforeCode = val?.answer;
                          // -----------------------
                          const regex2 = /```\n\n([\s\S]*)$/;
                          // const regex2 = /```([\s\S]*)\n\n([\s\S]*)```/; // Regular expression to capture text after ``` code block

                          const matcha = val?.answer?.match(regex2);
                          const textAfterCode1 = matcha
                            ? `\n\n${matcha[1]}`
                            : val?.answer;
                          console.log("textAfterCode1a", textAfterCode1);
                          // -----------------------
                          console.log("modifiedCodeBlocks", finalCodeBlocks);

                          console.log("firstWords", firstWords);
                          console.log(
                            "extractedCodeBlocks",
                            extractedCodeBlocks
                          );
                          // -----------------------

                          const handleCopyClick = (index) => {
                            // Create a temporary textarea element to copy the text
                            const tempTextarea = document.createElement(
                              "textarea"
                            );
                            tempTextarea.value = finalCodeBlocks;
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
                              <div
                                // className="r21"
                                className={
                                  isLightTheme ? "r21 light " : "r21 dark  "
                                }
                              >
                                <div
                                  //  className="r22"
                                  className={
                                    isLightTheme ? "r22 light " : "r22 dark  "
                                  }
                                >
                                  {getRoomResponse?.user_data?.map((abc) => {
                                    return (
                                      <>
                                        <img
                                          className="r22ab"
                                          src={abc?.profileImage}
                                          alt=""
                                        />
                                      </>
                                    );
                                  })}
                                </div>
                                {/* <div
                                className={isLightTheme ? "r23 light " : "r23"}>
                                {val?.question}
                              </div> */}
                                {EditActive ? (
                                  <>
                                    {" "}
                                    <div
                                      className={
                                        isLightTheme ? "r23 light " : "r23"
                                      }
                                    >
                                      {val?.question}
                                      {/* <code> */}
                                      {/* <input
                                      placeholder={val?.question}
                                      type="text"
                                      value={QTitle}
                                      onChange={handleOnChangeQuestion}
                                      className="inputUpdate1"
                                    /> */}
                                      {/* <textarea
                                      // rows={6}
                                      placeholder={val?.question}
                                      type="text"
                                      value={QTitle}
                                      onChange={handleOnChangeQuestion}
                                      className="inputUpdate1"></textarea> */}
                                      {/* <textarea
                                      ref={textareaRef}
                                      placeholder={val?.question}
                                      value={QTitle}
                                      onChange={handleOnChangeQuestion}
                                      onInput={(event) =>
                                        adjustHeight(event.target)
                                      }
                                      // className={`custom-input ${
                                      //   containerActive ? "active" : ""
                                      // }`}
                                      className={
                                        isLightTheme
                                          ? `custom-inputa1 ${
                                              containerActive ? "active" : ""
                                            }`
                                          : `custom-input ${
                                              containerActive ? "active" : ""
                                            }`
                                      }
                                    /> */}
                                      {/* </code> */}
                                    </div>
                                    <div
                                      onClick={() => {
                                        setEditActive(true);
                                        // setQTitle(val?.question);
                                        setValue(val?.question);
                                        setUpdateApiId(val?._id);
                                        setisUpdateClicked(true);
                                        handleL2ClickText(val?._id);
                                      }}
                                      className={
                                        isLightTheme ? "r24 light " : "r24"
                                      }
                                    >
                                      <BiMessageSquareEdit />
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    {" "}
                                    <div
                                      className={
                                        isLightTheme ? "r23 light " : "r23"
                                      }
                                    >
                                      {val?.question}
                                    </div>
                                    <div
                                      onClick={() => {
                                        setEditActive(true);
                                        setValue(val?.question);
                                        setUpdateApiId(val?._id);
                                        setisUpdateClicked(true);
                                        handleL2ClickText();
                                      }}
                                      className={
                                        isLightTheme ? "r24 light " : "r24"
                                      }
                                    >
                                      <BiMessageSquareEdit />
                                    </div>
                                  </>
                                )}
                              </div>{" "}
                              {/* ------------------------------- */}
                              <div
                                //  className="r21answer"
                                className={
                                  isLightTheme
                                    ? "r21answer light "
                                    : "r21answer"
                                }
                              >
                                <div
                                  // className="r22"
                                  className={
                                    isLightTheme ? "r22 light " : "r22 dark  "
                                  }
                                >
                                  <img
                                    className="r22a"
                                    src={logomain2}
                                    alt=""
                                  />
                                </div>
                                <div
                                  // className="r23"
                                  className={
                                    isLightTheme ? "r23 light " : "r23 dark"
                                  }
                                >
                                  {/* Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages,and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum. */}
                                  <div className="r34a1">
                                    <code
                                      //  className="cod1"
                                      className={
                                        isLightTheme ? "cod1  " : "cod1 dark "
                                      }
                                    >
                                      {textBeforeCode}
                                    </code>
                                  </div>
                                  {finalCodeBlocks ? null : <></>}
                                  {finalCodeBlocks && (
                                    <div
                                      //  className="r30"
                                      className={
                                        isLightTheme
                                          ? "r30 light "
                                          : "r30 dark  "
                                      }
                                    >
                                      {" "}
                                      <div
                                        //  className="r31"
                                        className={
                                          isLightTheme
                                            ? "r31 light "
                                            : "r31 dark  "
                                        }
                                      >
                                        <div className="r32">
                                          {/* React Js */}
                                          {firstWords}
                                        </div>
                                        {/* <div className="r33"> Copy</div> */}

                                        <div
                                          className="r33"
                                          onClick={() => {
                                            // setTextToCopy(finalCodeBlocks);
                                            handleCopyClick(index);
                                          }}
                                        >
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
                                            language={
                                              firstWords && firstWords[index]
                                            }
                                            // language={React}
                                            // language="react"
                                            style={vs2015}
                                            //   language={firstWords[index]}
                                            // style={vs}
                                          >
                                            {/* <code> */}
                                            {finalCodeBlocks}
                                            {/* </code> */}
                                          </SyntaxHighlighter>
                                          {/* <code>{finalCodeBlocks}</code> */}
                                        </div>
                                      </div>
                                    </div>
                                  )}

                                  {/* Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it
                            over 2000 years old.Richard McClintock, a Latin
                            professor at Hampden-Sydney College in Virginia,
                            looked up one of the more obscure Latin words,
                            consectetur. */}
                                  <div className="r34a1">
                                    <code
                                      //  className="cod1"
                                      className={
                                        isLightTheme ? "cod1  " : "cod1 dark "
                                      }
                                    >
                                      {textAfterCode1}
                                    </code>
                                  </div>
                                </div>
                                <div
                                  //  className="r24answer"
                                  className={
                                    isLightTheme
                                      ? "r24answer light "
                                      : "r24answer "
                                  }
                                >
                                  <div
                                    // className="r24"
                                    className={
                                      isLightTheme ? "r24  light " : "r24  "
                                    }
                                  >
                                    <AiOutlineLike />
                                  </div>{" "}
                                  <div
                                    //  className="r24"
                                    className={
                                      isLightTheme ? "r24  light " : "r24  "
                                    }
                                  >
                                    <AiOutlineDislike />
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })}
                      </>
                    )}
                    {/* ------------------------------- */}{" "}
                    {/* here active that came  */}
                    {activeScreen === "new" && (
                      <>
                        {getRoomResponse?.chat_data?.length > 0 ? (
                          getRoomResponse?.chat_data?.map((val, index) => {
                            // const response ={valquestion}
                            const response = val?.answer;
                            console.log("response123", response);

                            const regex = /```[\s\S]*?```/g;
                            const codeBlocks = response.match(regex);
                            const extractedCodeBlocks = codeBlocks?.map(
                              (codeBlock) => codeBlock.slice(3, -3)
                            );
                            const firstWords = extractedCodeBlocks?.map(
                              (codeBlock) => {
                                const match = codeBlock.match(/^\w+/);
                                return match ? match[0] : null;
                              }
                            );
                            const modifiedCodeBlocks = extractedCodeBlocks?.map(
                              (codeBlock, index) => {
                                const firstWord = firstWords[index];
                                const modifiedCodeBlock = codeBlock.replace(
                                  new RegExp(`^${firstWord}\\s*`),
                                  ""
                                );
                                return modifiedCodeBlock.trim();
                              }
                            );
                            const formattedCodeBlocks = modifiedCodeBlocks?.map(
                              (codeBlock) => {
                                const lines = codeBlock.split("\n");
                                const formattedLines = lines.map((line) =>
                                  line.trim()
                                );
                                return formattedLines.join("\n");
                              }
                            );

                            const finalCodeBlocks =
                              formattedCodeBlocks &&
                              formattedCodeBlocks.join("\n\n");
                            console.log(
                              "modifiedCodeBlocksasd",
                              finalCodeBlocks
                            );
                            // const finalCodeBlocks1 = finalCodeBlocks;
                            // -----------------------

                            const handleCopyClick1 = (index) => {
                              // Create a temporary textarea element to copy the text
                              const tempTextarea = document.createElement(
                                "textarea"
                              );
                              tempTextarea.value = finalCodeBlocks;
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
                            // -----------------------
                            const regex1 = /([\s\S]*)\n\n```/; // `
                            // const regex1 = /([\s\S]*)\n\n```/;

                            const match = val?.answer?.match(regex1);
                            const textBeforeCode = match
                              ? `\n\n${match[1]}`
                              : val?.answer;

                            // -----------------------
                            const regex2 = /```\n\n([\s\S]*)$/;
                            // const regex2 = /```([\s\S]*)\n\n([\s\S]*)```/; // Regular expression to capture text after ``` code block

                            const matcha = val?.answer?.match(regex2);
                            const textAfterCode1 = matcha
                              ? `\n\n${matcha[1]}`
                              : "";
                            // -----------------------
                            console.log(
                              "modifiedCodeBlocks",
                              modifiedCodeBlocks
                            );

                            console.log("firstWords", firstWords);
                            console.log(
                              "extractedCodeBlocks",
                              extractedCodeBlocks
                            );
                            return (
                              <>
                                <div
                                  // className="r21"
                                  className={
                                    isLightTheme ? "r21 light " : "r21 dark  "
                                  }
                                >
                                  <div
                                    //  className="r22"
                                    className={
                                      isLightTheme ? "r22 light " : "r22 dark  "
                                    }
                                  >
                                    <img
                                      className="r22a"
                                      src={logomain2}
                                      alt=""
                                    />
                                  </div>
                                  <div
                                    // className="r23"
                                    className={
                                      isLightTheme ? "r23 light " : "r23"
                                    }
                                  >
                                    {/* Hello , How are you ! */}
                                    {val?.question}
                                  </div>
                                  <div
                                    onClick={() => {
                                      setValue(val?.question);
                                      setisUpdateClicked(true);
                                      setUpdateApiId(val?._id);
                                      handleL2ClickText();
                                    }}
                                    //  className="r24"
                                    className={
                                      isLightTheme ? "r24 light " : "r24"
                                    }
                                  >
                                    <BiMessageSquareEdit />
                                  </div>
                                </div>{" "}
                                {/* ------------------------------- */}
                                <div
                                  //  className="r21answer"
                                  className={
                                    isLightTheme
                                      ? "r21answer light "
                                      : "r21answer"
                                  }
                                >
                                  <div
                                    // className="r22"
                                    className={
                                      isLightTheme ? "r22 light " : "r22 dark  "
                                    }
                                  >
                                    <img
                                      className="r22a"
                                      src={logomain2}
                                      alt=""
                                    />
                                  </div>
                                  <div
                                    // className="r23"
                                    className={
                                      isLightTheme ? "r23 light " : "r23 dark"
                                    }
                                  >
                                    {/* Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages,and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum. */}
                                    <div className="r34a1">
                                      <code
                                        //  className="cod1"
                                        className={
                                          isLightTheme ? "cod1  " : "cod1 dark "
                                        }
                                      >
                                        {textBeforeCode}
                                      </code>
                                    </div>
                                    {finalCodeBlocks ? null : <></>}
                                    {finalCodeBlocks && (
                                      <div
                                        //  className="r30"
                                        className={
                                          isLightTheme
                                            ? "r30 light "
                                            : "r30 dark  "
                                        }
                                      >
                                        {" "}
                                        <div
                                          //  className="r31"
                                          className={
                                            isLightTheme
                                              ? "r31 light "
                                              : "r31 dark  "
                                          }
                                        >
                                          <div className="r32">
                                            {/* React Js */}
                                            {firstWords}
                                          </div>
                                          {/* <div className="r33"> Copy</div> */}
                                          <div
                                            className="r33"
                                            onClick={() => {
                                              // setTextToCopy(finalCodeBlocks);
                                              handleCopyClick1(index);
                                            }}
                                          >
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
                                              language={
                                                firstWords && firstWords[index]
                                              }
                                              // language={React}
                                              // language="react"
                                              style={vs2015}
                                              //   language={firstWords[index]}
                                              // style={vs}
                                            >
                                              {/* <code> */}
                                              {finalCodeBlocks}
                                              {/* </code> */}
                                            </SyntaxHighlighter>
                                            {/* <code>{finalCodeBlocks}</code> */}
                                          </div>
                                        </div>
                                      </div>
                                    )}

                                    {/* Contrary to popular belief, Lorem Ipsum is not
                          simply random text. It has roots in a piece of
                          classical Latin literature from 45 BC, making it
                          over 2000 years old.Richard McClintock, a Latin
                          professor at Hampden-Sydney College in Virginia,
                          looked up one of the more obscure Latin words,
                          consectetur. */}
                                    <div className="r34a1">
                                      <code
                                        //  className="cod1"
                                        className={
                                          isLightTheme ? "cod1  " : "cod1 dark "
                                        }
                                      >
                                        {textAfterCode1}
                                      </code>
                                    </div>
                                  </div>
                                  <div
                                    //  className="r24answer"
                                    className={
                                      isLightTheme
                                        ? "r24answer light "
                                        : "r24answer "
                                    }
                                  >
                                    <div
                                      // className="r24"
                                      className={
                                        isLightTheme ? "r24  light " : "r24  "
                                      }
                                    >
                                      <AiOutlineLike />
                                    </div>{" "}
                                    <div
                                      //  className="r24"
                                      className={
                                        isLightTheme ? "r24  light " : "r24  "
                                      }
                                    >
                                      <AiOutlineDislike />
                                    </div>
                                  </div>
                                </div>
                              </>
                            );
                          })
                        ) : (
                          <div className="a4">
                            <img src={newchat} alt="new chat" />
                          </div>
                        )}
                      </>
                    )}
                    {/* ------------------------------- */}
                    {/* {activeScreen === "new" && <></>} */}
                  </div>
                </div>
              )}
              {activeScreen === "About-Profile" && (
                <>
                  <div className="ap1">
                    {/* <div className="ap1"></div> */}
                    <div className="ap3">
                      <div className="ap4"></div>
                      <center>
                        <div className="ap5">
                          <img
                            className="ap5a"
                            src={UserProfile?.data?.profileImage}
                            alt="profile image"
                          />
                        </div>
                        <div className="ap9">{UserProfile?.data?.userName}</div>
                      </center>
                      <div className="ap6">
                        <div className="ap7">
                          <h4>Account Settings</h4>
                          <p className="ap10">
                            Here you can change user account information
                          </p>
                          <form onSubmit={handleSaveChanges}>
                            <div className="ap11a11">
                              {/* User Name */}
                              <div className="ap11">
                                <div className="ap12">User Name</div>
                                <div className="ap14">
                                  <input
                                    type="text"
                                    className="ap13"
                                    placeholder="@user_name"
                                    value={username}
                                    onChange={(e) =>
                                      setUsername(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                              {/* Name */}
                              <div className="ap11">
                                <div className="ap12">Name</div>
                                <div className="ap14">
                                  <input
                                    type="text"
                                    className="ap13"
                                    placeholder="Full Name"
                                    value={fullName}
                                    onChange={(e) =>
                                      setFullName(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                            {/* Email */}
                            <div className="apa15">
                              <div className="ap12">Email</div>
                              <input
                                type="text"
                                className="ap13a13"
                                placeholder="name@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                            {/* About Me */}
                            <div className="apa15">
                              <div className="ap12">About Me</div>
                              <textarea
                                className="ap16"
                                name=""
                                maxLength={155}
                                value={aboutMe}
                                onChange={(e) => setAboutMe(e.target.value)}
                              ></textarea>
                            </div>
                            {/* Error message */}
                            {errorMessage && (
                              <div className="error-message">
                                {errorMessage}
                              </div>
                            )}
                            {/* Save Changes Button */}
                            <button type="submit" className="ap17">
                              Save Changes
                            </button>
                          </form>
                        </div>
                        <div className="ap7Pass">
                          <h4>Change Password</h4>
                          <form onSubmit={handleSaveChangesPassword}>
                            <div className="apa15">
                              <div className="ap12Pass">
                                Enter your old password
                              </div>
                              <input
                                type="password"
                                className="ap13a13"
                                placeholder="old password"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                              />
                            </div>
                            <div className="apa15">
                              <div className="ap12Pass">
                                Enter your New password
                              </div>
                              <input
                                type="password"
                                className="ap13a13"
                                placeholder="new password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                              />
                            </div>
                            <div className="apa15">
                              <div className="ap12Pass">
                                Re-enter your New password
                              </div>
                              <input
                                type="password"
                                className="ap13a13"
                                placeholder="confirm password"
                                value={confirmPassword}
                                onChange={(e) =>
                                  setConfirmPassword(e.target.value)
                                }
                              />
                            </div>
                            {/* Error message */}
                            {errorMessagePassword && (
                              <div className="error-message">
                                {errorMessagePassword}
                              </div>
                            )}
                            {/* Save Changes Button */}
                            <button type="submit" className="ap17">
                              Save Changes
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {/* -------------------------------------- */}
              {activeScreen === "new" && (
                <div className="r15">
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
                    }
                  >
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
                          ? `custom-inputa ${containerActive ? "active" : ""}`
                          : `custom-input ${containerActive ? "active" : ""}`
                      }
                    />
                    <button
                      onClick={() => {
                        handleNewChatClick();
                        // QuerySend();
                      }}
                      className={
                        isLightTheme
                          ? `custom-buttona ${containerActive ? "active" : ""}`
                          : `custom-button ${containerActive ? "active" : ""}`
                      }
                      // className={`custom-button ${
                      //   containerActive ? "active" : ""
                      // }`}
                    >
                      <AiOutlineSend />
                    </button>
                  </div>
                  <span
                    //  className="r20"
                    className={isLightTheme ? "r20  light " : "r20  "}
                  >
                    Free Research Preview. Instruct.ai may produce inaccurate
                    information about people, places, or facts. Instruct.ai Sep
                    26 Version
                  </span>
                </div>
              )}
              {activeScreen === "history" && (
                <div className="r15">
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
                    }
                  >
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
                          ? `custom-inputa ${containerActive ? "active" : ""}`
                          : `custom-input ${containerActive ? "active" : ""}`
                      }
                    />
                    <button
                      onClick={() => {
                        handleNewChatClick();
                        // QuerySend();
                      }}
                      className={
                        isLightTheme
                          ? `custom-buttona ${containerActive ? "active" : ""}`
                          : `custom-button ${containerActive ? "active" : ""}`
                      }
                      // className={`custom-button ${
                      //   containerActive ? "active" : ""
                      // }`}
                    >
                      <AiOutlineSend />
                    </button>
                  </div>
                  <span
                    //  className="r20"
                    className={isLightTheme ? "r20  light " : "r20  "}
                  >
                    Free Research Preview. Instruct.ai may produce inaccurate
                    information about people, places, or facts. Instruct.ai Sep
                    26 Version
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;

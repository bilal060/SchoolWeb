import axios from "axios";
import React, { useEffect, useState } from "react";
import ShowPassword from "../../Assets/Images/showPassword";

const SettingsPage = () => {
  useEffect(() => {
    const currentUser = localStorage.getItem("userdata");
    setuserData(JSON.parse(currentUser));
  }, []);

  const [file, setFile] = useState(null);
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordCheck, setpasswordCheck] = useState(false);
  const [userData, setuserData] = useState();
  const [newDetail, setnewDetail] = useState({
    name: "",
    password: "",
    image: "",
  });
  const API_URI = `${process.env.REACT_APP_API_URI}//UpdateUserSetting/${userData?._id}`;

  const changeUserData = async () => {
    try {
      const data = new FormData();
      let allowEdit = false;
      if(newDetail.name){
        data.append("email", newDetail.name);
        allowEdit= true
      }
      if(newDetail.password){
        data.append("password", newDetail.password);
        allowEdit= true
      }
      if(newDetail.image){
        data.append("image", newDetail.image);
        allowEdit= true
      }

      if(allowEdit) {
        const fetchData = await axios.patch(API_URI, data);
        console.log(fetchData);
        localStorage.setItem("userdata", JSON.stringify(fetchData?.data.user));
      }


    } catch (error) {
      console.log(error);
      alert("Unable to Sign in. Please try after some time.");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setpasswordCheck(true);
    if (newDetail.password?.length < 16 && newDetail.password?.length >= 8) {
      changeUserData();
    } else return;
  };
  const formHandler = (e) => {
    const { name, value } = e.target;
    setnewDetail((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const attachFile = (e) => {
    if (e.target.files) {
      let imageFile = e.target.files[0];
      setnewDetail({ image: imageFile });

      var reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onloadend = function (e) {
        var myImage = new Image();
        myImage.src = e.target.result;
        setFile(myImage.src);
        // setnewDetail({ image: myImage.src });
        return myImage;
      };
    }
  };

  return (
    <>
      <div className="bg-white rounded-8 p-3 d-flex flex-column justify-content-center align-items-center">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="w-75"
        >
          <div className="d-flex justify-content-between align-items-center mb-5">
            <div className="d-flex justify-content-between align-items-center h-100 gap-16px">
              <div className="setting-user-img">
                <img
                  src={file === null ? userData?.image : file}
                  className="w-100 h-100"
                  alt="current user"
                />
              </div>

              <div className="d-flex flex-column justify-content-between gap-16px h-100">
                <h2 className="text-capitalize font-24-100 font-weight-700">
                  {userData?.name}
                </h2>
                <p className="font-18-100">{userData?.email}</p>
              </div>
            </div>
            <div>
              <label className="uploader cr-p">
                <input
                  type="file"
                  className="d-none"
                  name="image"
                  accept=".jpg, .jpeg, .png"
                  onChange={(e) => attachFile(e)}
                />
                <div className="d-flex justify-content-center align-items-center h-100 w-100">
                  <p className="blue-outline-btn">Change picture</p>
                </div>
              </label>
            </div>
          </div>
          <div className="form-control mb-4">
            <label>Full Name</label>
            <input
              value={newDetail.name}
              type="text"
              name="name"
              required
              placeholder="Enter name"
              className="form-input"
              onChange={(e) => formHandler(e)}
            />
          </div>
          <div className="form-control mb-32px">
            <label>Password</label>
            <div className="form-input pl-0 py-0 d-flex align-items-center justify-content-between">
              <input
                value={newDetail.password}
                name="password"
                required
                type={passwordShown ? "text" : "password"}
                placeholder="Enter password"
                className="form-input w-75 font-weight-800"
                onChange={(e) => formHandler(e)}
              />
              <span
                onClick={() => {
                  setPasswordShown(!passwordShown);
                }}
                className="see-pswd-btn cr-p"
              >
                <ShowPassword />
              </span>
            </div>
            {passwordCheck && (
              <div>
                {newDetail.password?.length > 16 ||
                newDetail.password?.length < 8 ? (
                  <div className="d-flex justify-content-start align-items-center">
                    <p className="text-danger">
                      Password must contain at least 8 to 16 characters.{" "}
                    </p>
                  </div>
                ) : (
                  <div className="d-flex justify-content-end align-items-center">
                    <p className="text-green font-weight-600">Good</p>
                  </div>
                )}
              </div>
            )}
          </div>

          <div>
            <button type="submit" className="register-btn w-100">
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SettingsPage;

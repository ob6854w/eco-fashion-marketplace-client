import "./Dashboard.scss";
import { Link } from "react-router-dom";
import avt from "../../assets/images/founder1.png";
import pic from "../../assets/images/img1.png";
import useCurrentUser from "../../hooks/useCurrentUser";
import { useEffect } from "react";
import { IoIosStar } from "react-icons/io";
import { AiOutlineDashboard,AiOutlineLogout } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineEventNote } from "react-icons/md";
import { LuListChecks } from "react-icons/lu";
import { FaPortrait } from "react-icons/fa";

function Dashboard() {
  const { userData, isLoading, error, handleLogout, isNotLoggedIn } =
    useCurrentUser();

  useEffect(() => {
    if (isNotLoggedIn) {
      window.location.href = "/login";
    }
  }, [isNotLoggedIn]);

  if (isLoading) {
    return (
      <main className="dashboard">
        <h1 className="dashboard__title">Dashboard</h1>
        <p>Loading...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="dashboard">
        <h1 className="dashboard__title">Dashboard</h1>
        <p>{error}</p>
        <button onClick={handleLogout}>Log out</button>
      </main>
    );
  }

  return (
    <main className="dashboard">
      <h1 className="dashboard__title">My Dashboard</h1>
      {userData && (
        <>
          {/* <p>Welcome to your dashboard, {userData.username}</p>

          <h2>My Profile</h2>
          <p>Name:{userData.name}</p>
          <p>Email:{userData.email}</p>

          <button onClick={handleLogout}>Log out</button> */}

          <div className="dashboard__wrapper">
            <div className="dashboard__cont1">
              <div className="dashboard__cont1-wrapper">
                <div className="dashboard__cont1-head">
                  <img src={avt} alt="" />
                  <div className="dashboard__cont1-head-cont">
                    <p>{userData.name}</p>
                    <p>{userData.email}</p>
                  </div>
                </div>
                <div className="dashboard__cont1-overwrapper">
                  <div className="dashboard__cont1-each"><AiOutlineDashboard className="dashboard__icon"/>Dashboard</div>
                  <div className="dashboard__cont1-each"><CiShoppingCart className="dashboard__icon"/>Order History</div>
                  <div className="dashboard__cont1-each"><MdOutlineEventNote className="dashboard__icon"/>All Transactions</div>
                  <div className="dashboard__cont1-each"><LuListChecks className="dashboard__icon"/>Saved Item</div>
                  <div className="dashboard__cont1-each"><FaPortrait className="dashboard__icon"/>Update Profile</div>
                  <div className="dashboard__cont1-each">
                    <button onClick={handleLogout}><AiOutlineLogout className="dashboard__icon"/>Log out</button>
                  </div>
                </div>
              </div>

              <div className="dashboard__cont1-each support">Contact Support</div>
            </div>
            <div className="dashboard__cont2">
              <div className="dashboard__cont2-overall">
                <h2>Popular Products</h2>
                <div className="dashboard__cont2-wrapper">
                  <div className="dashboard__cont2-each">
                    <img
                      src={pic}
                      alt=""
                      className="dashboard__cont2-each-img"
                    />
                    <div className="dashboard__cont2-each-content">
                      <p style={{ fontWeight: "bold" }}>Book Diary</p>
                      <p>Lorem ipsum dolor sit amet</p>
                      <p>
                        <span style={{ fontWeight: "bold" }}>$0.99</span> $1.99
                      </p>
                      <p>You save $1</p>
                      <div className="dashboard__rating">
                        <IoIosStar className="dashboard__rating-each" />
                        <IoIosStar className="dashboard__rating-each" />
                        <IoIosStar className="dashboard__rating-each" />
                        <IoIosStar className="dashboard__rating-each" />
                        <IoIosStar className="dashboard__rating-each" />
                      </div>
                    </div>
                  </div>
                  <div className="dashboard__cont2-each">
                    <img
                      src={pic}
                      alt=""
                      className="dashboard__cont2-each-img"
                    />
                    <div className="dashboard__cont2-each-content">
                      <p style={{ fontWeight: "bold" }}>Book Diary</p>
                      <p>Lorem ipsum dolor sit amet</p>
                      <p>
                        <span style={{ fontWeight: "bold" }}>$0.99</span> $1.99
                      </p>
                      <p>You save $1</p>
                      <div className="dashboard__rating">
                        <IoIosStar className="dashboard__rating-each" />
                        <IoIosStar className="dashboard__rating-each" />
                        <IoIosStar className="dashboard__rating-each" />
                        <IoIosStar className="dashboard__rating-each" />
                        <IoIosStar className="dashboard__rating-each" />
                      </div>
                    </div>
                  </div>
                  <div className="dashboard__cont2-each">
                    <img
                      src={pic}
                      alt=""
                      className="dashboard__cont2-each-img"
                    />
                    <div className="dashboard__cont2-each-content">
                      <p style={{ fontWeight: "bold" }}>Book Diary</p>
                      <p>Lorem ipsum dolor sit amet</p>
                      <p>
                        <span style={{ fontWeight: "bold" }}>$0.99</span> $1.99
                      </p>
                      <p>You save $1</p>
                      <div className="dashboard__rating">
                        <IoIosStar className="dashboard__rating-each" />
                        <IoIosStar className="dashboard__rating-each" />
                        <IoIosStar className="dashboard__rating-each" />
                        <IoIosStar className="dashboard__rating-each" />
                        <IoIosStar className="dashboard__rating-each" />
                      </div>
                    </div>
                  </div>
                  <div className="dashboard__cont2-each">
                    <img
                      src={pic}
                      alt=""
                      className="dashboard__cont2-each-img"
                    />
                    <div className="dashboard__cont2-each-content">
                      <p style={{ fontWeight: "bold" }}>Book Diary</p>
                      <p>Lorem ipsum dolor sit amet</p>
                      <p>
                        <span style={{ fontWeight: "bold" }}>$0.99</span> $1.99
                      </p>
                      <p>You save $1</p>
                      <div className="dashboard__rating">
                        <IoIosStar className="dashboard__rating-each" />
                        <IoIosStar className="dashboard__rating-each" />
                        <IoIosStar className="dashboard__rating-each" />
                        <IoIosStar className="dashboard__rating-each" />
                        <IoIosStar className="dashboard__rating-each" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dashboard__cont2-1">
                <h2>Recommended Products</h2>
                <div className="dashboard__cont2-wrapper">
                  <div className="dashboard__cont2-each">
                    <img
                      src={pic}
                      alt=""
                      className="dashboard__cont2-each-img"
                    />
                    <div className="dashboard__cont2-each-content">
                      <p style={{ fontWeight: "bold" }}>Book Diary</p>
                      <p>Lorem ipsum dolor sit amet</p>
                      <p>
                        <span style={{ fontWeight: "bold" }}>$0.99</span> $1.99
                      </p>
                      <p>You save $1</p>
                      <div className="dashboard__rating">
                        <IoIosStar className="dashboard__rating-each" />
                        <IoIosStar className="dashboard__rating-each" />
                        <IoIosStar className="dashboard__rating-each" />
                        <IoIosStar className="dashboard__rating-each" />
                        <IoIosStar className="dashboard__rating-each" />
                      </div>
                    </div>
                  </div>
                  <div className="dashboard__cont2-each">
                    <img
                      src={pic}
                      alt=""
                      className="dashboard__cont2-each-img"
                    />
                    <div className="dashboard__cont2-each-content">
                      <p style={{ fontWeight: "bold" }}>Book Diary</p>
                      <p>Lorem ipsum dolor sit amet</p>
                      <p>
                        <span style={{ fontWeight: "bold" }}>$0.99</span> $1.99
                      </p>
                      <p>You save $1</p>
                      <div className="dashboard__rating">
                        <IoIosStar className="dashboard__rating-each" />
                        <IoIosStar className="dashboard__rating-each" />
                        <IoIosStar className="dashboard__rating-each" />
                        <IoIosStar className="dashboard__rating-each" />
                        <IoIosStar className="dashboard__rating-each" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default Dashboard;





// import "./Dashboard.scss";
// import { Link } from "react-router-dom";
// import useCurrentUser from "../../hooks/useCurrentUser";
// import { useEffect } from "react";

// function Dashboard() {
//   const { userData, isLoading, error, handleLogout, isNotLoggedIn } =
//     useCurrentUser();

//   useEffect(() => {
//     if (isNotLoggedIn) {
//       window.location.href = "/login";
//     }
//   }, [isNotLoggedIn]);

//   if (isLoading) {
//     return (
//       <main className="dashboard">
//         <h1 className="dashboard__title">Dashboard</h1>
//         <p>Loading...</p>
//       </main>
//     );
//   }

//   if (error) {
//     return (
//       <main className="dashboard">
//         <h1 className="dashboard__title">Dashboard</h1>
//         <p>{error}</p>
//         <button onClick={handleLogout}>Log out</button>
//       </main>
//     );
//   }

//   return (
//     <main className="dashboard">
//       <h1 className="dashboard__title">Dashboard</h1>
//       {userData && (
//         <>
//           <p>Welcome to your dashboard, {userData.username}</p>

//           <h2>My Profile</h2>
//           <p>Name:{userData.name}</p>
//           <p>Email:{userData.email}</p>

//           <button onClick={handleLogout}>Log out</button>
//         </>
//       )}
//     </main>
//   );
// }

// export default Dashboard;

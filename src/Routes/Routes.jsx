import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/HomePage/Home/Home";
import SignInPage from "../Pages/SignInPage/SignInPage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";
import RoomsPage from "../Pages/AllRoomsPage/RoomsPage";
import RoomDetailsPage from "../Pages/RoomDetailsPage/RoomDetailsPage";
import About from "../Pages/AboutPage/About";
import PrivateRoute from "../Private/PrivateRoute";
import ContactUsPage from "../Pages/ContactUsPage/ContactUsPage";
import MyBookingsPage from "../Pages/MyBookingsPage/MyBookingsPage";
import UpdateBookedRoomDate from "../Pages/UpdateBookedRoomDate/UpdateBookedRoomDate";
import AddReviewsPage from "../Pages/AddReviewsPage/AddReviewsPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element:<Home />
        },
        {
          path: '/rooms',
          element:<RoomsPage />
        },
        {
          path: '/roomDetails/:id',
          element:<PrivateRoute>
            <RoomDetailsPage />
          </PrivateRoute>
        },
        {
          path: '/UpdatePage/:id',
          element:<PrivateRoute>
            <UpdateBookedRoomDate />
          </PrivateRoute>
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contactUs',
          element: <ContactUsPage />
        },
        {
          path: '/myBookings',
          element:<PrivateRoute>
            <MyBookingsPage />
          </PrivateRoute>
        },
        {
          path: '/addReviews/:id',
          element: <PrivateRoute>
            <AddReviewsPage />
          </PrivateRoute>
        },
        {
          path: '/signIn',
          element: <SignInPage />
        },
        {
          path: '/signUp',
          element:<SignUpPage />
        }
      ]
    },
]);

export default router;
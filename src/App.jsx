import "./App.css";
import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactPixel from "react-facebook-pixel";
import GlobalBeat from "./globalcomponents/BeatLoader";
import ProtectedRoute from "./globalcomponents/ProtectedRoutes";
import ScheduleThankyou from "./pages/schedule/ScheduleThankyou";
import Error404Page from "./pages/Error404";
import SurveyLandingPage from "./pages/survey/SurveyLandingPage";
import AdvancedHome from "./pages/advanced/AdvancedHome";
import AdvancedThankyou from "./pages/advanced/AdvancedThankyou";
const SurveyThankyou = lazy(() => import("./pages/survey/SurveyThankyou"));
// import VerifyPayment from "./pages/checkout-page/VerifyPayment";
// import ErrorPayment from "./pages/checkout-page/ErrorPayment";
const BookSchedule = lazy(() => import("./pages/schedule/BookSchedule"));
const AdminNav = lazy(() => import("./admin/AdminNav"));
const ViewScheduler = lazy(() => import("./admin/ViewSchedule"));
const CryptoThankyou = lazy(() =>
  import("./pages/crypyo-bootcamp/CyptoThankyou")
);
// import RegistrationPage from "./pages/homepage/new-website/registration-page/RegistrationPage";
const NewLaunchpad = lazy(() =>
  import("./pages/homepage/new-website/new-launchpad/NewLaunchpad")
);
const AllCoursesPage = lazy(() =>
  import("./pages/homepage/new-website/courses-info/CourseInfoPage")
);
const RegistrationPage = lazy(() =>
  import("./pages/homepage/new-website/registration-page/RegistrationPage")
);
const AdminWelcome = lazy(() => import("./admin/AdminWelcome"));
const SecretPage = lazy(() => import("./admin/SecretPage"));
const ClosedRegister = lazy(() => import("./pages/launchpad/ClosedRegister"));
const Community = lazy(() => import("./pages/community/Community"));
const CryptoBootCamp = lazy(() =>
  import("./pages/crypyo-bootcamp/CryptoBootCamp")
);
const CommunityThankYou = lazy(() =>
  import("./pages/community/CommunityThankyou")
);
const EventThankYou = lazy(() => import("./pages/event/EventThankYou"));
const Homepage = lazy(() => import("./pages/homepage/Homepage"));
const LaunchPad = lazy(() => import("./pages/launchpad/Launchpad"));
const Checkout = lazy(() => import("./pages/checkout-page/Checkout"));
const CheckoutThankYou = lazy(() =>
  import("./pages/checkout-page/CheckoutThankYou")
);
const TechyjauntEvent = lazy(() => import("./pages/event/TechyjauntEvent"));
const LaunchPadThankyou = lazy(() =>
  import("./pages/launchpad/LaunchpadThankyou")
);
const Hackathon = lazy(() => import("./pages/hackathon/Hackathon"));
const HackathonThankYou = lazy(() =>
  import("./pages/hackathon/HackathonThankyou")
);
function App() {
  useEffect(() => {
    // Initialize Facebook Pixel with your Pixel ID
    ReactPixel.init("219032204013009");
    // Track a page view (optional)
    ReactPixel.pageView("PageView");
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          {/* homepage */}
          <Route
            index
            element={
              <Suspense fallback={<GlobalBeat />}>
                <Homepage />
              </Suspense>
            }
          />
          {/* launchpad */}
          <Route path="launchpad">
            <Route
              index
              element={
                <Suspense fallback={<GlobalBeat />}>
                  <NewLaunchpad />
                </Suspense>
              }
            />
            <Route
              path="register"
              element={
                <Suspense fallback={<GlobalBeat />}>
                  <RegistrationPage />
                </Suspense>
              }
            />
            <Route
              path="thank-you"
              element={
                <ProtectedRoute route="/launchpad" param="isRegistered">
                  <Suspense fallback={<GlobalBeat />}>
                    <LaunchPadThankyou />
                  </Suspense>
                </ProtectedRoute>
              }
            />
          </Route>
          {/* courses useparam */}
          <Route
            path="/course/:courseName"
            element={
              <Suspense fallback={<GlobalBeat />}>
                <AllCoursesPage />
              </Suspense>
            }
          />
          {/* community route */}
          <Route path="community">
            <Route
              index
              element={
                <Suspense fallback={<GlobalBeat />}>
                  <Community />
                </Suspense>
              }
            />
            <Route
              path="thank-you"
              element={
                <ProtectedRoute
                  route="/community"
                  param="isCommunityRegistered"
                >
                  <Suspense fallback={<GlobalBeat />}>
                    <CommunityThankYou />
                  </Suspense>
                </ProtectedRoute>
              }
            />
          </Route>
          {/* checkout route */}
          <Route path="checkout">
            <Route
              index
              element={
                <Suspense fallback={<GlobalBeat />}>
                  <Checkout />
                </Suspense>
              }
            />
            <Route
              path="thank-you"
              element={
                <Suspense fallback={<GlobalBeat />}>
                  <CheckoutThankYou />
                </Suspense>
              }
            />
          </Route>
          {/* admin route */}
          <Route path="admin">
            <Route
              index
              element={
                <Suspense fallback={<GlobalBeat />}>
                  <AdminWelcome />
                </Suspense>
              }
            />
            <Route
              path="admin-nav"
              element={
                <ProtectedRoute route="/admin" param="isAdmin">
                  <Suspense fallback={<GlobalBeat />}>
                    <AdminNav />
                  </Suspense>
                </ProtectedRoute>
              }
            />
            <Route
              path="change-link"
              element={
                <ProtectedRoute route="/admin" param="isAdmin">
                  <Suspense fallback={<GlobalBeat />}>
                    <SecretPage />
                  </Suspense>
                </ProtectedRoute>
              }
            />
            <Route
              path="view-schedule"
              element={
                <ProtectedRoute route="/admin" param="isAdmin">
                  <Suspense fallback={<GlobalBeat />}>
                    <ViewScheduler />
                  </Suspense>
                </ProtectedRoute>
              }
            />
          </Route>
          {/* schedule */}
          <Route path="schedule">
            <Route
              index
              element={
                <Suspense fallback={<GlobalBeat />}>
                  <BookSchedule />
                </Suspense>
              }
            />
            <Route
              path="thank-you"
              element={
                <ProtectedRoute route="/schedule" param="scheduleRegistered">
                  <Suspense fallback={<GlobalBeat />}>
                    <ScheduleThankyou />
                  </Suspense>
                </ProtectedRoute>
              }
            />
          </Route>
          {/* bootcamp */}
          <Route path="crypto-bootcamp">
            <Route
              index
              element={
                <Suspense fallback={<GlobalBeat />}>
                  <CryptoBootCamp />
                </Suspense>
              }
            />
            <Route
              path="thank-you"
              element={
                <ProtectedRoute
                  route="/crypto-bootcamp"
                  param="cryptoRegistered"
                >
                  <Suspense fallback={<GlobalBeat />}>
                    <CryptoThankyou />
                  </Suspense>
                </ProtectedRoute>
              }
            />
          </Route>
          {/* survey */}
          <Route path="survey">
            <Route
              index
              element={
                <Suspense fallback={<GlobalBeat />}>
                  <SurveyLandingPage />
                </Suspense>
              }
            />
            <Route
              path="thank-you"
              element={
                // <ProtectedRoute route="/survey" param="surveyComplete">
                <Suspense fallback={<GlobalBeat />}>
                  <SurveyThankyou />
                </Suspense>
                // </ProtectedRoute>
              }
            />
          </Route>

          <Route path="advanced-bootcamp">
            <Route
              index
              element={
                <Suspense fallback={<GlobalBeat />}>
                  <AdvancedHome />
                </Suspense>
              }
            />
            <Route
              path="thank-you"
              element={
                <ProtectedRoute
                  route="/advanced-bootcamp"
                  param="advancedRegistered"
                >
                  <Suspense fallback={<GlobalBeat />}>
                    <AdvancedThankyou />
                  </Suspense>
                </ProtectedRoute>
              }
            />
          </Route>
          {/* old routing */}
          {/* CHECKOUT */}
          {/* <Route
          path="/checkout"
          element={
            <Suspense fallback={<GlobalBeat />}>
              <Checkout />
            </Suspense>
          }
        />
        <Route
          path="/checkout/thank-you"
          element={
            <ProtectedRoute route="/checkout" param="isPaid">
              <Suspense fallback={<GlobalBeat />}>
                <CheckoutThankYou />
              </Suspense>
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/verify"
          element={
            <Suspense fallback={<GlobalBeat />}>
              <VerifyPayment />
            </Suspense>
          }
        />
        <Route
          path="/error"
          element={
            <Suspense fallback={<GlobalBeat />}>
              <ErrorPayment />
            </Suspense>
          }
        /> */}
          {/* EVENT */}
          {/* <Route
          path="/event"
          element={
            <Suspense fallback={<GlobalBeat />}>
              <TechyjauntEvent />
            </Suspense>
          }
        />
        <Route
          path="/event/thank-you"
          element={
            <ProtectedRoute route="/event" param="event-registered">
              <Suspense fallback={<GlobalBeat />}>
                <EventThankYou />
              </Suspense>
            </ProtectedRoute>
          }
        /> */}
          {/* HACKATHON */}
          {/* <Route
          path="/hackathon"
          element={
            <Suspense fallback={<GlobalBeat />}>
              <Hackathon />
            </Suspense>
          }
        />
        <Route
          path="/hackathon/thank-you"
          element={
            <ProtectedRoute route="/hackathon" param="hackathon-registered">
              <Suspense fallback={<GlobalBeat />}>
                <HackathonThankYou />
              </Suspense>
            </ProtectedRoute>
          }
        /> */}
        </Route>
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

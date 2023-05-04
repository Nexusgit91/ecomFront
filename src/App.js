import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
} from "react-router-dom";

import {
  Order,
  Dress,
  Books,
  Navibar,
  Login,
  Profile,
  Register,
  ShopOwners,
  ForgotPassword,
  ResetPassword,
  NotFound,
  Home,
  SharedLayout,
  SignUp,
} from "./pages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index path="" element={<Home />} />

            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />

            <Route path="*" element={<NotFound />} />
          </Route>

          {/* <Route exact path="/electronics" component={Electronics} />
          <Route exact path="/producttable" component={ProductTable} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/dressForm" component={DressForm} />
          <Route exact path="/quantitydress" component={QuantityForm} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/ordername" component={Ordername} />
          <Route exact path="/" component={Dress} />
          <Route exact path="/pay" component={PaymentForm} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/shopowner" component={ShopOwners} />
          <Route exact path="/Books" component={Books} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route
            exact
            path="/reset-password/:token"
            component={ResetPassword}
          />
          <Route exact path="/OrderList" component={OrderList} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;

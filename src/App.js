import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import OrderList from "./pages/Order/OrderList";
import Dress from "./pages/DressShop/Dress";
import Books from "./ProductList/BookShop/Books";
import Navibar from "./layouts/Navbar";
import TypingAnimation from "./components/TypingAnimation";

import PaymentForm from "./ProductList/PaymentForm";
import Ordername from "./pages/Order/Ordername";
import SignUp from "./pages/Signup/SignUp";
import Login from "./pages/Login/Login";
import Profile from "./Profile/Profile";
import Register from "./pages/RegisterShops/Register";
import ShopOwners from "./pages/RegisterShops/ShopOwners";
import ProductTable from "./ProductTable/ProductTable";
import Electronics from "./ProductList/ElectronicShop/Electronics";
import NotFound from "./pages/404/NotFound";
import DressForm from "./components/DressForm";
import QuantityForm from "./ProductList/Datajson/QuantityDress";
import ForgotPassword from "./pages/Login/Forgot/ForgotPassword";
import ResetPassword from "./pages/Login/Rest/ResetPassword";

function App() {
  return (
    <>
      <Router>
        <Navibar />
        <Switch>
          <Route exact path="/electronics" component={Electronics} />
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
          <Route exact path="/OrderList" component={OrderList} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

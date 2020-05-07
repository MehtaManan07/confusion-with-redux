// Much of the work done by AppComponent will be done by MainComponent
import React, { Component } from "react";
import Menu from "./MenuComponent";
import Header from "./HeaderComopnent";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import DishDetail from "./DishdetailComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return  {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };
    // When it is invoked, it will get the paramater that is required
    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.props.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.props.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
        />
      );
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.props.dishes} />}
          />
          <Route exact path="/contactus" component={Contact} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route
            exact
            path="/aboutus"
            component={() => <About leaders={this.props.leaders} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));

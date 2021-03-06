import {connect} from "react-redux";
import CounterButton from "./CounterButton";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => {
      dispatch(increaseCounter())
    }
  };
};

const CounterButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps)
  (CounterButton);

export default CounterButtonContainer;

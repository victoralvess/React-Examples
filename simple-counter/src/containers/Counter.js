import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

import CounterCard from '../components/CounterCard';

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch(increment());
    },
    onDecrement: () => {
      dispatch(decrement());
    }
  }
}

const Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterCard);

export default Counter;
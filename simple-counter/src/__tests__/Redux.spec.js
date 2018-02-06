import store from '../store';
import { increment, decrement } from '../actions';

it('testing increment', () => {

  // Freezing the state to verify if the reducer is a pure function
  Object.freeze(store.getState());

  store.dispatch({
    type: 'INCREMENT'
  });

  console.log('1st INCREMENT -- COUNT:', store.getState().count);
  expect(store.getState().count).toEqual(1);

  store.dispatch(increment());

  console.log('2nd INCREMENT -- COUNT:', store.getState().count);
  expect(store.getState().count).toEqual(2);

});

it('testing decrement', () => {

  // Freezing the state to verify if the reducer is a pure function
  Object.freeze(store.getState());

  store.dispatch({
    type: 'DECREMENT'
  });

  console.log('1st DECREMENT -- COUNT:', store.getState().count);
  expect(store.getState().count).toEqual(1);

  store.dispatch(decrement());

  console.log('2nd DECREMENT -- COUNT:', store.getState().count);
  expect(store.getState().count).toEqual(0);
});

it('testing action types', () => {
  const incrementAction = {
    type: 'INCREMENT'
  };

  const decrementAction = {
    type: 'DECREMENT'
  };

  expect(increment()).toEqual(incrementAction);
  expect(decrement()).toEqual(decrementAction);
});

it('testing invalid action type', () => {

  // Freezing the state to verify if the reducer is a pure function
  Object.freeze(store.getState());

  store.dispatch({
    type: 'INVALID'
  });

  console.log('AFTER INVALID ACTION TYPE -- COUNT:', store.getState().count);
  expect(store.getState().count).toEqual(0);
});
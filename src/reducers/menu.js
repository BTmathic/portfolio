const menuReducerDefaultState = true;

export default (state = menuReducerDefaultState, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return !state;
    default:
      return state;
  }
}
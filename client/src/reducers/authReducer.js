//Import actions


const INITIAL_STATE = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null
};

export default function(state = INITIAL_STATE, action) {
    const { type, payload } = action;
  
    switch (type) {
      default:
        return state;
    }
  }
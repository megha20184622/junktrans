const Auth = {
  isAuthenticated: localStorage.getItem("authenticated"),
  authenticate() {
    this.isAuthenticated = true;
  },
  getAuth() {
    return this.isAuthenticated;
  },
};

export default Auth;

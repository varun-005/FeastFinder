import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Guest",
    setUserName: () => {}
});

export default UserContext;
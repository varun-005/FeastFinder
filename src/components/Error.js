import { useRouteError } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Error = () => {
  const error = useRouteError();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const darkModePreference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(darkModePreference);
  }, []);

  console.error(error);

  return (
    <section className={darkMode ? "dark-mode" : "light-mode"}>
      <h1>Oops!!!</h1>
      <h2>Something went wrong</h2>
      <p>Please try refreshing the page or contact support if the issue persists.</p>
      {error && (
        <h3>
          {error.status && `${error.status}: `}
          {error.statusText || error.message || "Unknown error occurred"}
        </h3>
      )}
    </section>
  );
};

export default Error;

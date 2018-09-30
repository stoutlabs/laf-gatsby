import { createContext } from "react";

const { Provider, Consumer } = createContext({
  location: "",
  toggleLocation: () => {}
});

export { Provider, Consumer };

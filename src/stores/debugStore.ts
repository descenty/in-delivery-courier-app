import { createEvent, createStore } from "effector";
import { NavigateFunction } from "react-router-dom";

export const switchLoggedIn = createEvent<NavigateFunction>();

export const $loggedIn = createStore(false).on(switchLoggedIn, (state, navigate) => {
  navigate(state ? "/auth" : "/orders");
  return !state;
});

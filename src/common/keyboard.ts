import { isMac } from "./osx";

export const modKeyPressed = (event: React.KeyboardEvent) =>
  isMac ? event.metaKey : event.ctrlKey;

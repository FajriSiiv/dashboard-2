export const toggleDark = {
  darkModes: false,
};

export const reducerMode = (state, action) => {
  switch (action.type) {
    case "darkmode":
      return { darkModes: true };
    case "lightmode":
      return { darkModes: false };
    default:
      throw new Error();
      break;
  }
};

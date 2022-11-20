const themeMod: string | null = localStorage.getItem("theme");
const initialState = {
  theme: themeMod || "light",
};
const themeSwitch = (state = initialState, action: any) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
};

export default themeSwitch;

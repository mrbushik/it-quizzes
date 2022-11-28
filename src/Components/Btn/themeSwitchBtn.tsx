import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeKeys } from "../Theme/themeKeys";
import { theme } from "../redux/actions/theme";

const ThemeSwitchBtn: React.FC = () => {
  const dispatch = useDispatch();
  const storedThemeValue: string | null = localStorage.getItem("theme");

  const currentTheme: string = useSelector(
    (state: any) => state.themeSwitch.theme
  );

  const [colorMod, setColorMod] = useState(storedThemeValue !== themeKeys.DARK);

  const onToggleTheme = (themeMod: string) => dispatch(theme(themeMod));

  const handleChangeTheme = () => {
    colorMod
      ? handleTheme(false, themeKeys.DARK)
      : handleTheme(true, themeKeys.LIGHT);
  };

  const handleTheme = (mode: boolean, theme: string) => {
    setColorMod(mode);
    onToggleTheme(theme);
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    getDefaultValue();
  }, []);

  useEffect(() => {
    const body: any = document.querySelector("html");
    currentTheme === themeKeys.DARK
      ? body.classList.add("dark-page")
      : body.classList.remove("dark-page");
  }, [colorMod]);

  const getDefaultValue = () => {
    if (storedThemeValue) return;
    localStorage.setItem("theme", themeKeys.LIGHT);
  };

  return (
    <div className="mx-2 switch">
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        checked={!colorMod}
        onChange={handleChangeTheme}
      />
      <label htmlFor="checkbox" className="label">
        <img
          alt="moon"
          className="moon-img"
          src="https://img.icons8.com/external-fauzidea-flat-fauzidea/64/null/external-moon-weather-fauzidea-flat-fauzidea.png"
        />
        <img
          alt="sun"
          className="sun-img"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEqUlEQVRoge2ZTUxcVRTHf2f4KAWaDEM1MERLF7bQOtYa0YaamoKYqFWjC5YmLlqGlFRjF7oxJXGhiaZRY5mhxnSPiWxsTPphk6ZIDA2JgkJr0lIiSNIMRTOUAadzXLzha3iP9y7MLEzmn8zinXvP//zP3PvuPfc+yCOPPPJwgkZ5Xbt4LZcxJFfE2k0pyjBQwAP2ynHiuYjjywUpAEonsBN4lEI+zFWYnIyARngcYRAoSpuSwNMS5pdsx8r6CGgPBUA3y+IBClG6tDP78Qo9C4twEeEW8D0LXJATzNt2jHESoXGNXWikiveAz2z5OymkmgMoR4A9Evb28nueQholAoTTj3HgIsJlhD78DEkrD/QM9RQwCJQ40MwjNEgbQ9pDATOEUA6iNAMtQHm6X1TCtGc3gQhvIHzn0BwHBlB2IwRdqKYQRlAaWBacEYw3pZ1eL7o8TyFKuMI8SQefcuCwx7+jCqVqnfYkPn70KstoFdIIfbbzexE+gWAlBAPgL4fSYst+fwFm4jA5DZMxSOl6YfokzHNeNXkfAQDhEjgkUFMJoVoos5n+27Zav0cegtkEDI3BRMwpymUTSWbLmtC31ibwRC0cqLMXn4myEqtvqNZp/K+ZSDJdl38GUqssoR3wWI0hDbCrBvbWZlpTbGHAhMYoAWnjb2B0yVBTuTHxi9hdY70zSwEYkbeZMaEwSkCj7AEetjzFmgabxb5ai8tCtZ7lSRN3TwmoIhrlHWAQ2A5Y/5yXOe+G0hKoTo+CEiBFv0Z5P12SuMI1Ae0mRJRrwOfAlqWGlUO/WQQDK59KgE+IcVW7Cbm5Oiag3ZRqhE6U67Zrf0XZRqTao8JmQxYaUQY1whf6DducXG0T0CivAr8jnAKKbT1L7M0bwlZHrkKEEywwqlHesutgPwI+5lDmsiTPHetuzICgiL0e2wTkGJcIsA94F5i1JU0smEhcH85cSZQvKaJe2vjWroNrLaRfs5MkZxBeWtXwzC6rNMgGxu/CwM1Max9KWNoZXs/VdRWSo9yWdl5GaAXuLTVMTm9Eqj0mV9VFCeADAjzvJh5Mq9Gv2EERP6EE8Qm0PAXlm9wLZhNwYdCqUIVplCaTs7NZKdHBHTS91acUhscM1drg19vL5XWKKdODv1kpcQ4/ULdkmIjBzQkTitW48efqqSjUaxcVJhRm1WiCZ9f4DI9tLIkbE/DbnUyrUECDCY3peWDtjqxYB5T+UYgn3DniCegfsRK3W/+VgyaSzE5kyguOr/1kDKamrcIsGLDKg8Uddm4B7sWtPn9Nux0pm4FTXiV5v5U4h5957mKatDmSCNvTZw9XeJ9CCQ7jLD6evkm45cqjTCFcAcfL3kJSNHmV5T0B4cUVT3GgF6EDH/sJ4JdjNKcvqP5Zh2UeaJE2mgjgx8d+hA6gl5UJrY7lIssjNMoPwCg+zuPnqrRiW8BohKMIZx1oTkqY07Z+PRQzwyFSvALUSTijdHFA1m+nVRGinF9TO0EfUxySzoxLgU0i67fFIig+wsD9FeYkcDzb4iFHHzikjXGUT5cNnM7FtwHI5Reaf/kY+AMYJ8lHOYuTS2iEI7n+yJdHHnn8z/EfVJZKYqvc8UQAAAAASUVORK5CYII="
        />
        <div className="ball"></div>
      </label>
    </div>
  );
};

export default ThemeSwitchBtn;

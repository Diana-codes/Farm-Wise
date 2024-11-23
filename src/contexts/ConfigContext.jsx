import PropTypes from 'prop-types';
import { createContext } from 'react';

// project-imports
import config from 'config';
import useLocalStorage from 'hooks/useLocalStorage';

// initial state
const initialState = {
  ...config,
  onChangeContainer: () => {},
  onChangeLocalization: () => {},
  onChangeMode: () => {},
  onChangePresetColor: () => {},
  onChangeDirection: () => {},
  onChangeThemeLayout: () => {},
  onChangeMenuOrientation: () => {},
  onChangeMenuCaption: () => {},
  onChangeFontFamily: () => {},
  onChangeContrast: () => {}
};

// ==============================|| CONFIG CONTEXT & PROVIDER ||============================== //

const ConfigContext = createContext(initialState);

function ConfigProvider({ children }) {
  const [config, setConfig] = useLocalStorage('able-pro-material-next-js-config', initialState);

  const onChangeContainer = (container) => {
    let containerValue;

    if (container === 'fluid') {
      containerValue = false;
    } else {
      containerValue = true;
    }
    setConfig({
      ...config,
      container: containerValue
    });
  };

  const onChangeLocalization = (lang) => {
    setConfig({
      ...config,
      i18n: lang
    });
  };

  const onChangeMode = (mode) => {
    setConfig({
      ...config,
      mode
    });
  };

  const onChangePresetColor = (theme) => {
    setConfig({
      ...config,
      presetColor: theme
    });
  };

  const onChangeDirection = (direction) => {
    setConfig({
      ...config,
      themeDirection: direction
    });
  };


  const onChangeThemeLayout = (direction) => {
    setConfig({
      ...config,
      themeDirection: direction
    });
  };

  const onChangeContrast = (themeContrast) => {
    let contrastValue;

    if (themeContrast === 'contrast') {
      contrastValue = true;
    } else {
      contrastValue = false;
    }
    setConfig({
      ...config,
      themeContrast: contrastValue
    });
  };

  const onChangeMenuOrientation = (layout) => {
    setConfig({
      ...config,
      menuOrientation: layout
    });
  };

  const onChangeFontFamily = (fontFamily) => {
    setConfig({
      ...config,
      fontFamily
    });
  };

  return (
    <ConfigContext.Provider
      value={{
        ...config,
        onChangeContainer,
        onChangeLocalization,
        onChangeMode,
        onChangePresetColor,
        onChangeDirection,
        onChangeThemeLayout,
        onChangeMenuOrientation,
        onChangeFontFamily,
        onChangeContrast
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

export { ConfigProvider, ConfigContext };

ConfigProvider.propTypes = { children: PropTypes.node };

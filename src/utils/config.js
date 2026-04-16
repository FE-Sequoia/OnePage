import fs from "node:fs";
import yaml from "js-yaml";
import { themes, defaultTheme } from "./themes.js";

export function loadConfig() {
  const configPath = "./config.yaml";
  const fileContents = fs.readFileSync(configPath, "utf8");
  const config = yaml.load(fileContents);

  const themeName = config.theme?.theme || defaultTheme;
  const themeConfig = themes[themeName] || themes[defaultTheme];

  return {
    ...config,
    theme: {
      ...config.theme,
      name: themeName,
      colors: themeConfig,
    },
  };
}

export { themes, defaultTheme };

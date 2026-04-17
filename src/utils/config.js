import fs from "node:fs";
import yaml from "js-yaml";
import { themes, defaultTheme } from "./themes.js";

function loadYamlFile(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      const contents = fs.readFileSync(filePath, "utf8");
      return yaml.load(contents);
    }
  } catch (e) {
    console.warn(`Warning: Could not load ${filePath}`, e.message);
  }
  return null;
}

export function loadConfig() {
  const configPath = "./config.yaml";
  
  // Check if config.yaml exists, if not check for personal.yaml or team.yaml
  let mainConfig;
  if (fs.existsSync(configPath)) {
    const contents = fs.readFileSync(configPath, "utf8");
    mainConfig = yaml.load(contents);
  } else {
    // Fallback: check for personal.yaml or team.yaml
    if (fs.existsSync("./config/team.yaml")) {
      mainConfig = loadYamlFile("./config/team.yaml");
      mainConfig.mode = "team";
    } else {
      mainConfig = loadYamlFile("./config/personal.yaml");
      mainConfig.mode = "personal";
    }
  }
  
  // Ensure mainConfig has required fields
  if (!mainConfig) {
    mainConfig = {};
  }
  
  const mode = mainConfig.mode || "personal";
  
  // Auto-load config files for personal mode if only mode is set in config.yaml
  if (mode === 'personal' && !mainConfig.profile) {
    const personalConfig = loadYamlFile('./config/personal.yaml');
    if (personalConfig) {
      mainConfig = { ...personalConfig, ...mainConfig, mode: 'personal' };
    }
  }
  
  // Load additional config files based on mode
  if (mode === "team") {
    const basePath = "./config";
    
    const members = loadYamlFile(`${basePath}/members.yaml`);
    const portfolio = loadYamlFile(`${basePath}/portfolio.yaml`);
    const services = loadYamlFile(`${basePath}/services.yaml`);
    const news = loadYamlFile(`${basePath}/news.yaml`);
    
    mainConfig.members = members?.members || [];
    mainConfig.portfolio = portfolio?.projects || [];
    mainConfig.services = services?.services || [];
    mainConfig.news = news?.news || [];
  }
  
  // Ensure site object exists
  if (!mainConfig.site) {
    mainConfig.site = { title: "OnePage" };
  }
  
  // Get theme
  const themeName = mainConfig.theme?.theme || defaultTheme;
  const themeConfig = themes[themeName] || themes[defaultTheme];
  
  return {
    ...mainConfig,
    theme: {
      ...mainConfig.theme,
      name: themeName,
      colors: themeConfig,
    },
  };
}

export function getMode() {
  const config = loadConfig();
  return config.mode || "personal";
}

export { themes, defaultTheme };
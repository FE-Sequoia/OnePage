import fs from "node:fs";
import yaml from "js-yaml";

export function loadConfig() {
  const configPath = "./config.yaml";
  const fileContents = fs.readFileSync(configPath, "utf8");
  const config = yaml.load(fileContents);
  return config;
}

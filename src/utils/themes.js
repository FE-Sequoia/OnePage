export const themes = {
  // 个人模式默认主题 - 科技蓝配色
  blue: {
    // 主色调 - 科技蓝
    primary: "#0066FF",
    primaryLight: "#3385FF",
    primaryDark: "#0052CC",
    // 强调色 - 电光蓝
    accent: "#00D4FF",
    accentLight: "#33DDFF",
    // 渐变效果
    gradient: "linear-gradient(135deg, #0066FF 0%, #00D4FF 100%)",
    heroGradient: "linear-gradient(135deg, #001a4d 0%, #003d99 50%, #0066FF 100%)",
    heroGradientDark: "linear-gradient(135deg, #000d26 0%, #001a4d 50%, #003d99 100%)",
    // 辅助色
    secondary: "#1a1a2e",
    surface: "rgba(26, 26, 46, 0.8)",
    // 文字颜色
    textPrimary: "#ffffff",
    textSecondary: "rgba(255, 255, 255, 0.7)",
    textMuted: "rgba(255, 255, 255, 0.5)",
    // 边框颜色
    border: "rgba(0, 212, 255, 0.2)",
    borderHover: "rgba(0, 212, 255, 0.4)",
    // 发光效果
    glow: "rgba(0, 212, 255, 0.3)",
    glowStrong: "rgba(0, 212, 255, 0.5)",
  },

  // 团队模式默认主题 - 企业科技蓝
  team_corporate: {
    primary: "#0052CC",
    primaryLight: "#0066FF",
    primaryDark: "#0047A3",
    accent: "#00B8D4",
    accentLight: "#00D4FF",
    gradient: "linear-gradient(135deg, #0052CC 0%, #00B8D4 100%)",
    heroGradient: "linear-gradient(135deg, #001a4d 0%, #003d99 50%, #0052CC 100%)",
    heroGradientDark: "linear-gradient(135deg, #000d26 0%, #001a4d 50%, #003d99 100%)",
    secondary: "#1a1a2e",
    surface: "rgba(26, 26, 46, 0.8)",
    textPrimary: "#ffffff",
    textSecondary: "rgba(255, 255, 255, 0.7)",
    textMuted: "rgba(255, 255, 255, 0.5)",
    border: "rgba(0, 184, 212, 0.2)",
    borderHover: "rgba(0, 184, 212, 0.4)",
    glow: "rgba(0, 184, 212, 0.3)",
    glowStrong: "rgba(0, 184, 212, 0.5)",
  },
};

export const defaultTheme = "blue";

/**
 * @typedef {Object} SiteConfig
 * @property {string} title
 * @property {string} [description]
 * @property {string} [favicon]
 */

/**
 * @typedef {Object} Social
 * @property {string} platform
 * @property {string} url
 * @property {string} icon
 */

/**
 * @typedef {Object} Profile
 * @property {string} name
 * @property {string} [avatar]
 * @property {string} title
 * @property {string} [location]
 * @property {string} [bio]
 * @property {string} [email]
 * @property {Social[]} [socials]
 */

/**
 * @typedef {Object} SkillCategory
 * @property {string} name
 * @property {string[]} items
 */

/**
 * @typedef {Object} Education
 * @property {string} school
 * @property {string} degree
 * @property {string} period
 * @property {string} [description]
 */

/**
 * @typedef {Object} Experience
 * @property {string} company
 * @property {string} position
 * @property {string} period
 * @property {string} [description]
 */

/**
 * @typedef {Object} Project
 * @property {string} name
 * @property {string} description
 * @property {string[]} tech
 * @property {string} [image]
 * @property {string} [link]
 * @property {string} [demo]
 * @property {string} [qrcode]
 * @property {string[]} [screenshots]
 */

/**
 * @typedef {Object} ThemeConfig
 * @property {'light'|'dark'|'auto'} [mode]
 * @property {string} [primaryColor]
 */

/**
 * @typedef {Object} Config
 * @property {SiteConfig} site
 * @property {Profile} profile
 * @property {SkillCategory[]} [skills]
 * @property {Education[]} [education]
 * @property {Experience[]} [experience]
 * @property {Project[]} [projects]
 * @property {ThemeConfig} [theme]
 */

export {};

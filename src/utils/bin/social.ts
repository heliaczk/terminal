import config from "../../../config.json";

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const discord = async (args: string[]): Promise<string> => {

  return 'Discord ID: `heliac#0001`';
};

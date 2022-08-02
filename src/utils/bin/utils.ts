import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};

export const license = async (args?: string[]): Promise<string> => {
  return 
}

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const gui = async (args: string[]): Promise<string> => {
  return `
  Opening GUI version...
  ...nothing happens...
  ...still nothing...  
  ...this is awkward.
  `;
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:git@heliac.xyz');

  return 'Opening mailto:git@heliac.xyz...';
};

export const vi = async (args: string[]): Promise<string> => {
  return `why use vi? try 'emacs'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `why use vim? try 'emacs'.`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `really? emacs? you should be using 'vim'`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  return `Permission denied: unable to run the command '${args[0]}' as root.`;
};

export const repo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://github.com/heliacfs/terminal', '_blank');
  }, 1000);

  return 'Opening repository...';
};

export const donate = async (args?: string[]): Promise<string> => {
  window.open(packageJson.funding.url, '_blank');

  return 'Opening donation url...';
};

export const banner = (args?: string[]): string => {
  return `


██╗  ██╗███████╗██╗     ██╗ █████╗  █████╗    ██╗  ██╗██╗   ██╗███████╗
██║  ██║██╔════╝██║     ██║██╔══██╗██╔══██╗   ╚██╗██╔╝╚██╗ ██╔╝╚════██║
███████║█████╗  ██║     ██║███████║██║  ╚═╝    ╚███╔╝  ╚████╔╝   ███╔═╝
██╔══██║██╔══╝  ██║     ██║██╔══██║██║  ██╗    ██╔██╗   ╚██╔╝  ██╔══╝  
██║  ██║███████╗███████╗██║██║  ██║╚█████╔╝██╗██╔╝╚██╗   ██║   ███████╗
╚═╝  ╚═╝╚══════╝╚══════╝╚═╝╚═╝  ╚═╝ ╚════╝ ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝  v${packageJson.version}
║         Created by M4TT72
║      Modified by me
║
╚════|Announcements|══════════════════════╗
INFO |-- The project is open-source 🎉 type 'repo' to check out the repository    
  Type 'help' to see list of available commands.
-------------------------------------------
`;
};
function https(https: any): string | PromiseLike<string> {
  throw new Error('Function not implemented.');
}


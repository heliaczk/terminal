import packageJson from '../../../package.json';
import * as bin from './index';
import test from '../../../public/android-icon-144x144.png'
import Image from "next/image";

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'visitor';
};

export const vm = async (args: string[]): Promise<string> => {
  return `
  VELOVM v0.0.1-SNAPSHOT: Initializing...
  ERROR: VELOVM is not ready anon.`;
};
export const lol = async (args: string[]): Promise<Image> => {
  return Image(test);
};

export const license = async (args?: string[]): Promise<string> => {
  return `
  MIT License

  Copyright (c) 2022 Yassine Fathi, heliaczk

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
  `;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:git@heliac.xyz');

  return 'Opening mailto:git@heliac.xyz...';
};
/*
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
*/
/*
  export const repo = async (args?: string[]): Promise<string> => {
    setTimeout(function () {
      window.open('https://github.com/heliaczk/terminal', '_blank');
    }, 1000);

    return 'Opening repository...';
  };
*/

/*
  export const donate = async (args?: string[]): Promise<string> => {
    window.open(packageJson.funding.url, '_blank');

    return 'Opening donation url...';
  };
*/

export const banner = (args?: string[]): string => {
  return `


██╗  ██╗███████╗██╗     ██╗ █████╗  █████╗    
██║  ██║██╔════╝██║     ██║██╔══██╗██╔══██╗
███████║█████╗  ██║     ██║███████║██║  ╚═╝
██╔══██║██╔══╝  ██║     ██║██╔══██║██║  ██╗    
██║  ██║███████╗███████╗██║██║  ██║╚█████╔╝
╚═╝  ╚═╝╚══════╝╚══════╝╚═╝╚═╝  ╚═╝ ╚════╝ 
   ██╗  ██╗██╗   ██╗███████╗ 𝗱𝗶𝘀𝗰𝗼𝗿𝗱 heliac#0001 
   ╚██╗██╔╝╚██╗ ██╔╝╚════██║ 𝘁𝘄𝗶𝘁𝘁𝗲𝗿 0xheliac
    ╚███╔╝  ╚████╔╝   ███╔═╝
    ██╔██╗   ╚██╔╝  ██╔══╝  
██╗██╔╝╚██╗   ██║   ███████╗
╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝  v${packageJson.version}

𝗧𝘆𝗽𝗲 '𝗵𝗲𝗹𝗽' 𝘁𝗼 𝘀𝗲𝗲 𝗹𝗶𝘀𝘁 
𝗼𝗳 𝗮𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀.
`;
};


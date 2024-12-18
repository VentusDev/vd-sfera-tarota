const replacePolishLetters = (str:string) => {
    const polishLetters:any = {
      'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z',
      'Ą': 'A', 'Ć': 'C', 'Ę': 'E', 'Ł': 'L', 'Ń': 'N', 'Ó': 'O', 'Ś': 'S', 'Ź': 'Z', 'Ż': 'Z'
    };
  
    return str.replace(' ','-').replace(/[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/g, match => polishLetters[match]);
  };
  

const convertSlug = (str:string) => {
    return replacePolishLetters(str.replace(/\s+/g, "-").toLowerCase())
}

const CoppyToClipboard = (hash: string) => {
  navigator.clipboard
    .writeText(`${window.location.origin}${window.location.pathname}#${hash}`)
    .then(() => {
      alert(
        `Link: ${window.location.origin}${window.location.pathname}#${hash}`
      );
    });
};

const getRandomItems = (arr:object[], num:number) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

export { convertSlug, getRandomItems, CoppyToClipboard }
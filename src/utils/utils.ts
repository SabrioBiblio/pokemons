export const firstLetterUpp = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const convertMoveName = (move: string) => {
  const moveUppercase = firstLetterUpp(move);
  const newMove = moveUppercase.replace('-', ' ')
    
  return newMove
}

export const getMoveIdFromUrl = (url: string) => {
  const splitUrl = url.split('/')
    
  return splitUrl[6]
}
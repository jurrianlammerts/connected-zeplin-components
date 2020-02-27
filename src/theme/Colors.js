const colors = {
  white: '#f7f7f2',
  goldenYellow: '#efc81c',
  pissYellow: '#e1bc19',
  lightGrey: '#d8d8d8',
  pale: '#e9e9e4',
  charcoal: '#333633',
  black: '#202023',
  coral: '#fd5750',
  green: '#399933',
  transparent: '#00000000',
};

const buttonColors = {
  primary: {
    background: colors.goldenYellow,
    color: colors.black,
  },
  secondary: {
    background: colors.black,
    color: colors.goldenYellow,
  },
  outline: {
    background: colors.transparent,
    color: colors.goldenYellow,
    border: `2px solid ${colors.black}`,
  },
  succes: {
    background: colors.green,
    color: colors.white,
  },
  disabled: {
    background: colors.pale,
    color: colors.white,
  },
};

export { colors, buttonColors };

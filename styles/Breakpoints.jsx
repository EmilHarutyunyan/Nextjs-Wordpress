const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileLs: "428px",
  mobileL: "480px",
  tablet: "768px",
  tabletL: "900px",
  laptop: "1024px",
  laptopS: "1280px",
  laptopM: "1366px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  mobileLs: `(max-width: ${size.mobileLs})`,
  tablet: `(max-width: ${size.tablet})`,
  tabletL: `(max-width: ${size.tabletL})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopS: `(max-width: ${size.laptopS})`,
  laptopM: `(max-width: ${size.laptopM})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
};
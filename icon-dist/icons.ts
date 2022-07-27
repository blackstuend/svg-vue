export type IconsId =
  | "user";

export type IconsKey =
  | "User";

export enum Icons {
  User = "user",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.User]: "61697",
};

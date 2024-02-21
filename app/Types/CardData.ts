export type CardData = {
  imageUrl?: string;
  title: string;
  description?: string;
  redirectUrl?: string;
  primaryText?: string;
  secondaryText?: string;
  detailed: boolean;
};

export const defaultCardData: CardData = {
  title: "",
  detailed: false,
};

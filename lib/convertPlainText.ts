export const convertToPlainText = (html: string) => {
  return html.replace(/<[^>]*>/g, "");
};

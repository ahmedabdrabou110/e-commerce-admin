const truncateText = (text: string) => {
  if (text.length < 25) return text;
  else return text.substring(0, 25) + "...";
};

export default truncateText;

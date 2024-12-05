export const contactLoader = async () => {
  const data = await fetch("https://std.bit-camp.ru/contacts");
  return await data.json().data;
};

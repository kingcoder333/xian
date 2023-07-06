const getEmailDomain = (email) => {
  const match = email.match(/(?<=@).+(?=\.)/);
  return (match && match[0]) || null;
};

export { getEmailDomain };

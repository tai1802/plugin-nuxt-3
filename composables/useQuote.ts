export default async (quoteId: number) => {
  const { data, error } = useFetch(`https://636322ac66f75177ea3e0792.mockapi.io/quote/${quoteId}`);

  if (error.value) {
    throw createError({ ...error.value, statusMessage: `Can't find quoteId ${quoteId}` });
  }
  return data;
};

import { useSessionStorage, StorageSerializers } from "@vueuse/core";
import { IQuote } from "~/types/quote";

export default async (quoteId: number) => {
  const url = `https://636322ac66f75177ea3e0792.mockapi.io/quote/${quoteId}`;
  const task = useSessionStorage<IQuote>(`quote-${quoteId}`, null, {
    serializer: {
      read: (v: any) => (v ? JSON.parse(v) : null),
      write: (v: any) => JSON.stringify(v),
    },
  });

  if (!task.value || task.value.id !== `${quoteId}`) {
    const { data, error } = await useFetch<IQuote>(url);
    if (error.value) {
      throw createError({ ...error.value, statusMessage: `Can't find quoteId ${quoteId}` });
    }
    task.value = data.value;
  }
  return task;
};

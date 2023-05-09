export default defineEventHandler(async (event: any) => {
  return {
    createdAt: 1683534541,
    dueDate: 1683534541,
    id: `${event.context.params.id}`,
    taskName: "taskName 1",
    data: {
      subdata: new Date().toLocaleTimeString(),
    },
  };
});

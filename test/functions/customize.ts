export const customizeJs = `
kintone.events.on(['app.record.create.show'], (event) => {
  console.log(event);
});
`;

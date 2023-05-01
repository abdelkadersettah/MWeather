export const getTimeFromTimestamp = (timeStamp: number) => {
  return new Date(timeStamp * 1000).toLocaleTimeString();
};

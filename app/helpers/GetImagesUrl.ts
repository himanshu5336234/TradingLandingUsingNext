export const getImageUrl = (payload: string) => {
  return (
    "https://density-uploads-dev.s3.ap-south-1.amazonaws.com/market-assets/Images/" +
    `${payload}`
  );
};

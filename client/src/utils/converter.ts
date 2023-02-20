export const convertBlobToBytes = async (url: string) => {
  const blob = await fetch(url).then((e) => e.blob());

  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result;
      resolve(base64data);
    };
  });
};

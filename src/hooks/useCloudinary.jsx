import shortid from "shortid";

const url = "https://api.cloudinary.com/v1_1/harshcloud/image/upload";

export default function useCloudinary() {
  async function upload(file) {
    const publicId = shortid.generate();
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append(
        "upload_preset",
        process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
      );
      formData.append("api_key", process.env.REACT_APP_CLOUDINARY_API_KEY);
      formData.append("public_id", publicId);

      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  return {
    upload,
  };
}

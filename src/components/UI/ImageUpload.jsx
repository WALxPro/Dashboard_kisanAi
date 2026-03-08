import { useRef, useState } from "react";
import { Camera } from "lucide-react";

const ImageUpload = ({ label = "Upload Image", image, setImage, placeholderText = "Upload photo", changeText = "Change photo" }) => {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(file); // ✅ File object
    setPreview(URL.createObjectURL(file)); // ✅ Preview
  };

  return (
    <div className="space-y-2">
      <label className="text-sm  text-input/80">{label}</label>
      <div
        className="w-full h-12 flex items-center gap-3 cursor-pointer rounded-lg px-4 border-input/20  text-input  bg-input/10"
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
          {preview ? <img src={preview} className="w-full h-full object-cover" /> : <Camera size={16} />}
        </div>
        <span>{preview ? changeText : placeholderText}</span>
      </div>
      <input type="file" accept="image/*" hidden ref={fileInputRef} onChange={handleFileChange} className="border-input/20  text-input  bg-input/10"/>
    </div>
  );
};

export default ImageUpload;

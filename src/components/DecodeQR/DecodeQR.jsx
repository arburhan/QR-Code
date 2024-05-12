import { useState } from "react";

const DecodeQR = () => {
    const [preview, setPreviewImage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const file = e.target.image.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            setPreviewImage(null);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <h3 className="text-xl pb-2">Scan QR</h3>
                <input className="m-4 p-2 rounded-xl" type="file" name="image" />
                <input className="px-3 py-2 bg-cyan-500 font-semibold rounded-xl cursor-pointer" type="submit" value={'Generate QR'} />
            </form>
            <div>
                <p className="text-xl pb-2">QR Code Image</p>
                <div className=" border-4 border-cyan-400 border-spacing-2 rounded-xl w-64 h-64">
                    {preview ? <img src={preview} alt="QR Code" /> : <p>Add image</p>}
                </div>
            </div>

        </div>
    );
};

export default DecodeQR;
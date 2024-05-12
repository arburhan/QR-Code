import { useState } from "react";

const Addqr = () => {
    const [url, setUrl] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setUrl(e.target.url.value);
    }
    console.log(url);
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <h3 className="text-xl pb-2">Text Below</h3>
                <input className="m-4 p-2 rounded-xl" type="url" name="url" />
                <input className="px-3 py-2 bg-cyan-500 font-semibold rounded-xl" type="submit" value={'Generate QR'} />
            </form>
            <div>
                <p className="text-xl pb-2">QR Code Image</p>
                <div className=" border-4 border-cyan-400 border-spacing-2 rounded-xl w-64 h-64">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" alt="QR Code" />
                </div>

            </div>
        </div>
    );
};

export default Addqr;
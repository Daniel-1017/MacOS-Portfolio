import React from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {WindowControls} from "#components";
import useWindowStore from "#store/window.js";

const Image = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;

    if (!data) return null;

    const { name, imageUrl } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile" />
                <h2>{name}</h2>
            </div>

            <div className="p-5 bg-white">
                {imageUrl ? (
                    <div className="w-full">
                        <img src={imageUrl} className="w-full h-auto max-h-[70vh] object-contain rounded" alt={name}/>
                    </div>
                ) : null}
            </div>
        </>
    );
}

const ImageWindow = WindowWrapper(Image, 'imgfile');

export default ImageWindow;

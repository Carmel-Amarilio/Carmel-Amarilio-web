import { useEffect, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";


export function AllImgs({ imgsUrl }) {
    const [imgsHeight, setImgsHeight] = useState(500);

    useEffect(() => {
        const handleResize = () => {
            setImgsHeight(window.innerWidth > 650 ? 380 : 200);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <SimpleImageSlider
            width={'52%'}
            height={imgsHeight}
            images={imgsUrl}
            showBullets={true}
            showNavs={true}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
    )
}
import "./style.css";

const Gallery = () => {
    const photoIds = [];
    for (let i = 1; i <= 26 ; i++) {
        photoIds.push(i);
    }
//<img className='Photocka' src={`${process.env.PUBLIC_URL}/img/${photoId}.jpg`} alt='Фото штучки'/>
    return (
        <div className="page">
            <div className="gallery">
                {photoIds.map(photoId => (
                <div className="Photocard" key={photoId}>
                    <img className='Photocka' src={`${process.env.PUBLIC_URL}/img/${photoId}.jpg`} alt='Фото штучки'/>
                </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;
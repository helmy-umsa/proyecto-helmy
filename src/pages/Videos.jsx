export default function Videos() {
    return (
        <div className="container my-5">
            <h1 className="text-center">Videos</h1>
            <hr />
            <div className="videos-container row g-4">

                <iframe
                className="col-12 col-lg-6"
                    width="640"
                    height="360"
                    src="https://www.youtube.com/embed/ZhIsAZO5gl0"
                    title="Video de YouTube"
                    style={{ border: 'none' }} // Sin borde
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <iframe
                className="col-12 col-lg-6"
                    width="640"
                    height="360"
                    src="https://www.youtube.com/embed/HshQidqYxjg"
                    title="Video de YouTube"
                    style={{ border: 'none' }} // Sin borde
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <iframe
                className="col-12 col-lg-6"
                    width="640"
                    height="360"
                    src="https://www.youtube.com/embed/d_RKO5ozLVo"
                    title="Video de YouTube"
                    style={{ border: 'none' }} // Sin borde
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <iframe
                className="col-12 col-lg-6"
                    width="640"
                    height="360"
                    src="https://www.youtube.com/embed/qrn6GcDMHBY"
                    title="Video de YouTube"
                    style={{ border: 'none' }} // Sin borde
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <iframe
                className="col-12 col-lg-6"
                    width="640"
                    height="360"
                    src="https://www.youtube.com/embed/BWIW6Ti0PbE"
                    title="Video de YouTube"
                    style={{ border: 'none' }} // Sin borde
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <iframe
                className="col-12 col-lg-6"
                    width="640"
                    height="360"
                    src="https://www.youtube.com/embed/LMcDg2HwOnM"
                    title="Video de YouTube"
                    style={{ border: 'none' }} // Sin borde
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <hr />
        </div>
    )
}
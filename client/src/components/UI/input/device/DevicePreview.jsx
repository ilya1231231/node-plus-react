import {Card} from "react-bootstrap";


const DevicePreview = ({file, fileDataURL, removeImage}) => {
    return(
        <div>
            <img className='img-thumbnail img-fluid preview_image' src={fileDataURL}/>
            <small>{file.name}</small>
            <div
                onClick={removeImage}
                className='fa fa-trash text-danger'>
            </div>
        </div>

    )
}

export default DevicePreview
import {Card} from "react-bootstrap";


const DevicePreview = ({file, fileDataURL, removeImage}) => {
    return(
        <Card className="mt-3 preview_image">
            <Card.Img variant="top" src={fileDataURL}/>
            <small>{file.name}</small>
            <div
                onClick={removeImage}
                className='fa fa-trash text-danger'>
            </div>
        </Card>
    )
}

export default DevicePreview
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useDispatch, useSelector} from 'react-redux';
import {Col, Form, Row} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import {createDevice, fetchTypes} from "../../../http/deviceApi";
import SelectType from "../input/type/SelectType";
import SelectBrand from "../input/brand/SelectBrand";
import DevicePreview from "../input/device/DevicePreview";
import InfoInput from "../input/device/InfoInput";
import actions from "../../../store/actions/actions";

function DeviceModal({show, onHide}) {
    const types = useSelector(state => state.typeReducer.types)
    const brands = useSelector(state => state.brandReducer.brands)
    const selectedType = useSelector(state => state.typeReducer.selectedType)
    const selectedBrand = useSelector(state => state.brandReducer.selectedBrand)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])
    const [fileDataURL, setFileDataURL] = useState(null);
    const [imageName, setImageName] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        let fileReader, isCancel = false;
        if (file) {
            fileReader = new FileReader();
            fileReader.onload = (e) => {
                const {result} = e.target;
                if (result && !isCancel) {
                    setFileDataURL(result)
                }
            }
            fileReader.readAsDataURL(file);
        }
        return () => {
            isCancel = true;
            if (fileReader && fileReader.readyState === 1) {
                fileReader.abort();
            }
        }

    }, [file]);
    //Добавляем название характеристики и ее описание
    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const selectFile = (e) => {
        //файл сохраняется в виде массива
        setFile(e.target.files[0])
    }
    const removeImage = () => {
        setFileDataURL(null)
        setFile(null)
        setImageName('')
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', selectedBrand.id)
        formData.append('typeId', selectedType.id)
        //массив передать невозможно, передаем JSON строку, которая парсится на бэке
        formData.append('info', JSON.stringify(info))
        dispatch(actions.deviceActions.create(formData))
        // createDevice(formData).then(() => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
        >
            <Modal.Header
                closeButton>
                <Modal.Title className="ms-auto">Добавить девайс</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col md={6}>
                        <SelectType types={types}/>
                    </Col>
                    <Col md={6}>
                        <SelectBrand brands={brands}/>
                    </Col>
                </Row>
                <Form.Control
                    value={name}
                    onChange={e => {
                        setName(e.target.value)
                    }}
                    className='mt-3'
                    placeholder='Введите название устройства'
                />
                <Form.Control
                    value={price}
                    onChange={e => {
                        setPrice(Number(e.target.value))
                    }}
                    className='mt-3'
                    type="number"
                    placeholder='Введите стоимость устройства'
                />
                {fileDataURL && file ?
                    <DevicePreview file={file} fileDataURL={fileDataURL} removeImage={removeImage}/>
                    : null}
                <Form.Control
                    className='mt-3'
                    type='file'
                    value={imageName}
                    onChange={e => {
                        selectFile(e)
                        setImageName(e.target.value)
                    }}
                    placeholder='Добавьте фото'
                />
                <Button
                    className='mt-3'
                    onClick={addInfo}
                >
                    Добавить новое свойство
                </Button>
                <InfoInput info={info} setInfo={setInfo}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={addDevice}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeviceModal
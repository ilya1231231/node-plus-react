import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useDispatch, useSelector} from 'react-redux';
import {Col, Form, Row} from 'react-bootstrap';
import {useState, useEffect, useRef} from 'react';
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
    const filePicker = useRef(null)
    const dispatch = useDispatch();
    const [drag, setDrag] = useState(false);

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
    }

    const handleFilePick = () => {
        filePicker.current.click()
    }

    const dragStartHandler = (e) => {
        e.preventDefault()
        setDrag(true)
    }

    const dragLeaveHandler = (e) => {
        e.preventDefault()
        setDrag(false)
    }

    const onDropHandler = (e) => {
        e.preventDefault()
        setFile(e.dataTransfer.files[0])
        setDrag(false)
    }

    const onPasteHandler = (e) => {
        const image = e.clipboardData.files[0]
        setFile(image)
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
                    <Col className='mt-2'>
                        <SelectType types={types}/>
                    </Col>
                    <Col className='mt-2'>
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
                    onPaste={(e) => onPasteHandler(e)}
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
                <Row>
                    <Col>
                        <Button className='mt-2 w-100' onClick={handleFilePick}>
                            Выбрать файл
                        </Button>
                        {fileDataURL && file ?
                            <DevicePreview file={file} fileDataURL={fileDataURL} removeImage={removeImage}/>
                            : null}
                        <Form.Control
                            className='mt-3 d-none'
                            type='file'
                            ref={filePicker}
                            value={imageName}
                            accept='image/*,.png,.jpg,.gif,.web,.webp'
                            onChange={e => {
                                selectFile(e)
                                setImageName(e.target.value)
                            }}
                        />
                    </Col>
                    <Col>
                        {drag
                            ?
                            <div
                                className='drop-area mt-2'
                                onDragStart={e => dragStartHandler(e)}
                                onDragLeave={e => dragLeaveHandler(e)}
                                onDragOver={e => dragStartHandler(e)}
                                onDrop={e => onDropHandler(e)}
                            >
                                Загрузить изображение
                            </div>
                            :
                            <div
                                className='drop-area mt-2'
                                onDragStart={e => dragStartHandler(e)}
                                onDragLeave={e => dragLeaveHandler(e)}
                                onDragOver={e => dragStartHandler(e)}
                            >
                                Или перетащите его сюда
                            </div>
                        }
                    </Col>
                </Row>
                <Button className='mt-2 w-100' onClick={addInfo}>
                    Добавить новое свойство
                </Button>
                <InfoInput info={info} setInfo={setInfo}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="success" onClick={addDevice}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeviceModal
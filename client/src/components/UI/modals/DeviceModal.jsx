import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useDispatch, useSelector} from 'react-redux';
import {Card, Col, Dropdown, Form, Row} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import actions from "../../../store/actions/actions";
import {createDevice} from "../../../http/deviceApi";

function DeviceModal({show, onHide}) {

    const dispatch = useDispatch()
    const types = useSelector(state => state.typeReducer.types)
    const brands = useSelector(state => state.brandReducer.brands)
    const selectedType = useSelector(state => state.typeReducer.selectedType)
    const selectedBrand = useSelector(state => state.brandReducer.selectedBrand)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])
    const [fileDataURL, setFileDataURL] = useState(null);

    useEffect(() => {
        let fileReader, isCancel = false;
        if (file) {
            fileReader = new FileReader();
            fileReader.onload = (e) => {
                const { result } = e.target;
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

    const removeInfo = (number) => {
        setInfo(info.filter(infoRow => infoRow.number !== number))
    }
    //Прокидываем ключ изменяемого поля и его значение
    const changeInfo = (key, value, number) => {
        setInfo(info.map(infoRow => infoRow.number === number ? {...infoRow, [key]: value} : infoRow))
    }

    const selectFile = (e) => {
        //файл сохраняется в виде массива
        setFile(e.target.files[0])
    }
    const removeImage = () => {
        setFileDataURL(null)
        setFile(null)
    }
    const selectType = (type) => {
        dispatch(actions.typeActions.setSelectedType(type))
    }

    const selectBrand = (brand) => {
        dispatch(actions.brandActions.setSelectedBrand(brand))
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
        createDevice(formData).then(() => onHide())
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
                        <Dropdown>
                            <Dropdown.Toggle>
                                {selectedType.name || 'Выберите тип'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {types.map((type) =>
                                    <Dropdown.Item
                                        onClick={() => {
                                            selectType(type)
                                        }}
                                        key={type.id}
                                    >
                                        {type.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col md={6}>
                        <Dropdown>
                            <Dropdown.Toggle>
                                {selectedBrand.name || 'Выберите бренд'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {brands.map((brand) =>
                                    <Dropdown.Item
                                        onClick={() => {
                                            selectBrand(brand)
                                        }}
                                        key={brand.id}
                                    >
                                        {brand.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
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
                {fileDataURL ?
                    <Card className="mt-3 preview_image">
                        <Card.Img variant="top" src={fileDataURL} />
                        <small>{file.name}</small>
                        <div
                            onClick={removeImage}
                            className='fa fa-trash text-danger'>
                        </div>
                    </Card>
                    : null}
                <Form.Control
                    className='mt-3'
                    type='file'
                    onChange={e => {
                        selectFile(e)
                    }}
                    placeholder='Добавьте фото'
                />
                <Button
                    className='mt-3'
                    onClick={addInfo}
                >
                    Добавить новое свойство
                </Button>
                {info.map((infoRow) =>
                    <Row className='mt-3' key={infoRow.number}>
                        <Col md={4}>
                            <Form.Control
                                value={infoRow.title ?? ''}
                                onChange={(e) => changeInfo('title', e.target.value, infoRow.number)}
                                placeholder="Введите название свойства"
                            />
                        </Col>
                        <Col md={4}>
                            <Form.Control
                                value={infoRow.description ?? ''}
                                onChange={(e) => changeInfo('description', e.target.value, infoRow.number)}
                                placeholder="Введите описаные свойства"
                            />
                        </Col>
                        <Col
                            md={4}
                            className="d-flex flex-end"
                            onClick={() => {
                                removeInfo(infoRow.number)
                            }}
                        >
                            <Button variant="danger">
                                Удалить
                            </Button>
                        </Col>
                    </Row>
                )}
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
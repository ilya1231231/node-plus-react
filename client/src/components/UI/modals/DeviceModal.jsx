import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useDispatch, useSelector} from 'react-redux';
import {Col, Dropdown, Form, Row} from 'react-bootstrap';
import {useState} from 'react';
import actions from "../../../store/actions/actions";

function DeviceModal({show, onHide}) {

    const dispatch = useDispatch()
    const types = useSelector(state => state.typeReducer.types)
    const brands = useSelector(state => state.brandReducer.brands)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [brand, setBrand] = useState('')
    const [type, setType] = useState('')
    const [info, setInfo] = useState([])
    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const selectFile = (e) => {
        //файл сохраняется в виде массива
        setFile(e.target.files[0])
    }

    const selectType = (type) => {
        dispatch(actions.typeActions.setSelectedType(type))
    }
    const selectBrand = (brand) => {
        dispatch({type: "SELECT_BRAND", payload: brand})
    }
    const selectedType = useSelector(state => state.typeReducer.selectedType)
    const selectedBrand = useSelector(state => state.brandReducer.selectedBrand)

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
                    Добавить новое устройство
                </Button>
                {info.map((i) =>
                    <Row className='mt-3' key={i.number}>
                        <Col md={4}>
                            <Form.Control
                                placeholder="Введите название"
                            />
                        </Col>
                        <Col md={4}>
                            <Form.Control
                                placeholder="Введите название"
                            />
                        </Col>
                        <Col
                            md={4}
                            className="d-flex flex-end"
                            onClick={() => {
                                removeInfo(i.number)
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
                <Button variant="primary" onClick={onHide}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeviceModal
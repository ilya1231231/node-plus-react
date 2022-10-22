import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form, Row} from 'react-bootstrap';
import {createBrand, deleteBrand, deleteType, fetchBrands, fetchTypes} from '../../../http/deviceApi';
import {useState} from 'react';
import {errorHandler} from "../../../helpers/apiErrorHelper";
import {useDispatch, useSelector} from "react-redux";
import actions from "../../../store/actions/actions";

function BrandModal({show, onHide}) {
    const [value, setValue] = useState('')
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const addBrand = () => {
        createBrand({name: value}).then(() => {
            setValue('')
            setMessage(`Бренд "${value}" успешно добавлен`)
            fetchBrands().then(data => dispatch(actions.brandActions.setBrands(data)))
        }, error => errorHandler(error, dispatch))
    }

    const dropBrand = (brand) => {
        deleteBrand({brand}).then(() => {
            fetchBrands().then(data => dispatch(actions.brandActions.setBrands(data)))
            setMessage(`Бренд "${brand.name}" успешно удален`)
        }, (error) => errorHandler(error, dispatch))
    }

    const editBrands = useSelector(state => state.brandReducer.brands)
    return (
        <Modal
            show={show}
            onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title>Добавьте название бренда</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {message
                    ? <div className='text-center border'>{message}</div>
                    : ''
                }
                <Row className="m-2">
                    {editBrands.map((brand) =>
                        <div key={brand.id} className="d-flex justify-content-between col-12 mt-1">
                            <div className="overflow-auto">
                                {brand.name}
                            </div>
                            <div
                                onClick={() => {dropBrand(brand)}}
                                className='fa fa-trash text-danger'>
                            </div>
                        </div>
                    )}
                </Row>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => {
                            setValue(e.target.value)
                        }}
                        placeholder={'Введите название бренда'}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>
                    Закрыть
                </Button>
                <Button variant="outline-success" onClick={() => {
                    addBrand()
                }}>
                    Сохранить
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default BrandModal
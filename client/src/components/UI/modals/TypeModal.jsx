import {useState} from 'react';
import {Form, OverlayTrigger, Popover, Row} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useDispatch, useSelector} from 'react-redux';
import {createType, deleteType, fetchTypes} from '../../../http/deviceApi';
import actions from "../../../store/actions/actions";
import {errorHandler} from "../../../helpers/apiErrorHelper";

function TypeModal({show, onHide}) {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const [message, setMessage] = useState('')
    const addType = () => {
        // todo нужно сделать модалку, которая будет выводить "Сохранено" или продумать другой вариант
        dispatch(actions.typeActions.saveType({name: value}))
    }
    const dropType = (type) => {
        deleteType({type}).then(() => {
            dispatch(actions.typeActions.setTypes)
            setMessage(`Тип "${type.name}" успешно удален`)
        })
    }

    //todo переделать под удобный тултип
    const notifyAboutRelatedDevices = (relatedDevices) => {
        setMessage(`Этот тип привязан к продукту "${relatedDevices[0].name}"`)
    }

    const editTypes = useSelector(state => state.typeReducer.types)
    return (
        <Modal
            show={show}
            onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title>Добавьте тип продукта</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {message
                    ? <div className='text-center border'>{message}</div>
                    : ''
                }
                {editTypes.length
                    ? <Row className="m-2">
                        {editTypes.map((type) =>
                            <div key={type.id} className="d-flex justify-content-between col-12 border border-dark rounded mt-1">
                                <div className="overflow-auto">
                                    {type.name}
                                </div>
                                <div className='d-flex justify-content-center align-items-center'>
                                    {type.relatedDevices.length
                                        ?
                                        <div
                                            onClick={() => {notifyAboutRelatedDevices(type.relatedDevices)}}
                                            className='fa fa-exclamation-circle me-2 text-warning'>
                                        </div>
                                        : ''
                                    }
                                    <div
                                        onClick={() => {
                                            dropType(type)
                                        }}
                                        className='fa fa-trash text-danger'>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Row>
                    : <h4 className='text-center'>Не найдено типов</h4>}
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => {
                            setValue(e.target.value)
                        }}
                        placeholder={'Введите название типа продукта'}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>
                    Закрыть
                </Button>
                <Button variant="outline-success" onClick={addType}>
                    Сохранить
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default TypeModal
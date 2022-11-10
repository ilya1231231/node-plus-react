import {useRef, useState} from 'react';
import {Form, Overlay, OverlayTrigger, Popover, Row, Tooltip} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useDispatch, useSelector} from 'react-redux';
import {createType, deleteType, fetchTypes} from '../../../http/deviceApi';
import actions from "../../../store/actions/actions";
import {errorHandler} from "../../../helpers/apiErrorHelper";
import RelatedNotifyPopover from "../notifications/RelatedNotifyPopover";

function TypeModal({show, onHide}) {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const [message, setMessage] = useState('')
    const [isHover, setIsHover] = useState(false);
    const target = useRef(null);

    const addType = () => {
        dispatch(actions.typeActions.saveType({name: value}))
    }
    const dropType = (type) => {
        dispatch(actions.typeActions.dropType(type))
    }

    const editTypes = useSelector(state => state.typeReducer.types)
    return (
        <Modal
            show={show}
            onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title className="ms-auto">Добавьте тип продукта</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {message
                    ? <div className='text-center border'>{message}</div>
                    : ''
                }
                {editTypes.length
                    ? <Row className="m-2">
                        {editTypes.map((type, typeIndex) =>
                            <div key={type.id}
                                 className="d-flex justify-content-between col-12 border border-dark rounded mt-1">
                                <div
                                    className="overflow-auto">
                                    {type.name}
                                </div>
                                <div className='d-flex justify-content-center align-items-center'>
                                    {type.relatedDevices.length
                                        ?
                                        <RelatedNotifyPopover
                                            key={type.name}
                                            tooltipId={typeIndex}
                                            related={type.relatedDevices}/>
                                        : ''
                                    }
                                    <div
                                        onClick={() => {
                                            dropType(type)
                                        }}
                                        role='button'
                                        className='fa fa-trash drop'>
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
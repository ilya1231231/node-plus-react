import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { createType, fetchTypes } from '../../../http/deviceApi';

function TypeModal({show, onHide}) {
    const [value, setValue] = useState('')
    //TODO сделать функцию удаления типов
    const addType = () => {
        createType({name:value}).then(() => {
            setValue('')
            onHide()
        })
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
                <Row className="m-2">
                    {editTypes.map((type) => 
                        <div className="d-flex justify-content-between col-6 mt-1">
                            <div>
                                {type.name}
                            </div>
                            <Button variant="danger" size="sm">
                                Удалить
                            </Button>
                        </div>
                    )}
                </Row>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => {setValue(e.target.value)}}
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
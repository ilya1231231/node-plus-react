import { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { createType, fetchTypes, deleteType } from '../../../http/deviceApi';

function TypeModal({show, onHide}) {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const [message, setMessage] = useState('')
    //TODO сделать функцию удаления типов
    const addType = () => {
        createType({name:value}).then(() => {
            setValue('')
            setMessage(`Тип "${value}" успешно добавлен`)
            fetchTypes().then(data => dispatch({type: 'SET_TYPES', payload: data}))
        })
    }
    const dropType = (type) => {
        deleteType({type}).then(() => {
            fetchTypes().then(data => dispatch({type: 'SET_TYPES', payload: data}))
        setMessage(`Тип "${type.name}" успешно удален`)
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
                {message 
                    ? <div className='text-center border'>{message}</div>
                    : ''
                }
                <Row className="m-2">
                    {editTypes.map((type) => 
                        <Container key={type.id} className="d-flex justify-content-between col-6 mt-1">
                            <div>
                                {type.name}
                            </div>
                            <div 
                                onClick={() => {dropType(type)}}
                                className='fa fa-trash'style={{color: "red"}}>
                            </div>
                        </Container>
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
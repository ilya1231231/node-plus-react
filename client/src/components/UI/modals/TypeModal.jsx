import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createType } from '../../../http/deviceApi';

function TypeModal({show, onHide}) {
    const [value, setValue] = useState()
    const addType = () => {
        createType({name:value}).then(data => {
            setValue('')
        })
    }
    return (
        <Modal 
            show={show} 
            onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
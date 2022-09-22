import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { createBrand } from '../../../http/deviceApi';
import { useState } from 'react';

function BrandModal({show, onHide}) {
    const [value, setValue] = useState('')

    const addBrand = () => {
        createBrand({name:value}).then(data => {
            setValue('')
            onHide()
        })
    }

    return (
        <Modal 
            show={show} 
            onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title>Добавьте название бренда</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => {setValue(e.target.value)}}
                        placeholder={'Введите название бренда'}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>
                    Закрыть
                </Button>
                <Button variant="outline-success" onClick={() => {addBrand()}}>
                    Сохранить
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default BrandModal
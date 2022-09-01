import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import { Col, Dropdown, Form, Row } from 'react-bootstrap';
import { useState } from 'react';

function DeviceModal({show, onHide}) {
	const types = useSelector(state => state.typeReducer.types)
	const brands = useSelector(state => state.brandReducer.brands)
	const [info, setInfo] = useState([])
	const addInfo = () => {
		setInfo([...info, {title: '', description: '', number: Date.now()}])
	}

	const removeInfo = (number) => {
		setInfo(info.filter(i => i.number !== number))
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
				<Dropdown>
					<Dropdown.Toggle>
						Выберите тип
					</Dropdown.Toggle>
					<Dropdown.Menu>
						{types.map((type) => 
							<Dropdown.Item key={type.id}>
								{type.name}
							</Dropdown.Item>
						)}
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown className='mt-3'>
					<Dropdown.Toggle>
						Выберите бренд
					</Dropdown.Toggle>
					<Dropdown.Menu>
						{brands.map((brand) => 
							<Dropdown.Item key={brand.id}>
								{brand.name}
							</Dropdown.Item>
						)}
					</Dropdown.Menu>
				</Dropdown>
				<Form.Control 
					className='mt-3'
					placeholder='Введите название устройства'
				/>
				<Form.Control 
					className='mt-3'
					type="number"
					placeholder='Введите стоимость устройства'
				/>
				<Form.Control 
					className='mt-3'
					type='file'
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
							onClick={() => {removeInfo(i.number)}}
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
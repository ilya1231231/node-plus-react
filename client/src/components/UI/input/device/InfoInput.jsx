import {Col, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const InfoInput = ({info, setInfo}) => {

    const removeInfo = (number) => {
        setInfo(info.filter(infoRow => infoRow.number !== number))
    }
    //Прокидываем ключ изменяемого поля и его значение
    const changeInfo = (key, value, number) => {
        setInfo(info.map(infoRow => infoRow.number === number ? {...infoRow, [key]: value} : infoRow))
    }
    return(
        <div>
            {info.length
                ? <h3 className='text-center mt-2'>Свойства</h3>
                : ''}
            {info.map((infoRow) =>
                    <Row className='mt-3' key={infoRow.number} style={{border: '1px solid gray', borderRadius: 5}}>
                        <Col md={4} className='mt-2'>
                            <Form.Control
                                value={infoRow.title ?? ''}
                                onChange={(e) => changeInfo('title', e.target.value, infoRow.number)}
                                placeholder="Введите название свойства"
                            />
                        </Col>
                        <Col md={4} className='mt-2'>
                            <Form.Control
                                value={infoRow.description ?? ''}
                                onChange={(e) => changeInfo('description', e.target.value, infoRow.number)}
                                placeholder="Введите описаные свойства"
                            />
                        </Col>
                        <Col
                            md={4}
                            className="d-flex mt-2"
                            onClick={() => {
                                removeInfo(infoRow.number)
                            }}
                        >
                            <Button className='mb-2' variant="danger">
                                Удалить
                            </Button>
                        </Col>
                    </Row>
                )}
        </div>
    )
}

export default InfoInput
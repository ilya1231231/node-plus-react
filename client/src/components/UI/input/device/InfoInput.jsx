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
            {info.map((infoRow) =>
                    <Row className='mt-3' key={infoRow.number}>
                        <Col md={4}>
                            <Form.Control
                                value={infoRow.title ?? ''}
                                onChange={(e) => changeInfo('title', e.target.value, infoRow.number)}
                                placeholder="Введите название свойства"
                            />
                        </Col>
                        <Col md={4}>
                            <Form.Control
                                value={infoRow.description ?? ''}
                                onChange={(e) => changeInfo('description', e.target.value, infoRow.number)}
                                placeholder="Введите описаные свойства"
                            />
                        </Col>
                        <Col
                            md={4}
                            className="d-flex flex-end"
                            onClick={() => {
                                removeInfo(infoRow.number)
                            }}
                        >
                            <Button variant="danger">
                                Удалить
                            </Button>
                        </Col>
                    </Row>
                )}
        </div>
    )
}

export default InfoInput
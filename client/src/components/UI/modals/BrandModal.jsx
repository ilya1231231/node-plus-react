import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form, Row} from 'react-bootstrap';
import {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import actions from "../../../store/actions/actions";
import RelatedNotifyPopover from "../notifications/RelatedNotifyPopover";

function BrandModal({show, onHide}) {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const addBrand = () => {
        dispatch(actions.brandActions.addBrand({name: value}))
        setValue('')
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
                <Row className="m-2">
                    {editBrands.map((brand,brandIndex ) =>
                        <div key={brand.id} className="d-flex justify-content-between col-12 mt-1">
                            <div className="overflow-auto">
                                {brand.name}
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                {brand.relatedDevices.length
                                    ?
                                    <RelatedNotifyPopover
                                        key={brand.name}
                                        tooltipId={brandIndex}
                                        related={brand.relatedDevices}/>
                                    : ''
                                }
                                <div
                                    onClick={() => {
                                        dispatch(actions.brandActions.dropBrand(brand))
                                    }}
                                    className='fa fa-trash text-danger'>
                                </div>
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
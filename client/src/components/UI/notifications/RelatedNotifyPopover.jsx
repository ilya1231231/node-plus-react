import {OverlayTrigger, Popover} from "react-bootstrap";

const RelatedNotifyPopover = ({tooltipId, related}) => {
    console.log(related)
    return (
        <OverlayTrigger
            trigger={['hover', 'focus']}
            delay={{ show: 250, hide: 400 }}
            placement='left'
            overlay={
                <Popover id={`tooltip-${tooltipId}`}>
                    <Popover.Header as="h3">Внимание</Popover.Header>
                    <Popover.Body>
                        Данный тип имеется у следующих продуктов:
                        <br/>
                        {related.map((relation, index) =>
                            <div key={relation.id}>
                                <strong>{index + 1}){relation.name}</strong>
                            </div>
                        )}
                    </Popover.Body>
                </Popover>
            }
        >
            <div
                role='button'
                className='fa fa-exclamation-circle me-2 text-warning pointer'>
            </div>
        </OverlayTrigger>
    )
}

export default RelatedNotifyPopover
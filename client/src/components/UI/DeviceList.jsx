import React from "react";
import {useSelector} from "react-redux"
import DeviceItem from "./DeviceItem";
import {Row} from "react-bootstrap";
import {isEmpty} from "lodash";

const DeviceList = () => {
    const devices = useSelector(state => state.deviceReducer.devices)
    return (
        <Row className="d-flex align-items-center justify-content-between">
            {!isEmpty(devices.rows)
                ? devices.rows.map(device =>
                    <DeviceItem
                        key={device.id}
                        device={device}
                    />
                )
                : <div>По вашему фильтру ничего не найдено</div>
            }
        </Row>
    )
}

export default DeviceList;
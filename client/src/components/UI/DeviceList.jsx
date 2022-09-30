import React from "react";
import {useSelector} from "react-redux"
import DeviceItem from "./DeviceItem";
import {Row} from "react-bootstrap";

const DeviceList = () => {
    const devices = useSelector(state => state.deviceReducer.devices)
    return (
        <Row className="d-flex">
            {devices.rows
                ? devices.rows.map(device =>
                    <DeviceItem
                        key={device.id}
                        device={device}
                    />
                )
                : ''
            }
        </Row>
    )
}

export default DeviceList;
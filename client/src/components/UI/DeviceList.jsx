import React from "react";
import {useSelector} from "react-redux"
import DeviceItem from "./DeviceItem";
import { Row } from "react-bootstrap";

const DeviceList = () => {
    const devices = useSelector(state => state.deviceReducer.devices)
    console.log(devices)
    return (
        <Row className="d-flex">
            {devices 
                ? devices.map(device => 
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
import * as React from "react";
import {
    ReferenceInput,
    SelectInput,
    Filter,
    TextInput
}
from 'react-admin';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    width: { width: 125 },
});

const  WorkOrderFilter = (props) => {
    const freq = [
        { _id: '0', full_name: 'WR'},
        { _id: '1', full_name: 'PM'},
    ];
    const classes = useStyles();
    return(
    <Filter {...props}>
        <TextInput className={classes.width} label="کد دستور کار" textAlgin="right" source="id__icontains" alwaysOn resettable />
        <TextInput className={classes.width} label="کد تجهیز" textAlgin="right" source="WorkRequestID__AssetSubdivisionID__AssetCode__icontains" alwaysOn resettable />
        <TextInput className={classes.width} label="خرابی" textAlgin="right" source="WorkRequestID__FailureModeID__FailureModeName__icontains" alwaysOn resettable />
        <ReferenceInput className={classes.width} formClassName={classes.width} label="اولویت" textAlgin="right" source="DepartmentID" reference="PMWorks/Department" alwaysOn resettable>
            <SelectInput className={classes.width} optionText="DepartmentName" />
        </ReferenceInput>
        <SelectInput className={classes.width} label="نوع" textAlgin="right" source="WorkOrderType" choices={freq} optionText="full_name" optionValue="_id" alwaysOn resettable/>
        <ReferenceInput className={classes.width} formClassName={classes.width} label="وضعیت" textAlgin="right" source="StatusID" reference="PMWorks/Status" alwaysOn resettable>
            <SelectInput className={classes.width} optionText="StatusName" />
        </ReferenceInput>
    </Filter>
);
};


export default WorkOrderFilter;

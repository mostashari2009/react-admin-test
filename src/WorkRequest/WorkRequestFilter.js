import * as React from "react";
import {
    Filter,
    TextInput,
    ReferenceInput,
    SelectInput
}
from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    width: { width: 125 },
});

const  WorkRequestFilter = (props) => {
    const classes = useStyles();
    return(
    <Filter {...props}>
        <TextInput className={classes.width} label="کد درخواست کار" textAlgin="right" source="id__icontains" alwaysOn resettable />
        <TextInput className={classes.width} label="کد تجهیز" textAlgin="right" source="AssetSubdivisionID__AssetCode__icontains" alwaysOn resettable />
        <TextInput className={classes.width} label="خرابی" textAlgin="right" source="FailureModeID__FailureModeName__icontains" alwaysOn resettable />
        <ReferenceInput className={classes.width} formClassName={classes.width} label="اولویت" textAlgin="right" source="WorkPriorityID" reference="PMWorks/WorkPriority" alwaysOn resettable>
            <SelectInput className={classes.width} optionText="WorkPriorityName" />
        </ReferenceInput>
        <ReferenceInput className={classes.width} formClassName={classes.width} label="نوع" textAlgin="right" source="TypeWrID" reference="PMWorks/TypeWr" alwaysOn resettable>
            <SelectInput className={classes.width} optionText="TypeWrName" />
        </ReferenceInput>
        <ReferenceInput className={classes.width} formClassName={classes.width} label="وضعیت" textAlgin="right" source="StatusID" reference="PMWorks/Status" alwaysOn resettable>
            <SelectInput className={classes.width} optionText="StatusName" />
        </ReferenceInput>
    </Filter>
);
};


export default  WorkRequestFilter;

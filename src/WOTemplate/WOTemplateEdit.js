import * as React from "react";
import {
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    ShowButton,
    ListButton,
    TopToolbar    
}
from 'react-admin';
import WOTemplateTitle from './WOTemplateTitle';
import { DateInputtoday } from '../Components/JalaliDatePickertoday';
import { DateInput } from '../Components/JalaliDatePicker';

const EditActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <ShowButton basePath={basePath} record={data} />
    </TopToolbar>
);

const validateError = (values) => {
    const errors = {};
    if (!values.WOTemplateCode) {
        errors.WOTemplateCode = 'کد را وارد کنید';
    }
    if (!values.WOTemplateName) {
        errors.WOTemplateName = 'نام را وارد کنید';
    }
    return errors
};

const WOTemplateEdit = props => (
    <Edit title={<WOTemplateTitle />} {...props}>
        <SimpleForm>
            <DateInputtoday label="تاریخ ثبت" source="WODateOfRegistration" disabled/>
            <DateInput label="تاریخ شروع" source="DateOfPlanStart" />
            <DateInput label="تاریخ پایان" source="DateOfPlanFinish" />
            <TextInput multiline label="توضیحات" textAlgin="right" source="WODescription"/>
        </SimpleForm>
    </Edit>
);


export default WOTemplateEdit;

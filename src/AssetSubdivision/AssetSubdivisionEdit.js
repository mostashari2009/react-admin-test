import * as React from "react";
import {
    Edit,
    SimpleForm,
    TopToolbar,
    ListButton,
    ShowButton,
    TextField,
    ReferenceField
}
from 'react-admin';
import AssetRefrenceInput from './AssetRefrenceInput';
import AssetSubdivisionTitle from './AssetSubdivisionTitle';

const AssetSubdivisionEditActions = ({ basePath, data }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <ShowButton basePath={basePath} record={data} />
    </TopToolbar>
);


const AssetSubdivisionEdit = props => (
    <Edit actions={<AssetSubdivisionEditActions />} title={<AssetSubdivisionTitle />} {...props}>
        <SimpleForm>
            <TextField label="آی دی" textAlgin="right" disabled source="id" />
            <AssetRefrenceInput label="تجهیز" textAlgin="right" source="AssetID" reference="PMWorks/Asset" perPage={10000} />
            <ReferenceField label="کلاس تجهیز" textAlgin="right" disabled source="AssetChildID" reference="PMWorks/AssetClass">
                <TextField source="AssetClassName" />
            </ReferenceField>
        </SimpleForm>
    </Edit>
);


export default AssetSubdivisionEdit;

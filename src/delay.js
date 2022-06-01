import * as React from 'react';
import {
    Show,
    ShowButton,
    SimpleShowLayout,
    List,
    Edit,
    Create,
    Datagrid,
    TextField,
    EditButton,
    SimpleForm,
    TextInput,
    SelectInput,
    TopToolbar,
    
} from 'react-admin';


import { ImportButton } from "react-admin-import-csv";
import { CreateButton, ExportButton,Filter } from "ra-ui-materialui";

const PostFilters = [
    <TextInput source="DelayCode" label="Search" alwaysOn />,
    <SelectInput optionText="name" />
];


const ListActions = (props) => {
    const { className, basePath } = props;
    return (
       
      <TopToolbar className={className}>
        <CreateButton basePath={basePath} />
        <Filter/>
        < ExportButton />
        < ImportButton  {...props} />
      </TopToolbar>
        
    );
  };



export const DelayList = props => (
    <List {...props}  actions={<ListActions />}>
    
        <Datagrid>
            <TextField source="DelayCode" label="کد "/>,
            <TextField source="DelayName"  label="نام"/>
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);

const DelayTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const DelayEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
           <TextInput source="DelayCode"  label="کد "/>
           <TextInput source="DelayName"  label="نام"/>
        </SimpleForm>
    </Edit>
);

export const DelayCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="DelayCode"  label="کد "/>
            <TextInput source="DelayName"  label="نام"/>
        </SimpleForm>
    </Create>
);

export const DelayShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="DelayCode"  label="کد " />
            <TextField source="DelayName"  label="نام" />
        </SimpleShowLayout>
    </Show>
);



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
    TopToolbar,
    Filter,
    downloadCSV,
} from 'react-admin';


import { ImportButton } from "react-admin-import-csv";
import { CreateButton, ExportButton,ListButton } from "ra-ui-materialui";


const importOptions = {
    parseConfig: {
        encoding: 'ISO-8859-1'
    },
};
  
 const DelayFilter = (props) => (
    <Filter {...props}>
            <TextInput source="DelayCode__icontains"  label="کد " alwaysOn resettable/>
            <TextInput source="DelayName__icontains"  label="نام" alwaysOn resettable />
    </Filter>
);


const ListActions = (props) => {
    return (
       
      <TopToolbar >
        <CreateButton  />
        <ExportButton   />
        <ImportButton  label=" ورودی"   {...importOptions} {...props} />
      </TopToolbar> 
        
    );
  };

export const DelayList = (props) => (
    <List {...props} title="تاخیرات" filters={ <DelayFilter />} actions={<ListActions />}> 
    
        <Datagrid>
            <TextField source="DelayCode" label="کد "/>,
            <TextField source="DelayName"  label="نام"/>
            <ShowButton />
        </Datagrid>
    </List>
);

//const DelayTitle = ({ record }) => {
   // return <span>Post {record ? `"${record.title}"` : ''}</span>;
//};

const DelayEditActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        <ListButton/>
        <ShowButton basePath={basePath} record={data} />
    </TopToolbar>
);
export const DelayEdit = (props) => (
    <Edit actions={<DelayEditActions />} {...props}>
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


const DelayShowActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        <ListButton/>
        <EditButton basePath={basePath} record={data} />
    </TopToolbar>
);

export const DelayShow = props => (
    <Show  actions={<DelayShowActions />}  {...props}>
        <SimpleShowLayout>
            <TextField source="DelayCode"  label="کد " />
            <TextField source="DelayName"  label="نام" />
        </SimpleShowLayout>
    </Show>
);


import * as React from "react";
import { Fragment } from "react";
import {
    Datagrid,
    TextField,
    ReferenceField,
    TabbedShowLayout,
    ReferenceManyField,
    Tab,
    NumberField,
    EditButton,
    Show,
    List,
    Button,
    ListButton,
    downloadCSV,
    TopToolbar,
    ExportButton,
    useShowController,
    SelectField,
    ResourceContextProvider,
}
from 'react-admin';
import AddAssetSubdivisionSparePartDataButton from './AddAssetSubdivisionSparePartDataButton';
import { makeStyles } from '@material-ui/core';
import AssetSpecificDataFilter from '../AssetSpecificData/AssetSpecificDataFilter';
import ASTaskFilter from "./AssetSubdivisionTaskFilter";
import AssetSubdivisionSparePartFilter from '../AssetSubdivisionSparePart/AssetSubdivisionSparePartFilter';
import AssetSubdivisionTitle from './AssetSubdivisionTitle';
import JalaaliDateField from "../Components/JalaaliDateField";
import AddPersonnelButton from "../WOTask/AddPersonnelButton";
import jsonExport from 'jsonexport/dist';
import ScrollDialog from "../WorkOrder/NewSpareTask";
import TouchApp from "@material-ui/icons/TouchApp";
import ScrollDialogP from "../WorkOrder/NewPersonTask"
import WOSparePartFilter from "../WOSparePart/WOSparePartFilter";
import WOPersonnelFilter from "../WOPersonnel/WOPersonnelFilter";
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import { ImportButton } from "react-admin-import-csv";

const importOptions = {
    parseConfig: {
        encoding: 'ISO-8859-1'
    },
};

const AddTaskPersonnelButton = ({ selectedIds }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => () => {
        setOpen(true);
    };

    return (
        <Fragment>
            <Button
                label="افزودن نیروی انسانی"
                onClick={handleClickOpen()}
            >
                <PermIdentityOutlinedIcon />
            </Button>
            {open ? <ScrollDialogP open={open} setOpen={setOpen} taskSelectedIds={selectedIds} /> : null}
        </Fragment>
    );
};

const AddTaskSpareButton = ({ record }) => {
    const [opens, setOpens] = React.useState(false);

    const handleClickOpen = () => () => {
        setOpens(true);
    };

    return (
        <Fragment>
            <Button
                label="انتخاب"
                onClick={handleClickOpen()}
            >
                <TouchApp />
            </Button>
            {opens ? <ScrollDialog open={opens} setOpen={setOpens} record={record} /> : null}
        </Fragment>
    );
};

const ShowActions = ({ basePath, data }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <EditButton basePath={basePath} record={data}/>
    </TopToolbar>
);

const exporterSparePart = (data) => {
    const BOM = '\uFEFF'
  
    jsonExport(data, (err, csv) => {
      downloadCSV(`${BOM} ${csv}`, 'SparePartList')
  
    })
};

const exporterPersonnel = (data) => {
    const BOM = '\uFEFF'
  
    jsonExport(data, (err, csv) => {
      downloadCSV(`${BOM} ${csv}`, 'PersonnelList')
  
    })
};

const exporterTask = (records, fetchRelatedRecords) => {
    // will call dataProvider.getMany('posts', { ids: records.map(record => record.post_id) }), ignoring duplicate and empty post_id
    fetchRelatedRecords(records, "TaskID", "PMWorks/AssetClassTask").then((AssetClassTask) => {
        const data1s = records.map((record) => ({
        ...record,
        TaskCode: record.TaskID ? AssetClassTask[record.TaskID].TaskCode : '',
        TaskName: record.TaskID ? AssetClassTask[record.TaskID].TaskName : ''
        
      }));
    fetchRelatedRecords(data1s, "WOAssetSubdivisionID__WorkOrderID__DepartmentID", "PMWorks/Department").then((Department) => {
        const data2s = data1s.map((data1) => ({
        ...data1,
        DepartmentName: data1.WOAssetSubdivisionID__WorkOrderID__DepartmentID ? Department[data1.WOAssetSubdivisionID__WorkOrderID__DepartmentID].DepartmentName : ''
    }));
    fetchRelatedRecords(data2s, "WOAssetSubdivisionID__WorkOrderID__StatusID", "PMWorks/Status").then((Status) => {
        const data3s = data2s.map((data2) => ({
        ...data2,
        StatusName: data2.WOAssetSubdivisionID__WorkOrderID__StatusID ? Status[data2.WOAssetSubdivisionID__WorkOrderID__StatusID].StatusName : ''
    }));
    fetchRelatedRecords(data3s, "WOAssetSubdivisionID__WorkOrderID", "PMWorks/WorkOrder").then((WorkOrder) => {
        const data4s = data3s.map((data3) => ({
        ...data3,
        Id : data3.WOAssetSubdivisionID__WorkOrderID ? WorkOrder[data3.WOAssetSubdivisionID__WorkOrderID].id : '',
        WorkRequestID: data3.WOAssetSubdivisionID__WorkOrderID ? WorkOrder[data3.WOAssetSubdivisionID__WorkOrderID].WorkRequestID : '',
        WorkOrderType: data3.WOAssetSubdivisionID__WorkOrderID ? WorkOrder[data3.WOAssetSubdivisionID__WorkOrderID].WorkOrderType : ''
    }));
    var r = 1;
    const BOM = "\uFEFF";
    const postsForExport = data4s.map((data4) => {
        const { backlinks, Id, StatusName, WorkRequestID, WOAssetSubdivisionID__WorkOrderID__StatusID,
             WOAssetSubdivisionID__WorkOrderID__DepartmentID, TaskID, WorkOrderType, WOAssetSubdivisionID__WorkOrderID,
               DepartmentName, TaskCode, TaskName, ...postForExport } = data4; // omit backlinks and author
        let str = data4.WorkRequestID ? `${data4.WorkRequestID}` : '';
        str = str.padStart(4,0) ;
        let text = "WR0".concat(str);
        let stro = data4 ? `${data4.Id}` : '';
        stro = stro.padStart(4,0);
        let texto = "_WO0".concat(stro);
        postForExport.ردیف = r;
        postForExport.کد_دستورکار = `${text} ${texto}`;
        postForExport.منبع = data4.WorkOrderType == 0 ? 'WR' : 'PM';
        postForExport.دپارتمان = data4.DepartmentName;
        postForExport.نام_وضعیت = data4.StatusName;
        postForExport.کد_فعالیت = data4.TaskCode;
        postForExport.عنوان_فعالیت = data4.TaskName;   
        postForExport.منبع = data4.WorkOrderType == 'D' ? 'انجام شده' : 'ND' ? 'انجام نشده' : 'نیاز به انجام نمی‌باشد';

        r = r + 1;
        return postForExport;
      });
      jsonExport(
        postsForExport,
         (err, csv) => {
            downloadCSV(`${BOM} ${csv}`, 'TaskList');
        }
      );
    });});});});
  };


const useStyles = makeStyles({
    head: {
        display: 'none',
    },
    sho: {'& label': { fontSize: '20px', color:'rgb(36 50 97)' }},
    ex: {
        fontFamily: 'inherit',
    }
});

const WOoSparePartActions = ({ basePath, data }) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <AddTaskSpareButton record={data}/>
        <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
    </TopToolbar>
);
};

const WOoPersonnelActions = ({ basePath, data }) => {

    const classes = useStyles();
  
  return (
    <TopToolbar>
        <AddPersonnelButton record={data}/>
        <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
    </TopToolbar>
);
};

const WOTaskList = (props) => {

    const {
        record
    } = useShowController(props);

    const classes = useStyles();

    return(
        <Show actions={null} {...props} title={false}>
            <TabbedShowLayout syncWithLocation={false}>
                <Tab label="قطعات یدکی" path="PMWorks/WOSparePart">
                    <ReferenceManyField
                        addLabel={false}
                        reference="PMWorks/WOSparePart"
                        target="WOTaskID"
                        filter={{ WOTaskID: record.id }}
                    >
                    <List syncWithLocation exporter={exporterSparePart} empty={false} filters={<WOSparePartFilter />} actions={<WOoSparePartActions data={record}/>}>
                        <Datagrid>
                            <ReferenceField label="کد قطعه" textAlgin="right" source="SparePartID" reference="PMWorks/SparePart">
                                <TextField source="SparePartCode" />
                            </ReferenceField>
                            <ReferenceField label="نام قطعه" textAlgin="right" source="SparePartID" reference="PMWorks/SparePart">
                                <TextField source="SparePartName" />
                            </ReferenceField>
                            <NumberField label="تعداد" textAlgin="right" source="SparePartAmount" />
                        </Datagrid>
                        </List>
                    </ReferenceManyField>
                </Tab>
                <Tab label="پرسنل" path="PMWorks/WOPersonnel">
                    <ReferenceManyField
                        addLabel={false}
                        reference="PMWorks/WOPersonnel"
                        target="WOTaskID"
                        filter={{ WOTaskID: record.id }}
                    >
                    <List syncWithLocation exporter={exporterPersonnel} empty={false} filters={<WOPersonnelFilter />} actions={<WOoPersonnelActions data={record}/>}>
                        <Datagrid>
                            <ReferenceField label="نام پرسنل" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                                <TextField source="PersonnelName" />
                            </ReferenceField>
                            <ReferenceField label="فامیل پرسنل" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                                <TextField source="PersonnelFamily" />
                            </ReferenceField>
                            <ReferenceField label="کد پرسنل" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                                <TextField source="PersonnelCode" />
                            </ReferenceField>
                            <JalaaliDateField label="تاریخ انجام" textAlgin="right" source="WorkDate"/>
                            <NumberField label="مدت زمان انجام" textAlgin="right" source="WorkTime" />
                        </Datagrid>
                    </List>
                    </ReferenceManyField>
                </Tab>
            </TabbedShowLayout>
        </Show>
    );
};

const AssetSpecificDataActions = ({ basePath, data }, props) => {

  const classes = useStyles();
  
  return (
    <TopToolbar>
        <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
        <ImportButton label="ورودی" resource="PMWorks/AssetSpecificData" {...props} {...importOptions}/>
    </TopToolbar>
);
};

const AssetTaskActions = ({ basePath, data }, props) => {

    const classes = useStyles();
    
    return (
      <TopToolbar>
          <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
      </TopToolbar>
  );
  };

const AssetSubdivisionSparePartActions = ({ basePath, data }, props) => {

  const classes = useStyles();
  
  return (
    <TopToolbar>
        <AddAssetSubdivisionSparePartDataButton record={data}/>
        <ExportButton className={classes.ex} label="خروجی" basePath={basePath} />
        <ImportButton label="ورودی" resource="PMWorks/AssetSubdivisionSparePart" {...props} {...importOptions}/>
    </TopToolbar>




);
};

const freq = [
    { _id: 'D', full_name: 'انجام شده'},
    { _id: 'ND', full_name: 'انجام نشده'},
    { _id: 'N', full_name: 'نیاز به انجام نمی‌باشد'}
];

const freqe = [
    { _id: '0', full_name: 'WR'},
    { _id: '1', full_name: 'PM'},
];

const WorkOrderField = ({ record = {} }) => {
    let str = record ? `${record.WorkRequestID}` : '';
    str = str.padStart(4,0);
    let text = "WR0".concat(str);
    let stro = record ? `${record.id}` : '';
    stro = stro.padStart(4,0);
    let texto = "_WO0".concat(stro);
    return <span> {text} {texto} </span>;
};


const AssetSubdivisionShow = props => {

    const {
        record
    } = useShowController(props);

    const classes = useStyles();

    return(
    <Show {...props} actions={<ShowActions/>} title={<AssetSubdivisionTitle />}>
        <TabbedShowLayout>
            <Tab label="مشخصات">
                <ReferenceField className={classes.sho} label="کد تجهیز" textAlgin="right" source="AssetID" reference="PMWorks/Asset">
                    <TextField source="AssetCode" />
                </ReferenceField>
                <ReferenceField className={classes.sho} label="نام تجهیز" textAlgin="right" source="AssetID" reference="PMWorks/Asset">
                    <TextField source="AssetName" />
                </ReferenceField>
                <TextField className={classes.sho} label="مکان" textAlgin="right" source="AssetID__LocationID__LocationName" />
                <ReferenceField className={classes.sho} label="کلاس تجهیز" textAlgin="right" source="AssetChildID" reference="PMWorks/AssetClass">
                    <TextField source="AssetClassName" />
                </ReferenceField>
            </Tab>
            <Tab label="ویژگی ها" path="PMWorks/AssetSpecificData">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/AssetSpecificData"
                    target="AssetSubdivisionID"
                    filter={{ AssetSubdivisionID: record.id }}
                >
                    <List empty={false} filters={<AssetSpecificDataFilter />} actions={<AssetSpecificDataActions data={record}/>}>
                        <Datagrid>
                            <ReferenceField label="نام ویژگی" textAlgin="right" disabled source="SpecificDataID" reference="PMWorks/SpecificData">
                                <TextField source="SpecificDataName" />
                            </ReferenceField>
                            <ReferenceField label="کد ویژگی" textAlgin="right" source="SpecificDataID" reference="PMWorks/SpecificData">
                                <TextField source="SpecificDataCode" />
                            </ReferenceField>
                            <TextField label="مقدار" textAlgin="right" source="SpecificAmount" />
                            <EditButton />
                        </Datagrid>
                    </List>
                </ReferenceManyField>
            </Tab>
            <Tab label="قطعات" path="PMWorks/AssetSubdivisionSparePart">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/AssetSubdivisionSparePart"
                    target="AssetSubdivisionID"
                    filter={{ AssetSubdivisionID: record.id }}
                >
                    <List empty={false} filters={<AssetSubdivisionSparePartFilter />} actions={<AssetSubdivisionSparePartActions data={record}/>}>
                        <Datagrid>
                            <ReferenceField label="نام قطعه" textAlgin="right" disabled source="SparePartID" reference="PMWorks/SparePart">
                                <TextField source="SparePartName" />
                            </ReferenceField>
                            <ReferenceField label="کد قطعه" textAlgin="right" disabled source="SparePartID" reference="PMWorks/SparePart">
                                <TextField source="SparePartCode" />
                            </ReferenceField>
                        </Datagrid>
                    </List>
                </ReferenceManyField>
            </Tab>
            <Tab label="فعالیت ها" path="PMWorks/AssetSubdivisionTask">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/AssetSubdivisionTask"
                    target="WOAssetSubdivisionID__AssetSubdivisionID"
                    filter={{ WOAssetSubdivisionID__AssetSubdivisionID: record.id }}
                >
                
                    <List empty={false} exporter={exporterTask} filters={<ASTaskFilter/>}>
                        <Datagrid expand={<WOTaskList />} >
                            <ReferenceField label="کد دستور کار" textAlgin="right" source="WOAssetSubdivisionID__WorkOrderID" reference="PMWorks/WorkOrder">
                                <WorkOrderField textAlgin="right" source="id" />
                            </ReferenceField>
                            <ReferenceField label="منبع" textAlgin="right" source="WOAssetSubdivisionID__WorkOrderID" reference="PMWorks/WorkOrder">
                                <SelectField  textAlgin="right" source="WorkOrderType" choices={freqe} optionText="full_name" optionValue="_id" />
                            </ReferenceField>
                            <ReferenceField label="دپارتمان" textAlgin="right" source="WOAssetSubdivisionID__WorkOrderID__DepartmentID" reference="PMWorks/Department">
                                <TextField source="DepartmentName" />
                            </ReferenceField>
                            <ReferenceField label="وضعیت دستور کار" textAlgin="right" source="WOAssetSubdivisionID__WorkOrderID__StatusID" reference="PMWorks/Status">
                                <TextField source="StatusName" />
                            </ReferenceField>
                            <ReferenceField label="تاریخ وضعیت دستور کار" textAlgin="right" source="WOAssetSubdivisionID__WorkOrderID__StatusID" reference="PMWorks/Status">
                                <TextField source="Create" />
                            </ReferenceField>
                            <ReferenceField label="کد فعالیت" textAlgin="right" source="TaskID" reference="PMWorks/AssetClassTask">
                                <TextField source="TaskCode" />
                            </ReferenceField>
                            <ReferenceField label="عنوان فعالیت" textAlgin="right" source="TaskID" reference="PMWorks/AssetClassTask">
                                <TextField source="TaskName" />
                            </ReferenceField>
                            <SelectField label="وضعیت انجام" textAlgin="right" source="WOTaskSituationOfDo" choices={freq} optionText="full_name" optionValue="_id" />
                        </Datagrid>
                    </List>
    
                </ReferenceManyField>
            </Tab>
        </TabbedShowLayout>
    </Show>
);
};


export default AssetSubdivisionShow;

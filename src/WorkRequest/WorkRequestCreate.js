import * as React from "react";
import {
  SimpleForm,
  ReferenceInput,
  Create,
  SelectInput,
  FormDataConsumer,
  TopToolbar,
  ListButton,
  TextInput,
} from "react-admin";
import AssetSubdivisionRefrenceInput from "./AssetSubdivisionRefrenceInput";
import FailureModeRefrenceInput from "./FailureModeRefrenceInput";
import WorkPriorityRefrenceInput from "./WorkPriorityRefrenceInput";
import TypeWrRefrenceInput from "./TypeWrRefrenceInput";

import { DateInput } from "../Components/JalaliDatePicker";
import { DateInputtoday } from "../Components/JalaliDatePickertoday";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { TimeInput } from "../Components/TimeInput";
import { TimeInputNow } from "../Components/TimeInputNow";

import moment from "moment";

const CreateActions = ({ basePath, record, resource }) => (
  <TopToolbar>
    <ListButton basePath={basePath} />
  </TopToolbar>
);

const validateError = (values) => {
  const errors = {};
  if (!values.AssetSubdivisionID) {
    errors.AssetSubdivisionID = "تجهیز را وارد کنید";
  }
  if (!values.FailureModeID) {
    errors.FailureModeID = "خرابی را وارد کنید";
  }
  if (!values.WorkPriorityID) {
    errors.WorkPriorityID = "اولویت را وارد کنید";
  }
  if (!values.TypeWrID) {
    errors.TypeWrID = "نوع را وارد کنید";
  }
  if (!values.WRDate) {
    errors.WRDate = "تاریخ را وارد کنید";
  }
  if (!values.WRTime) {
    errors.WRTime = "ساعت را وارد کنید";
  }
  return errors;
};

const useStyles = makeStyles({
  Create: {
    marginLeft: "auto",
  },
  form: {
    display: "inline-grid",
    background: "#fff",
    border: "3px solid #0863cc",
    justifyContent: "center",
    fontFamily: "B Nazanin",
    borderStartStartRadius: "5px",
    borderStartEndRadius: "5px",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
    boxShadow: "2px 2px 4px #cbced1",
    margin: "auto",
    "$ .input": {
      paddingRight: "5px",
      alignItems: "right",
    },
    "& .MuiSelect-icon": {
      position: "relative",
      color: "#fff",
    },
    "& button": {
      borderStartStartRadius: "15px",
      borderStartEndRadius: "15px",
      borderBottomLeftRadius: "15px",
      borderBottomRightRadius: "15px",
      margin: "auto",
      fontFamily: "B Nazanin",
    },
    "& .MuiButton-contained": {
      marginRight: "10px",
    },
    "& .MuiFormHelperText-contained": {
      height: "0px",
    },
    "& .MuiFilledInput-input": {
      paddingRight: "20px",
    },
    "& .MuiInputLabel-filled": {
      transform: "translate(-15px, 17px) scale(1)",
      color: "#0863cc",
    },
    "& .MuiInputLabel-formControl": {
      left: "auto",
      right: "0px",
    },
    "& .MuiInputLabel-filled.MuiInputLabel-shrink.MuiInputLabel-marginDense ": {
      transform: "translate(-9px, -7px) scale(0.75)",
      background: "#fff",
    },
    "& .RaButton-label-7": {
      paddingRight: "5px",
    },
  },
  fir: {
    marginRight: "10px",
    display: "inline-grid",
    "& .MuiFilledInput-root": {
      border: "2px solid #D9D9D9",
      background: "#fff",
      fontWeight: "400",
      fontSize: "1rem",
      color: "rgb(69, 90, 100)",
      borderStartStartRadius: "15px",
      borderStartEndRadius: "15px",
      borderBottomLeftRadius: "15px",
      borderBottomRightRadius: "15px",
    },
    "& .MuiFilledInput-filled:focus": {
      border: "2px solid #0863cc",
    },

    "& .MuiFilledInput-underline:before": {
      content: "",
      position: "absolute",
      transform: "scaleX(0)",
    },

    "& .MuiFilledInput-underline:after ": {
      transform: "scaleX(0)",
      transition: "transform 200ms cubic-bezier(0.0, 0, 0.5, 1) 0ms",
    },
    "& .MuiSelect-select:focus": {
      background: "#fff",
      borderStartStartRadius: "20px",
      borderStartEndRadius: "20px",
      borderBottomLeftRadius: "20px",
      borderBottomRightRadius: "20px",
    },
  },
  sec: {
    display: "inline-grid",
    marginRight: "10px",
    marginLeft: "15px",
    //background:'red',
    "& .MuiFilledInput-root": {
      width: "400px",
      border: "2px solid #D9D9D9",
      background: "#fff",
      fontWeight: "400",
      fontSize: "1rem",
      color: "rgb(69, 90, 100)",
      borderStartStartRadius: "15px",
      borderStartEndRadius: "15px",
      borderBottomLeftRadius: "15px",
      borderBottomRightRadius: "15px",
    },
    "& .MuiFilledInput-filled:focus": {
      border: "2px solid #0863cc",
    },

    "& .MuiFilledInput-underline:before": {
      content: "",
      position: "absolute",
      transform: "scaleX(0)",
    },

    "& .MuiFilledInput-underline:after ": {
      transform: "scaleX(0)",
      transition: "transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
    },
    "& .MuiSelect-select:focus": {
      background: "#fff",
      borderStartStartRadius: "17px",
      borderStartEndRadius: "17px",
      borderBottomLeftRadius: "17px",
      borderBottomRightRadius: "17px",
    },
  },

  text: {
    "& .MuiFilledInput-root": {
      display: "inline-grid",
      marginRight: "10px",
      width: "665px",
      height: "100px",
      border: "2px solid #D9D9D9",
      background: "#fff",
      borderStartStartRadius: "15px",
      borderStartEndRadius: "15px",
      borderBottomLeftRadius: "15px",
      borderBottomRightRadius: "15px",
      color: "rgb(69, 90, 100)",
      boxSizing: "borderBox",
      cursor: "text",
      //display: "inlineFlex",
    },

    "& .MuiFilledInput-underline:before": {
      content: "",
      position: "absolute",
      transform: "scaleX(0)",
    },

    "& .MuiFilledInput-underline:after ": {
      transform: "scaleX(0)",
      transition: "transform 200ms cubic-bezier(0.0, 0, 0.5, 1) 0ms",
    },
  },
});

const Separator = () => <Box pt="0em" />;

export const WorkRequestCreate = (props) => {
  const classes = useStyles();
  var today = new Date();
  var time = moment().format("HH:mm");
  const FullNameField = ({ record }) => (
    <span>
      {record.WorkPriorityCode}_{record.WorkPriorityName}
    </span>
  );
  const FullNameField1 = ({ record }) => (
    <span>
      {record.TypeWrCode}_{record.TypeWrName}
    </span>
  );

  return (
    <Create
      actions={<CreateActions />}
      className={classes.Create}
      {...props}
      title="فرم درخواست کار"
    >
      <SimpleForm
        className={classes.form}
        redirect="show"
        validate={validateError}
        initialValues={{
          WRDateOfRegistration: today,
          WRDate: today,
          WRTimeOfRegistration: time,
          WRTime: time,
        }}
      >
        <Separator />
        <ReferenceInput
          formClassName={classes.fir}
          disabled
          label="کد تجهیز"
          textAlgin="right"
          source="AssetSubdivisionID"
          reference="PMWorks/AssetSubdivision"
        >
          <SelectInput optionText="AssetCode" />
        </ReferenceInput>
        <AssetSubdivisionRefrenceInput
          formClassName={classes.sec}
          disabled
          label="نام تجهیز"
          textAlgin="right"
          source="AssetSubdivisionID"
          reference="PMWorks/AssetSubdivision"
          perPage={10000}
        />
        <Separator />
        <FormDataConsumer formClassName={classes.fir} className={classes.sel}>
          {({ formData, ...rest }) =>
            formData.AssetSubdivisionID && (
              <ReferenceInput
                disabled
                label="کد کلاس تجهیز"
                textAlgin="right"
                source="AssetSubdivisionID"
                reference="PMWorks/AssetSubdivision"
                {...rest}
              >
                <SelectInput optionText="AssetClassCodeChain" />
              </ReferenceInput>
            )
          }
        </FormDataConsumer>
        <FormDataConsumer formClassName={classes.sec}>
          {({ formData, ...rest }) =>
            formData.AssetSubdivisionID && (
              <ReferenceInput
                disabled
                label="نام کلاس تجهیز"
                textAlgin="right"
                source="AssetSubdivisionID"
                reference="PMWorks/AssetSubdivision"
                {...rest}
              >
                <SelectInput optionText="AssetClassNameChain" />
              </ReferenceInput>
            )
          }
        </FormDataConsumer>

        <Separator />
        <DateInput formClassName={classes.fir} label="تاریخ" source="WRDate" />
        <TimeInput
          formClassName={classes.sec}
          label="ساعت"
          textAlgin="right"
          source="WRTime"
        />
        <Separator />
        <FormDataConsumer className={classes.sel} formClassName={classes.fir}>
          {({ formData, ...rest }) =>
            formData.AssetSubdivisionID && (
              <ReferenceInput
                disabled
                label="کد خرابی"
                textAlgin="right"
                source="FailureModeID"
                reference="PMWorks/FailureAsset"
                {...rest}
              >
                <SelectInput optionText="FailureModeCode" />
              </ReferenceInput>
            )
          }
        </FormDataConsumer>
        <FormDataConsumer formClassName={classes.sec}>
          {({ formData, ...rest }) =>
            formData.AssetSubdivisionID && (
              <FailureModeRefrenceInput
                label="نام خرابی"
                textAlgin="right"
                source="FailureModeID"
                reference="PMWorks/FailureAsset"
                perPage={10000}
                filter={{ AssetClassID: formData.AssetSubdivisionID }}
                {...rest}
              />
            )
          }
        </FormDataConsumer>
        <Separator />
        <FormDataConsumer formClassName={classes.fir}>
          {({ formData, ...rest }) =>
            formData.AssetSubdivisionID && (
              <ReferenceInput
                label="اولویت"
                textAlgin="right"
                source="WorkPriorityID"
                reference="PMWorks/WorkPriority"
                sort={{ field: "id", order: "ASC" }}
                {...rest}
              >
                <SelectInput optionText={<FullNameField />} />
              </ReferenceInput>
            )
          }
        </FormDataConsumer>
        <FormDataConsumer formClassName={classes.sec}>
          {({ formData, ...rest }) =>
            formData.AssetSubdivisionID && (
              <ReferenceInput
                className={classes.sel}
                label="نوع درخواست"
                textAlgin="right"
                source="TypeWrID"
                reference="PMWorks/TypeWr"
                sort={{ field: "id", order: "ASC" }}
                {...rest}
              >
                <SelectInput optionText={<FullNameField1 />} />
              </ReferenceInput>
            )
          }
        </FormDataConsumer>
        <FormDataConsumer className={classes.text}>
          {({ formData, ...rest }) =>
            formData.AssetSubdivisionID && (
              <TextInput
                multiline
                label="توضیحات"
                textAlgin="right"
                source="WRDescription"
                {...rest}
              />
            )
          }
        </FormDataConsumer>
      </SimpleForm>
    </Create>
  );
};
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField'
import asyncValidate from "./asyncValidate"
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 500,
        },
    },
}));

const validate = values => {

    const errors = {};
    const requiredFields = [
        'firstName',
        'lastName',
        'email',
        'favoriteColor',
        'notes'
    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })
    if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address'
    }
    return errors
};

const renderTextField = ({
                             label,
                             input,
                             meta: { touched, invalid, error },
                             ...custom
                         }) => (
    <TextField
        variant="outlined"
        label={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
    />
);


const MaterialUiForm = ({handleSubmit, pristine, submitting}) => {
    const classes = useStyles();
    return (
        <form className={classes.root} onSubmit={handleSubmit}>
            <div>
                <Field name="name" component={renderTextField} label="First Name"/>
            </div>
            <div>
                <Field name="lastName" component={renderTextField} label="Last Name"/>
            </div>
            <div>
                <Field name="email" component={renderTextField} label="Email"/>
            </div>
            <div>

                <Button type="submit" color="secondary" disabled={pristine || submitting}>
                    ДОБАВИТЬ
                </Button>
            </div>
        </form>
    )
};

export default reduxForm({
    form: 'MaterialUiForm', // a unique identifier for this form
    validate,
    asyncValidate
})(MaterialUiForm)
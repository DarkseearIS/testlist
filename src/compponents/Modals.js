import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import MaterialUiForm from "./MaterialUiForm";
import {userAPI} from "../api/api";
import {getUser} from "../reducers/user-reducer";
import {compose} from "redux";
import {connect} from "react-redux";
import Paper from "@material-ui/core/Paper";


function getModalStyle() {
    const top = 50 ;
    const left = 50 ;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 500,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #fff',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    },
    stylePaper: {
        height: theme.spacing(7),
        borderStyle:'dashed',
        cursor:"pointer",
        textAlign:"center",
        fontSize: "36px"
    }
}));

const Modals = (props) => {

    const onSubmit = (data) => {
        let {name, lastName, email} = data;
        userAPI.setUserInfo({name, lastName, email})
            .then(response => props.getUser())
            .then(setOpen(false));
    };

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title"> Создание пользователя</h2>

            <MaterialUiForm onSubmit={onSubmit}/>
        </div>
    );

    return (
        <div>


            <Paper className={classes.stylePaper} style={{borderStyle:'dashed', cursor:"pointer"}} elevation={0} onClick={handleOpen}>
                    +
            </Paper>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user:state.userReducer.user
    }
};



export default compose(
    connect(mapStateToProps, {getUser})
)(Modals);
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core/styles";
import deepOrange from "@material-ui/core/colors/deepOrange";
import ModalsEdit from "./ModalsEdit";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(2),
        }
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
        marginTop:'4%'
    },
    idStyle: {
        width: '50px',
        height:'35px',
        marginLeft:'18%',
        fontSize: '26px'
    },
    idStyleDiv: {
        textAlign:"center"
    },
    modalEdit: {
        width:'100%',
        display:'flex',
        boxShadow: theme.shadows[7],
        borderTop:'0px solid ',
        paddingTop: '5px'
    },
    info: {
        marginTop:'3%'
    },
    modalsEdit: {
        marginLeft:'3px'
    }
}));

const UserInfo = ({id, name, lastName, email, deleteUser, _id}) => {

    const classes = useStyles();

    const delUser = () => {
        deleteUser(_id);
    };

    return <div>
        <div className={classes.root}>
            <Avatar alt="Remy Sharp" className={classes.orange}>
                {name.charAt(0) + lastName.charAt(0)}
            </Avatar>
            <div className={classes.info}>
                <div> {name + " " + lastName}</div>
                <div> {email} </div>
            </div>
        </div>

        <div className={classes.modalEdit}>
            <div className={classes.idStyle}>
                <div className={classes.idStyleDiv}>
                    №{id}
                </div>
            </div>
            <div className={classes.modalsEdit}>
                <ModalsEdit delUser={delUser} id={_id} />
            </div>
        </div>
    </div>
};

export default UserInfo;
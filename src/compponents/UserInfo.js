import React from "react";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core/styles";
import deepOrange from "@material-ui/core/colors/deepOrange";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    idStyle: {
        backgroundColor: "silver",
        width: '50px',
        margin:'0 0 0 ',
        fontSize: '26px'
    },
    idStyleDiv: {
        textAlign:"center",
        marginTop:"20%"
    }
}));

const UserInfo = ({id, name, lastName, email}) => {

    const classes = useStyles();

    return <div>
        <div className={classes.root}>
            <div className={classes.idStyle} >
               <div className={classes.idStyleDiv}>
                   #{id}
               </div>
            </div>
            <Avatar alt="Remy Sharp" className={classes.orange} >
                {name.charAt(0) + lastName.charAt(0)}
            </Avatar>
            <div>
                <div> {name + " " + lastName} </div>
                <div> {email} </div>
            </div>
        </div>

    </div>
};

export default UserInfo;
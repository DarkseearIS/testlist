import React, {useEffect, useState} from "react";
import {deleteUser, getUser} from "../reducers/user-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import UserInfo from "./UserInfo";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Modals from "./Modals";

const ShowUser = (props) => {

    let [user, setUser] = useState(props.user);


    useEffect(() => {
        if (!props.user) props.getUser();
        setUser(props.user);
    }, [props.user]);


    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(4),
                width: theme.spacing(32),
                height: theme.spacing(7)
            },
        },
    }));


    let count = 0;

    const countS = () => {
        count++;
    };

    const classes = useStyles();
    return <div className={classes.root}>

        {!user ? null : user.map(el => <div key={el._id}>
            {countS()}
            <Paper elevation={3}>
                <UserInfo _id={el._id} id={count} email={el.email} name={el.name} lastName={el.lastName}
                          deleteUser={props.deleteUser} classesPaper={classes}/>
            </Paper>
        </div>
        )}
        <div>
            <Modals/>
        </div>
    </div>
};

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
}

export default compose(
    connect(mapStateToProps, {getUser, deleteUser})
)(ShowUser);
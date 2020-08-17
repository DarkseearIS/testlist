import React, {useEffect, useState} from "react";
import {getUser} from "../reducers/user-reducer";
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
                margin: theme.spacing(1),
                width: theme.spacing(35),
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
                <UserInfo id={count} email={el.email} name={el.name} lastName={el.lastName}/>
            </Paper>

        </div>)}

        <div>
            <Modals classesPaper={classes}/>
        </div>


    </div>


};


const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
}

export default compose(
    connect(mapStateToProps, {getUser})
)(ShowUser);
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import UserInfo from "./UserInfo";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Modals from "./Modals";
import {deleteUser, getUser} from "../reducers/user-reducer";
import {getUserInfo} from "../selectors/selectors";

const ShowUser = (props) => {
    const dispatch = useDispatch();
    const userInfo = useSelector(getUserInfo);
    const getAllUser = () => {dispatch(getUser())};
    const deleteOneUser = (id) => {dispatch(deleteUser(id))};

    let [user, setUser] = useState(userInfo);

    useEffect(() => {
        if (!userInfo) getAllUser();
        setUser(userInfo);
    }, [userInfo]);

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
                <UserInfo _id={el._id} id={count} email={el.email} name={el.name}
                          lastName={el.lastName} deleteOneUser={deleteOneUser}
                          classesPaper={classes} userInfo={userInfo}
                          getAllUser={getAllUser}/>
            </Paper>
        </div>
        )}
        <div>
            <Modals getAllUser={getAllUser} />
        </div>
    </div>
};

export default ShowUser;
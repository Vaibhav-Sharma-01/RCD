/* eslint-disable */
import VideoPlayer from "../Components/VideoPlayer";
import Sidebar from "../Components/Sidebar";
import Notifications from "../Components/Notifications";
import { ContextProvider } from "../Components/Context";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    appBar: {
      borderRadius: 15,
      margin: '30px 100px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '600px',
      border: '2px solid black',
  
      [theme.breakpoints.down('xs')]: {
        width: '90%',
      },
    },
    image: {
      marginLeft: '15px',
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
  }));

export default function index() {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <ContextProvider>
            <VideoPlayer />
            <Sidebar>
                <Notifications />
            </Sidebar>
            </ContextProvider>
        </div>
    )
}

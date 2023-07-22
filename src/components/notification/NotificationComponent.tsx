import { Alert, Snackbar } from "@mui/material";

const NotificationComponent = (props: { open: any; handleClose: any; message: string}) =>{
    const { open, handleClose, message } = props;
    return (
      <div>
        {" "}
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: "top",
            horizontal: "center"}}>
          <Alert onClose={handleClose} severity="success">
            {message}
          </Alert>
        </Snackbar>
      </div>
    );
}
export default NotificationComponent;
import React from 'react'
import { IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Button, MenuItem, List, ListItem, Input, InputBase, Select } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/Create';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { KeyboardDatePicker } from "@material-ui/pickers";

const BootstrapInput = withStyles((theme) => ({
    modal: {
        float: 'right',
        paddingLeft: 500
    },
    input: {
        borderRadius: 0,
        position: 'relative',
        backgroundColor: "#fff",
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        '&:focus': {
            borderColor: '#fff',
        }
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    title: {
        justifyContent: 'space-between',
        margin: 20,
        padding: 20,
        backgroundColor: "#6884c3",
        color: "#fff"
    },
    cross: {
        float: 'right',
        padding: 0,
        paddingTop: 5,
        color: 'white'

    },
    dialogPaper: {
        borderRadius: 0,
        width: 700,
        maxWidth: 1000,
        height: 500
    },
    input: {
        border: '1px solid #ced4da',
        padding: 10,
        width: 400
    },
    date: {
        border: '1px solid #ced4da',
        width: 422,
        padding: "10px 10px 10px 7px",
        '& .MuiInput-underline:before': {
            borderBottom: 'none',
        },
        '& .MuiInput-underline:hover:before': {
            borderBottom: 'none',
        },
        '& .MuiInput-underline:after': {
            borderBottom: 'none',
        },
    },
    listItem: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    action: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    button1: {
        border: '1px solid red',
        textTransform: 'initial',
        color: 'red',
        width: 400,
        '&:hover': {
            backgroundColor: '#fff'
        }
    },
    button2: {
        color: '#fff',
        backgroundColor: '#6ba586',
        textTransform: 'initial',
        width: 400,
        '&:hover': {
            backgroundColor: '#6ba586'
        }
    }

}))



export default function NoticeBoardModale() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <>
            <IconButton onClick={handleClickOpen} className={classes.modal}>
                <CreateIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" PaperProps={{ classes: { root: classes.dialogPaper } }}>
                <DialogTitle id="form-dialog-title" className={classes.title}>
                    Create Notice
                    <IconButton className={classes.cross} onClick={handleClose}>
                        <CloseRoundedIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <List>
                        <ListItem className={classes.listItem}>
                            Content
                            <Input disableUnderline={true} placeholder="..." inputProps={{ className: classes.input }} />
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            Expired Date
                            <KeyboardDatePicker
                                disableUnderline
                                views={["month", "date", "year"]}
                                format="MMMM D, yyyy"
                                value={selectedDate}
                                onChange={handleDateChange}
                                className={classes.date}
                            />
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            Project List
                            <Input disableUnderline={true} inputProps={{ className: classes.input }} accept="file/*" type="file" />
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            Permission
                            <Select
                                style={{ width: 422 }}
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                // value={age}
                                // onChange={handleChange}
                                input={<BootstrapInput />}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>Value 1</MenuItem>
                                <MenuItem value={2}>Value 2</MenuItem>
                                <MenuItem value={3}>Value 3</MenuItem>
                            </Select>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            Attachment
                            <Input disableUnderline={true} inputProps={{ className: classes.input }} accept="file/*" type="file" />
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            URL
                            <Input disableUnderline={true} placeholder="Ex: google.com" inputProps={{ className: classes.input }} />
                        </ListItem>
                    </List>
                </DialogContent>
                <DialogActions className={classes.action}>
                    <Button onClick={handleClose} className={classes.button1} variant="outlined">
                        Cancel
                            </Button>
                    <Button onClick={handleClose} className={classes.button2} variant="contained">
                        Submit
                            </Button>
                </DialogActions>
            </Dialog>

        </>
    )
}

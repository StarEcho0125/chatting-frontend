import React from 'react'
import { Container, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SendIcon from '@material-ui/icons/Send';
import { Editor } from "@tinymce/tinymce-react";
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import jQuery from 'jquery'
import Tooltip from '@material-ui/core/Tooltip';
import * as Actions from './store/actions';
import { useDispatch, useSelector } from 'react-redux';
import './Chat.css'

const useStyles = makeStyles(theme => ({
    container: {
        border: 'none',
        position: 'relative',
        width: '100%',
        padding: 0,
        margom: 0,
        maxWidth: '100%!important',
    },
    containerBar: {
        border: 'none',
        display: 'flex',
        position: 'relative',
        top: '90%',
        maxWidth: '100%',
        height: 50,
        margin: 0,
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        padding: 10,
        bottom: 0,
        width: '100%',
        margin: 0
    },
    inputUpload: {
        display: 'none'
    },
    sendIcon: {
        backgroundColor: '#61DAFB',
        padding: 5,
    },
    msgSimple: {
        width: '100%', 
        visibility: 'hidden', 
        height: '50px', 
        padding: '0px',
        marginRight: '10px',
        border: 'none'
    },
    msgFull: {
        width: '100%',
        border: 'none',
        margin: '0px'
    }
}));

export default function ChatEditor() {
    const [displayEditor, setDisplayEditor] = React.useState(false);
    const [msgContent, setMsgContent] = React.useState('');
    const [shouldSend, setShouldSend] = React.useState(true);

    const editorRefSmall = React.useRef(null);
    const editorRefFull = React.useRef(null);

    const chat = useSelector(({ chatApp }) => chatApp.chat);
    const user = useSelector(({ chatApp }) => chatApp.user);
    const dispatch = useDispatch();

    const classes = useStyles();

    const handleClickExpand = () => {
        setDisplayEditor(true);
        console.log(editorRefFull.current.editor);
    }
    const handleClickCollapse = () => {
        setDisplayEditor(false);
        editorRefSmall.current.editor.editorManager.setActive(editorRefSmall.current.editor);
        editorRefFull.current.editor.editorManager.execCommand('mceFocus',false,'id-full-editor');
        editorRefSmall.current.editor.selection.select(editorRefSmall.current.editor.getBody(), true);
        editorRefSmall.current.editor.selection.collapse(false);
    }
    const handleMsgContentChange = (e, editor) => {
        setMsgContent(e);
    }
    const ProcessKeypress = (e) => {
        if(!displayEditor) {
            if(e.key === 'Enter') {
                if(!e.shiftKey) sendMessage();
            }
        }
    }

    const sendMessage = () => {
		if (msgContent === '') {
			return;
		}

		dispatch(Actions.sendMessage(msgContent, chat.id, user.id)).then(() => {
            setMsgContent('');
            setDisplayEditor(false);
		});
    }

    let tinymceSimpleConfig = {
        menubar: false,
        statusbar: false,
        plugins: ["wordcount", "lists", "powerpaste", "autolink"],
        toolbar: false,
        powerpaste_word_import: 'clean',
        powerpaste_html_import: 'clean',
        placeholder: "Type Comment...",
        width: "100%",
        height: "50px",
        content_style: 'p {line-height: 1.2; margin: 0}' + 'body {margin: 5px}' + 
            '.mce-content-body[data-mce-placeholder]:not(.mce-visualblocks)::before {top: -5px}' +
            'html { cursor: text }',
        auto_focus: true
    };

    let tinymceFullConfig = {
        plugins: ["lists", "code", "codesample"],
        menubar: false,
        statusbar: false,
        toolbar: [
            "bold italic underline | strikethrough subscript superscript | bullist numlist | blockquote code codesample"
        ],
        powerpaste_word_import: "clean",
        powerpaste_html_import: "clean",
        height: "400px",
        content_style: 'p {line-height: 1.2; margin: 0px;}' + 'body {margin: 10px}' + 'html { cursor: text }',
        resize: false,
        auto_focus: true
    };

    React.useEffect(() => { 
        if(displayEditor) {
            jQuery('#id-simple').css('visibility', 'hidden');
            jQuery('#id-full').show();
            editorRefFull.current.editor.editorManager.setActive(editorRefFull.current.editor);
            editorRefFull.current.editor.editorManager.execCommand('mceFocus',false,'id-full-editor');
            editorRefFull.current.editor.selection.select(editorRefFull.current.editor.getBody(), true);
            editorRefFull.current.editor.selection.collapse(false);
        } else {
            jQuery('#id-simple').css('visibility', 'visible');
            jQuery('#id-full').hide();
        }
    }, [displayEditor]);

    return (
        <Container className={classes.container}>
            <div className={classes.msgFull} id='id-full'>
                <Editor 
                    apiKey="xxjl9f0c3kj32tls4w26aauf5jn23awd6gfmlc1wmpo7w7uc" 
                    init={tinymceFullConfig} 
                    onEditorChange={handleMsgContentChange}
                    value={msgContent}
                    ref={editorRefFull}
                    id='id-full-editor'
                />
            </div>
            <Container className={classes.containerBar}>
                <label htmlFor="icon-button-file" style={{ padding: 0, margin: 0 }}>
                    <Tooltip title="Attach files">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <AttachFileIcon />
                        </IconButton>
                    </Tooltip>
                </label>
                { !displayEditor ?
                    <Tooltip title="Expand/reduce text area">
                        <IconButton onClick={handleClickExpand}>
                            <ExpandLessRoundedIcon />
                        </IconButton> 
                    </Tooltip> :
                    <Tooltip title="Expand/reduce text area">
                        <IconButton onClick={handleClickCollapse}>
                            <ExpandMoreRoundedIcon />
                        </IconButton>
                    </Tooltip>
                }
                <input accept="image/*" className={classes.inputUpload} id="icon-button-file" type="file" />
                <div className={classes.msgSimple} id='id-simple'>
                    <Editor 
                        apiKey="xxjl9f0c3kj32tls4w26aauf5jn23awd6gfmlc1wmpo7w7uc" 
                        init={tinymceSimpleConfig}
                        onKeyDown={ProcessKeypress}
                        value={msgContent}
                        ref={editorRefSmall}
                        id='id-simple-editor'
                        onEditorChange={handleMsgContentChange}
                    />   
                </div>
                <Tooltip title="Send">
                    <IconButton className={classes.sendIcon} onClick={sendMessage} >
                        <SendIcon style={{ color: 'white' }} />
                    </IconButton>
                </Tooltip>
            </Container>
        </Container>
    )
}

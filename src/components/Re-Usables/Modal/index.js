import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

export function SimpleDialog(props) {
    const {isOpen, children, onClose} = props;
    return (
        <Dialog aria-labelledby="simple-dialog-title" open={isOpen} onClose={onClose} fullWidth>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    );
}
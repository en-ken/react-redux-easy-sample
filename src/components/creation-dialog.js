import React from "react";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "material-ui/Dialog";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";

import LoadingProgress from "../components/loading-progress";

/**
 * 新規作成ダイアログ
 */
export default class CreationDialog extends React.Component {
  render() {
    const {
      loaded,
      isOpen,
      handleClose,
      handleCreateUser,
    } = this.props;

    const onChange = e => {
      this[e.target.id] = e.target.value;
    };
    const onCreate = () => handleCreateUser(this.name, this.info);
    const onCancel = () => handleClose();

    return (
      <div>
        <Dialog
          open={isOpen}
          onRequestClose={handleClose}>
          <DialogTitle>Create New User</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Input User Info
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              onChange={onChange}
            />
            <TextField
              margin="dense"
              id="info"
              label="Info"
              type="text"
              fullWidth
              onChange={onChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={onCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={onCreate} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
        {!loaded && <LoadingProgress {...this.props} />}
      </div>
    );

  }
}

import React from "react";
import { connect } from "react-redux";

import Table, {
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "material-ui/Table";
import Button from "material-ui/Button";
import { withStyles } from "material-ui/styles";

import CreationDialog from "../components/creation-dialog";
import LoadingProgress from "../components/loading-progress";

import actions from "../actions";
import { fetchUserList, addUser } from "../apis";

const styles = () => ({
  loading: {
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1501,
    position: "fixed",
  },
  root: {
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr 15vh",
  },
  table: {
    gridColumn: 1,
    gridRow: 1,
  },
  thead: {
    display: "block",
  },
  tbody: {
    display: "block",
    position: "absolute",
    width: "100vw",
    height: "80vh",
    overflowX: "hidden",
    overflowY: "scroll"
  },
  tcell: {
    width: "50vw"
  },
  bottom: {
    gridColumn: 1,
    gridRow: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});


/**
 * ユーザー一覧
 */
class UserList extends React.Component {
  componentWillMount() {
    this.props.handleFetchUsers();
  }

  render() {
    const {
      classes,

      //State
      loaded,
      isOpen,
      users,

      //Dispatch
      handleOpen,
    } = this.props;

    const headers = ["name", "info"];

    if (!loaded && !isOpen) {
      return <LoadingProgress {...this.props} />;
    }

    return (
      <div className={classes.root}>
        <Table className={classes.table}>
          <TableHead className={classes.thead}>
            <TableRow>
              {
                headers.map((header, i) =>
                  <TableCell key={i} className={classes.tcell}>{header}</TableCell>)
              }
            </TableRow>
          </TableHead>
          <TableBody className={classes.tbody} >
            {
              users.map((user, i) =>
                <TableRow key={i}>
                  {
                    headers.map((header, j) =>
                      <TableCell key={j} className={classes.tcell}>{user[header]}</TableCell>)
                  }
                </TableRow>)
            }
          </TableBody>
        </Table>
        <div className={classes.bottom}>
          <Button raised onClick={handleOpen}>New User</Button>
        </div>
        <CreationDialog {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.userList });


const mapDispatchToProps = (dispatch) => {
  const fetchUsers = () => {
    dispatch(actions.fetchUserList);
    fetchUserList()
      .then(res => dispatch(actions.fetchUserListSuccess(res.data)));
  };

  return {
    handleFetchUsers: () => fetchUsers(),
    handleOpen: () => {
      dispatch(actions.moveToCreationPage);
    },
    handleCreateUser: (name, info) => {
      if (!name || !info) return;
      dispatch(actions.createUser);
      addUser(name, info)
        .then(() => {
          dispatch(actions.createUserSuccess);
          dispatch(actions.moveBackToListPage);
          dispatch(actions.refresh);
          fetchUsers();
        });
    },
    handleClose: () => {
      dispatch(actions.moveBackToListPage);
    },
  };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(UserList));
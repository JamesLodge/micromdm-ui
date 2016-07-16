'use strict';
import React, {Component, PropTypes} from 'react';
import LoginForm from '../forms/LoginForm';
import Dialog from 'material-ui/Dialog';

class LoginDialog extends Component {

  static propTypes = {
    open: PropTypes.bool.isRequired,
    setEndpoint: PropTypes.func.isRequired,
    ui: PropTypes.shape({
      setLoginDialogVisible: PropTypes.func.isRequired
    })
  };

  handleClose = () => {
    this.props.ui.setLoginDialogVisible(false);
  };

  handleSubmit (values) {
    this.props.setEndpoint(values.endpoint);
  };

  render () {
    return (
      <Dialog
        onRequestClose={this.handleClose}
        title='MicroMDM'
        contentClassName='Login'
        open
      >
        <LoginForm onSubmit={this.handleSubmit} />
      </Dialog>
    );
  }
}

export default LoginDialog;
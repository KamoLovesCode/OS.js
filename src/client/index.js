import {
  Core,
  CoreServiceProvider,
  DesktopServiceProvider,
  VFSServiceProvider,
  NotificationServiceProvider,
  SettingsServiceProvider,
  AuthServiceProvider
} from '@osjs/client';

import {PanelServiceProvider} from '@osjs/panels';
import {GUIServiceProvider} from '@osjs/gui';
import {DialogServiceProvider} from '@osjs/dialogs';
import config from './config.js';
import './index.scss';

const init = () => {
  const osjs = new Core(config, {});

  // Register your service providers
  osjs.register(CoreServiceProvider);
  osjs.register(DesktopServiceProvider);
  osjs.register(VFSServiceProvider);
  osjs.register(NotificationServiceProvider);
  osjs.register(SettingsServiceProvider, {before: true});
  osjs.register(AuthServiceProvider, {before: true});
  osjs.register(PanelServiceProvider);
  osjs.register(DialogServiceProvider);
  osjs.register(GUIServiceProvider);

  // Function to prompt for password
  const showPasswordDialog = (core) => {
    return new Promise((resolve, reject) => {
      core.make('osjs/dialogs').create({
        title: 'Enter Password',
        message: 'Please enter your password',
        input: {type: 'password', placeholder: 'Password'}
      }, (btn, value) => {
        if (btn === 'ok' && value === 'your_password') {
          resolve(); // Password is correct
        } else {
          reject(); // Incorrect password
        }
      });
    });
  };

  // Handle settings click
  osjs.on('menu:click:settings', () => {
    showPasswordDialog(osjs)
      .then(() => {
        osjs.run('Settings'); // Open settings app
      })
      .catch(() => {
        osjs.dialog('Error', {message: 'Incorrect password!'});
      });
  });

  osjs.boot();
};

window.addEventListener('DOMContentLoaded', () => init());

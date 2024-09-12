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
  console.log("Initializing OS.js...");

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
  
  console.log("Service providers registered.");

  osjs.boot()
    .then(() => {
      console.log("OS.js boot complete.");

      // Automatically launch MyApplication after OS.js boots
      osjs.run('MyApplication');
    })
    .catch((err) => {
      console.error("Error during OS.js boot:", err);
    });
};

window.addEventListener('DOMContentLoaded', () => {
  init();
});
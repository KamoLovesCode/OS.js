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

  // Register the PanelServiceProvider and set the menu at the bottom
  osjs.register(PanelServiceProvider, {
    position: 'bottom'  // Set the panel position to the bottom
  });

  osjs.register(DialogServiceProvider);
  osjs.register(GUIServiceProvider);

  // Example of how to open a context menu at the bottom of the screen
  const openContextMenu = (event) => {
    const menu = osjs.make('osjs/contextmenu', {
      position: {
        left: event.clientX,      // Position it based on the click event’s X coordinate
        top: window.innerHeight - event.clientY   // Position it relative to the bottom
      },
      menu: [
        {label: 'Option 1', onclick: () => console.log('Clicked Option 1')},
        {label: 'Option 2', onclick: () => console.log('Clicked Option 2')},
        {
          label: 'Sub Menu',
          items: [
            {label: 'Sub Item 1', onclick: () => console.log('Clicked Sub Item 1')},
            {label: 'Sub Item 2', onclick: () => console.log('Clicked Sub Item 2')}
          ]
        }
      ]
    });

    menu.show();
  };

  // Example event listener to trigger context menu
  document.addEventListener('contextmenu', (event) => {
    event.preventDefault(); // Prevent the default context menu
    openContextMenu(event); // Open your custom context menu
  });

  osjs.boot();
};

window.addEventListener('DOMContentLoaded', () => init());

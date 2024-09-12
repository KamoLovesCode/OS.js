import osjs from 'osjs';
import {name as applicationName} from './metadata.json';

// Our launcher
const register = (core, args, options, metadata) => {
  // Create a new Application instance
  const proc = core.make('osjs/application', {args, options, metadata});

  // Create a new Window instance and center it on the screen
  proc
    .createWindow({
      id: 'WelcomeWindow',
      title: metadata.title.en_EN,
      icon: proc.resource(proc.metadata.icon),
      dimension: {width: 500, height: 400}, // Fixed window size
      position: 'center',  // Automatically centers the window
      attributes: {
        resizable: false,   // Make window non-resizable
        minDimension: {width: 500, height: 400}, // Set minimum size to prevent resizing below fixed size
        maxDimension: {width: 500, height: 400}, // Set maximum size to prevent resizing above fixed size
        overflow: 'hidden'  // Ensure no overflow within the window
      }
    })
    .on('destroy', () => proc.destroy())
    .render($content => {
      const iframe = document.createElement('iframe');
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.src = proc.resource('/data/index.html');
      iframe.setAttribute('border', '0');
      iframe.style.overflow = 'hidden'; // Disable overflow inside the iframe
      $content.appendChild(iframe);
    });

  return proc;
};

// Creates the internal callback function when OS.js launches an application
osjs.register(applicationName, register);

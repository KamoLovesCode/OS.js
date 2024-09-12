/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2020, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 */

const {
  Core,
  CoreServiceProvider,
  PackageServiceProvider,
  VFSServiceProvider,
  AuthServiceProvider,
  SettingsServiceProvider
} = require('@osjs/server');


const config = require('./config.js');
const osjs = new Core(config, {});

// LiveReload Setup
const livereload = require('livereload');
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(__dirname + "/dist"); // Assuming your CSS is in the 'public' directory

const connectLiveReload = require('connect-livereload');
const express = require('express');
const app = express();

// Add live reload middleware before other routes
app.use(connectLiveReload());

osjs.register(CoreServiceProvider, {before: true});
osjs.register(PackageServiceProvider);
osjs.register(VFSServiceProvider);
osjs.register(AuthServiceProvider);
osjs.register(SettingsServiceProvider);

// Handle server shutdowns
const shutdown = signal => (error) => {
  if (error instanceof Error) {
    console.error(error);
  }
  osjs.destroy(() => process.exit(signal));
};

process.on('SIGTERM', shutdown(0));
process.on('SIGINT', shutdown(0));
process.on('exit', shutdown(0));

osjs.boot().catch(shutdown(1));

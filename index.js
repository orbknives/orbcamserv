/**
 * orbknives
 */

// Declare imports.
var express = require('express');
var ffmpeg = require('fluent-ffmpeg');
var logger = require('morgan');
var parser = require('body-parser');

var app = express();
app.use(logger('dev'));
app.use(parser.json());

console.log('Testing...');



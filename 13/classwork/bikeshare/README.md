## Capital Bikeshare

### Description

This assignment serves to introduce the concepts of working with an API and asynchronous code, specifically in a test-driven way.

## Objectives

### Learning Objectives

After completing this assignment, you should...

* Understand asynchronous JavaScript
* Understand AJAX
* Understand iterating over an array with underscore

### Performance Objectives

After completing this assignment, you should be able to effectively use:

* jQuery AJAX
* Asynchronous test-driven JavaScript

## Details

The code that runs this application serves up static files, like other applications, but also serves an additional route -- `/stations` -- which responds with JSON data, containing an array of objects representing the data for each of the stations in the [Capital Bikeshare](http://capitalbikeshare.com) system.

We're going to write the front end JavaScript that consumes the data from this route, transferred via AJAX.

## Normal Mode

Make all five tests pass.

## Hard Mode

There's an additional endpoint in the nodejs application -- `/live` -- which responds with a very similar JSON data structure; that data, however, is taken from the live Capital Bikeshare website. (As such, the endpoint will load more slowly.)

Using the live data, make something interesting! Two options you could consider..

* A data visualization (check out [ChartJS](http://www.chartjs.org/) for beautiful and kinda straightforward graphing library, if you want to go fancy)
* Show the nearest bikeshare stations using [Geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation)
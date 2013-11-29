# {%= name %} [![NPM version](https://badge.fury.io/js/{%= name %}.png)](http://badge.fury.io/js/{%= name %}) {% if (travis) { %} [![Build Status]({%= travis %}.png)]({%= travis %}){% } %}

> {%= description %}

This repo is based on [grunt-contrib](https://github.com/gruntjs/grunt-contrib/). To update this list, in the command line run run `grunt update`.

# Overview
This collection contains all of the assemble-contrib plugins.  We have made it available as a convenience for first-time users who would like to explore what Assemble has to offer. After review, it is recommended that you uninstall this collection and specify the plugins you wish to use individually.

A listing of each plugin and the current version included in this package is listed below. {% _.each(repos, function(plugin) { %}{% if(/\bcontrib\b/g.test(plugin.name)) { %}

## [{%= plugin.name %}]({%= plugin.url %}) [![NPM version](https://badge.fury.io/js/{%= plugin.name %}.png)](http://badge.fury.io/js/{%= plugin.name %})
> {%= plugin.description %} {% } %} {% }); %}

## Contributing
{%= _.contrib("contributing.md") %}

## Authors
{%= _.contrib("authors.md") %}

## License
{%= copyright %}
{%= license %}

***

{%= _.include("footer.md") %}
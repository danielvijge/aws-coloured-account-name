#!/bin/sh

VERSION=`cat src/manifest.json | jq '.version' -r`

zip -r aws-coloured-account-name-$VERSION.xpi src/* --exclude '*.DS_Store*'
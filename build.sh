#!/bin/sh

VERSION=`cat src/manifest.json | jq '.version' -r`

cd src
zip -r ../aws-coloured-account-name-$VERSION.xpi ./* --exclude '*.DS_Store*'
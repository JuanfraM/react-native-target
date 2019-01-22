#!/bin/bash

GREEN="\033[1;32m"
NOCOLOR="\033[0m"

echo -e "${GREEN} Removing node_modules ${NOCOLOR}"
rm -rf node_modules

echo -e "${GREEN} Cleanining yarn cache ${NOCOLOR}"
yarn cache clean

echo -e "${GREEN} Installing node_modules ${NOCOLOR}"
yarn install

echo -e "${GREEN} Generating react-native third-party ${NOCOLOR}"
react-native run-ios

echo -e "${GREEN} Configuring glog ${NOCOLOR}"
cd node_modules/react-native/third-party/glog-0.3.4
../../scripts/ios-configure-glog.sh
cd ../../../../

echo -e "${GREEN} Copying libfishhook.a ${NOCOLOR}"
cp ios/build/Build/Products/Debug-iphonesimulator/libfishhook.a node_modules/react-native/Libraries/WebSocket/

echo -e "${GREEN} Done! ${NOCOLOR}"

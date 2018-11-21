#!/usr/bin/env sh

set -e
git add .
DATE=`date +"%Y年%m月%d日 %H:%M:%S"`
# COMMIT = 
# echo 
# DATE = `date +%F
git commit -m "add docs ${DATE}"
# git push
cd -

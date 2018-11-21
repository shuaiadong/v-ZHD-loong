#!/usr/bin/env sh

set -e

git add .

DATE=`date +"%Y年%m月%d日 %H:%M:%S"`
echo "===================================add docs ${DATE}==================================="
git commit -m "add docs ${DATE}"

git push
echo "===================================成功====================="
cd -

#!/usr/bin/env sh

set -e
npm run docs:build

cd dist

git init
git add -A
git commit -m 'deploy'
echo '===========================准备push======================'
git push -f git@github.com:shuaiadong/v-ZHD-loong.git master:gh-pages


cd -

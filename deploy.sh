# 1、跳转到blog源文件目录，进行npm构建
cd ../blog
npm run build
echo ===========npm build success========

# 2、提交blog仓库到github
git add .
git commit -m $1
git push
echo ==========git push blog success========

# 3、删除旧数据，并复制新数据
cd ../zhaoyb-coder.github.io
rm -rf docs
mkdir docs
cp -rf ../blog/docs/.vuepress/dist/ docs
echo ==========copy success================

# 4、提交github
git add .
git commit -m $1
git push
echo ==========git push success===========

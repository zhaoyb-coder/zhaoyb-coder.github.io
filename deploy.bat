:: 1、跳转到blog源文件目录，进行npm构建
cd ..\blog
call npm run build
echo(===================== npm build success =====================)

:: 2、提交blog仓库到github
git add .
git commit -m %1
git push -f
echo(===================== git push success =====================)

:: 3、删除旧数据,并复制新数据
cd ..\zhaoyb-coder.github.io
rd /s /q docs
md docs
xcopy /s /e  ..\blog\docs\.vuepress\dist docs
echo(===================== dir copy success =====================)

:: 4、提交git
git add .
git commit -m %1
git push -f
echo(===================== git push success =====================)

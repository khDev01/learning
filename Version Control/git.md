# Learning Git

`git init` in a new directory to create a new git repository

`git clone /repository/path` to open a local repository

`git clone https://username@github.com/username/repository.git` clone remote repo

#### Add/Crate your files

Use `git add <filename>` to propose changes

Or use `git add *` to add all files

To commit changes use `git commit -m "commit message"

It is good practice to use a short and descriptive git message

Now the changes need to your repository  with `git push origin master`

If working on a different branch than master change `master` to your branch name

Create a new branch and switch to it with `git checkout -b branch-name`

Switch between branches using `git checkout master` change master to branch you want to switch to

Delete a branch with `git branch -d branch-name`

Update your local repository with `git pull`

Merge branches with `git merge <branch>` the branch named will merge to the current branch active

`git log` is a useful command to look at your repository's history

Use `git log --pretty=oneline` to get a commpressed log in which each commit is on one line

Replace changes of a file to the previous version on your local repository with `git checkout -- <filename>`

Use `git fetch origin` and `git reser --hard origin/master` to get the latest changes from the server


### Useful hints 
Access the built in git GUI with `gitk`

Get colourful git output with `git config color.ui true`

Show line on one log per commit with `git config format.pretty oneline`

Use interactive ading with `git add -i`

## Cheatsheets

### Markdown Cheatsheets
* [https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet "Markdown Cheatsheet")
* 

### Git Cheatsheets
* https://rogerdudler.github.io/git-guide/files/git_cheat_sheet.pdf
*

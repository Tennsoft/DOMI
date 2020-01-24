# Domi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Working with branches and merge requests

Here's a quick overview of working with branches and merge requests.

All commands are executed within the repository directory via `git-bash`

To create a new branch called `ben_updating_readme`

```
git checkout -b ben_updating_readme
```

Now your local repo is tracking that branch. After making a group of related changes, `commit` them:
```
git add .
git commit -m 'added widget degronkulation via class Degronkulator - src/degronkulator.ts'
```

Once you've made however many commits are appropriate, periodically push the branch to the remote repo
to keep your changes safe.

```
git push -u origin ben_updating_readme
```

Note: if you need to push again to this branch, you only need to issue `git push` after this.

This can be done before pushing in the previous step, but I'm putting it here because reasons.
You'll want to make sure that your branch incorporates any changes that have been made to
`master` while you've been working. You do this by rebasing against `master`. Rebasing inserts
any new commits behind your commits chronologically in the tree.
```
git pull --rebase origin master
```
If you get merge conflicts during the rebase, talk to me (Ben) and I'll walk you through the
conflict resolution process.

Do a final `push` to the remote repo after this.

Now your branch should be available on the remote repository (at gitlab) and up-to-date.
Navigate to the repo's web page at [gitlab.com/gbmor/dungeon_of_moderate_inconvenience](https://gitlab.com/gbmor/dungeon_of_moderate_inconvenience)
and click on `Merge Requests` in the left-hand navigation bar. Then, click `New Merge Request`
in the main area. Select your branch in the drop-down box for `source branch`, and make sure
`master` is selected for `target branch`. Click `compare branches and continue`, and so long
as everything looks good, merge the two.

Locally, switch back to `master` and sync the changes.
```
git checkout master
git pull
```

## Scope of branches

It's best to use branches for a single "feature". So, in the scope of this project, you may,
for example, use a branch to work on `monster A` and its details. This allows one to work
on snapshots of the `master` branch, while still merging one's own work into `master` often
enough for it to be useful and available to others.

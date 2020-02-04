# Gitea Matrix Theme

## How to use:
1. Find your gitea custom directory path in ***Site Administration > Configuration > Custom File Root Path***.
2. Create directories ***templates***, ***public/js***, and ***public/css*** if they don't exist.
3. Copy/Move files from this repo to their counterpart locations.
4. Add the following lines to your Gitea config:
    ```ini
    [ui]
    THEMES = gitea,arc-green,matrix
    DEFAULT_THEME = matrix
    ```
5. Restart your Gitea Service and you are ready to go.

### Welcome to the matrix!

![preview 1](preview1.png)

![preview 2](preview2.png)

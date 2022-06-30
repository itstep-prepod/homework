# Евгений Ермаркевич

PS Z:\front21\JS\Ермаркевич Евгений> git add .
fatal: not a git repository (or any of the parent directories): .git
PS Z:\front21\JS\Ермаркевич Евгений> git config --local user.name Eughe
fatal: --local can only be used inside a git repository
PS Z:\front21\JS\Ермаркевич Евгений> git remote show origin
fatal: not a git repository (or any of the parent directories): .git
PS Z:\front21\JS\Ермаркевич Евгений\homework> git remote show origin
  Fetch URL: https://github.com/Eughe/homework.git
  Push  URL: https://github.com/Eughe/homework.git
  HEAD branch: master
  Remote branch:
    master tracked
  Local branch configured for 'git pull':
    master merges with remote master
  Local ref configured for 'git push':
    master pushes to master (up to date)
PS Z:\front21\JS\Ермаркевич Евгений\homework> git remote add prepod https://github.com/itstep-prepod/homework.git      
* remote origin
  Fetch URL: https://github.com/Eughe/homework.git
  Push  URL: https://github.com/Eughe/homework.git
  HEAD branch: master
  Remote branch:
    master tracked
  Local branch configured for 'git pull':
    master merges with remote master
    master pushes to master (up to date)
PS Z:\front21\JS\Ермаркевич Евгений\homework> git status                                                               
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   "\320\225\320\262\320\263\320\265\320\275\320\270\320\271 \320\225\321\200\320\274\320\260\321\200\320\272\320\265\320\262\320\270\321\207/readme.md"

PS Z:\front21\JS\Ермаркевич Евгений\homework> git commit -m
error: switch `m' requires a value
PS Z:\front21\JS\Ермаркевич Евгений\homework> git commit -m readme
[master e98231b] readme
 1 file changed, 1 insertion(+)
 create mode 100644 "\320\225\320\262\320\263\320\265\320\275\320\270\320\271 \320\225\321\200\320\274\320\260\321\200\320\272\320\265\320\262\320\270\321\207/readme.md"
PS Z:\front21\JS\Ермаркевич Евгений\homework> 

PS Z:\front21\JS\Ермаркевич Евгений\homework> git push origin master
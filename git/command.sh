git add .
git push
read -p "Enter commit Message : " commit_message
if [ commit_message -eq 3 ] 
then
  git commit -m "Auto-commit"
else
git commit -m "$commit_message"
fi
branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
if [ $branch != "release" ]
then
	echo "Must be in release branch"
	exit
fi

git merge origin/master
cd client/
lein clean
lein cljsbuild once release

cd ../server/style/
bundle exec compass clean
bundle exec compass compile

cd ../..
git add server/static
git add server/style/js
git commit -m "update static"
git push origin release

cd devops/
ansible-playbook ansible/deploy.yml -i ansible/dev

cd ..

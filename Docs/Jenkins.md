# How to run jenkins
Open cmd > specify the patch to the jenkins .war file (desctop in my case) >run the followith command in cmd 
cd %USERPROFILE%\OneDrive\"Рабочий стол"
C:\Users\Saliv\OneDrive\Рабочий стол>
java -jar jenkins.war
or
java -Dfile.encoding=UTF8 -jar jenkins.war
 # Open Jenkins in browser. By default the port is 8080, but can be changed if needed
http://localhost:8080/login?from=%2F

# follow the instructions to find a password and create a jenkins account

# tostop Jenkins press 'Ctrl + C'

# Job creation
Job in Jenkins is someting what doint a task

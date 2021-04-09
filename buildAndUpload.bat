@ECHO OFF
REM Deploy script install's the dependenies, builds the project and deploys to netlify.
REM Ensure you have set the NETLIFY_SITE_ID and NETLIFY_AUTH_TOKEN in your environment variable. 

SET /P yesno=Install and Build ? [y/n]:
SET /P yesnodeployprod=Do you want to deploy and publish? [y/n]:

if "%yesno%"=="y" GOTO Build
if "%yesno%"=="Y" GOTO Build


:Deploy
IF "%yesnodeployprod%"=="y" GOTO DeployProd
IF "%yesnodeployprod%"=="Y" GOTO DeployProd


GOTO End

:Build
call yarn install
call yarn build
GOTO Deploy

:DeployProd
IF "%NETLIFY_AUTH_TOKEN%"=="" (
    ECHO NETLIFY_AUTH_TOKEN is NOT defined please Specify
    SET /P NETLIFY_AUTH_TOKEN=Provide NETLIFY_AUTH_TOKEN:    
)

IF "%NETLIFY_SITE_ID%" == "" (
    ECHO NETLIFY_SITE_ID is NOT defined please Specify
    SET /P NETLIFY_SITE_ID=Provide NETLIFY_SITE_ID:    
)

call netlify deploy --prod --auth %NETLIFY_AUTH_TOKEN% --dir build --site %NETLIFY_SITE_ID%


:End

<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <h1>Password encryption tool</h1>
        <h2>Modules used:</h2>
        <ul>
            <li>bcrypt</li>
            <li>async</li>
        </ul>
        <h2>Description</h2>
        <p>Tool for generating password hash, and verifying passwords based on bcrypt module.</p>
        <h2>Usage</h2>
        <p>First step - clone this repository: <b>git clone https://gitlab.com/acestojanoski/password-encryption-tool.git</b>, and go to the new created directory: <b>cd password-encryption-tool</b>.</p>
        <p>Second step: <b>npm install</b>, to install the required packages.</p>
        <p>Generate password hash: <b>npm run generate</b>, to generate password hash.</p>
        <p>Compare password and hash: <b>npm run verify</b>, to verify if password is matching hash.</p>
    </body>
</html>

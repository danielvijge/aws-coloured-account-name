# AWS coloured account names for AWS SSO in Firefox

A simple add-on to show a coloured menu item based on the AWS account name when using AWS SSO.

## Why this add-on?

When using AWS with a main account and switching roles to a sub-account, there is the excellent
[AWS Extended Switch Roles](https://github.com/tilfinltd/aws-extend-switch-roles) add-on. This
adds a colour to the account name, so it is easy to identify which account you are in.

When using AWS Single Sign-on (SSO), this add-on is not working. Worse, the name now shows as
*AWSReservedSSO_RoleName_f5cfd0b098ee4ba5/user.na...*, which doesn't fit the menu, and makes it really
difficult to identify.

![Without add-on](docs/without-add-on.png)

This add-on restores both a colour and a simple name in the menu.

![With add-on](docs/with-add-on.png)

## Not working yet

This add-on doesn't have any configuration. The colours are based on my personal needs. Based
on the account name, a colour is assigned. The following colours are used, based on the suffix
of the AWS account name:

* -prod: <span style="color: #f2b0a9;">#f2b0a9</span>
* -acc, -test, or -dev: <span style="color: #b7ca9d;">#b7ca9d</span>
* other: <span style="color: #fad791;">#fad791</span>

If you want something else, either change the source code for your needs, or submit a pull
request to make the colours configurable based on the account name.
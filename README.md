# FutureGov technology wiki

A basic technology wiki app for FutureGov-ers.

It's a Rails app using Google OAuth to grant access to anyone with a @wearefuturegov.com Google Account.

It needs Google API credentials to make this work.

## Deploying to Heroku

Create a new Heroku app in the normal way and push this repo to it. Make sure that the `RAILS_MASTER_KEY` config variable is set so that the Google API keys in `config/credentials.yml` can be decrypted.

Then, run `rails db:schema:load` and `rails db:seed` to prepare the database and create some basic categories for entries to exist in.

For the login flow to work, make sure that over on the Google API console:

* the Heroku URL is set as an **authorised domain**
* the **authorised javascript origin** is set
* the **authorised redirect URI** is set
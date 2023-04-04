1. Configure a sudo user

2. install the following packages
   sudo apt-get install curl gnupg2 git mariadb-server libmariadb-dev -y

3. Execute the following command
   sudo mysql_secure_installation
   For the first prompts press Enter
   For next 2 prompts press 'n'
   For the rest of the prompts press 'y'

4. Create database user with name admin and password 'admin123' using the following commands
   sudo mysql
   GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost' IDENTIFIED BY 'admin123';
   FLUSH PRIVILEGES;
   quit

5. Assign executable permission to install_app and then execute the script
   chmod +x install_app
   ./install_app

6. To send mails update the line with API KEY obtained from send grid portal in config/environments/development.rb
   ActionMailer::Base.smtp_settings = {
  :user_name => 'apikey', # This is the string literal 'apikey', NOT the ID of your API key
  :password => '', # This is the secret sendgrid API key which was issued during API key creation
  :domain => 'example.com',
  :address => 'smtp.sendgrid.net',
  :port => 587,
  :authentication => :plain,
  :enable_starttls_auto => true
  }


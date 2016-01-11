TelegramBot.token = '159899905:AAEVBmIG9x8CIHjEwCf9YY-A7Kfvh8gxA4M';
TelegramBot.start(); // start the bot
TelegramBot.addListener('hoi', function(command) { 
  return 'Saletti. '; 
});
TelegramBot.addListener('fips', function(command) { 
  return 'MAA FIIIIIIIPS !!!'; 
});
TelegramBot.addListener('cat', function(command) { 
  return 'Hoi mis liebe büseli. '; 
});

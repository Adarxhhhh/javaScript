let timeoutId;
   function changeFontSize() {
      
      document.getElementById('demo').style.fontSize = '35px';
      
      if(timeoutId){
         clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(function() {
         document.getElementById('demo').style.fontSize = '';
      }, 2000);
   }

   function hideelements(){
      document.getElementById('demo1').classList.add('hidden');

      setTimeout(function(){
         document.getElementById('demo1').classList.remove('hidden');
      }, 3000);
   }
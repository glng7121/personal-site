function copyToClipboard(elem) {
	this.select();
	try {

       // The important part (copy selected text)
       var ok = document.execCommand('copy');

       if (ok) console.log("copied");
       else    console.log("didn't copy");
   } catch (err) {
       console.log("unsupported browser");
   }
}
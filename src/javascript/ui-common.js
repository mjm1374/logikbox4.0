 if (typeof (Logikbox) === 'undefined' || Logikbox === null) {
        Logikbox = {};
    }
    if (typeof (Logikbox.Common) === 'undefined' || Logikbox.Common === null) {
        Logikbox.Foo = {};
    }
    (function (rootNamespace, $) {
        //namesaoce code here

         this.go = function(e) {
                return e + ": here";

            };
        this.alertme = function(e){
            alert(e);
            };


        $(document).ready(function(){

            console.log("in namespoace");

        });

        //list of methods to map
        rootNamespace.alertme = this.alertme;
        rootNamespace.go = this.go;
    })(Logikbox.Foo, jQuery);


    console.log(Logikbox.Common);
    console.log(Logikbox.Common.go("hello beautiful!"));

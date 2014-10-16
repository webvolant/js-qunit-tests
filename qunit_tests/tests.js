module("mymodule");

test("Equal Test", function() {
    ok(true, "ok() check");
    //equal("Test", "Test", "equal() check");
    //ok(false, "Failed Test");
    // ok(true, "Passed Test");
});

test("OK Test", function() {
    ok(true, "ok() check");
});

module("othermodule");

test("OK Test", function() {
    ok(true, "ok() check");
});


module ("Mod Test", {
    setup : function() {
        this.qq = 2;
    }
});

test( "hello test", function() {
  ok( 0 == "0", "Passed!" );
  ok( 1 == "1", "Passed!" );
  ok( 2 == "2", "Passed!" );
 });

test("test Module", function(){
   var1 = this.qq;
   equal(var1, 2, "gut!");	   		

});

test("23",function(){
	vari = mal(2);
	equal(vari,4,"gut!");
	
});

test("23",function(){
        vari = mal(2);
        equal(vari,4,"gut!");

});

test("23",function(){
        vari = mal(2);
        equal(vari,4,"gut!");

});


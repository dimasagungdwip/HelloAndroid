(function() {

var app = angular.module('starter', ['ionic'])

app.controller('RedditCtrl', function($http, $scope, $timeout, $interval){
	$scope.myHeader = "- no internet connection -";
	
	$scope.stories = [];

//$scope.receive = function () {
 $interval(function () {
	$http.get('https://dweet.io/get/latest/dweet/for/atmel-dimas')
	  .success(function(response) {
		//$scope.stories.push(response.with[0].content);		for using sharing variable between HTML and angular
		$scope.myHeader = "SMART HOME DEVICE";
		//$timeout(function () {		//bikin masalah di POST
			//console.log(response.with[0].content);		uncomment for debugging
			document.getElementById("light1Id").innerHTML = response.with[0].content.light1;
			document.getElementById("light2Id").innerHTML = response.with[0].content.light2;
			document.getElementById("light3Id").innerHTML = response.with[0].content.light3;
			document.getElementById("light4Id").innerHTML = response.with[0].content.light4;
			document.getElementById("light5Id").innerHTML = response.with[0].content.light5;
			document.getElementById("light6Id").innerHTML = response.with[0].content.light6;
			document.getElementById("light7Id").innerHTML = response.with[0].content.light7;
			document.getElementById("light8Id").innerHTML = response.with[0].content.light8;
			
			document.getElementById("curtain1Id").innerHTML = response.with[0].content.curtain1;
			document.getElementById("curtain2Id").innerHTML = response.with[0].content.curtain2;
			document.getElementById("curtain3Id").innerHTML = response.with[0].content.curtain3;
			document.getElementById("curtain4Id").innerHTML = response.with[0].content.curtain4;
			document.getElementById("curtain5Id").innerHTML = response.with[0].content.curtain5;
			document.getElementById("curtain6Id").innerHTML = response.with[0].content.curtain6;
			
			document.getElementById("ac1Id").innerHTML = response.with[0].content.ac1;
			document.getElementById("ac2Id").innerHTML = response.with[0].content.ac2;
			document.getElementById("ac3Id").innerHTML = response.with[0].content.ac3;
			
			document.getElementById("ac1TempId").innerHTML = response.with[0].content.ac1Temp;
			document.getElementById("ac2TempId").innerHTML = response.with[0].content.ac2Temp;
			document.getElementById("ac3TempId").innerHTML = response.with[0].content.ac3Temp;
			initialState();
		//}, 2500);
	  });
 //};
 }, 2500);
	 
	 /*
	$scope.SendData = function () {	 
		$http.get('https://dweet.io/get/latest/dweet/for/atmel-dimas')
			.then(function(result) {
				$scope.stories.push(result.data.with[0].content);
				$scope.myHeader = "SMART HOME DEVICE";
			});
		 
			$timeout(function () {
				initialState();
			}, 1000);
	};
	*/
	

	//Changing Title Text
	//$scope.myHeader = "mock-up version";  
	//$timeout(function () {
    //    $scope.myHeader = "Smart Home Device";
    //}, 5000);
	
	//$timeout(function () {
	//	$http.post('https://dweet.io/get/latest/dweet/for/atmel-dimas?light1=1&light2=1&light3=1&light4=1&light5=1&light6=1&light7=0&light8=1')
    //}, 1000);
	
	//$interval(function () {
    //  initialState();
	//}, 0);
	
	//$timeout(function () {		//bikin masalah di POST
	//	initialState();
	//}, 1250);
	
	//**********************$http POST********************************************
	
	$scope.SendData = function () {
		
		//$scope.stories = [];
		//
		//$http.get('https://dweet.io/get/latest/dweet/for/atmel-dimas')
		//	.success(function(response) {
		//	  $scope.stories.push(response.with[0].content);
		//});
		
		//var data = "dimas=miku";
		var data = "light1=0";
		//var data = "light1"+ "=" + "MIKU";
        
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        //$http.post('https://dweet.io/dweet/for/my-thing-name', data, config)
		$http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
          .success(function (data, status, headers, config) {
            $scope.PostDataResponse = data;
          })
    };
	
	
	
	
	$scope.SendDataLight1ON = function () {
		
		var a = document.getElementById("light1Id").innerHTML;
		JSON.stringify(a);
		
		var b = document.getElementById("light2Id").innerHTML;
		JSON.stringify(b);
		
		var c = document.getElementById("light3Id").innerHTML;
		JSON.stringify(c);
		
		var d = document.getElementById("light4Id").innerHTML;
		JSON.stringify(d);
		
		var e = document.getElementById("light5Id").innerHTML;
		JSON.stringify(e);
		
		var f = document.getElementById("light6Id").innerHTML;
		JSON.stringify(f);
		
		var g = document.getElementById("light7Id").innerHTML;
		JSON.stringify(g);
		
		var h = document.getElementById("light8Id").innerHTML;
		JSON.stringify(h);
		
		var i = document.getElementById("curtain1Id").innerHTML;
		JSON.stringify(i);
		
		var j = document.getElementById("curtain2Id").innerHTML;
		JSON.stringify(j);
		
		var k = document.getElementById("curtain3Id").innerHTML;
		JSON.stringify(k);
		
		var l = document.getElementById("curtain4Id").innerHTML;
		JSON.stringify(l);
		
		var m = document.getElementById("curtain5Id").innerHTML;
		JSON.stringify(m);
		
		var n = document.getElementById("curtain6Id").innerHTML;
		JSON.stringify(n);
		
		var o = document.getElementById("ac1Id").innerHTML;
		JSON.stringify(o);
		
		var p = document.getElementById("ac2Id").innerHTML;
		JSON.stringify(p);
		
		var q = document.getElementById("ac3Id").innerHTML;
		JSON.stringify(q);
		
		var r = document.getElementById("ac1TempId").innerHTML;
		JSON.stringify(r);
		
		var s = document.getElementById("ac2TempId").innerHTML;
		JSON.stringify(s);
		
		var t = document.getElementById("ac3TempId").innerHTML;
		JSON.stringify(t);
		
		var data = "light1=1" 
					+ "&light2=" + parseInt(b)
					+ "&light3=" + parseInt(c)
					+ "&light4=" + parseInt(d)
					+ "&light5=" + parseInt(e)
					+ "&light6=" + parseInt(f)
					+ "&light7=" + parseInt(g)
					+ "&light8=" + parseInt(h)
					
					+ "&curtain1=" + parseInt(i)
					+ "&curtain2=" + parseInt(j)
					+ "&curtain3=" + parseInt(k)
					+ "&curtain4=" + parseInt(l)
					+ "&curtain5=" + parseInt(m)
					+ "&curtain6=" + parseInt(n)
					
					+ "&ac1=" + parseInt(o)
					+ "&ac2=" + parseInt(p)
					+ "&ac3=" + parseInt(q)
					
					+ "&ac1Temp=" + parseInt(r)
					+ "&ac2Temp=" + parseInt(s)
					+ "&ac3Temp=" + parseInt(t);
					      
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        $http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
          .success(function (data, status, headers, config) {
            $scope.PostDataResponse = data;
			visibilityRed1();
			document.getElementById("light1Id").innerHTML = 1;
          })
    };
	
	$scope.SendDataLight1OFF = function () {
		
		var a = document.getElementById("light1Id").innerHTML;
		JSON.stringify(a);
		
		var b = document.getElementById("light2Id").innerHTML;
		JSON.stringify(b);
		
		var c = document.getElementById("light3Id").innerHTML;
		JSON.stringify(c);
		
		var d = document.getElementById("light4Id").innerHTML;
		JSON.stringify(d);
		
		var e = document.getElementById("light5Id").innerHTML;
		JSON.stringify(e);
		
		var f = document.getElementById("light6Id").innerHTML;
		JSON.stringify(f);
		
		var g = document.getElementById("light7Id").innerHTML;
		JSON.stringify(g);
		
		var h = document.getElementById("light8Id").innerHTML;
		JSON.stringify(h);
		
		var i = document.getElementById("curtain1Id").innerHTML;
		JSON.stringify(i);
		
		var j = document.getElementById("curtain2Id").innerHTML;
		JSON.stringify(j);
		
		var k = document.getElementById("curtain3Id").innerHTML;
		JSON.stringify(k);
		
		var l = document.getElementById("curtain4Id").innerHTML;
		JSON.stringify(l);
		
		var m = document.getElementById("curtain5Id").innerHTML;
		JSON.stringify(m);
		
		var n = document.getElementById("curtain6Id").innerHTML;
		JSON.stringify(n);
		
		var o = document.getElementById("ac1Id").innerHTML;
		JSON.stringify(o);
		
		var p = document.getElementById("ac2Id").innerHTML;
		JSON.stringify(p);
		
		var q = document.getElementById("ac3Id").innerHTML;
		JSON.stringify(q);
		
		var r = document.getElementById("ac1TempId").innerHTML;
		JSON.stringify(r);
		
		var s = document.getElementById("ac2TempId").innerHTML;
		JSON.stringify(s);
		
		var t = document.getElementById("ac3TempId").innerHTML;
		JSON.stringify(t);
		
		var data = "light1=0"
					+ "&light2=" + parseInt(b)
					+ "&light3=" + parseInt(c)
					+ "&light4=" + parseInt(d)
					+ "&light5=" + parseInt(e)
					+ "&light6=" + parseInt(f)
					+ "&light7=" + parseInt(g)
					+ "&light8=" + parseInt(h)
					
					+ "&curtain1=" + parseInt(i)
					+ "&curtain2=" + parseInt(j)
					+ "&curtain3=" + parseInt(k)
					+ "&curtain4=" + parseInt(l)
					+ "&curtain5=" + parseInt(m)
					+ "&curtain6=" + parseInt(n)
					
					+ "&ac1=" + parseInt(o)
					+ "&ac2=" + parseInt(p)
					+ "&ac3=" + parseInt(q)
					
					+ "&ac1Temp=" + parseInt(r)
					+ "&ac2Temp=" + parseInt(s)
					+ "&ac3Temp=" + parseInt(t);
        
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        $http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
          .success(function (data, status, headers, config) {
            $scope.PostDataResponse = data;
			visibilityGreen1();
			document.getElementById("light1Id").innerHTML = 0;
          })
    };
	
	
	$scope.SendDataLight2ON = function () {
		
		var a = document.getElementById("light1Id").innerHTML;
		JSON.stringify(a);
		
		var b = document.getElementById("light2Id").innerHTML;
		JSON.stringify(b);
		
		var c = document.getElementById("light3Id").innerHTML;
		JSON.stringify(c);
		
		var d = document.getElementById("light4Id").innerHTML;
		JSON.stringify(d);
		
		var e = document.getElementById("light5Id").innerHTML;
		JSON.stringify(e);
		
		var f = document.getElementById("light6Id").innerHTML;
		JSON.stringify(f);
		
		var g = document.getElementById("light7Id").innerHTML;
		JSON.stringify(g);
		
		var h = document.getElementById("light8Id").innerHTML;
		JSON.stringify(h);
		
		var i = document.getElementById("curtain1Id").innerHTML;
		JSON.stringify(i);
		
		var j = document.getElementById("curtain2Id").innerHTML;
		JSON.stringify(j);
		
		var k = document.getElementById("curtain3Id").innerHTML;
		JSON.stringify(k);
		
		var l = document.getElementById("curtain4Id").innerHTML;
		JSON.stringify(l);
		
		var m = document.getElementById("curtain5Id").innerHTML;
		JSON.stringify(m);
		
		var n = document.getElementById("curtain6Id").innerHTML;
		JSON.stringify(n);
		
		var o = document.getElementById("ac1Id").innerHTML;
		JSON.stringify(o);
		
		var p = document.getElementById("ac2Id").innerHTML;
		JSON.stringify(p);
		
		var q = document.getElementById("ac3Id").innerHTML;
		JSON.stringify(q);
		
		var r = document.getElementById("ac1TempId").innerHTML;
		JSON.stringify(r);
		
		var s = document.getElementById("ac2TempId").innerHTML;
		JSON.stringify(s);
		
		var t = document.getElementById("ac3TempId").innerHTML;
		JSON.stringify(t);
		
		var data = "light1=" + parseInt(a)
					+ "&light2=1"
					+ "&light3=" + parseInt(c)
					+ "&light4=" + parseInt(d)
					+ "&light5=" + parseInt(e)
					+ "&light6=" + parseInt(f)
					+ "&light7=" + parseInt(g)
					+ "&light8=" + parseInt(h)
					
					+ "&curtain1=" + parseInt(i)
					+ "&curtain2=" + parseInt(j)
					+ "&curtain3=" + parseInt(k)
					+ "&curtain4=" + parseInt(l)
					+ "&curtain5=" + parseInt(m)
					+ "&curtain6=" + parseInt(n)
					
					+ "&ac1=" + parseInt(o)
					+ "&ac2=" + parseInt(p)
					+ "&ac3=" + parseInt(q)
					
					+ "&ac1Temp=" + parseInt(r)
					+ "&ac2Temp=" + parseInt(s)
					+ "&ac3Temp=" + parseInt(t);
        
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        $http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
          .success(function (data, status, headers, config) {
            $scope.PostDataResponse = data;
			visibilityRed2();
			document.getElementById("light2Id").innerHTML = 1;
          })
    };
	
	
	$scope.SendDataLight2OFF = function () {
		
		var a = document.getElementById("light1Id").innerHTML;
		JSON.stringify(a);
		
		var b = document.getElementById("light2Id").innerHTML;
		JSON.stringify(b);
		
		var c = document.getElementById("light3Id").innerHTML;
		JSON.stringify(c);
		
		var d = document.getElementById("light4Id").innerHTML;
		JSON.stringify(d);
		
		var e = document.getElementById("light5Id").innerHTML;
		JSON.stringify(e);
		
		var f = document.getElementById("light6Id").innerHTML;
		JSON.stringify(f);
		
		var g = document.getElementById("light7Id").innerHTML;
		JSON.stringify(g);
		
		var h = document.getElementById("light8Id").innerHTML;
		JSON.stringify(h);
		
		var i = document.getElementById("curtain1Id").innerHTML;
		JSON.stringify(i);
		
		var j = document.getElementById("curtain2Id").innerHTML;
		JSON.stringify(j);
		
		var k = document.getElementById("curtain3Id").innerHTML;
		JSON.stringify(k);
		
		var l = document.getElementById("curtain4Id").innerHTML;
		JSON.stringify(l);
		
		var m = document.getElementById("curtain5Id").innerHTML;
		JSON.stringify(m);
		
		var n = document.getElementById("curtain6Id").innerHTML;
		JSON.stringify(n);
		
		var o = document.getElementById("ac1Id").innerHTML;
		JSON.stringify(o);
		
		var p = document.getElementById("ac2Id").innerHTML;
		JSON.stringify(p);
		
		var q = document.getElementById("ac3Id").innerHTML;
		JSON.stringify(q);
		
		var r = document.getElementById("ac1TempId").innerHTML;
		JSON.stringify(r);
		
		var s = document.getElementById("ac2TempId").innerHTML;
		JSON.stringify(s);
		
		var t = document.getElementById("ac3TempId").innerHTML;
		JSON.stringify(t);
		
		var data = "light1=" + parseInt(a)
					+ "&light2=0"
					+ "&light3=" + parseInt(c)
					+ "&light4=" + parseInt(d)
					+ "&light5=" + parseInt(e)
					+ "&light6=" + parseInt(f)
					+ "&light7=" + parseInt(g)
					+ "&light8=" + parseInt(h)
					
					+ "&curtain1=" + parseInt(i)
					+ "&curtain2=" + parseInt(j)
					+ "&curtain3=" + parseInt(k)
					+ "&curtain4=" + parseInt(l)
					+ "&curtain5=" + parseInt(m)
					+ "&curtain6=" + parseInt(n)
					
					+ "&ac1=" + parseInt(o)
					+ "&ac2=" + parseInt(p)
					+ "&ac3=" + parseInt(q)
					
					+ "&ac1Temp=" + parseInt(r)
					+ "&ac2Temp=" + parseInt(s)
					+ "&ac3Temp=" + parseInt(t);
        
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        $http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
          .success(function (data, status, headers, config) {
            $scope.PostDataResponse = data;
			visibilityGreen2();
			document.getElementById("light2Id").innerHTML = 0;
          })
    };
	
	$scope.SendDataLight3ON = function () {
						
		var a = document.getElementById("light1Id").innerHTML;
		JSON.stringify(a);
		
		var b = document.getElementById("light2Id").innerHTML;
		JSON.stringify(b);
		
		var c = document.getElementById("light3Id").innerHTML;
		JSON.stringify(c);
		
		var d = document.getElementById("light4Id").innerHTML;
		JSON.stringify(d);
		
		var e = document.getElementById("light5Id").innerHTML;
		JSON.stringify(e);
		
		var f = document.getElementById("light6Id").innerHTML;
		JSON.stringify(f);
		
		var g = document.getElementById("light7Id").innerHTML;
		JSON.stringify(g);
		
		var h = document.getElementById("light8Id").innerHTML;
		JSON.stringify(h);
		
		var i = document.getElementById("curtain1Id").innerHTML;
		JSON.stringify(i);
		
		var j = document.getElementById("curtain2Id").innerHTML;
		JSON.stringify(j);
		
		var k = document.getElementById("curtain3Id").innerHTML;
		JSON.stringify(k);
		
		var l = document.getElementById("curtain4Id").innerHTML;
		JSON.stringify(l);
		
		var m = document.getElementById("curtain5Id").innerHTML;
		JSON.stringify(m);
		
		var n = document.getElementById("curtain6Id").innerHTML;
		JSON.stringify(n);
		
		var o = document.getElementById("ac1Id").innerHTML;
		JSON.stringify(o);
		
		var p = document.getElementById("ac2Id").innerHTML;
		JSON.stringify(p);
		
		var q = document.getElementById("ac3Id").innerHTML;
		JSON.stringify(q);
		
		var r = document.getElementById("ac1TempId").innerHTML;
		JSON.stringify(r);
		
		var s = document.getElementById("ac2TempId").innerHTML;
		JSON.stringify(s);
		
		var t = document.getElementById("ac3TempId").innerHTML;
		JSON.stringify(t);
			
		var data = "light1=" + parseInt(a)
					+ "&light2=" + parseInt(b)
					+ "&light3=1"
					+ "&light4=" + parseInt(d)
					+ "&light5=" + parseInt(e)
					+ "&light6=" + parseInt(f)
					+ "&light7=" + parseInt(g)
					+ "&light8=" + parseInt(h)
					
					+ "&curtain1=" + parseInt(i)
					+ "&curtain2=" + parseInt(j)
					+ "&curtain3=" + parseInt(k)
					+ "&curtain4=" + parseInt(l)
					+ "&curtain5=" + parseInt(m)
					+ "&curtain6=" + parseInt(n)
					
					+ "&ac1=" + parseInt(o)
					+ "&ac2=" + parseInt(p)
					+ "&ac3=" + parseInt(q)
					
					+ "&ac1Temp=" + parseInt(r)
					+ "&ac2Temp=" + parseInt(s)
					+ "&ac3Temp=" + parseInt(t);
        
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        $http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
          .success(function (data, status, headers, config) {
            $scope.PostDataResponse = data;
			visibilityRed3();
			document.getElementById("light3Id").innerHTML = 1;
          })
    };
	
	$scope.SendDataLight3OFF = function () {
		
		var a = document.getElementById("light1Id").innerHTML;
		JSON.stringify(a);
		
		var b = document.getElementById("light2Id").innerHTML;
		JSON.stringify(b);
		
		var c = document.getElementById("light3Id").innerHTML;
		JSON.stringify(c);
		
		var d = document.getElementById("light4Id").innerHTML;
		JSON.stringify(d);
		
		var e = document.getElementById("light5Id").innerHTML;
		JSON.stringify(e);
		
		var f = document.getElementById("light6Id").innerHTML;
		JSON.stringify(f);
		
		var g = document.getElementById("light7Id").innerHTML;
		JSON.stringify(g);
		
		var h = document.getElementById("light8Id").innerHTML;
		JSON.stringify(h);
		
		var i = document.getElementById("curtain1Id").innerHTML;
		JSON.stringify(i);
		
		var j = document.getElementById("curtain2Id").innerHTML;
		JSON.stringify(j);
		
		var k = document.getElementById("curtain3Id").innerHTML;
		JSON.stringify(k);
		
		var l = document.getElementById("curtain4Id").innerHTML;
		JSON.stringify(l);
		
		var m = document.getElementById("curtain5Id").innerHTML;
		JSON.stringify(m);
		
		var n = document.getElementById("curtain6Id").innerHTML;
		JSON.stringify(n);
		
		var o = document.getElementById("ac1Id").innerHTML;
		JSON.stringify(o);
		
		var p = document.getElementById("ac2Id").innerHTML;
		JSON.stringify(p);
		
		var q = document.getElementById("ac3Id").innerHTML;
		JSON.stringify(q);
		
		var r = document.getElementById("ac1TempId").innerHTML;
		JSON.stringify(r);
		
		var s = document.getElementById("ac2TempId").innerHTML;
		JSON.stringify(s);
		
		var t = document.getElementById("ac3TempId").innerHTML;
		JSON.stringify(t);
		
		var data = "light1=" + parseInt(a)
					+ "&light2=" + parseInt(b)
					+ "&light3=0"
					+ "&light4=" + parseInt(d)
					+ "&light5=" + parseInt(e)
					+ "&light6=" + parseInt(f)
					+ "&light7=" + parseInt(g)
					+ "&light8=" + parseInt(h)
					
					+ "&curtain1=" + parseInt(i)
					+ "&curtain2=" + parseInt(j)
					+ "&curtain3=" + parseInt(k)
					+ "&curtain4=" + parseInt(l)
					+ "&curtain5=" + parseInt(m)
					+ "&curtain6=" + parseInt(n)
					
					+ "&ac1=" + parseInt(o)
					+ "&ac2=" + parseInt(p)
					+ "&ac3=" + parseInt(q)
					
					+ "&ac1Temp=" + parseInt(r)
					+ "&ac2Temp=" + parseInt(s)
					+ "&ac3Temp=" + parseInt(t);
        
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        $http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
          .success(function (data, status, headers, config) {
            $scope.PostDataResponse = data;
			visibilityGreen3();
			document.getElementById("light3Id").innerHTML = 0;
          })
    };
	
	$scope.SendDataLight4ON = function () {
		
		var a = document.getElementById("light1Id").innerHTML;
		JSON.stringify(a);
		
		var b = document.getElementById("light2Id").innerHTML;
		JSON.stringify(b);
		
		var c = document.getElementById("light3Id").innerHTML;
		JSON.stringify(c);
		
		var d = document.getElementById("light4Id").innerHTML;
		JSON.stringify(d);
		
		var e = document.getElementById("light5Id").innerHTML;
		JSON.stringify(e);
		
		var f = document.getElementById("light6Id").innerHTML;
		JSON.stringify(f);
		
		var g = document.getElementById("light7Id").innerHTML;
		JSON.stringify(g);
		
		var h = document.getElementById("light8Id").innerHTML;
		JSON.stringify(h);
		
		var i = document.getElementById("curtain1Id").innerHTML;
		JSON.stringify(i);
		
		var j = document.getElementById("curtain2Id").innerHTML;
		JSON.stringify(j);
		
		var k = document.getElementById("curtain3Id").innerHTML;
		JSON.stringify(k);
		
		var l = document.getElementById("curtain4Id").innerHTML;
		JSON.stringify(l);
		
		var m = document.getElementById("curtain5Id").innerHTML;
		JSON.stringify(m);
		
		var n = document.getElementById("curtain6Id").innerHTML;
		JSON.stringify(n);
		
		var o = document.getElementById("ac1Id").innerHTML;
		JSON.stringify(o);
		
		var p = document.getElementById("ac2Id").innerHTML;
		JSON.stringify(p);
		
		var q = document.getElementById("ac3Id").innerHTML;
		JSON.stringify(q);
		
		var r = document.getElementById("ac1TempId").innerHTML;
		JSON.stringify(r);
		
		var s = document.getElementById("ac2TempId").innerHTML;
		JSON.stringify(s);
		
		var t = document.getElementById("ac3TempId").innerHTML;
		JSON.stringify(t);
		
		var data = "light1=" + parseInt(a)
					+ "&light2=" + parseInt(b)
					+ "&light3=" + parseInt(c)
					+ "&light4=1"
					+ "&light5=" + parseInt(e)
					+ "&light6=" + parseInt(f)
					+ "&light7=" + parseInt(g)
					+ "&light8=" + parseInt(h)
					
					+ "&curtain1=" + parseInt(i)
					+ "&curtain2=" + parseInt(j)
					+ "&curtain3=" + parseInt(k)
					+ "&curtain4=" + parseInt(l)
					+ "&curtain5=" + parseInt(m)
					+ "&curtain6=" + parseInt(n)
					
					+ "&ac1=" + parseInt(o)
					+ "&ac2=" + parseInt(p)
					+ "&ac3=" + parseInt(q)
					
					+ "&ac1Temp=" + parseInt(r)
					+ "&ac2Temp=" + parseInt(s)
					+ "&ac3Temp=" + parseInt(t);
        
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        $http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
          .success(function (data, status, headers, config) {
            $scope.PostDataResponse = data;
			visibilityRed4();
			document.getElementById("light4Id").innerHTML = 1;
          })
    };
	
	$scope.SendDataLight4OFF = function () {
		
		var a = document.getElementById("light1Id").innerHTML;
		JSON.stringify(a);
		
		var b = document.getElementById("light2Id").innerHTML;
		JSON.stringify(b);
		
		var c = document.getElementById("light3Id").innerHTML;
		JSON.stringify(c);
		
		var d = document.getElementById("light4Id").innerHTML;
		JSON.stringify(d);
		
		var e = document.getElementById("light5Id").innerHTML;
		JSON.stringify(e);
		
		var f = document.getElementById("light6Id").innerHTML;
		JSON.stringify(f);
		
		var g = document.getElementById("light7Id").innerHTML;
		JSON.stringify(g);
		
		var h = document.getElementById("light8Id").innerHTML;
		JSON.stringify(h);
		
		var i = document.getElementById("curtain1Id").innerHTML;
		JSON.stringify(i);
		
		var j = document.getElementById("curtain2Id").innerHTML;
		JSON.stringify(j);
		
		var k = document.getElementById("curtain3Id").innerHTML;
		JSON.stringify(k);
		
		var l = document.getElementById("curtain4Id").innerHTML;
		JSON.stringify(l);
		
		var m = document.getElementById("curtain5Id").innerHTML;
		JSON.stringify(m);
		
		var n = document.getElementById("curtain6Id").innerHTML;
		JSON.stringify(n);
		
		var o = document.getElementById("ac1Id").innerHTML;
		JSON.stringify(o);
		
		var p = document.getElementById("ac2Id").innerHTML;
		JSON.stringify(p);
		
		var q = document.getElementById("ac3Id").innerHTML;
		JSON.stringify(q);
		
		var r = document.getElementById("ac1TempId").innerHTML;
		JSON.stringify(r);
		
		var s = document.getElementById("ac2TempId").innerHTML;
		JSON.stringify(s);
		
		var t = document.getElementById("ac3TempId").innerHTML;
		JSON.stringify(t);
		
		var data = "light1=" + parseInt(a)
					+ "&light2=" + parseInt(b)
					+ "&light3=" + parseInt(c)
					+ "&light4=0"
					+ "&light5=" + parseInt(e)
					+ "&light6=" + parseInt(f)
					+ "&light7=" + parseInt(g)
					+ "&light8=" + parseInt(h)
					
					+ "&curtain1=" + parseInt(i)
					+ "&curtain2=" + parseInt(j)
					+ "&curtain3=" + parseInt(k)
					+ "&curtain4=" + parseInt(l)
					+ "&curtain5=" + parseInt(m)
					+ "&curtain6=" + parseInt(n)
					
					+ "&ac1=" + parseInt(o)
					+ "&ac2=" + parseInt(p)
					+ "&ac3=" + parseInt(q)
					
					+ "&ac1Temp=" + parseInt(r)
					+ "&ac2Temp=" + parseInt(s)
					+ "&ac3Temp=" + parseInt(t);
        
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        $http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
          .success(function (data, status, headers, config) {
            $scope.PostDataResponse = data;
			visibilityGreen4();
			document.getElementById("light4Id").innerHTML = 0;
          })
    };
	
	$scope.SendDataLight5ON = function () {
		
		var a = document.getElementById("light1Id").innerHTML;
		JSON.stringify(a);
		
		var b = document.getElementById("light2Id").innerHTML;
		JSON.stringify(b);
		
		var c = document.getElementById("light3Id").innerHTML;
		JSON.stringify(c);
		
		var d = document.getElementById("light4Id").innerHTML;
		JSON.stringify(d);
		
		var e = document.getElementById("light5Id").innerHTML;
		JSON.stringify(e);
		
		var f = document.getElementById("light6Id").innerHTML;
		JSON.stringify(f);
		
		var g = document.getElementById("light7Id").innerHTML;
		JSON.stringify(g);
		
		var h = document.getElementById("light8Id").innerHTML;
		JSON.stringify(h);
		
		var i = document.getElementById("curtain1Id").innerHTML;
		JSON.stringify(i);
		
		var j = document.getElementById("curtain2Id").innerHTML;
		JSON.stringify(j);
		
		var k = document.getElementById("curtain3Id").innerHTML;
		JSON.stringify(k);
		
		var l = document.getElementById("curtain4Id").innerHTML;
		JSON.stringify(l);
		
		var m = document.getElementById("curtain5Id").innerHTML;
		JSON.stringify(m);
		
		var n = document.getElementById("curtain6Id").innerHTML;
		JSON.stringify(n);
		
		var o = document.getElementById("ac1Id").innerHTML;
		JSON.stringify(o);
		
		var p = document.getElementById("ac2Id").innerHTML;
		JSON.stringify(p);
		
		var q = document.getElementById("ac3Id").innerHTML;
		JSON.stringify(q);
		
		var r = document.getElementById("ac1TempId").innerHTML;
		JSON.stringify(r);
		
		var s = document.getElementById("ac2TempId").innerHTML;
		JSON.stringify(s);
		
		var t = document.getElementById("ac3TempId").innerHTML;
		JSON.stringify(t);
		
		var data = "light1=" + parseInt(a)
					+ "&light2=" + parseInt(b)
					+ "&light3=" + parseInt(c)
					+ "&light4=" + parseInt(d)
					+ "&light5=1"
					+ "&light6=" + parseInt(f)
					+ "&light7=" + parseInt(g)
					+ "&light8=" + parseInt(h)
					
					+ "&curtain1=" + parseInt(i)
					+ "&curtain2=" + parseInt(j)
					+ "&curtain3=" + parseInt(k)
					+ "&curtain4=" + parseInt(l)
					+ "&curtain5=" + parseInt(m)
					+ "&curtain6=" + parseInt(n)
					
					+ "&ac1=" + parseInt(o)
					+ "&ac2=" + parseInt(p)
					+ "&ac3=" + parseInt(q)
					
					+ "&ac1Temp=" + parseInt(r)
					+ "&ac2Temp=" + parseInt(s)
					+ "&ac3Temp=" + parseInt(t);
        
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        $http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
          .success(function (data, status, headers, config) {
            $scope.PostDataResponse = data;
			visibilityRed5();
			document.getElementById("light5Id").innerHTML = 1;
          })
    };
	
	$scope.SendDataLight5OFF = function () {
		
		var a = document.getElementById("light1Id").innerHTML;
		JSON.stringify(a);
		
		var b = document.getElementById("light2Id").innerHTML;
		JSON.stringify(b);
		
		var c = document.getElementById("light3Id").innerHTML;
		JSON.stringify(c);
		
		var d = document.getElementById("light4Id").innerHTML;
		JSON.stringify(d);
		
		var e = document.getElementById("light5Id").innerHTML;
		JSON.stringify(e);
		
		var f = document.getElementById("light6Id").innerHTML;
		JSON.stringify(f);
		
		var g = document.getElementById("light7Id").innerHTML;
		JSON.stringify(g);
		
		var h = document.getElementById("light8Id").innerHTML;
		JSON.stringify(h);
		
		var i = document.getElementById("curtain1Id").innerHTML;
		JSON.stringify(i);
		
		var j = document.getElementById("curtain2Id").innerHTML;
		JSON.stringify(j);
		
		var k = document.getElementById("curtain3Id").innerHTML;
		JSON.stringify(k);
		
		var l = document.getElementById("curtain4Id").innerHTML;
		JSON.stringify(l);
		
		var m = document.getElementById("curtain5Id").innerHTML;
		JSON.stringify(m);
		
		var n = document.getElementById("curtain6Id").innerHTML;
		JSON.stringify(n);
		
		var o = document.getElementById("ac1Id").innerHTML;
		JSON.stringify(o);
		
		var p = document.getElementById("ac2Id").innerHTML;
		JSON.stringify(p);
		
		var q = document.getElementById("ac3Id").innerHTML;
		JSON.stringify(q);
		
		var r = document.getElementById("ac1TempId").innerHTML;
		JSON.stringify(r);
		
		var s = document.getElementById("ac2TempId").innerHTML;
		JSON.stringify(s);
		
		var t = document.getElementById("ac3TempId").innerHTML;
		JSON.stringify(t);
		
		var data = "light1=" + parseInt(a)
					+ "&light2=" + parseInt(b)
					+ "&light3=" + parseInt(c)
					+ "&light4=" + parseInt(d)
					+ "&light5=0"
					+ "&light6=" + parseInt(f)
					+ "&light7=" + parseInt(g)
					+ "&light8=" + parseInt(h)
					
					+ "&curtain1=" + parseInt(i)
					+ "&curtain2=" + parseInt(j)
					+ "&curtain3=" + parseInt(k)
					+ "&curtain4=" + parseInt(l)
					+ "&curtain5=" + parseInt(m)
					+ "&curtain6=" + parseInt(n)
					
					+ "&ac1=" + parseInt(o)
					+ "&ac2=" + parseInt(p)
					+ "&ac3=" + parseInt(q)
					
					+ "&ac1Temp=" + parseInt(r)
					+ "&ac2Temp=" + parseInt(s)
					+ "&ac3Temp=" + parseInt(t);
        
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        $http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
          .success(function (data, status, headers, config) {
            $scope.PostDataResponse = data;
			visibilityGreen5();
			document.getElementById("light5Id").innerHTML = 0;
          })
    };
	
	
	$scope.SendDataLight6ON = function () {
		
		var a = document.getElementById("light1Id").innerHTML;
		JSON.stringify(a);
		
		var b = document.getElementById("light2Id").innerHTML;
		JSON.stringify(b);
		
		var c = document.getElementById("light3Id").innerHTML;
		JSON.stringify(c);
		
		var d = document.getElementById("light4Id").innerHTML;
		JSON.stringify(d);
		
		var e = document.getElementById("light5Id").innerHTML;
		JSON.stringify(e);
		
		var f = document.getElementById("light6Id").innerHTML;
		JSON.stringify(f);
		
		var g = document.getElementById("light7Id").innerHTML;
		JSON.stringify(g);
		
		var h = document.getElementById("light8Id").innerHTML;
		JSON.stringify(h);
		
		var i = document.getElementById("curtain1Id").innerHTML;
		JSON.stringify(i);
		
		var j = document.getElementById("curtain2Id").innerHTML;
		JSON.stringify(j);
		
		var k = document.getElementById("curtain3Id").innerHTML;
		JSON.stringify(k);
		
		var l = document.getElementById("curtain4Id").innerHTML;
		JSON.stringify(l);
		
		var m = document.getElementById("curtain5Id").innerHTML;
		JSON.stringify(m);
		
		var n = document.getElementById("curtain6Id").innerHTML;
		JSON.stringify(n);
		
		var o = document.getElementById("ac1Id").innerHTML;
		JSON.stringify(o);
		
		var p = document.getElementById("ac2Id").innerHTML;
		JSON.stringify(p);
		
		var q = document.getElementById("ac3Id").innerHTML;
		JSON.stringify(q);
		
		var r = document.getElementById("ac1TempId").innerHTML;
		JSON.stringify(r);
		
		var s = document.getElementById("ac2TempId").innerHTML;
		JSON.stringify(s);
		
		var t = document.getElementById("ac3TempId").innerHTML;
		JSON.stringify(t);
		
		var data = "light1=" + parseInt(a)
					+ "&light2=" + parseInt(b)
					+ "&light3=" + parseInt(c)
					+ "&light4=" + parseInt(d)
					+ "&light5=" + parseInt(e)
					+ "&light6=1"
					+ "&light7=" + parseInt(g)
					+ "&light8=" + parseInt(h)
					
					+ "&curtain1=" + parseInt(i)
					+ "&curtain2=" + parseInt(j)
					+ "&curtain3=" + parseInt(k)
					+ "&curtain4=" + parseInt(l)
					+ "&curtain5=" + parseInt(m)
					+ "&curtain6=" + parseInt(n)
					
					+ "&ac1=" + parseInt(o)
					+ "&ac2=" + parseInt(p)
					+ "&ac3=" + parseInt(q)
					
					+ "&ac1Temp=" + parseInt(r)
					+ "&ac2Temp=" + parseInt(s)
					+ "&ac3Temp=" + parseInt(t);
        
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        $http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
          .success(function (data, status, headers, config) {
            $scope.PostDataResponse = data;
			visibilityRed6();
			document.getElementById("light6Id").innerHTML = 1;
          })
    };
	
	
	$scope.SendDataLight6OFF = function () {
		
		var a = document.getElementById("light1Id").innerHTML;
		JSON.stringify(a);
		
		var b = document.getElementById("light2Id").innerHTML;
		JSON.stringify(b);
		
		var c = document.getElementById("light3Id").innerHTML;
		JSON.stringify(c);
		
		var d = document.getElementById("light4Id").innerHTML;
		JSON.stringify(d);
		
		var e = document.getElementById("light5Id").innerHTML;
		JSON.stringify(e);
		
		var f = document.getElementById("light6Id").innerHTML;
		JSON.stringify(f);
		
		var g = document.getElementById("light7Id").innerHTML;
		JSON.stringify(g);
		
		var h = document.getElementById("light8Id").innerHTML;
		JSON.stringify(h);
		
		var i = document.getElementById("curtain1Id").innerHTML;
		JSON.stringify(i);
		
		var j = document.getElementById("curtain2Id").innerHTML;
		JSON.stringify(j);
		
		var k = document.getElementById("curtain3Id").innerHTML;
		JSON.stringify(k);
		
		var l = document.getElementById("curtain4Id").innerHTML;
		JSON.stringify(l);
		
		var m = document.getElementById("curtain5Id").innerHTML;
		JSON.stringify(m);
		
		var n = document.getElementById("curtain6Id").innerHTML;
		JSON.stringify(n);
		
		var o = document.getElementById("ac1Id").innerHTML;
		JSON.stringify(o);
		
		var p = document.getElementById("ac2Id").innerHTML;
		JSON.stringify(p);
		
		var q = document.getElementById("ac3Id").innerHTML;
		JSON.stringify(q);
		
		var r = document.getElementById("ac1TempId").innerHTML;
		JSON.stringify(r);
		
		var s = document.getElementById("ac2TempId").innerHTML;
		JSON.stringify(s);
		
		var t = document.getElementById("ac3TempId").innerHTML;
		JSON.stringify(t);
		
		var data = "light1=" + parseInt(a)
					+ "&light2=" + parseInt(b)
					+ "&light3=" + parseInt(c)
					+ "&light4=" + parseInt(d)
					+ "&light5=" + parseInt(e)
					+ "&light6=0"
					+ "&light7=" + parseInt(g)
					+ "&light8=" + parseInt(h)
					
					+ "&curtain1=" + parseInt(i)
					+ "&curtain2=" + parseInt(j)
					+ "&curtain3=" + parseInt(k)
					+ "&curtain4=" + parseInt(l)
					+ "&curtain5=" + parseInt(m)
					+ "&curtain6=" + parseInt(n)
					
					+ "&ac1=" + parseInt(o)
					+ "&ac2=" + parseInt(p)
					+ "&ac3=" + parseInt(q)
					
					+ "&ac1Temp=" + parseInt(r)
					+ "&ac2Temp=" + parseInt(s)
					+ "&ac3Temp=" + parseInt(t);
        
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        $http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
          .success(function (data, status, headers, config) {
            $scope.PostDataResponse = data;
			visibilityGreen6();
			document.getElementById("light6Id").innerHTML = 0;
          })
    };
	
	$scope.SendDataLight7ON = function () {
		
		var a = document.getElementById("light1Id").innerHTML;
		JSON.stringify(a);
		
		var b = document.getElementById("light2Id").innerHTML;
		JSON.stringify(b);
		
		var c = document.getElementById("light3Id").innerHTML;
		JSON.stringify(c);
		
		var d = document.getElementById("light4Id").innerHTML;
		JSON.stringify(d);
		
		var e = document.getElementById("light5Id").innerHTML;
		JSON.stringify(e);
		
		var f = document.getElementById("light6Id").innerHTML;
		JSON.stringify(f);
		
		var g = document.getElementById("light7Id").innerHTML;
		JSON.stringify(g);
		
		var h = document.getElementById("light8Id").innerHTML;
		JSON.stringify(h);
		
		var i = document.getElementById("curtain1Id").innerHTML;
		JSON.stringify(i);
		
		var j = document.getElementById("curtain2Id").innerHTML;
		JSON.stringify(j);
		
		var k = document.getElementById("curtain3Id").innerHTML;
		JSON.stringify(k);
		
		var l = document.getElementById("curtain4Id").innerHTML;
		JSON.stringify(l);
		
		var m = document.getElementById("curtain5Id").innerHTML;
		JSON.stringify(m);
		
		var n = document.getElementById("curtain6Id").innerHTML;
		JSON.stringify(n);
		
		var o = document.getElementById("ac1Id").innerHTML;
		JSON.stringify(o);
		
		var p = document.getElementById("ac2Id").innerHTML;
		JSON.stringify(p);
		
		var q = document.getElementById("ac3Id").innerHTML;
		JSON.stringify(q);
		
		var r = document.getElementById("ac1TempId").innerHTML;
		JSON.stringify(r);
		
		var s = document.getElementById("ac2TempId").innerHTML;
		JSON.stringify(s);
		
		var t = document.getElementById("ac3TempId").innerHTML;
		JSON.stringify(t);
		
		var data = "light1=" + parseInt(a)
					+ "&light2=" + parseInt(b)
					+ "&light3=" + parseInt(c)
					+ "&light4=" + parseInt(d)
					+ "&light5=" + parseInt(e)
					+ "&light6=" + parseInt(f)
					+ "&light7=1"
					+ "&light8=" + parseInt(h)
					
					+ "&curtain1=" + parseInt(i)
					+ "&curtain2=" + parseInt(j)
					+ "&curtain3=" + parseInt(k)
					+ "&curtain4=" + parseInt(l)
					+ "&curtain5=" + parseInt(m)
					+ "&curtain6=" + parseInt(n)
					
					+ "&ac1=" + parseInt(o)
					+ "&ac2=" + parseInt(p)
					+ "&ac3=" + parseInt(q)
					
					+ "&ac1Temp=" + parseInt(r)
					+ "&ac2Temp=" + parseInt(s)
					+ "&ac3Temp=" + parseInt(t);
        
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        $http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
          .success(function (data, status, headers, config) {
            $scope.PostDataResponse = data;
			visibilityRed7();
			document.getElementById("light7Id").innerHTML = 1;
          })
    };
	
	$scope.SendDataLight7OFF = function () {
		
		var a = document.getElementById("light1Id").innerHTML;
		JSON.stringify(a);
		
		var b = document.getElementById("light2Id").innerHTML;
		JSON.stringify(b);
		
		var c = document.getElementById("light3Id").innerHTML;
		JSON.stringify(c);
		
		var d = document.getElementById("light4Id").innerHTML;
		JSON.stringify(d);
		
		var e = document.getElementById("light5Id").innerHTML;
		JSON.stringify(e);
		
		var f = document.getElementById("light6Id").innerHTML;
		JSON.stringify(f);
		
		var g = document.getElementById("light7Id").innerHTML;
		JSON.stringify(g);
		
		var h = document.getElementById("light8Id").innerHTML;
		JSON.stringify(h);
		
		var i = document.getElementById("curtain1Id").innerHTML;
		JSON.stringify(i);
		
		var j = document.getElementById("curtain2Id").innerHTML;
		JSON.stringify(j);
		
		var k = document.getElementById("curtain3Id").innerHTML;
		JSON.stringify(k);
		
		var l = document.getElementById("curtain4Id").innerHTML;
		JSON.stringify(l);
		
		var m = document.getElementById("curtain5Id").innerHTML;
		JSON.stringify(m);
		
		var n = document.getElementById("curtain6Id").innerHTML;
		JSON.stringify(n);
		
		var o = document.getElementById("ac1Id").innerHTML;
		JSON.stringify(o);
		
		var p = document.getElementById("ac2Id").innerHTML;
		JSON.stringify(p);
		
		var q = document.getElementById("ac3Id").innerHTML;
		JSON.stringify(q);
		
		var r = document.getElementById("ac1TempId").innerHTML;
		JSON.stringify(r);
		
		var s = document.getElementById("ac2TempId").innerHTML;
		JSON.stringify(s);
		
		var t = document.getElementById("ac3TempId").innerHTML;
		JSON.stringify(t);
		
		var data = "light1=" + parseInt(a)
					+ "&light2=" + parseInt(b)
					+ "&light3=" + parseInt(c)
					+ "&light4=" + parseInt(d)
					+ "&light5=" + parseInt(e)
					+ "&light6=" + parseInt(f)
					+ "&light7=0"
					+ "&light8=" + parseInt(h)
					
					+ "&curtain1=" + parseInt(i)
					+ "&curtain2=" + parseInt(j)
					+ "&curtain3=" + parseInt(k)
					+ "&curtain4=" + parseInt(l)
					+ "&curtain5=" + parseInt(m)
					+ "&curtain6=" + parseInt(n)
					
					+ "&ac1=" + parseInt(o)
					+ "&ac2=" + parseInt(p)
					+ "&ac3=" + parseInt(q)
					
					+ "&ac1Temp=" + parseInt(r)
					+ "&ac2Temp=" + parseInt(s)
					+ "&ac3Temp=" + parseInt(t);
        
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        $http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
          .success(function (data, status, headers, config) {
            $scope.PostDataResponse = data;
			visibilityGreen7();
			document.getElementById("light7Id").innerHTML = 0;
          })
    };
	
	$scope.SendDataLight8ON = function () {
		
		var a = document.getElementById("light1Id").innerHTML;
		JSON.stringify(a);
		
		var b = document.getElementById("light2Id").innerHTML;
		JSON.stringify(b);
		
		var c = document.getElementById("light3Id").innerHTML;
		JSON.stringify(c);
		
		var d = document.getElementById("light4Id").innerHTML;
		JSON.stringify(d);
		
		var e = document.getElementById("light5Id").innerHTML;
		JSON.stringify(e);
		
		var f = document.getElementById("light6Id").innerHTML;
		JSON.stringify(f);
		
		var g = document.getElementById("light7Id").innerHTML;
		JSON.stringify(g);
		
		var h = document.getElementById("light8Id").innerHTML;
		JSON.stringify(h);
		
		var i = document.getElementById("curtain1Id").innerHTML;
		JSON.stringify(i);
		
		var j = document.getElementById("curtain2Id").innerHTML;
		JSON.stringify(j);
		
		var k = document.getElementById("curtain3Id").innerHTML;
		JSON.stringify(k);
		
		var l = document.getElementById("curtain4Id").innerHTML;
		JSON.stringify(l);
		
		var m = document.getElementById("curtain5Id").innerHTML;
		JSON.stringify(m);
		
		var n = document.getElementById("curtain6Id").innerHTML;
		JSON.stringify(n);
		
		var o = document.getElementById("ac1Id").innerHTML;
		JSON.stringify(o);
		
		var p = document.getElementById("ac2Id").innerHTML;
		JSON.stringify(p);
		
		var q = document.getElementById("ac3Id").innerHTML;
		JSON.stringify(q);
		
		var r = document.getElementById("ac1TempId").innerHTML;
		JSON.stringify(r);
		
		var s = document.getElementById("ac2TempId").innerHTML;
		JSON.stringify(s);
		
		var t = document.getElementById("ac3TempId").innerHTML;
		JSON.stringify(t);
		
		var data = "light1=" + parseInt(a)
					+ "&light2=" + parseInt(b)
					+ "&light3=" + parseInt(c)
					+ "&light4=" + parseInt(d)
					+ "&light5=" + parseInt(e)
					+ "&light6=" + parseInt(f)
					+ "&light7=" + parseInt(g)
					+ "&light8=1"
					
					+ "&curtain1=" + parseInt(i)
					+ "&curtain2=" + parseInt(j)
					+ "&curtain3=" + parseInt(k)
					+ "&curtain4=" + parseInt(l)
					+ "&curtain5=" + parseInt(m)
					+ "&curtain6=" + parseInt(n)
					
					+ "&ac1=" + parseInt(o)
					+ "&ac2=" + parseInt(p)
					+ "&ac3=" + parseInt(q)
					
					+ "&ac1Temp=" + parseInt(r)
					+ "&ac2Temp=" + parseInt(s)
					+ "&ac3Temp=" + parseInt(t);
        
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        $http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
          .success(function (data, status, headers, config) {
            $scope.PostDataResponse = data;
			visibilityRed8();
			document.getElementById("light8Id").innerHTML = 1;
          })
    };
	
	$scope.SendDataLight8OFF = function () {
		
		var a = document.getElementById("light1Id").innerHTML;
		JSON.stringify(a);
		
		var b = document.getElementById("light2Id").innerHTML;
		JSON.stringify(b);
		
		var c = document.getElementById("light3Id").innerHTML;
		JSON.stringify(c);
		
		var d = document.getElementById("light4Id").innerHTML;
		JSON.stringify(d);
		
		var e = document.getElementById("light5Id").innerHTML;
		JSON.stringify(e);
		
		var f = document.getElementById("light6Id").innerHTML;
		JSON.stringify(f);
		
		var g = document.getElementById("light7Id").innerHTML;
		JSON.stringify(g);
		
		var h = document.getElementById("light8Id").innerHTML;
		JSON.stringify(h);
		
		var i = document.getElementById("curtain1Id").innerHTML;
		JSON.stringify(i);
		
		var j = document.getElementById("curtain2Id").innerHTML;
		JSON.stringify(j);
		
		var k = document.getElementById("curtain3Id").innerHTML;
		JSON.stringify(k);
		
		var l = document.getElementById("curtain4Id").innerHTML;
		JSON.stringify(l);
		
		var m = document.getElementById("curtain5Id").innerHTML;
		JSON.stringify(m);
		
		var n = document.getElementById("curtain6Id").innerHTML;
		JSON.stringify(n);
		
		var o = document.getElementById("ac1Id").innerHTML;
		JSON.stringify(o);
		
		var p = document.getElementById("ac2Id").innerHTML;
		JSON.stringify(p);
		
		var q = document.getElementById("ac3Id").innerHTML;
		JSON.stringify(q);
		
		var r = document.getElementById("ac1TempId").innerHTML;
		JSON.stringify(r);
		
		var s = document.getElementById("ac2TempId").innerHTML;
		JSON.stringify(s);
		
		var t = document.getElementById("ac3TempId").innerHTML;
		JSON.stringify(t);
		
		var data = "light1=" + parseInt(a)
					+ "&light2=" + parseInt(b)
					+ "&light3=" + parseInt(c)
					+ "&light4=" + parseInt(d)
					+ "&light5=" + parseInt(e)
					+ "&light6=" + parseInt(f)
					+ "&light7=" + parseInt(g)
					+ "&light8=0"
					
					+ "&curtain1=" + parseInt(i)
					+ "&curtain2=" + parseInt(j)
					+ "&curtain3=" + parseInt(k)
					+ "&curtain4=" + parseInt(l)
					+ "&curtain5=" + parseInt(m)
					+ "&curtain6=" + parseInt(n)
					
					+ "&ac1=" + parseInt(o)
					+ "&ac2=" + parseInt(p)
					+ "&ac3=" + parseInt(q)
					
					+ "&ac1Temp=" + parseInt(r)
					+ "&ac2Temp=" + parseInt(s)
					+ "&ac3Temp=" + parseInt(t);
        
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        $http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
          .success(function (data, status, headers, config) {
            $scope.PostDataResponse = data;
			visibilityGreen8();
			document.getElementById("light8Id").innerHTML = 0;
          })
    };
	
	$scope.SendDataCurtain1 = function () {
		
		var a = document.getElementById("light1Id").innerHTML;
		JSON.stringify(a);
		
		var b = document.getElementById("light2Id").innerHTML;
		JSON.stringify(b);
		
		var c = document.getElementById("light3Id").innerHTML;
		JSON.stringify(c);
		
		var d = document.getElementById("light4Id").innerHTML;
		JSON.stringify(d);
		
		var e = document.getElementById("light5Id").innerHTML;
		JSON.stringify(e);
		
		var f = document.getElementById("light6Id").innerHTML;
		JSON.stringify(f);
		
		var g = document.getElementById("light7Id").innerHTML;
		JSON.stringify(g);
		
		var h = document.getElementById("light8Id").innerHTML;
		JSON.stringify(h);
		
		var i = document.getElementById("curtain1Id").innerHTML;
		JSON.stringify(i);
		
		var j = document.getElementById("curtain2Id").innerHTML;
		JSON.stringify(j);
		
		var k = document.getElementById("curtain3Id").innerHTML;
		JSON.stringify(k);
		
		var l = document.getElementById("curtain4Id").innerHTML;
		JSON.stringify(l);
		
		var m = document.getElementById("curtain5Id").innerHTML;
		JSON.stringify(m);
		
		var n = document.getElementById("curtain6Id").innerHTML;
		JSON.stringify(n);
		
		var o = document.getElementById("ac1Id").innerHTML;
		JSON.stringify(o);
		
		var p = document.getElementById("ac2Id").innerHTML;
		JSON.stringify(p);
		
		var q = document.getElementById("ac3Id").innerHTML;
		JSON.stringify(q);
		
		var r = document.getElementById("ac1TempId").innerHTML;
		JSON.stringify(r);
		
		var s = document.getElementById("ac2TempId").innerHTML;
		JSON.stringify(s);
		
		var t = document.getElementById("ac3TempId").innerHTML;
		JSON.stringify(t);
		
		if (document.getElementById("curtain1").checked == true){
				var data = "light1=" + parseInt(a)
				+ "&light2=" + parseInt(b)
				+ "&light3=" + parseInt(c)
				+ "&light4=" + parseInt(d)
				+ "&light5=" + parseInt(e)
				+ "&light6=" + parseInt(f)
				+ "&light7=" + parseInt(g)
				+ "&light8=" + parseInt(h)
					
				+ "&curtain1=1"
				+ "&curtain2=" + parseInt(j)
				+ "&curtain3=" + parseInt(k)
				+ "&curtain4=" + parseInt(l)
				+ "&curtain5=" + parseInt(m)
				+ "&curtain6=" + parseInt(n)
				
				+ "&ac1=" + parseInt(o)
				+ "&ac2=" + parseInt(p)
				+ "&ac3=" + parseInt(q)
				
				+ "&ac1Temp=" + parseInt(r)
				+ "&ac2Temp=" + parseInt(s)
				+ "&ac3Temp=" + parseInt(t);
				
			var config = {
				headers : {
					'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
				}
			}

			$http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
			  .success(function (data, status, headers, config) {
				$scope.PostDataResponse = data;
				document.getElementById("curtain1Id").innerHTML = 1;
			  })
		}
		
		else if (document.getElementById("curtain1").checked == false){
				var data = "light1=" + parseInt(a)
				+ "&light2=" + parseInt(b)
				+ "&light3=" + parseInt(c)
				+ "&light4=" + parseInt(d)
				+ "&light5=" + parseInt(e)
				+ "&light6=" + parseInt(f)
				+ "&light7=" + parseInt(g)
				+ "&light8=" + parseInt(h)
					
				+ "&curtain1=0"
				+ "&curtain2=" + parseInt(j)
				+ "&curtain3=" + parseInt(k)
				+ "&curtain4=" + parseInt(l)
				+ "&curtain5=" + parseInt(m)
				+ "&curtain6=" + parseInt(n)
				
				+ "&ac1=" + parseInt(o)
				+ "&ac2=" + parseInt(p)
				+ "&ac3=" + parseInt(q)
				
				+ "&ac1Temp=" + parseInt(r)
				+ "&ac2Temp=" + parseInt(s)
				+ "&ac3Temp=" + parseInt(t);
				
			var config = {
				headers : {
					'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
				}
			}

			$http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
			  .success(function (data, status, headers, config) {
				$scope.PostDataResponse = data;
				document.getElementById("curtain1Id").innerHTML = 0;
			  })
		}
       
    };
	
	$scope.SendDataCurtain2 = function () {
		
		var a = document.getElementById("light1Id").innerHTML;
		JSON.stringify(a);
		
		var b = document.getElementById("light2Id").innerHTML;
		JSON.stringify(b);
		
		var c = document.getElementById("light3Id").innerHTML;
		JSON.stringify(c);
		
		var d = document.getElementById("light4Id").innerHTML;
		JSON.stringify(d);
		
		var e = document.getElementById("light5Id").innerHTML;
		JSON.stringify(e);
		
		var f = document.getElementById("light6Id").innerHTML;
		JSON.stringify(f);
		
		var g = document.getElementById("light7Id").innerHTML;
		JSON.stringify(g);
		
		var h = document.getElementById("light8Id").innerHTML;
		JSON.stringify(h);
		
		var i = document.getElementById("curtain1Id").innerHTML;
		JSON.stringify(i);
		
		var j = document.getElementById("curtain2Id").innerHTML;
		JSON.stringify(j);
		
		var k = document.getElementById("curtain3Id").innerHTML;
		JSON.stringify(k);
		
		var l = document.getElementById("curtain4Id").innerHTML;
		JSON.stringify(l);
		
		var m = document.getElementById("curtain5Id").innerHTML;
		JSON.stringify(m);
		
		var n = document.getElementById("curtain6Id").innerHTML;
		JSON.stringify(n);
		
		var o = document.getElementById("ac1Id").innerHTML;
		JSON.stringify(o);
		
		var p = document.getElementById("ac2Id").innerHTML;
		JSON.stringify(p);
		
		var q = document.getElementById("ac3Id").innerHTML;
		JSON.stringify(q);
		
		var r = document.getElementById("ac1TempId").innerHTML;
		JSON.stringify(r);
		
		var s = document.getElementById("ac2TempId").innerHTML;
		JSON.stringify(s);
		
		var t = document.getElementById("ac3TempId").innerHTML;
		JSON.stringify(t);
		
		if (document.getElementById("curtain2").checked == true){
				var data = "light1=" + parseInt(a)
				+ "&light2=" + parseInt(b)
				+ "&light3=" + parseInt(c)
				+ "&light4=" + parseInt(d)
				+ "&light5=" + parseInt(e)
				+ "&light6=" + parseInt(f)
				+ "&light7=" + parseInt(g)
				+ "&light8=" + parseInt(h)
					
				+ "&curtain1=" + parseInt(i)
				+ "&curtain2=1"
				+ "&curtain3=" + parseInt(k)
				+ "&curtain4=" + parseInt(l)
				+ "&curtain5=" + parseInt(m)
				+ "&curtain6=" + parseInt(n)
				
				+ "&ac1=" + parseInt(o)
				+ "&ac2=" + parseInt(p)
				+ "&ac3=" + parseInt(q)
				
				+ "&ac1Temp=" + parseInt(r)
				+ "&ac2Temp=" + parseInt(s)
				+ "&ac3Temp=" + parseInt(t);
				
			var config = {
				headers : {
					'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
				}
			}

			$http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
			  .success(function (data, status, headers, config) {
				$scope.PostDataResponse = data;
				document.getElementById("curtain2Id").innerHTML = 1;
			  })
		}
		
		else if (document.getElementById("curtain2").checked == false){
				var data = "light1=" + parseInt(a)
				+ "&light2=" + parseInt(b)
				+ "&light3=" + parseInt(c)
				+ "&light4=" + parseInt(d)
				+ "&light5=" + parseInt(e)
				+ "&light6=" + parseInt(f)
				+ "&light7=" + parseInt(g)
				+ "&light8=" + parseInt(h)
					
				+ "&curtain1=" + parseInt(i)
				+ "&curtain2=0"
				+ "&curtain3=" + parseInt(k)
				+ "&curtain4=" + parseInt(l)
				+ "&curtain5=" + parseInt(m)
				+ "&curtain6=" + parseInt(n)
				
				+ "&ac1=" + parseInt(o)
				+ "&ac2=" + parseInt(p)
				+ "&ac3=" + parseInt(q)
				
				+ "&ac1Temp=" + parseInt(r)
				+ "&ac2Temp=" + parseInt(s)
				+ "&ac3Temp=" + parseInt(t);
				
			var config = {
				headers : {
					'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
				}
			}

			$http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
			  .success(function (data, status, headers, config) {
				$scope.PostDataResponse = data;
				document.getElementById("curtain2Id").innerHTML = 0;
			  })
		}
		
    };
	
	$scope.SendDataCurtain3 = function () {
		
		var a = document.getElementById("light1Id").innerHTML;
		JSON.stringify(a);
		
		var b = document.getElementById("light2Id").innerHTML;
		JSON.stringify(b);
		
		var c = document.getElementById("light3Id").innerHTML;
		JSON.stringify(c);
		
		var d = document.getElementById("light4Id").innerHTML;
		JSON.stringify(d);
		
		var e = document.getElementById("light5Id").innerHTML;
		JSON.stringify(e);
		
		var f = document.getElementById("light6Id").innerHTML;
		JSON.stringify(f);
		
		var g = document.getElementById("light7Id").innerHTML;
		JSON.stringify(g);
		
		var h = document.getElementById("light8Id").innerHTML;
		JSON.stringify(h);
		
		var i = document.getElementById("curtain1Id").innerHTML;
		JSON.stringify(i);
		
		var j = document.getElementById("curtain2Id").innerHTML;
		JSON.stringify(j);
		
		var k = document.getElementById("curtain3Id").innerHTML;
		JSON.stringify(k);
		
		var l = document.getElementById("curtain4Id").innerHTML;
		JSON.stringify(l);
		
		var m = document.getElementById("curtain5Id").innerHTML;
		JSON.stringify(m);
		
		var n = document.getElementById("curtain6Id").innerHTML;
		JSON.stringify(n);
		
		var o = document.getElementById("ac1Id").innerHTML;
		JSON.stringify(o);
		
		var p = document.getElementById("ac2Id").innerHTML;
		JSON.stringify(p);
		
		var q = document.getElementById("ac3Id").innerHTML;
		JSON.stringify(q);
		
		var r = document.getElementById("ac1TempId").innerHTML;
		JSON.stringify(r);
		
		var s = document.getElementById("ac2TempId").innerHTML;
		JSON.stringify(s);
		
		var t = document.getElementById("ac3TempId").innerHTML;
		JSON.stringify(t);
		
		if (document.getElementById("curtain3").checked == true){
				var data = "light1=" + parseInt(a)
				+ "&light2=" + parseInt(b)
				+ "&light3=" + parseInt(c)
				+ "&light4=" + parseInt(d)
				+ "&light5=" + parseInt(e)
				+ "&light6=" + parseInt(f)
				+ "&light7=" + parseInt(g)
				+ "&light8=" + parseInt(h)
					
				+ "&curtain1=" + parseInt(i)
				+ "&curtain2=" + parseInt(j)
				+ "&curtain3=1"
				+ "&curtain4=" + parseInt(l)
				+ "&curtain5=" + parseInt(m)
				+ "&curtain6=" + parseInt(n)
				
				+ "&ac1=" + parseInt(o)
				+ "&ac2=" + parseInt(p)
				+ "&ac3=" + parseInt(q)
				
				+ "&ac1Temp=" + parseInt(r)
				+ "&ac2Temp=" + parseInt(s)
				+ "&ac3Temp=" + parseInt(t);
				
			var config = {
				headers : {
					'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
				}
			}

			$http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
			  .success(function (data, status, headers, config) {
				$scope.PostDataResponse = data;
				document.getElementById("curtain3Id").innerHTML = 1;
			  })
		}
		
		else if (document.getElementById("curtain3").checked == false){
				var data = "light1=" + parseInt(a)
				+ "&light2=" + parseInt(b)
				+ "&light3=" + parseInt(c)
				+ "&light4=" + parseInt(d)
				+ "&light5=" + parseInt(e)
				+ "&light6=" + parseInt(f)
				+ "&light7=" + parseInt(g)
				+ "&light8=" + parseInt(h)
					
				+ "&curtain1=" + parseInt(i)
				+ "&curtain2=" + parseInt(j)
				+ "&curtain3=0"
				+ "&curtain4=" + parseInt(l)
				+ "&curtain5=" + parseInt(m)
				+ "&curtain6=" + parseInt(n)
				
				+ "&ac1=" + parseInt(o)
				+ "&ac2=" + parseInt(p)
				+ "&ac3=" + parseInt(q)
				
				+ "&ac1Temp=" + parseInt(r)
				+ "&ac2Temp=" + parseInt(s)
				+ "&ac3Temp=" + parseInt(t);
				
			var config = {
				headers : {
					'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
				}
			}

			$http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
			  .success(function (data, status, headers, config) {
				$scope.PostDataResponse = data;
				document.getElementById("curtain3Id").innerHTML = 0;
			  })
		}
		
    };
	
	$scope.SendDataCurtain4 = function () {
		
		var a = document.getElementById("light1Id").innerHTML;
		JSON.stringify(a);
		
		var b = document.getElementById("light2Id").innerHTML;
		JSON.stringify(b);
		
		var c = document.getElementById("light3Id").innerHTML;
		JSON.stringify(c);
		
		var d = document.getElementById("light4Id").innerHTML;
		JSON.stringify(d);
		
		var e = document.getElementById("light5Id").innerHTML;
		JSON.stringify(e);
		
		var f = document.getElementById("light6Id").innerHTML;
		JSON.stringify(f);
		
		var g = document.getElementById("light7Id").innerHTML;
		JSON.stringify(g);
		
		var h = document.getElementById("light8Id").innerHTML;
		JSON.stringify(h);
		
		var i = document.getElementById("curtain1Id").innerHTML;
		JSON.stringify(i);
		
		var j = document.getElementById("curtain2Id").innerHTML;
		JSON.stringify(j);
		
		var k = document.getElementById("curtain3Id").innerHTML;
		JSON.stringify(k);
		
		var l = document.getElementById("curtain4Id").innerHTML;
		JSON.stringify(l);
		
		var m = document.getElementById("curtain5Id").innerHTML;
		JSON.stringify(m);
		
		var n = document.getElementById("curtain6Id").innerHTML;
		JSON.stringify(n);
		
		var o = document.getElementById("ac1Id").innerHTML;
		JSON.stringify(o);
		
		var p = document.getElementById("ac2Id").innerHTML;
		JSON.stringify(p);
		
		var q = document.getElementById("ac3Id").innerHTML;
		JSON.stringify(q);
		
		var r = document.getElementById("ac1TempId").innerHTML;
		JSON.stringify(r);
		
		var s = document.getElementById("ac2TempId").innerHTML;
		JSON.stringify(s);
		
		var t = document.getElementById("ac3TempId").innerHTML;
		JSON.stringify(t);
		
		if (document.getElementById("curtain4").checked == true){
				var data = "light1=" + parseInt(a)
				+ "&light2=" + parseInt(b)
				+ "&light3=" + parseInt(c)
				+ "&light4=" + parseInt(d)
				+ "&light5=" + parseInt(e)
				+ "&light6=" + parseInt(f)
				+ "&light7=" + parseInt(g)
				+ "&light8=" + parseInt(h)
					
				+ "&curtain1=" + parseInt(i)
				+ "&curtain2=" + parseInt(j)
				+ "&curtain3=" + parseInt(k)
				+ "&curtain4=1"
				+ "&curtain5=" + parseInt(m)
				+ "&curtain6=" + parseInt(n)
				
				+ "&ac1=" + parseInt(o)
				+ "&ac2=" + parseInt(p)
				+ "&ac3=" + parseInt(q)
				
				+ "&ac1Temp=" + parseInt(r)
				+ "&ac2Temp=" + parseInt(s)
				+ "&ac3Temp=" + parseInt(t);
				
			var config = {
				headers : {
					'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
				}
			}

			$http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
			  .success(function (data, status, headers, config) {
				$scope.PostDataResponse = data;
				document.getElementById("curtain4Id").innerHTML = 1;
			  })
		}
		
		else if (document.getElementById("curtain4").checked == false){
				var data = "light1=" + parseInt(a)
				+ "&light2=" + parseInt(b)
				+ "&light3=" + parseInt(c)
				+ "&light4=" + parseInt(d)
				+ "&light5=" + parseInt(e)
				+ "&light6=" + parseInt(f)
				+ "&light7=" + parseInt(g)
				+ "&light8=" + parseInt(h)
					
				+ "&curtain1=" + parseInt(i)
				+ "&curtain2=" + parseInt(j)
				+ "&curtain3=" + parseInt(k)
				+ "&curtain4=0"
				+ "&curtain5=" + parseInt(m)
				+ "&curtain6=" + parseInt(n)
				
				+ "&ac1=" + parseInt(o)
				+ "&ac2=" + parseInt(p)
				+ "&ac3=" + parseInt(q)
				
				+ "&ac1Temp=" + parseInt(r)
				+ "&ac2Temp=" + parseInt(s)
				+ "&ac3Temp=" + parseInt(t);
				
			var config = {
				headers : {
					'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
				}
			}

			$http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
			  .success(function (data, status, headers, config) {
				$scope.PostDataResponse = data;
				document.getElementById("curtain4Id").innerHTML = 0;
			  })
		}
		
    };
	
	$scope.SendDataCurtain5 = function () {
		
		var a = document.getElementById("light1Id").innerHTML;
		JSON.stringify(a);
		
		var b = document.getElementById("light2Id").innerHTML;
		JSON.stringify(b);
		
		var c = document.getElementById("light3Id").innerHTML;
		JSON.stringify(c);
		
		var d = document.getElementById("light4Id").innerHTML;
		JSON.stringify(d);
		
		var e = document.getElementById("light5Id").innerHTML;
		JSON.stringify(e);
		
		var f = document.getElementById("light6Id").innerHTML;
		JSON.stringify(f);
		
		var g = document.getElementById("light7Id").innerHTML;
		JSON.stringify(g);
		
		var h = document.getElementById("light8Id").innerHTML;
		JSON.stringify(h);
		
		var i = document.getElementById("curtain1Id").innerHTML;
		JSON.stringify(i);
		
		var j = document.getElementById("curtain2Id").innerHTML;
		JSON.stringify(j);
		
		var k = document.getElementById("curtain3Id").innerHTML;
		JSON.stringify(k);
		
		var l = document.getElementById("curtain4Id").innerHTML;
		JSON.stringify(l);
		
		var m = document.getElementById("curtain5Id").innerHTML;
		JSON.stringify(m);
		
		var n = document.getElementById("curtain6Id").innerHTML;
		JSON.stringify(n);
		
		var o = document.getElementById("ac1Id").innerHTML;
		JSON.stringify(o);
		
		var p = document.getElementById("ac2Id").innerHTML;
		JSON.stringify(p);
		
		var q = document.getElementById("ac3Id").innerHTML;
		JSON.stringify(q);
		
		var r = document.getElementById("ac1TempId").innerHTML;
		JSON.stringify(r);
		
		var s = document.getElementById("ac2TempId").innerHTML;
		JSON.stringify(s);
		
		var t = document.getElementById("ac3TempId").innerHTML;
		JSON.stringify(t);
		
		if (document.getElementById("curtain5").checked == true){
				var data = "light1=" + parseInt(a)
				+ "&light2=" + parseInt(b)
				+ "&light3=" + parseInt(c)
				+ "&light4=" + parseInt(d)
				+ "&light5=" + parseInt(e)
				+ "&light6=" + parseInt(f)
				+ "&light7=" + parseInt(g)
				+ "&light8=" + parseInt(h)
					
				+ "&curtain1=" + parseInt(i)
				+ "&curtain2=" + parseInt(j)
				+ "&curtain3=" + parseInt(k)
				+ "&curtain4=" + parseInt(l)
				+ "&curtain5=1"
				+ "&curtain6=" + parseInt(n)
				
				+ "&ac1=" + parseInt(o)
				+ "&ac2=" + parseInt(p)
				+ "&ac3=" + parseInt(q)
				
				+ "&ac1Temp=" + parseInt(r)
				+ "&ac2Temp=" + parseInt(s)
				+ "&ac3Temp=" + parseInt(t);
				
			var config = {
				headers : {
					'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
				}
			}

			$http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
			  .success(function (data, status, headers, config) {
				$scope.PostDataResponse = data;
				document.getElementById("curtain5Id").innerHTML = 1;
			  })
		}
		
		else if (document.getElementById("curtain5").checked == false){
				var data = "light1=" + parseInt(a)
				+ "&light2=" + parseInt(b)
				+ "&light3=" + parseInt(c)
				+ "&light4=" + parseInt(d)
				+ "&light5=" + parseInt(e)
				+ "&light6=" + parseInt(f)
				+ "&light7=" + parseInt(g)
				+ "&light8=" + parseInt(h)
					
				+ "&curtain1=" + parseInt(i)
				+ "&curtain2=" + parseInt(j)
				+ "&curtain3=" + parseInt(k)
				+ "&curtain4=" + parseInt(l)
				+ "&curtain5=0" 
				+ "&curtain6=" + parseInt(n)
				
				+ "&ac1=" + parseInt(o)
				+ "&ac2=" + parseInt(p)
				+ "&ac3=" + parseInt(q)
				
				+ "&ac1Temp=" + parseInt(r)
				+ "&ac2Temp=" + parseInt(s)
				+ "&ac3Temp=" + parseInt(t);
				
			var config = {
				headers : {
					'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
				}
			}

			$http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
			  .success(function (data, status, headers, config) {
				$scope.PostDataResponse = data;
				document.getElementById("curtain5Id").innerHTML = 0;
			  })
		}
		
    };
	
	$scope.SendDataCurtain6 = function () {
		
		var a = document.getElementById("light1Id").innerHTML;
		JSON.stringify(a);
		
		var b = document.getElementById("light2Id").innerHTML;
		JSON.stringify(b);
		
		var c = document.getElementById("light3Id").innerHTML;
		JSON.stringify(c);
		
		var d = document.getElementById("light4Id").innerHTML;
		JSON.stringify(d);
		
		var e = document.getElementById("light5Id").innerHTML;
		JSON.stringify(e);
		
		var f = document.getElementById("light6Id").innerHTML;
		JSON.stringify(f);
		
		var g = document.getElementById("light7Id").innerHTML;
		JSON.stringify(g);
		
		var h = document.getElementById("light8Id").innerHTML;
		JSON.stringify(h);
		
		var i = document.getElementById("curtain1Id").innerHTML;
		JSON.stringify(i);
		
		var j = document.getElementById("curtain2Id").innerHTML;
		JSON.stringify(j);
		
		var k = document.getElementById("curtain3Id").innerHTML;
		JSON.stringify(k);
		
		var l = document.getElementById("curtain4Id").innerHTML;
		JSON.stringify(l);
		
		var m = document.getElementById("curtain5Id").innerHTML;
		JSON.stringify(m);
		
		var n = document.getElementById("curtain6Id").innerHTML;
		JSON.stringify(n);
		
		var o = document.getElementById("ac1Id").innerHTML;
		JSON.stringify(o);
		
		var p = document.getElementById("ac2Id").innerHTML;
		JSON.stringify(p);
		
		var q = document.getElementById("ac3Id").innerHTML;
		JSON.stringify(q);
		
		var r = document.getElementById("ac1TempId").innerHTML;
		JSON.stringify(r);
		
		var s = document.getElementById("ac2TempId").innerHTML;
		JSON.stringify(s);
		
		var t = document.getElementById("ac3TempId").innerHTML;
		JSON.stringify(t);
		
		if (document.getElementById("curtain6").checked == true){
				var data = "light1=" + parseInt(a)
				+ "&light2=" + parseInt(b)
				+ "&light3=" + parseInt(c)
				+ "&light4=" + parseInt(d)
				+ "&light5=" + parseInt(e)
				+ "&light6=" + parseInt(f)
				+ "&light7=" + parseInt(g)
				+ "&light8=" + parseInt(h)
					
				+ "&curtain1=" + parseInt(i)
				+ "&curtain2=" + parseInt(j)
				+ "&curtain3=" + parseInt(k)
				+ "&curtain4=" + parseInt(l)
				+ "&curtain5=" + parseInt(m)
				+ "&curtain6=1"
				
				+ "&ac1=" + parseInt(o)
				+ "&ac2=" + parseInt(p)
				+ "&ac3=" + parseInt(q)
				
				+ "&ac1Temp=" + parseInt(r)
				+ "&ac2Temp=" + parseInt(s)
				+ "&ac3Temp=" + parseInt(t);
				
			var config = {
				headers : {
					'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
				}
			}

			$http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
			  .success(function (data, status, headers, config) {
				$scope.PostDataResponse = data;
				document.getElementById("curtain6Id").innerHTML = 1;
			  })
		}
		
		else if (document.getElementById("curtain6").checked == false){
				var data = "light1=" + parseInt(a)
				+ "&light2=" + parseInt(b)
				+ "&light3=" + parseInt(c)
				+ "&light4=" + parseInt(d)
				+ "&light5=" + parseInt(e)
				+ "&light6=" + parseInt(f)
				+ "&light7=" + parseInt(g)
				+ "&light8=" + parseInt(h)
					
				+ "&curtain1=" + parseInt(i)
				+ "&curtain2=" + parseInt(j)
				+ "&curtain3=" + parseInt(k)
				+ "&curtain4=" + parseInt(l)
				+ "&curtain5=" + parseInt(m) 
				+ "&curtain6=0"
				
				+ "&ac1=" + parseInt(o)
				+ "&ac2=" + parseInt(p)
				+ "&ac3=" + parseInt(q)
				
				+ "&ac1Temp=" + parseInt(r)
				+ "&ac2Temp=" + parseInt(s)
				+ "&ac3Temp=" + parseInt(t);
				
			var config = {
				headers : {
					'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
				}
			}

			$http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
			  .success(function (data, status, headers, config) {
				$scope.PostDataResponse = data;
				document.getElementById("curtain6Id").innerHTML = 0;
			  })
		}
		
    };
	
	$scope.SendDataAc1 = function () {
		
		var a = document.getElementById("light1Id").innerHTML;
		JSON.stringify(a);
		
		var b = document.getElementById("light2Id").innerHTML;
		JSON.stringify(b);
		
		var c = document.getElementById("light3Id").innerHTML;
		JSON.stringify(c);
		
		var d = document.getElementById("light4Id").innerHTML;
		JSON.stringify(d);
		
		var e = document.getElementById("light5Id").innerHTML;
		JSON.stringify(e);
		
		var f = document.getElementById("light6Id").innerHTML;
		JSON.stringify(f);
		
		var g = document.getElementById("light7Id").innerHTML;
		JSON.stringify(g);
		
		var h = document.getElementById("light8Id").innerHTML;
		JSON.stringify(h);
		
		var i = document.getElementById("curtain1Id").innerHTML;
		JSON.stringify(i);
		
		var j = document.getElementById("curtain2Id").innerHTML;
		JSON.stringify(j);
		
		var k = document.getElementById("curtain3Id").innerHTML;
		JSON.stringify(k);
		
		var l = document.getElementById("curtain4Id").innerHTML;
		JSON.stringify(l);
		
		var m = document.getElementById("curtain5Id").innerHTML;
		JSON.stringify(m);
		
		var n = document.getElementById("curtain6Id").innerHTML;
		JSON.stringify(n);
		
		var o = document.getElementById("ac1Id").innerHTML;
		JSON.stringify(o);
		
		var p = document.getElementById("ac2Id").innerHTML;
		JSON.stringify(p);
		
		var q = document.getElementById("ac3Id").innerHTML;
		JSON.stringify(q);
		
		var r = document.getElementById("ac1TempId").innerHTML;
		JSON.stringify(r);
		
		var s = document.getElementById("ac2TempId").innerHTML;
		JSON.stringify(s);
		
		var t = document.getElementById("ac3TempId").innerHTML;
		JSON.stringify(t);
		
		if (document.getElementById("ac1").checked == true){
				var data = "light1=" + parseInt(a)
				+ "&light2=" + parseInt(b)
				+ "&light3=" + parseInt(c)
				+ "&light4=" + parseInt(d)
				+ "&light5=" + parseInt(e)
				+ "&light6=" + parseInt(f)
				+ "&light7=" + parseInt(g)
				+ "&light8=" + parseInt(h)
					
				+ "&curtain1=" + parseInt(i)
				+ "&curtain2=" + parseInt(j)
				+ "&curtain3=" + parseInt(k)
				+ "&curtain4=" + parseInt(l)
				+ "&curtain5=" + parseInt(m)
				+ "&curtain6=" + parseInt(n)
				
				+ "&ac1=1"
				+ "&ac2=" + parseInt(p)
				+ "&ac3=" + parseInt(q)
				
				+ "&ac1Temp=" + parseInt(r)
				+ "&ac2Temp=" + parseInt(s)
				+ "&ac3Temp=" + parseInt(t);
				
			var config = {
				headers : {
					'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
				}
			}

			$http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
			  .success(function (data, status, headers, config) {
				$scope.PostDataResponse = data;
				document.getElementById("ac1Id").innerHTML = 1;
			  })
		}
		
		else if (document.getElementById("ac1").checked == false){
				var data = "light1=" + parseInt(a)
				+ "&light2=" + parseInt(b)
				+ "&light3=" + parseInt(c)
				+ "&light4=" + parseInt(d)
				+ "&light5=" + parseInt(e)
				+ "&light6=" + parseInt(f)
				+ "&light7=" + parseInt(g)
				+ "&light8=" + parseInt(h)
					
				+ "&curtain1=" + parseInt(i)
				+ "&curtain2=" + parseInt(j)
				+ "&curtain3=" + parseInt(k)
				+ "&curtain4=" + parseInt(l)
				+ "&curtain5=" + parseInt(m) 
				+ "&curtain6=" + parseInt(n) 
				
				+ "&ac1=0"
				+ "&ac2=" + parseInt(p)
				+ "&ac3=" + parseInt(q)
				
				+ "&ac1Temp=" + parseInt(r)
				+ "&ac2Temp=" + parseInt(s)
				+ "&ac3Temp=" + parseInt(t);
				
			var config = {
				headers : {
					'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
				}
			}

			$http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
			  .success(function (data, status, headers, config) {
				$scope.PostDataResponse = data;
				document.getElementById("ac1Id").innerHTML = 0;
			  })
		}
		
    };
	
	$scope.SendDataAc2 = function () {
		
		var a = document.getElementById("light1Id").innerHTML;
		JSON.stringify(a);
		
		var b = document.getElementById("light2Id").innerHTML;
		JSON.stringify(b);
		
		var c = document.getElementById("light3Id").innerHTML;
		JSON.stringify(c);
		
		var d = document.getElementById("light4Id").innerHTML;
		JSON.stringify(d);
		
		var e = document.getElementById("light5Id").innerHTML;
		JSON.stringify(e);
		
		var f = document.getElementById("light6Id").innerHTML;
		JSON.stringify(f);
		
		var g = document.getElementById("light7Id").innerHTML;
		JSON.stringify(g);
		
		var h = document.getElementById("light8Id").innerHTML;
		JSON.stringify(h);
		
		var i = document.getElementById("curtain1Id").innerHTML;
		JSON.stringify(i);
		
		var j = document.getElementById("curtain2Id").innerHTML;
		JSON.stringify(j);
		
		var k = document.getElementById("curtain3Id").innerHTML;
		JSON.stringify(k);
		
		var l = document.getElementById("curtain4Id").innerHTML;
		JSON.stringify(l);
		
		var m = document.getElementById("curtain5Id").innerHTML;
		JSON.stringify(m);
		
		var n = document.getElementById("curtain6Id").innerHTML;
		JSON.stringify(n);
		
		var o = document.getElementById("ac1Id").innerHTML;
		JSON.stringify(o);
		
		var p = document.getElementById("ac2Id").innerHTML;
		JSON.stringify(p);
		
		var q = document.getElementById("ac3Id").innerHTML;
		JSON.stringify(q);
		
		var r = document.getElementById("ac1TempId").innerHTML;
		JSON.stringify(r);
		
		var s = document.getElementById("ac2TempId").innerHTML;
		JSON.stringify(s);
		
		var t = document.getElementById("ac3TempId").innerHTML;
		JSON.stringify(t);
		
		if (document.getElementById("ac2").checked == true){
				var data = "light1=" + parseInt(a)
				+ "&light2=" + parseInt(b)
				+ "&light3=" + parseInt(c)
				+ "&light4=" + parseInt(d)
				+ "&light5=" + parseInt(e)
				+ "&light6=" + parseInt(f)
				+ "&light7=" + parseInt(g)
				+ "&light8=" + parseInt(h)
					
				+ "&curtain1=" + parseInt(i)
				+ "&curtain2=" + parseInt(j)
				+ "&curtain3=" + parseInt(k)
				+ "&curtain4=" + parseInt(l)
				+ "&curtain5=" + parseInt(m)
				+ "&curtain6=" + parseInt(n)
				
				+ "&ac1=" + parseInt(o)
				+ "&ac2=1"
				+ "&ac3=" + parseInt(q)
				
				+ "&ac1Temp=" + parseInt(r)
				+ "&ac2Temp=" + parseInt(s)
				+ "&ac3Temp=" + parseInt(t);
				
			var config = {
				headers : {
					'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
				}
			}

			$http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
			  .success(function (data, status, headers, config) {
				$scope.PostDataResponse = data;
				document.getElementById("ac2Id").innerHTML = 1;
			  })
		}
		
		else if (document.getElementById("ac2").checked == false){
				var data = "light1=" + parseInt(a)
				+ "&light2=" + parseInt(b)
				+ "&light3=" + parseInt(c)
				+ "&light4=" + parseInt(d)
				+ "&light5=" + parseInt(e)
				+ "&light6=" + parseInt(f)
				+ "&light7=" + parseInt(g)
				+ "&light8=" + parseInt(h)
					
				+ "&curtain1=" + parseInt(i)
				+ "&curtain2=" + parseInt(j)
				+ "&curtain3=" + parseInt(k)
				+ "&curtain4=" + parseInt(l)
				+ "&curtain5=" + parseInt(m) 
				+ "&curtain6=" + parseInt(n) 
				
				+ "&ac1=" + parseInt(o)
				+ "&ac2=0"
				+ "&ac3=" + parseInt(q)
				
				+ "&ac1Temp=" + parseInt(r)
				+ "&ac2Temp=" + parseInt(s)
				+ "&ac3Temp=" + parseInt(t);
				
			var config = {
				headers : {
					'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
				}
			}

			$http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
			  .success(function (data, status, headers, config) {
				$scope.PostDataResponse = data;
				document.getElementById("ac2Id").innerHTML = 0;
			  })
		}
		
    };
	
	$scope.SendDataAc3 = function () {
		
		var a = document.getElementById("light1Id").innerHTML;
		JSON.stringify(a);
		
		var b = document.getElementById("light2Id").innerHTML;
		JSON.stringify(b);
		
		var c = document.getElementById("light3Id").innerHTML;
		JSON.stringify(c);
		
		var d = document.getElementById("light4Id").innerHTML;
		JSON.stringify(d);
		
		var e = document.getElementById("light5Id").innerHTML;
		JSON.stringify(e);
		
		var f = document.getElementById("light6Id").innerHTML;
		JSON.stringify(f);
		
		var g = document.getElementById("light7Id").innerHTML;
		JSON.stringify(g);
		
		var h = document.getElementById("light8Id").innerHTML;
		JSON.stringify(h);
		
		var i = document.getElementById("curtain1Id").innerHTML;
		JSON.stringify(i);
		
		var j = document.getElementById("curtain2Id").innerHTML;
		JSON.stringify(j);
		
		var k = document.getElementById("curtain3Id").innerHTML;
		JSON.stringify(k);
		
		var l = document.getElementById("curtain4Id").innerHTML;
		JSON.stringify(l);
		
		var m = document.getElementById("curtain5Id").innerHTML;
		JSON.stringify(m);
		
		var n = document.getElementById("curtain6Id").innerHTML;
		JSON.stringify(n);
		
		var o = document.getElementById("ac1Id").innerHTML;
		JSON.stringify(o);
		
		var p = document.getElementById("ac2Id").innerHTML;
		JSON.stringify(p);
		
		var q = document.getElementById("ac3Id").innerHTML;
		JSON.stringify(q);
		
		var r = document.getElementById("ac1TempId").innerHTML;
		JSON.stringify(r);
		
		var s = document.getElementById("ac2TempId").innerHTML;
		JSON.stringify(s);
		
		var t = document.getElementById("ac3TempId").innerHTML;
		JSON.stringify(t);
		
		if (document.getElementById("ac3").checked == true){
				var data = "light1=" + parseInt(a)
				+ "&light2=" + parseInt(b)
				+ "&light3=" + parseInt(c)
				+ "&light4=" + parseInt(d)
				+ "&light5=" + parseInt(e)
				+ "&light6=" + parseInt(f)
				+ "&light7=" + parseInt(g)
				+ "&light8=" + parseInt(h)
					
				+ "&curtain1=" + parseInt(i)
				+ "&curtain2=" + parseInt(j)
				+ "&curtain3=" + parseInt(k)
				+ "&curtain4=" + parseInt(l)
				+ "&curtain5=" + parseInt(m)
				+ "&curtain6=" + parseInt(n)
				
				+ "&ac1=" + parseInt(o)
				+ "&ac2=" + parseInt(p)
				+ "&ac3=1"
				
				+ "&ac1Temp=" + parseInt(r)
				+ "&ac2Temp=" + parseInt(s)
				+ "&ac3Temp=" + parseInt(t);
				
			var config = {
				headers : {
					'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
				}
			}

			$http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
			  .success(function (data, status, headers, config) {
				$scope.PostDataResponse = data;
				document.getElementById("ac3Id").innerHTML = 1;
			  })
		}
		
		else if (document.getElementById("ac3").checked == false){
				var data = "light1=" + parseInt(a)
				+ "&light2=" + parseInt(b)
				+ "&light3=" + parseInt(c)
				+ "&light4=" + parseInt(d)
				+ "&light5=" + parseInt(e)
				+ "&light6=" + parseInt(f)
				+ "&light7=" + parseInt(g)
				+ "&light8=" + parseInt(h)
					
				+ "&curtain1=" + parseInt(i)
				+ "&curtain2=" + parseInt(j)
				+ "&curtain3=" + parseInt(k)
				+ "&curtain4=" + parseInt(l)
				+ "&curtain5=" + parseInt(m) 
				+ "&curtain6=" + parseInt(n) 
				
				+ "&ac1=" + parseInt(o)
				+ "&ac2=" + parseInt(p)
				+ "&ac3=0"
				
				+ "&ac1Temp=" + parseInt(r)
				+ "&ac2Temp=" + parseInt(s)
				+ "&ac3Temp=" + parseInt(t);
				
			var config = {
				headers : {
					'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
				}
			}

			$http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
			  .success(function (data, status, headers, config) {
				$scope.PostDataResponse = data;
				document.getElementById("ac3Id").innerHTML = 0;
			  })
		}
		
    };
	
	$scope.SendDataAc1TempUp = function () {
		
		incdec1('+1');
		
		var a = document.getElementById("light1Id").innerHTML;
		JSON.stringify(a);
		
		var b = document.getElementById("light2Id").innerHTML;
		JSON.stringify(b);
		
		var c = document.getElementById("light3Id").innerHTML;
		JSON.stringify(c);
		
		var d = document.getElementById("light4Id").innerHTML;
		JSON.stringify(d);
		
		var e = document.getElementById("light5Id").innerHTML;
		JSON.stringify(e);
		
		var f = document.getElementById("light6Id").innerHTML;
		JSON.stringify(f);
		
		var g = document.getElementById("light7Id").innerHTML;
		JSON.stringify(g);
		
		var h = document.getElementById("light8Id").innerHTML;
		JSON.stringify(h);
		
		var i = document.getElementById("curtain1Id").innerHTML;
		JSON.stringify(i);
		
		var j = document.getElementById("curtain2Id").innerHTML;
		JSON.stringify(j);
		
		var k = document.getElementById("curtain3Id").innerHTML;
		JSON.stringify(k);
		
		var l = document.getElementById("curtain4Id").innerHTML;
		JSON.stringify(l);
		
		var m = document.getElementById("curtain5Id").innerHTML;
		JSON.stringify(m);
		
		var n = document.getElementById("curtain6Id").innerHTML;
		JSON.stringify(n);
		
		var o = document.getElementById("ac1Id").innerHTML;
		JSON.stringify(o);
		
		var p = document.getElementById("ac2Id").innerHTML;
		JSON.stringify(p);
		
		var q = document.getElementById("ac3Id").innerHTML;
		JSON.stringify(q);
		
		var r = document.getElementById("ac1TempId").innerHTML;
		JSON.stringify(r);
		
		var s = document.getElementById("ac2TempId").innerHTML;
		JSON.stringify(s);
		
		var t = document.getElementById("ac3TempId").innerHTML;
		JSON.stringify(t);
		
		if( parseInt(r) < 30 ){
						
			var data = "light1=" + parseInt(a) 
					+ "&light2=" + parseInt(b)
					+ "&light3=" + parseInt(c)
					+ "&light4=" + parseInt(d)
					+ "&light5=" + parseInt(e)
					+ "&light6=" + parseInt(f)
					+ "&light7=" + parseInt(g)
					+ "&light8=" + parseInt(h)
					
					+ "&curtain1=" + parseInt(i)
					+ "&curtain2=" + parseInt(j)
					+ "&curtain3=" + parseInt(k)
					+ "&curtain4=" + parseInt(l)
					+ "&curtain5=" + parseInt(m)
					+ "&curtain6=" + parseInt(n)
					
					+ "&ac1=" + parseInt(o)
					+ "&ac2=" + parseInt(p)
					+ "&ac3=" + parseInt(q)
					
					+ "&ac1Temp=" + ( parseInt(r) + 1 )
					+ "&ac2Temp=" + parseInt(s)
					+ "&ac3Temp=" + parseInt(t);
					      
			var config = {
				headers : {
					'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
				}
			}

			$http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
			  .success(function (data, status, headers, config) {
				$scope.PostDataResponse = data;
				document.getElementById("ac1TempId").innerHTML = ( parseInt(r) + 1 );
			})			
		}		
    };
	
	$scope.SendDataAc1TempDown = function () {
		
		incdec1('-1');
		
		var a = document.getElementById("light1Id").innerHTML;
		JSON.stringify(a);
		
		var b = document.getElementById("light2Id").innerHTML;
		JSON.stringify(b);
		
		var c = document.getElementById("light3Id").innerHTML;
		JSON.stringify(c);
		
		var d = document.getElementById("light4Id").innerHTML;
		JSON.stringify(d);
		
		var e = document.getElementById("light5Id").innerHTML;
		JSON.stringify(e);
		
		var f = document.getElementById("light6Id").innerHTML;
		JSON.stringify(f);
		
		var g = document.getElementById("light7Id").innerHTML;
		JSON.stringify(g);
		
		var h = document.getElementById("light8Id").innerHTML;
		JSON.stringify(h);
		
		var i = document.getElementById("curtain1Id").innerHTML;
		JSON.stringify(i);
		
		var j = document.getElementById("curtain2Id").innerHTML;
		JSON.stringify(j);
		
		var k = document.getElementById("curtain3Id").innerHTML;
		JSON.stringify(k);
		
		var l = document.getElementById("curtain4Id").innerHTML;
		JSON.stringify(l);
		
		var m = document.getElementById("curtain5Id").innerHTML;
		JSON.stringify(m);
		
		var n = document.getElementById("curtain6Id").innerHTML;
		JSON.stringify(n);
		
		var o = document.getElementById("ac1Id").innerHTML;
		JSON.stringify(o);
		
		var p = document.getElementById("ac2Id").innerHTML;
		JSON.stringify(p);
		
		var q = document.getElementById("ac3Id").innerHTML;
		JSON.stringify(q);
		
		var r = document.getElementById("ac1TempId").innerHTML;
		JSON.stringify(r);
		
		var s = document.getElementById("ac2TempId").innerHTML;
		JSON.stringify(s);
		
		var t = document.getElementById("ac3TempId").innerHTML;
		JSON.stringify(t);
		
		if(parseInt(r) > 16){
						
			var data = "light1=" + parseInt(a) 
					+ "&light2=" + parseInt(b)
					+ "&light3=" + parseInt(c)
					+ "&light4=" + parseInt(d)
					+ "&light5=" + parseInt(e)
					+ "&light6=" + parseInt(f)
					+ "&light7=" + parseInt(g)
					+ "&light8=" + parseInt(h)
					
					+ "&curtain1=" + parseInt(i)
					+ "&curtain2=" + parseInt(j)
					+ "&curtain3=" + parseInt(k)
					+ "&curtain4=" + parseInt(l)
					+ "&curtain5=" + parseInt(m)
					+ "&curtain6=" + parseInt(n)
					
					+ "&ac1=" + parseInt(o)
					+ "&ac2=" + parseInt(p)
					+ "&ac3=" + parseInt(q)
					
					+ "&ac1Temp=" + ( parseInt(r) - 1 )
					+ "&ac2Temp=" + parseInt(s)
					+ "&ac3Temp=" + parseInt(t);
					      
			var config = {
				headers : {
					'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
				}
			}

			$http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
			  .success(function (data, status, headers, config) {
				$scope.PostDataResponse = data;
				document.getElementById("ac1TempId").innerHTML = ( parseInt(r) - 1 );
			})			
		}		
    }
	
	$scope.SendDataAc2TempUp = function () {
		
		incdec2('+1');
		
		var a = document.getElementById("light1Id").innerHTML;
		JSON.stringify(a);
		
		var b = document.getElementById("light2Id").innerHTML;
		JSON.stringify(b);
		
		var c = document.getElementById("light3Id").innerHTML;
		JSON.stringify(c);
		
		var d = document.getElementById("light4Id").innerHTML;
		JSON.stringify(d);
		
		var e = document.getElementById("light5Id").innerHTML;
		JSON.stringify(e);
		
		var f = document.getElementById("light6Id").innerHTML;
		JSON.stringify(f);
		
		var g = document.getElementById("light7Id").innerHTML;
		JSON.stringify(g);
		
		var h = document.getElementById("light8Id").innerHTML;
		JSON.stringify(h);
		
		var i = document.getElementById("curtain1Id").innerHTML;
		JSON.stringify(i);
		
		var j = document.getElementById("curtain2Id").innerHTML;
		JSON.stringify(j);
		
		var k = document.getElementById("curtain3Id").innerHTML;
		JSON.stringify(k);
		
		var l = document.getElementById("curtain4Id").innerHTML;
		JSON.stringify(l);
		
		var m = document.getElementById("curtain5Id").innerHTML;
		JSON.stringify(m);
		
		var n = document.getElementById("curtain6Id").innerHTML;
		JSON.stringify(n);
		
		var o = document.getElementById("ac1Id").innerHTML;
		JSON.stringify(o);
		
		var p = document.getElementById("ac2Id").innerHTML;
		JSON.stringify(p);
		
		var q = document.getElementById("ac3Id").innerHTML;
		JSON.stringify(q);
		
		var r = document.getElementById("ac1TempId").innerHTML;
		JSON.stringify(r);
		
		var s = document.getElementById("ac2TempId").innerHTML;
		JSON.stringify(s);
		
		var t = document.getElementById("ac3TempId").innerHTML;
		JSON.stringify(t);
		
		if( parseInt(s) < 30 ){
						
			var data = "light1=" + parseInt(a) 
					+ "&light2=" + parseInt(b)
					+ "&light3=" + parseInt(c)
					+ "&light4=" + parseInt(d)
					+ "&light5=" + parseInt(e)
					+ "&light6=" + parseInt(f)
					+ "&light7=" + parseInt(g)
					+ "&light8=" + parseInt(h)
					
					+ "&curtain1=" + parseInt(i)
					+ "&curtain2=" + parseInt(j)
					+ "&curtain3=" + parseInt(k)
					+ "&curtain4=" + parseInt(l)
					+ "&curtain5=" + parseInt(m)
					+ "&curtain6=" + parseInt(n)
					
					+ "&ac1=" + parseInt(o)
					+ "&ac2=" + parseInt(p)
					+ "&ac3=" + parseInt(q)
					
					+ "&ac1Temp=" + parseInt(r)
					+ "&ac2Temp=" + ( parseInt(s) + 1 )
					+ "&ac3Temp=" + parseInt(t);
					      
			var config = {
				headers : {
					'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
				}
			}

			$http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
			  .success(function (data, status, headers, config) {
				$scope.PostDataResponse = data;
				document.getElementById("ac2TempId").innerHTML = ( parseInt(s) + 1 );
			})			
		}		
    };
	
	$scope.SendDataAc2TempDown = function () {
		
		incdec2('-1');
		
		var a = document.getElementById("light1Id").innerHTML;
		JSON.stringify(a);
		
		var b = document.getElementById("light2Id").innerHTML;
		JSON.stringify(b);
		
		var c = document.getElementById("light3Id").innerHTML;
		JSON.stringify(c);
		
		var d = document.getElementById("light4Id").innerHTML;
		JSON.stringify(d);
		
		var e = document.getElementById("light5Id").innerHTML;
		JSON.stringify(e);
		
		var f = document.getElementById("light6Id").innerHTML;
		JSON.stringify(f);
		
		var g = document.getElementById("light7Id").innerHTML;
		JSON.stringify(g);
		
		var h = document.getElementById("light8Id").innerHTML;
		JSON.stringify(h);
		
		var i = document.getElementById("curtain1Id").innerHTML;
		JSON.stringify(i);
		
		var j = document.getElementById("curtain2Id").innerHTML;
		JSON.stringify(j);
		
		var k = document.getElementById("curtain3Id").innerHTML;
		JSON.stringify(k);
		
		var l = document.getElementById("curtain4Id").innerHTML;
		JSON.stringify(l);
		
		var m = document.getElementById("curtain5Id").innerHTML;
		JSON.stringify(m);
		
		var n = document.getElementById("curtain6Id").innerHTML;
		JSON.stringify(n);
		
		var o = document.getElementById("ac1Id").innerHTML;
		JSON.stringify(o);
		
		var p = document.getElementById("ac2Id").innerHTML;
		JSON.stringify(p);
		
		var q = document.getElementById("ac3Id").innerHTML;
		JSON.stringify(q);
		
		var r = document.getElementById("ac1TempId").innerHTML;
		JSON.stringify(r);
		
		var s = document.getElementById("ac2TempId").innerHTML;
		JSON.stringify(s);
		
		var t = document.getElementById("ac3TempId").innerHTML;
		JSON.stringify(t);
		
		if(parseInt(s) > 16){
						
			var data = "light1=" + parseInt(a) 
					+ "&light2=" + parseInt(b)
					+ "&light3=" + parseInt(c)
					+ "&light4=" + parseInt(d)
					+ "&light5=" + parseInt(e)
					+ "&light6=" + parseInt(f)
					+ "&light7=" + parseInt(g)
					+ "&light8=" + parseInt(h)
					
					+ "&curtain1=" + parseInt(i)
					+ "&curtain2=" + parseInt(j)
					+ "&curtain3=" + parseInt(k)
					+ "&curtain4=" + parseInt(l)
					+ "&curtain5=" + parseInt(m)
					+ "&curtain6=" + parseInt(n)
					
					+ "&ac1=" + parseInt(o)
					+ "&ac2=" + parseInt(p)
					+ "&ac3=" + parseInt(q)
					
					+ "&ac1Temp=" + parseInt(r)
					+ "&ac2Temp=" + ( parseInt(s) - 1 )
					+ "&ac3Temp=" + parseInt(t);
					      
			var config = {
				headers : {
					'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
				}
			}

			$http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
			  .success(function (data, status, headers, config) {
				$scope.PostDataResponse = data;
				document.getElementById("ac2TempId").innerHTML = ( parseInt(s) - 1 );
			})			
		}		
    }
	
	$scope.SendDataAc3TempUp = function () {
		
		incdec3('+1');
		
		var a = document.getElementById("light1Id").innerHTML;
		JSON.stringify(a);
		
		var b = document.getElementById("light2Id").innerHTML;
		JSON.stringify(b);
		
		var c = document.getElementById("light3Id").innerHTML;
		JSON.stringify(c);
		
		var d = document.getElementById("light4Id").innerHTML;
		JSON.stringify(d);
		
		var e = document.getElementById("light5Id").innerHTML;
		JSON.stringify(e);
		
		var f = document.getElementById("light6Id").innerHTML;
		JSON.stringify(f);
		
		var g = document.getElementById("light7Id").innerHTML;
		JSON.stringify(g);
		
		var h = document.getElementById("light8Id").innerHTML;
		JSON.stringify(h);
		
		var i = document.getElementById("curtain1Id").innerHTML;
		JSON.stringify(i);
		
		var j = document.getElementById("curtain2Id").innerHTML;
		JSON.stringify(j);
		
		var k = document.getElementById("curtain3Id").innerHTML;
		JSON.stringify(k);
		
		var l = document.getElementById("curtain4Id").innerHTML;
		JSON.stringify(l);
		
		var m = document.getElementById("curtain5Id").innerHTML;
		JSON.stringify(m);
		
		var n = document.getElementById("curtain6Id").innerHTML;
		JSON.stringify(n);
		
		var o = document.getElementById("ac1Id").innerHTML;
		JSON.stringify(o);
		
		var p = document.getElementById("ac2Id").innerHTML;
		JSON.stringify(p);
		
		var q = document.getElementById("ac3Id").innerHTML;
		JSON.stringify(q);
		
		var r = document.getElementById("ac1TempId").innerHTML;
		JSON.stringify(r);
		
		var s = document.getElementById("ac2TempId").innerHTML;
		JSON.stringify(s);
		
		var t = document.getElementById("ac3TempId").innerHTML;
		JSON.stringify(t);
		
		if( parseInt(t) < 30 ){
						
			var data = "light1=" + parseInt(a) 
					+ "&light2=" + parseInt(b)
					+ "&light3=" + parseInt(c)
					+ "&light4=" + parseInt(d)
					+ "&light5=" + parseInt(e)
					+ "&light6=" + parseInt(f)
					+ "&light7=" + parseInt(g)
					+ "&light8=" + parseInt(h)
					
					+ "&curtain1=" + parseInt(i)
					+ "&curtain2=" + parseInt(j)
					+ "&curtain3=" + parseInt(k)
					+ "&curtain4=" + parseInt(l)
					+ "&curtain5=" + parseInt(m)
					+ "&curtain6=" + parseInt(n)
					
					+ "&ac1=" + parseInt(o)
					+ "&ac2=" + parseInt(p)
					+ "&ac3=" + parseInt(q)
					
					+ "&ac1Temp=" + parseInt(r)
					+ "&ac2Temp=" + parseInt(s)
					+ "&ac3Temp=" + ( parseInt(t) + 1 );
					      
			var config = {
				headers : {
					'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
				}
			}

			$http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
			  .success(function (data, status, headers, config) {
				$scope.PostDataResponse = data;
				document.getElementById("ac3TempId").innerHTML = ( parseInt(t) + 1 );
			})			
		}		
    };
	
	$scope.SendDataAc3TempDown = function () {
		
		incdec3('-1');
		
		var a = document.getElementById("light1Id").innerHTML;
		JSON.stringify(a);
		
		var b = document.getElementById("light2Id").innerHTML;
		JSON.stringify(b);
		
		var c = document.getElementById("light3Id").innerHTML;
		JSON.stringify(c);
		
		var d = document.getElementById("light4Id").innerHTML;
		JSON.stringify(d);
		
		var e = document.getElementById("light5Id").innerHTML;
		JSON.stringify(e);
		
		var f = document.getElementById("light6Id").innerHTML;
		JSON.stringify(f);
		
		var g = document.getElementById("light7Id").innerHTML;
		JSON.stringify(g);
		
		var h = document.getElementById("light8Id").innerHTML;
		JSON.stringify(h);
		
		var i = document.getElementById("curtain1Id").innerHTML;
		JSON.stringify(i);
		
		var j = document.getElementById("curtain2Id").innerHTML;
		JSON.stringify(j);
		
		var k = document.getElementById("curtain3Id").innerHTML;
		JSON.stringify(k);
		
		var l = document.getElementById("curtain4Id").innerHTML;
		JSON.stringify(l);
		
		var m = document.getElementById("curtain5Id").innerHTML;
		JSON.stringify(m);
		
		var n = document.getElementById("curtain6Id").innerHTML;
		JSON.stringify(n);
		
		var o = document.getElementById("ac1Id").innerHTML;
		JSON.stringify(o);
		
		var p = document.getElementById("ac2Id").innerHTML;
		JSON.stringify(p);
		
		var q = document.getElementById("ac3Id").innerHTML;
		JSON.stringify(q);
		
		var r = document.getElementById("ac1TempId").innerHTML;
		JSON.stringify(r);
		
		var s = document.getElementById("ac2TempId").innerHTML;
		JSON.stringify(s);
		
		var t = document.getElementById("ac3TempId").innerHTML;
		JSON.stringify(t);
		
		if(parseInt(t) > 16){
						
			var data = "light1=" + parseInt(a) 
					+ "&light2=" + parseInt(b)
					+ "&light3=" + parseInt(c)
					+ "&light4=" + parseInt(d)
					+ "&light5=" + parseInt(e)
					+ "&light6=" + parseInt(f)
					+ "&light7=" + parseInt(g)
					+ "&light8=" + parseInt(h)
					
					+ "&curtain1=" + parseInt(i)
					+ "&curtain2=" + parseInt(j)
					+ "&curtain3=" + parseInt(k)
					+ "&curtain4=" + parseInt(l)
					+ "&curtain5=" + parseInt(m)
					+ "&curtain6=" + parseInt(n)
					
					+ "&ac1=" + parseInt(o)
					+ "&ac2=" + parseInt(p)
					+ "&ac3=" + parseInt(q)
					
					+ "&ac1Temp=" + parseInt(r)
					+ "&ac2Temp=" + parseInt(s)
					+ "&ac3Temp=" + ( parseInt(t) - 1 );
					      
			var config = {
				headers : {
					'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
				}
			}

			$http.post('https://dweet.io/dweet/for/atmel-dimas', data, config)
			  .success(function (data, status, headers, config) {
				$scope.PostDataResponse = data;
				document.getElementById("ac3TempId").innerHTML = ( parseInt(t) - 1 );
			})			
		}		
    }

});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);	//add defaut by ionic
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

}());

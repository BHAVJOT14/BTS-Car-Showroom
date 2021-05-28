document.write(`

<head>
<style>

body {
margin: 0;
font-family: "Lato", sans-serif; 
}

.navbar {
background-color: #333;
width: 100%;
height: 200px;
}

ul {
list-style-type: none;
position: relative;
top: -170px;
margin: 0;
padding-left: 0px;
overflow: hidden;
background-color: #8eb28a;
width: 100%;
padding-top: 40px;
padding-bottom: 40px;
font-size: 21px;
}

.logo {
float: left;
position: relative;
left: 40px;
top: 0;
z-index: 999;
}

ul li {
float: left;
position: relative;
left: 500px;
}

ul li a, .dropbtn {
display: inline-block;
color: white;
text-align: center;
padding: 14px 16px;
padding-left: 22px;
text-decoration: none;
}

ul li a:hover, .dropdown:hover .dropbtn {
background-color: #8eb28a;
transform: scale(1.1);
}

ul li.dropdown {
display: inline-block;
}

.dropdown-content {
display: none;
position: fixed;
background-color: #333;
min-width: 100px;
max-width: 140px;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
z-index: 1;
font-size: 16px;
right: 10px;
}

.dropdown-content a {
color: #f2f2f2;
padding: 12px 16px;
text-decoration: none;
display: block;
text-align: left;
}

.dropdown-content a:hover {
background-color: #8eb28a;
transform: scale(1.1);
color: black;
}

.dropdown:hover .dropdown-content {
display: block;
transform: scale(1.1);
}

</style>
</head>
<body>

<img class="logo" src="images/logo.png">
<div class="navbar">
<ul> 	
  	<li><a href="index1.html">Home</a></li>
  	<li><a href="aboutus.html">About Us</a></li>

  	<li class="dropdown">
    		<a href="javascript:void(0)" class="dropbtn">Services</a>
    		<div class="dropdown-content" style="right: 400px;">
      			<a href="bookCar.html">Book a Car</a>
      			<a href="booking.html">Book a Test Drive</a>
   			<a href="servicing.html">Car Service</a>
			<a href="spareShop.html">Spare Parts</a>
    		</div>
  	</li>
  	<li><a href="offers.html">Offers</a></li>
	<li><a href="finance.html">Finance</a></li>
    	<li class="dropdown">
    		<a href="javascript:void(0)" class="dropbtn">Suggestions</a>
    		<div class="dropdown-content" style="right: 120px;">
      			<a href="feedback.html">Feedback</a>
      			<a href="feedback.html">Grievances</a>
    		</div>
  	</li>
  
  	<li class="dropdown">
    		<a href="javascript:void(0)" class="dropbtn">More</a>
    		<div class="dropdown-content">
      			<a href="career.html">Career</a>
      			<a href="ContactUsAt.html">Contact Us At</a>
      			<a href="terms&condition.html">Terms & Conditions</a>
    		</div>
  	</li>
 
</ul>


</div>
</body>

`);
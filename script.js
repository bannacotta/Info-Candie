@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@100;300;400;500;700&family=Roboto:wght@100;300;400;500;700&display=swap');

:root{
    --main-color: #e79a92;
    --black: #13131a;
    --bg: #010103;
    --border:.1rem solid rgba(255,255,255,.3);
}

*{
    font-family: 'Be Vietnam Pro', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none; border: none;
    transition: .2s linear;
    vertical-align: middle;
}

html{
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-padding-top: 9rem;
    scroll-behavior: smooth;
}

html ::-webkit-scrollbar{
    width: .8rem;
}

html ::-webkit-scrollbar-track{
    background: transparent;
}

html ::-webkit-scrollbar-thumb{
    background: #bcb9b9;
    border-radius: 5rem;
}

body{
    background: #fff;
}

section{
	padding: 2rem 7%;
}


.heading span{
    color: #020202;
    text-transform: uppercase;
    font-size: 2.5rem;
}

.btn{
	margin-top: 1rem;
	display: inline-block;
	padding: .9rem 3rem;
	font-size: 1.7rem;
	color: #fff;
	background: #e79a92;
	cursor: pointer;
}

.btn:hover{
	letter-spacing: .2rem; 
}

.header{
    background: #e79a92;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 4rem 1rem 4rem;
    border-bottom: var(--border);
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 1000;
    text-align: center;
}

.header .logo img{
    height: 6rem;
}

.header .navbar a{
    margin:0 2rem;
    font-size: 2rem;
    color: #fff;
}

.header .navbar a:hover{
    color: #ffd8d3;
    border-bottom: .1rem solid #ffd8d3;
    padding-bottom: .5rem;
}

.header .icons div{
    color: #fff;
    cursor: pointer;
    font-size: 2.5rem;
    margin-left: 2rem;
}

.header .icons div:hover{
    color: #ffd8d3;
}

#menu-btn{
    display: none;
}

.header .search-form{
    position: absolute;
    top: 115%; right: 7%;
    background: #fff;
    width: 50rem;
    height: 5rem;
    display: flex;
    align-items: center;
    transform: scaleY(0);
    transform-origin: top;
}

.header .search-form.active{
	transform: scaleY(1);
}

.header .search-form input{
    height: 100%;
    width: 100%;
    font-size: 1.6rem;
    color: #000000;
    padding: 1rem;
    text-transform: none;
}

.header .search-form label{
    cursor: pointer;
    font-size: 2.2rem;
    margin-right: 1.5rem;
    color: #000000;
}

.header .search-form label:hover{
    color: #e79a92;
}

.heading{
    padding-top:10rem;
}

.content{
    height: 60px;
}

.price{
    font-size: medium; 
    margin-top: 0.5cm;
}

.promo {
    overflow:hidden;
    position:relative;
    height:2.5rem;
    width:2.5rem;
    padding:0;
    text-shadow:1px 1px 1px #fff;
    border:1px solid #ff0000;
    vertical-align: middle;
    color: #ff0000;
    font-size: small;
    border-color: red;
    margin-top: 0.5cm;
    padding-top: 0.1rem;
    padding-left: 0.8rem;
    align-content: center;
}

.sale-cost{
    color:red; 
    font-size: 30px; 
    font-weight: 600; 
    padding-top: 0.25cm;
}

.real-cost{
    color:rgb(115, 111, 111); 
    font-size: large; 
    text-decoration: line-through; 
    padding-top: 0.5cm;
    text-align: justify;
}

.quantity{
    font-size: medium; 
    margin-top: 0.5cm;
}

.buttons_added {
    margin-top: 0.5cm;
    font-size: medium;
    opacity:1;
    display:inline-block;
    display:-ms-inline-flexbox;
    display:inline-flex;
    white-space:nowrap;
    vertical-align:top;
}
.is-form {
    overflow:hidden;
    position:relative;
    background-color:#f9f9f9;
    height:3rem;
    width:2.5rem;
    padding:0;
    text-shadow:1px 1px 1px #fff;
    border:1px solid #ddd;
}
.is-form:focus,.input-text:focus {
    outline:none;
}
.is-form.minus {
    border-radius:10px 0 0 10px;
}
.is-form.plus {
    border-radius:0 10px 10px 0;
}
.input-qty {
    background-color:#fff;
    height:3rem;
    width: 3rem;
    text-align:center;
    font-size:1.5rem;
    display:inline-block;
    vertical-align:top;
    margin:0;
    border-top:1px solid #ddd;
    border-bottom:1px solid #ddd;
    border-left:0;
    border-right:0;
    padding:0;
}
.input-qty::-webkit-outer-spin-button,.input-qty::-webkit-inner-spin-button {
    -webkit-appearance:none;
    margin:0;
}

.box .content .btn{
    border-radius:10px 10px 10px 10px;
    height: 40px;
    width: 45%;
    font-size: small;
    padding-top: 0;
}

.spacing{
    width: 10%;
}

.head{
    font-size: medium; 
    font-weight: 600; 
    margin-top: 1cm;
}

.description{
    font-size: small; 
    font-family: sans-serif;
    overflow: hidden;
    position: relative;
    margin-bottom: 20px;
    padding-bottom: 25px;
}

@media (max-width:1025px){
	html{
		font-size: 55%;
	}
	
	.header{
		padding: 1.5rem 2rem;
	}
	
	section{
		padding: 2rem;
	}
}

@media (max-width:768px){
	
	#menu-btn{
    	display: inline-block;
	}
	
	.header .navbar{
		position: absolute;
		top: 100%; right: -100%;
		background: #e79a92;
		width: 30rem;
		height: calc(100vh - 9.5rem);
	}
	
	.header .navbar.active{
		right: 0;
	}
	
	.header .navbar a{
		color: #fff;
		display: block;
		margin: 1.5rem;
		padding: .5rem;
		font-size: 2rem;	
	}
	
	.header .search-form{
		width: 90%;
		right: 2rem;
	}
	
	
}

@media (max-width:450px){
	html{
		font-size: 50%;
	}
	
	.header{
		padding: 1.5rem 2rem;
	}
}



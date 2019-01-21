import React from 'react';
import {Header} from "../header/Header";
import List from "./List";



export class ProductList extends React.Component {   
	
	state = {
    	lists: [],
    	lists2: [],
    	lists3: [],
    	titulo: ''
	};
	

	

	componentDidMount () {
		

		this.callApi()
	      .then(res => {
			var getFilter = res.filters;

			for(var i =0; i < getFilter.length;i++){
				if(getFilter[i].color === 'Cor'){
					
					document.querySelector('.cor').classList.add("show");
					document.querySelector('.cor').classList.remove("hide");
					
					
				}
				if(getFilter[i].gender=== 'Gênero'){
					
					document.querySelector('.gender').classList.add("show");
					document.querySelector('.gender').classList.remove("hide");
					
					
				}
			}
	
	        const newLists = res.items.map(c => {
	        	var value = c.price;
				var result = value.toLocaleString('pt-br', {
		            style: 'currency',
		            currency: 'BRL',
		            minimumFractionDigits: 2
		        });
	          return {
	            id: c.id,
	            name: c.name,
	            path: c.path,
	            image: c.image,
	            price: result,
	            filter: c.filter,
	            filter2: c.filter
	          };
	        });

	        this.state = newLists;

	        var getUrl = window.location.pathname.replace('/','');
			if(getUrl === 'calcas'){
				var titulo = 'Calças';
			}
			if(getUrl === 'calcados'){
				var titulo = 'Calçados';
			}
			if(getUrl === 'camisetas'){
				var titulo = 'Camisetas';
			}

	        const newState = Object.assign({}, this.state, {
	          lists:newLists,
	          titulo: titulo
	        });
	        this.setState(newState);
	      })
	      .catch(err => console.log(err));

		this.callApi2()
	      	.then(res => {

				var getFilter = res[0].filters;

				for(var i =0; i < getFilter.length;i++){
					if(getFilter[i].color === 'Cor'){
						
						document.querySelector('.cor').classList.add("show");
						document.querySelector('.cor').classList.remove("hide");
						
						
					}
					if(getFilter[i].gender=== 'Gênero'){
						
						document.querySelector('.gender').classList.add("show");
						document.querySelector('.gender').classList.remove("hide");
						
						
					}
				}
				
				
				const newLists = res[0].items.map(c => {
	        	var value = c.price;
				var result = value.toLocaleString('pt-br', {
		            style: 'currency',
		            currency: 'BRL',
		            minimumFractionDigits: 2
		        });
		          return {
		            id: c.id,
		            name: c.name,
		            path: c.path,
		            image: c.image,
		            price: result,
		            filter: c.filter,
		            filter2: c.filter
		          };
		        });
		        this.state = newLists;
		        const newState = Object.assign({}, this.state, {
		          lists:newLists
		        });
		        this.setState(newState);
		        console.log(newState);
				
				
	      	})
	      	.catch(err => console.log(err));
		
		this.callApi2()
	      	.then(res => {

	      		var getFilter = res[1].filters;

				for(var i =0; i < getFilter.length;i++){
					if(getFilter[i].color === 'Cor'){
						
						document.querySelector('.cor').classList.add("show");
						document.querySelector('.cor').classList.remove("hide");
						
						
					}
					if(getFilter[i].gender=== 'Gênero'){
						
						document.querySelector('.gender').classList.add("show");
						document.querySelector('.gender').classList.remove("hide");
						
						
					}
				}

				
				
				const newLists2 = res[1].items.map(d => {
	        	var value = d.price;
				var result = value.toLocaleString('pt-br', {
		            style: 'currency',
		            currency: 'BRL',
		            minimumFractionDigits: 2
		        });
		          return {
		            id: d.id,
		            name: d.name,
		            path: d.path,
		            image: d.image,
		            price: result,
		            filter: d.filter,
		            filter2: d.filter
		          };
		        });
		        this.state = newLists2;
		        const newState2 = Object.assign({}, this.state, {
		          lists2:newLists2
		        });
		        console.log(newState2);
		        this.setState(newState2);
				
				
	      	})
	      	.catch(err => console.log(err));

	      	this.callApi2()
	      	.then(res => {
	      		var getFilter = res[2].filters;

				for(var i =0; i < getFilter.length;i++){
					if(getFilter[i].color === 'Cor'){
						
						document.querySelector('.cor').classList.add("show");
						document.querySelector('.cor').classList.remove("hide");
						
						
					}
					if(getFilter[i].gender=== 'Gênero'){
						
						document.querySelector('.gender').classList.add("show");
						document.querySelector('.gender').classList.remove("hide");
						
						
					}
				}
				const newLists2 = res[2].items.map(d => {
	        	var value = d.price;
				var result = value.toLocaleString('pt-br', {
		            style: 'currency',
		            currency: 'BRL',
		            minimumFractionDigits: 2
		        });
		          return {
		            id: d.id,
		            name: d.name,
		            path: d.path,
		            image: d.image,
		            price: result,
		            filter: d.filter,
		            filter2: d.filter
		          };
		        });
		        this.state = newLists2;
		        const newState2 = Object.assign({}, this.state, {
		          lists3:newLists2
		        });
		        this.setState(newState2);
				
				
	      	})
	      	.catch(err => console.log(err));
  }
  componentDidUpdate(){

  	//blocks or list vitrine
	var blocks = document.querySelector('.blocks');
	var lists = document.querySelector('.lists');
	var list = document.querySelectorAll('.vitrine .list');

	blocks.onclick = function(e){
	    this.classList.add("active");
	    lists.classList.remove("active");
	    for(var k=0; k< list.length; k++){
	    	list[k].classList.remove("width100");	
	    }
	}
	lists.onclick = function(e){
	    this.classList.add("active");
	    blocks.classList.remove("active");
	    for(var k=0; k< list.length; k++){
	    	list[k].classList.add("width100");
	    	
	    }
	}

	//filter color
	var colorsFilter2 = document.querySelectorAll('.list');
	var black = document.querySelector('.black');
	var orange = document.querySelector('.orange');
	var yellow = document.querySelector('.yellow');
	var rosa = document.querySelector('.rosa');
	var cinza = document.querySelector('.cinza');
	var azul = document.querySelector('.azul');
	var beje = document.querySelector('.beje');

	black.onclick = function(e){
		for (var j = 0; j < colorsFilter2.length ; j++) {
			colorsFilter2[j].style.display = 'none';
			if(colorsFilter2[j].getAttribute('filter') === 'Preta' ){
				colorsFilter2[j].style.display = 'block';
		   }
		}

	}
	orange.onclick = function(e){
		for (var j = 0; j < colorsFilter2.length ; j++) {
			colorsFilter2[j].style.display = 'none';
			if(colorsFilter2[j].getAttribute('filter') === 'Laranja' ){
				colorsFilter2[j].style.display = 'block';
		   }
		}
	}
	yellow.onclick = function(e){
		for (var j = 0; j < colorsFilter2.length ; j++) {
			colorsFilter2[j].style.display = 'none';
			if(colorsFilter2[j].getAttribute('filter') === 'Amarela' ){
				colorsFilter2[j].style.display = 'block';
		   }
		}

	}
	rosa.onclick = function(e){
		for (var j = 0; j < colorsFilter2.length ; j++) {
			colorsFilter2[j].style.display = 'none';
			if(colorsFilter2[j].getAttribute('filter') === 'Rosa' ){
				colorsFilter2[j].style.display = 'block';
		   }
		}

	}
	cinza.onclick = function(e){
		for (var j = 0; j < colorsFilter2.length ; j++) {
			colorsFilter2[j].style.display = 'none';
			if(colorsFilter2[j].getAttribute('filter') === 'Cinza' ){
				colorsFilter2[j].style.display = 'block';
		   }
		}

	}
	azul.onclick = function(e){
		for (var j = 0; j < colorsFilter2.length ; j++) {
			colorsFilter2[j].style.display = 'none';
			if(colorsFilter2[j].getAttribute('filter') === 'Azul' ){
				colorsFilter2[j].style.display = 'block';
		   }
		}

	}
	beje.onclick = function(e){
		for (var j = 0; j < colorsFilter2.length ; j++) {
			colorsFilter2[j].style.display = 'none';
			if(colorsFilter2[j].getAttribute('filter') === 'Beje' ){
				colorsFilter2[j].style.display = 'block';
		   }
		}

	}

	//remove filtros
	document.querySelector('.remover p').onclick = function(e){
		for (var j = 0; j < colorsFilter2.length ; j++) {
			colorsFilter2[j].style.display = 'block';
			
		}
	}

	//filter gender
	document.querySelector('.masc').onclick = function(e){
		for (var j = 0; j < colorsFilter2.length ; j++) {
			colorsFilter2[j].style.display = 'none';
			if(colorsFilter2[j].getAttribute('filter2') === 'Masculina' ){
				colorsFilter2[j].style.display = 'block';
		   }
			
		}
	}

	document.querySelector('.fem').onclick = function(e){
		for (var j = 0; j < colorsFilter2.length ; j++) {
			colorsFilter2[j].style.display = 'none';
			if(colorsFilter2[j].getAttribute('filter2') === 'Feminina' ){
				colorsFilter2[j].style.display = 'block';
		   }
			
		}
	}



		



	
	    	
	    	
	    
  }

  callApi = async () => {
  	var getUrl = window.location.pathname;
  	if( getUrl === '/camisetas'){
		var response = await fetch("http://localhost:3000/api/V1/categories/1");
		const body = await response.json();
	    if (response.status !== 200) throw Error(body.message);
	    return body;

  	}
  	else if( getUrl === '/calcas'){
		var response = await fetch("http://localhost:3000/api/V1/categories/2");
		const body = await response.json();
	    if (response.status !== 200) throw Error(body.message);
	    return body;
  	}
  	else if( getUrl === '/calcados') {
		var response = await fetch("http://localhost:3000/api/V1/categories/3");
		const body = await response.json();
	    if (response.status !== 200) throw Error(body.message);
	    return body;
  	}
  	else if( getUrl === '/') {
		var response = await fetch("http://localhost:3000/api/V1/categories/1");
		var response2 = await fetch("http://localhost:3000/api/V1/categories/2");
		var response3 = await fetch("http://localhost:3000/api/V1/categories/3");
		const body = await response.json();
	    const body2 = await response2.json();
	    const body3 = await response3.json();
	    var myJSON = [body,body2,body3]


	    if (response.status !== 200) throw Error(body.message);
	    return myJSON;
  	}	
    

  };
  callApi2 = async () => {
  	var getUrl = window.location.pathname;
  	if( getUrl === '/') {
		var response = await fetch("http://localhost:3000/api/V1/categories/3");
		var response2 = await fetch("http://localhost:3000/api/V1/categories/2");
		var response3 = await fetch("http://localhost:3000/api/V1/categories/1");
		const body = await response.json();
	    const body2 = await response2.json();
	    const body3 = await response3.json();
	    var myJSON = [body,body2,body3]

	    if (response.status !== 200) throw Error(body.message);
	    return myJSON;
  	}	
  };


  render() {

    return (
      <div>
      	<Header />
      	<section className="product-list">
			<div className="breadcumb">
				<a href="/">Página Inicial > </a>
				<span className="titulo">{this.state.titulo}</span>
			</div>
			<div className="container">
				<div className="filter">
					<h2>FILTRE POR</h2>
					<h3>CATEGORIAS</h3>
					<ul className="categ">
						<li>Roupas</li>
						<li>Sapatos</li>
						<li>Acessórios</li>
					</ul>
					<div className="cor hide">
						<h3>CORES</h3>
						<ul className="colors">
							<li className="black"></li>
							<li className="orange"></li>
							<li className="yellow"></li>
							<li className="rosa"></li>
							<li className="cinza"></li>
							<li className="azul"></li>
							<li className="beje"></li>
						</ul>
					</div>
					
					<div className="gender hide">
						<h3>GÊNERO</h3>
						<ul className="gender">
							<li className="masc">Masculina</li>
							<li className="fem">Feminina</li>
						</ul>
					</div>
					<div className="remover">
						<p>remover filtros</p>
					</div>
				</div>
				<div className="wrapper">
					<div className="prods">
						<h1>{this.state.titulo}</h1>
						<div className="ordenar">
							<i className="blocks active"></i>
							<i className="lists"></i>
							<div className="orderby">
								<span>ORDENAR POR</span>
								<select name="" id="">
									<option value="">Menor Preço</option>
									<option value="">Maior Preço</option>
								</select>
							</div>
						</div>
					</div>
					<div className="vitrine">
						{this.state.lists.map(c =>  <List key={c.id} name={c.name} path={"/"+c.path} image={c.image} price={c.price} filter={c.filter[0].color}  filter2={c.filter[0].gender}/> )}
						{this.state.lists2.map(d =>  <List key={d.id} name={d.name} path={"/"+d.path} image={d.image} price={d.price} filter={d.filter[0].color}  filter2={d.filter[0].gender}/> )}
						{this.state.lists3.map(d =>  <List key={d.id} name={d.name} path={"/"+d.path} image={d.image} price={d.price} filter={d.filter[0].color}  filter2={d.filter[0].gender}/> )}
						
					</div>
				</div>
			</div>
      	</section>
      	
      </div>  
    );
  }
}
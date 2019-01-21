import React from 'react';
import logo from '../media/logo.jpg';
import menuicon from '../media/menu-icon.jpg';
import buscaicon from '../media/busca.jpg';
import Menu from "../menu/Menu";


export class Header extends React.Component {
	
	state = {
    	lists: []
	};

	componentDidMount () {
		this.callApi()
	      .then(res => {
	        const newLists = res.items.map(c => {
	          return {
	            id: c.id,
	            name: c.name,
	            path: c.path
	          };
	        });
	        
	        this.state = newLists;

	        const newState = Object.assign({}, this.state, {
	          lists: newLists
	        });
	        this.setState(newState);
	      })
	      .catch(err => console.log(err));    
  }

  callApi = async () => {
    const response = await fetch("http://localhost:3000/api/V1/categories/list");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
 componentDidUpdate(){
	//mobile
		var iconM = document.querySelector('.menu-icon');
		var menuM = document.querySelector('.menu');
		iconM.onclick = function(e){
		    menuM.classList.toggle("show");
		}

		var iconMB = document.querySelector('.busca-cont');
		var menuMB = document.querySelector('.busca');
		iconMB.onclick = function(e){
		    menuMB.classList.toggle("show");
		}

  }
  render() {

    return (
      <header>
      	<div className="login">
      		<div>
				<a href="#">Acesse sua Conta </a>
				<span>ou </span>
				<a href="#">Cadastre-se</a>
      		</div>
      	</div>
      	<div className="wrapper">
      		<div className="menu-icon hide" >
				<img src={menuicon} alt="menu mobile" />
      		</div>
			<div className="logo">
					<a href="/"><img src={logo} alt="logo"/></a>
			</div>
			<div className="busca-cont">
				<img src={buscaicon} alt="busca" className="hide busca-icon"/>

			</div>
			<div className="busca">
			   <div className="form">	
			   		
			     	<input
			       placeholder=""
			       onChange={this.handleInputChange}
			     	/>
			     	<button onClick={this.handleClick}>BUSCAR</button>
			   </div>
			</div>
      	</div>
      	<div className="menu">
      		<nav>
      			<ul>
      				<li><a href="/">Página inicial</a></li>
      				{this.state.lists.map(c =>  <Menu key={c.id} name={c.name} path={"/"+c.path} /> )}
      				<li><a href="/contato">contato</a></li>
      			</ul>
      		</nav>			
      	</div>
      </header>  
    );
  }
}